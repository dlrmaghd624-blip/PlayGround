import './style.css'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { algorithms, FACE_META, moveLabel, parseMove, parseSequence } from './algorithms.js'
import { RubiksCube } from './cube.js'

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => [...document.querySelectorAll(selector)]
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const stage = $('#stage')
const canvasHost = $('#canvasHost')
const turnReadout = $('#turnReadout')
const turnDetail = $('#turnDetail')
const turnCountEl = $('#turnCount')
const stageCoordinate = $('#stageCoordinate')
const undoButton = $('#undoButton')
const scrambleButton = $('#scrambleButton')
const resetButton = $('#resetButton')
const motionButton = $('#motionButton')
const motionStatus = $('#motionStatus')
const tiltBadge = $('#tiltBadge')
const toastEl = $('#toast')
const formulaList = $('#formulaList')
const formulaCount = $('#formulaCount')
const playbackPanel = $('#playbackPanel')
const playbackKicker = $('#playbackKicker')
const playbackTitle = $('#playbackTitle')
const playbackProgress = $('#playbackProgress')
const playbackCount = $('#playbackCount')
const playbackStop = $('#playbackStop')
const gestureTip = $('#gestureTip')
const dismissTip = $('#dismissTip')
const speedButton = $('#speedButton')
const speedLabel = $('#speedLabel')
const guideDialog = $('#guideDialog')
const guideButton = $('#guideButton')
const guideClose = $('#guideClose')
const guideStart = $('#guideStart')

const X_AXIS = new THREE.Vector3(1, 0, 0)
const Y_AXIS = new THREE.Vector3(0, 1, 0)
const Z_AXIS = new THREE.Vector3(0, 0, 1)
const WORLD_AXES = [X_AXIS, Y_AXIS, Z_AXIS]
const SPEEDS = [1, 1.4, 0.7]
const SPEED_LABELS = ['1×', '1.4×', '0.7×']
const FACE_BASE = {
  R: { face: 'R', quarter: -1 },
  L: { face: 'L', quarter: 1 },
  U: { face: 'U', quarter: -1 },
  D: { face: 'D', quarter: 1 },
  F: { face: 'F', quarter: -1 },
  B: { face: 'B', quarter: 1 },
  M: { face: 'M', quarter: 1 },
  E: { face: 'E', quarter: 1 },
  S: { face: 'S', quarter: -1 },
}

const algorithmsParsed = algorithms.map((algorithm, index) => ({
  ...algorithm,
  number: String(index + 1).padStart(2, '0'),
  movesParsed: parseSequence(algorithm.moves),
}))
const algorithmById = new Map(algorithmsParsed.map((algorithm) => [algorithm.id, algorithm]))

let activeFilter = '전체'
let openId = null
let playingId = null
let speedIndex = 0
let turnCount = 0
let toastTimer = 0
let hintTimer = 0
let lastCoordinateRender = 0
let previousFrame = performance.now()

/* ———————————————————————————————————————————————
   3D stage
——————————————————————————————————————————————— */

let renderer
try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
} catch (error) {
  canvasHost.innerHTML =
    '<div class="webgl-fallback">이 브라우저에서 3D 큐브를 표시할 수 없어요.<br />하드웨어 가속을 켜고 다시 시도해 주세요.</div>'
  throw error
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.98
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.domElement.setAttribute(
  'aria-label',
  '3×3 루빅스 큐브. 큐브 면을 드래그해 한 줄을 돌릴 수 있습니다.',
)
renderer.domElement.setAttribute('role', 'img')
canvasHost.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80)
const cameraTarget = new THREE.Vector3(0, -0.05, 0)

const pmrem = new THREE.PMREMGenerator(renderer)
const environment = pmrem.fromScene(new RoomEnvironment(), 0.04)
scene.environment = environment.texture
scene.environmentIntensity = 0.34

const keyLight = new THREE.DirectionalLight(0xfff0dc, 3.15)
keyLight.position.set(5.8, 9.5, 7.6)
keyLight.castShadow = true
keyLight.shadow.mapSize.set(2048, 2048)
keyLight.shadow.camera.left = -5.5
keyLight.shadow.camera.right = 5.5
keyLight.shadow.camera.top = 5.5
keyLight.shadow.camera.bottom = -5.5
keyLight.shadow.camera.near = 0.5
keyLight.shadow.camera.far = 28
keyLight.shadow.bias = -0.0006
keyLight.shadow.normalBias = 0.018
keyLight.shadow.radius = 5
scene.add(keyLight)

const coolFill = new THREE.DirectionalLight(0x8ca6ff, 1.35)
coolFill.position.set(-7.5, 4, 3.5)
scene.add(coolFill)

const warmRim = new THREE.DirectionalLight(0xffac6e, 0.95)
warmRim.position.set(2.5, -3.5, -8)
scene.add(warmRim)

const topFill = new THREE.DirectionalLight(0xdfe8ff, 0.85)
topFill.position.set(-3, 8, -4)
scene.add(topFill)

scene.add(new THREE.HemisphereLight(0xc8d8ff, 0x160e07, 0.72))

const cube = new RubiksCube()
scene.add(cube.group)

/* Contact shadows and a very quiet stage floor. */
const shadowFloor = new THREE.Mesh(
  new THREE.PlaneGeometry(40, 40),
  new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.26 }),
)
shadowFloor.rotation.x = -Math.PI / 2
shadowFloor.position.y = -2.23
shadowFloor.receiveShadow = true
scene.add(shadowFloor)

function makeBlobTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const context = canvas.getContext('2d')
  const gradient = context.createRadialGradient(128, 128, 3, 128, 128, 126)
  gradient.addColorStop(0, 'rgba(0,0,0,0.68)')
  gradient.addColorStop(0.38, 'rgba(0,0,0,0.28)')
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, 256, 256)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const contactBlob = new THREE.Mesh(
  new THREE.PlaneGeometry(5.8, 5.8),
  new THREE.MeshBasicMaterial({
    map: makeBlobTexture(),
    transparent: true,
    depthWrite: false,
    opacity: 0.62,
  }),
)
contactBlob.rotation.x = -Math.PI / 2
contactBlob.position.y = -2.22
scene.add(contactBlob)

const floorRing = new THREE.Mesh(
  new THREE.RingGeometry(2.26, 2.275, 128),
  new THREE.MeshBasicMaterial({
    color: 0xd9ff57,
    transparent: true,
    opacity: 0.14,
    side: THREE.DoubleSide,
    depthWrite: false,
  }),
)
floorRing.rotation.x = -Math.PI / 2
floorRing.position.y = -2.218
scene.add(floorRing)

const outerRing = new THREE.Mesh(
  new THREE.RingGeometry(3.15, 3.165, 128),
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.035,
    side: THREE.DoubleSide,
    depthWrite: false,
  }),
)
outerRing.rotation.x = -Math.PI / 2
outerRing.position.y = -2.216
scene.add(outerRing)

/* ———————————————————————————————————————————————
   Camera & orbit
——————————————————————————————————————————————— */

const orbit = {
  theta: 0.63,
  phi: 1.055,
  radius: 10.3,
  targetTheta: 0.63,
  targetPhi: 1.055,
  targetRadius: 10.3,
}
const orbitVelocity = { theta: 0, phi: 0 }
const intro = { t: 0, duration: reducedMotion ? 0.01 : 1.15 }
const tilt = { x: 0, y: 0, targetX: 0, targetY: 0 }
let userZoomed = false

function fitResponsiveRadius() {
  if (userZoomed) return
  const width = canvasHost.clientWidth
  const height = canvasHost.clientHeight
  let radius = 10.3
  if (window.innerHeight <= 650 && width > height) {
    radius = 9.7
  } else if (width <= 640) {
    radius = height < 330 ? 13.2 : height < 385 ? 12.35 : 11.55
  } else if (width <= 900) {
    radius = 10.75
  }
  orbit.targetRadius = radius
}

function resize() {
  const width = Math.max(1, canvasHost.clientWidth)
  const height = Math.max(1, canvasHost.clientHeight)
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.fov = camera.aspect < 0.8 ? 40 : camera.aspect < 1 ? 37 : 34
  camera.updateProjectionMatrix()
  fitResponsiveRadius()
}

window.addEventListener('resize', resize)
new ResizeObserver(resize).observe(canvasHost)

function updateCamera(delta, elapsed) {
  const ease = 1 - Math.exp(-delta * 7.5)
  orbit.theta += (orbit.targetTheta - orbit.theta) * ease
  orbit.phi += (orbit.targetPhi - orbit.phi) * ease
  orbit.radius += (orbit.targetRadius - orbit.radius) * ease
  tilt.x += (tilt.targetX - tilt.x) * (1 - Math.exp(-delta * 5.5))
  tilt.y += (tilt.targetY - tilt.y) * (1 - Math.exp(-delta * 5.5))

  const introEase = intro.t / intro.duration
  const introLift = 1 - Math.pow(1 - Math.min(1, introEase), 3)
  const radius = orbit.radius + (1 - introLift) * 2.1
  const phi = orbit.phi
  const theta = orbit.theta

  const basePosition = new THREE.Vector3(
    cameraTarget.x + radius * Math.sin(phi) * Math.sin(theta),
    cameraTarget.y + radius * Math.cos(phi),
    cameraTarget.z + radius * Math.sin(phi) * Math.cos(theta),
  )

  const forward = cameraTarget.clone().sub(basePosition).normalize()
  const right = new THREE.Vector3().crossVectors(forward, Y_AXIS).normalize()
  const up = new THREE.Vector3().crossVectors(right, forward).normalize()
  const offset = right
    .clone()
    .multiplyScalar(tilt.x * 0.48)
    .add(up.clone().multiplyScalar(tilt.y * 0.3))

  camera.position.copy(basePosition).add(offset)
  camera.lookAt(cameraTarget)

  const stageEase = 1 - Math.pow(1 - Math.min(1, introEase), 3)
  const scale = 0.82 + stageEase * 0.18
  cube.group.scale.setScalar(scale)
  cube.group.position.y = (1 - stageEase) * -0.42 + Math.sin(elapsed * 0.8) * 0.012
  contactBlob.material.opacity = 0.62 * stageEase
  floorRing.material.opacity = 0.14 * stageEase
  outerRing.material.opacity = 0.035 * stageEase

  if (elapsed - lastCoordinateRender > 0.12) {
    const yaw = ((orbit.theta * 180) / Math.PI + 360) % 360
    const pitch = 90 - (orbit.phi * 180) / Math.PI
    stageCoordinate.textContent = `YAW ${yaw.toFixed(0)}° · PITCH ${pitch.toFixed(0)}°`
    lastCoordinateRender = elapsed
  }
}

/* ———————————————————————————————————————————————
   Rendering loop
——————————————————————————————————————————————— */

function animate(now) {
  const delta = Math.min(0.05, (now - previousFrame) / 1000 || 0.016)
  previousFrame = now
  const elapsed = now / 1000
  intro.t = Math.min(intro.duration, intro.t + delta)

  if (interaction.mode !== 'orbit' && interaction.mode !== 'pinch') {
    if (Math.abs(orbitVelocity.theta) + Math.abs(orbitVelocity.phi) > 0.00002) {
      orbit.targetTheta += orbitVelocity.theta * delta * 60
      orbit.targetPhi = clamp(
        orbit.targetPhi + orbitVelocity.phi * delta * 60,
        0.36,
        1.48,
      )
      const damping = Math.exp(-delta * 3.1)
      orbitVelocity.theta *= damping
      orbitVelocity.phi *= damping
    }
  }

  updateCamera(delta, elapsed)
  cube.update(delta)
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

resize()
requestAnimationFrame(animate)

/* ———————————————————————————————————————————————
   UI helpers
——————————————————————————————————————————————— */

function showToast(message, duration = 2400) {
  clearTimeout(toastTimer)
  toastEl.innerHTML = message
  toastEl.classList.add('is-visible')
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove('is-visible')
  }, duration)
}

function setReadout(label, detail, flash = true) {
  turnReadout.textContent = label
  turnDetail.textContent = detail
  if (flash) {
    turnReadout.classList.remove('is-flash')
    requestAnimationFrame(() => turnReadout.classList.add('is-flash'))
    window.setTimeout(() => turnReadout.classList.remove('is-flash'), 190)
  }
}

function resetReadout() {
  setReadout('READY', '면을 밀어 한 줄을 돌려보세요', false)
}

function updateTurnCount(amount = 0) {
  turnCount = Math.max(0, turnCount + amount)
  turnCountEl.textContent = String(turnCount).padStart(3, '0')
}

function updateUndoButton() {
  undoButton.disabled = history.length === 0 || sequence.running
}

function hideHint() {
  gestureTip.classList.add('is-hidden')
  clearTimeout(hintTimer)
  try {
    sessionStorage.setItem('cubelab-hint', 'hidden')
  } catch {
    /* storage can be disabled; the hint simply returns next time. */
  }
}

if (sessionStorage.getItem('cubelab-hint') === 'hidden') {
  gestureTip.classList.add('is-hidden')
} else {
  hintTimer = window.setTimeout(hideHint, 9000)
}

dismissTip.addEventListener('click', hideHint)
gestureTip.addEventListener('click', (event) => {
  if (event.target.closest('button')) return
  hideHint()
})

/* ———————————————————————————————————————————————
   Cube move helpers
——————————————————————————————————————————————— */

const sequence = {
  token: 0,
  running: false,
  kind: null,
  id: null,
  total: 0,
}

const history = []

function quarterTurnLabel(axis, layer, angle) {
  const quarter = Math.round(angle / (Math.PI / 2))
  if (quarter === 0) return null
  const faceMap = {
    x: { 1: 'R', '-1': 'L', 0: 'M' },
    y: { 1: 'U', '-1': 'D', 0: 'E' },
    z: { 1: 'F', '-1': 'B', 0: 'S' },
  }
  const face = faceMap[axis]?.[String(layer)]
  if (!face) return null
  if (Math.abs(quarter) === 2) return `${face}2`
  return quarter === FACE_BASE[face].quarter ? face : `${face}'`
}

function turnDescription(axis, layer, angle) {
  const label = quarterTurnLabel(axis, layer, angle)
  if (!label) return 'READY'
  const face = label.replace(/['2]/g, '')
  const meta = FACE_META[face]
  const quarter = Math.round(angle / (Math.PI / 2))
  const amount =
    Math.abs(quarter) === 2
      ? '180°'
      : label.endsWith("'")
        ? '반시계 방향'
        : '시계 방향'
  return `${meta?.label ?? ''} ${layer === 0 ? '층' : '면'} · ${amount}`
}

function normalizeTurn(axisKey, axisSign, angle) {
  return {
    axis: axisKey,
    layer: null,
    angle: angle * axisSign,
  }
}

function addHistory(axis, layer, angle) {
  const label = quarterTurnLabel(axis, layer, angle)
  history.push({ axis, layer, angle, label })
  updateUndoButton()
}

function displayMove(move, detail = '') {
  setReadout(moveLabel(move), detail || turnDescription(move.axis, move.layer, move.angle))
}

/* ———————————————————————————————————————————————
   Cards & filters
——————————————————————————————————————————————— */

function movesMarkup(algorithm) {
  return algorithm.movesParsed
    .map((move, index) => {
      const suffix = move.suffix === "'" ? '′' : move.suffix
      return `<span class="move-chip" data-move-index="${index}" style="--chip:${move.color}" title="${move.face}${suffix ? ` ${suffix === '2' ? '180°' : '반시계'}` : ''}">${move.face}${suffix ? `<sup>${suffix}</sup>` : ''}</span>`
    })
    .join('')
}

function cardMarkup(algorithm) {
  return `
    <article class="formula-card" data-id="${algorithm.id}" style="--accent:${algorithm.accent}">
      <div class="formula-card-top">
        <span class="formula-index">${algorithm.number}</span>
        <button class="formula-open" type="button" data-open="${algorithm.id}" aria-expanded="false" aria-controls="detail-${algorithm.id}">
          <span class="formula-meta">
            <span class="level-tag">${algorithm.level}</span>
            <span class="category-tag">${algorithm.category}</span>
          </span>
          <h2>${algorithm.title}</h2>
          <span class="formula-summary">${algorithm.summary}</span>
        </button>
        <button class="formula-play" type="button" data-play="${algorithm.id}" aria-label="${algorithm.title} 공식 재생">
          <svg class="play-shape" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.1 1.9 10 6l-6.9 4.1Z"></path></svg>
          <svg class="stop-shape" viewBox="0 0 12 12" aria-hidden="true"><rect x="2.6" y="2.6" width="6.8" height="6.8" rx="1"></rect></svg>
        </button>
      </div>
      <div class="move-row" aria-label="${algorithm.title} 공식 표기">${movesMarkup(algorithm)}</div>
      <div class="formula-detail" id="detail-${algorithm.id}">
        <div class="formula-detail-inner">
          <p>${algorithm.detail}</p>
          <span class="formula-tip"><b>TIP</b><span>${algorithm.tip}</span></span>
        </div>
      </div>
    </article>
  `
}

function renderCards() {
  const visible = algorithmsParsed.filter(
    (algorithm) => activeFilter === '전체' || algorithm.category === activeFilter || (activeFilter === '고급' && algorithm.level === '고급'),
  )
  formulaList.innerHTML = visible.map(cardMarkup).join('')
  formulaCount.textContent = String(visible.length)
  syncOpenCards()
  syncPlaybackCards()
}

function syncOpenCards() {
  $$('.formula-card').forEach((card) => {
    const isOpen = card.dataset.id === openId
    card.classList.toggle('is-open', isOpen)
    const button = card.querySelector('.formula-open')
    if (button) button.setAttribute('aria-expanded', String(isOpen))
  })
}

function syncPlaybackCards() {
  $$('.formula-card').forEach((card) => {
    card.classList.toggle('is-playing', card.dataset.id === playingId)
  })
  if (playingId) {
    const card = formulaList.querySelector(`[data-id="${playingId}"]`)
    card?.classList.add('is-playing')
  }
}

function setCurrentMove(id, index) {
  $$('.formula-card').forEach((card) => {
    const isPlayingCard = card.dataset.id === id
    card.querySelectorAll('.move-chip').forEach((chip) => {
      chip.classList.toggle(
        'is-current',
        isPlayingCard && Number(chip.dataset.moveIndex) === index,
      )
    })
  })
}

function clearCurrentMove() {
  $$('.move-chip.is-current').forEach((chip) => chip.classList.remove('is-current'))
}

formulaList.addEventListener('click', (event) => {
  const playButton = event.target.closest('[data-play]')
  if (playButton) {
    const id = playButton.dataset.play
    if (playingId === id && sequence.running) {
      stopSequence('재생을 멈췄어요')
    } else {
      playAlgorithm(id)
    }
    return
  }

  const openButton = event.target.closest('[data-open]')
  if (openButton) {
    const id = openButton.dataset.open
    openId = openId === id ? null : id
    syncOpenCards()
  }
})

$$('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.filter === activeFilter) return
    activeFilter = button.dataset.filter
    $$('.filter-chip').forEach((chip) => {
      const active = chip === button
      chip.classList.toggle('is-active', active)
      chip.setAttribute('aria-selected', String(active))
    })
    openId = null
    renderCards()
    formulaList.scrollTop = 0
  })
})

renderCards()

/* ———————————————————————————————————————————————
   Playback / scramble
——————————————————————————————————————————————— */

function setPlaybackUI({ kicker, title, total, index = 0 }) {
  playbackPanel.hidden = false
  playbackKicker.textContent = kicker
  playbackTitle.textContent = title
  playbackCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
  playbackProgress.style.width = `${(index / total) * 100}%`
}

function updatePlaybackUI(index, total) {
  playbackCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
  playbackProgress.style.width = `${((index + 1) / total) * 100}%`
}

function hidePlaybackUI() {
  playbackPanel.hidden = true
  playbackProgress.style.width = '0%'
}

function stopSequence(message = '', { silent = false } = {}) {
  sequence.token += 1
  if (sequence.running) {
    cube.snap()
  }
  sequence.running = false
  sequence.kind = null
  sequence.id = null
  playingId = null
  clearCurrentMove()
  hidePlaybackUI()
  syncPlaybackCards()
  updateUndoButton()
  if (message && !silent) showToast(message)
  if (!silent) resetReadout()
}

async function playAlgorithm(id) {
  if (
    interaction.mode === 'turn' ||
    interaction.mode === 'pending' ||
    interaction.mode === 'settling'
  ) {
    showToast('큐브를 놓은 뒤에 재생해 주세요.')
    return
  }
  const algorithm = algorithmById.get(id)
  if (!algorithm) return

  stopSequence('', { silent: true })
  const token = ++sequence.token
  sequence.running = true
  sequence.kind = 'algorithm'
  sequence.id = id
  playingId = id
  updateUndoButton()
  syncPlaybackCards()
  openId = null
  syncOpenCards()
  const duration = reducedMotion ? 0.04 : 0.215 / SPEEDS[speedIndex]
  setPlaybackUI({
    kicker: 'PLAYING ALGORITHM',
    title: `${algorithm.title} · ${algorithm.moves.length}수`,
    total: algorithm.movesParsed.length,
  })
  gestureTip.classList.add('is-hidden')

  for (let index = 0; index < algorithm.movesParsed.length; index += 1) {
    if (token !== sequence.token) return
    const move = algorithm.movesParsed[index]
    setCurrentMove(id, index)
    updatePlaybackUI(index, algorithm.movesParsed.length)
    displayMove(move, `${algorithm.title} · ${index + 1} / ${algorithm.movesParsed.length}`)
    await cube.turn(move, duration)
    if (token !== sequence.token) return
    updateTurnCount(move.turns)
    addHistory(move.axis, move.layer, move.angle)
  }

  if (token !== sequence.token) return
  sequence.running = false
  sequence.kind = null
  playingId = null
  clearCurrentMove()
  hidePlaybackUI()
  syncPlaybackCards()
  updateUndoButton()
  setReadout('DONE', `${algorithm.title} · ${algorithm.moves.length}수 완료`)
  showToast(`<b>${algorithm.title}</b> 공식을 완료했어요.`)
}

function makeScramble(length = 20) {
  const choices = [
    ['R', 'L'],
    ['U', 'D'],
    ['F', 'B'],
  ]
  const suffixes = ['', "'", '2']
  const moves = []
  let previousAxis = -1
  for (let i = 0; i < length; i += 1) {
    let axis
    do {
      axis = Math.floor(Math.random() * choices.length)
    } while (axis === previousAxis)
    previousAxis = axis
    const face = choices[axis][Math.floor(Math.random() * 2)]
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
    moves.push(parseMove(`${face}${suffix}`))
  }
  return moves
}

async function scramble() {
  if (
    interaction.mode === 'turn' ||
    interaction.mode === 'pending' ||
    interaction.mode === 'settling'
  ) {
    showToast('큐브를 놓은 뒤에 섞을 수 있어요.')
    return
  }
  stopSequence('', { silent: true })
  const token = ++sequence.token
  const moves = makeScramble(20)
  sequence.running = true
  sequence.kind = 'scramble'
  sequence.id = null
  history.length = 0
  updateUndoButton()
  gestureTip.classList.add('is-hidden')
  setPlaybackUI({
    kicker: 'SCRAMBLING CUBE',
    title: '20수 랜덤 스크램블',
    total: moves.length,
  })
  setReadout('MIX', '스크램블 중...', false)

  for (let index = 0; index < moves.length; index += 1) {
    if (token !== sequence.token) return
    updatePlaybackUI(index, moves.length)
    await cube.turn(moves[index], reducedMotion ? 0.018 : 0.072 / SPEEDS[speedIndex])
    if (token !== sequence.token) return
    updateTurnCount(1)
  }

  if (token !== sequence.token) return
  sequence.running = false
  sequence.kind = null
  hidePlaybackUI()
  resetReadout()
  updateUndoButton()
  showToast('20수로 섞었어요. <b>직접 맞춰보세요.</b>')
}

function resetCube() {
  if (interaction.mode === 'turn' || interaction.mode === 'pending') {
    cancelPreviewInstant()
  }
  stopSequence('', { silent: true })
  cube.reset()
  history.length = 0
  turnCount = 0
  updateTurnCount(0)
  updateUndoButton()
  resetReadout()
  showToast('큐브를 처음 상태로 되돌렸어요.')
}

async function undoMove() {
  if (!history.length || sequence.running) return
  if (interaction.mode === 'turn' || interaction.mode === 'settling') return
  const last = history.pop()
  updateUndoButton()
  const inverseAngle = -last.angle
  const inverseLabel = quarterTurnLabel(last.axis, last.layer, inverseAngle)
  const move = { axis: last.axis, layer: last.layer, angle: inverseAngle }
  setReadout(inverseLabel ?? 'UNDO', '마지막 동작을 되돌리는 중')
  await cube.turn(move, reducedMotion ? 0.04 : 0.18)
  updateTurnCount(-Math.abs(Math.round(last.angle / (Math.PI / 2))))
  setReadout(inverseLabel ?? 'UNDO', turnDescription(last.axis, last.layer, inverseAngle))
}

scrambleButton.addEventListener('click', scramble)
resetButton.addEventListener('click', resetCube)
undoButton.addEventListener('click', undoMove)
playbackStop.addEventListener('click', () => stopSequence('재생을 멈췄어요'))

speedButton.addEventListener('click', () => {
  speedIndex = (speedIndex + 1) % SPEEDS.length
  speedLabel.textContent = SPEED_LABELS[speedIndex]
  showToast(`재생 속도 <b>${SPEED_LABELS[speedIndex]}</b>`)
})

/* ———————————————————————————————————————————————
   Pointer: direct layer turns, orbit, pinch
——————————————————————————————————————————————— */

const raycaster = new THREE.Raycaster()
const pointerNdc = new THREE.Vector2()
const pointers = new Map()
const interaction = {
  mode: 'idle',
  pointerId: null,
  drag: null,
  pinch: null,
  lastX: 0,
  lastY: 0,
}

function hitSticker(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect()
  pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1
  pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointerNdc, camera)
  const hits = raycaster.intersectObjects(cube.stickers, false)
  return hits[0] ?? null
}

function screenDirection(point, axis, rect) {
  const origin = point.clone().project(camera)
  const end = point.clone().addScaledVector(axis, 0.45).project(camera)
  return new THREE.Vector2(
    ((end.x - origin.x) * rect.width) / 2,
    (-(end.y - origin.y) * rect.height) / 2,
  ).normalize()
}

function createDrag(hit, clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect()
  const quaternion = new THREE.Quaternion()
  hit.object.getWorldQuaternion(quaternion)
  const normal = hit.object.userData.normal
    .clone()
    .applyQuaternion(quaternion)
    .normalize()
    .round()
  const candidates = WORLD_AXES.filter(
    (axis) => Math.abs(axis.dot(normal)) < 0.5,
  ).map((axis) => ({
    axis,
    screen: screenDirection(hit.point, axis, rect),
  }))
  const coords = hit.object.userData.cubie.userData.coord
  return {
    normal,
    point: hit.point.clone(),
    candidates,
    coords,
    startX: clientX,
    startY: clientY,
    lastX: clientX,
    lastY: clientY,
    chosen: false,
    axis: null,
    layer: null,
    axisSign: 1,
    items: null,
    angle: 0,
    screen: null,
    pixelsPerQuarter: clamp(Math.min(rect.width, rect.height) * 0.155, 72, 132),
  }
}

function beginOrbit(clientX, clientY) {
  interaction.mode = 'orbit'
  interaction.lastX = clientX
  interaction.lastY = clientY
  orbitVelocity.theta = 0
  orbitVelocity.phi = 0
  canvasHost.classList.add('is-grabbing')
}

function beginPinch() {
  const points = [...pointers.values()]
  if (points.length < 2) return
  const distance = Math.hypot(
    points[0].x - points[1].x,
    points[0].y - points[1].y,
  )
  interaction.mode = 'pinch'
  interaction.pinch = {
    distance: Math.max(1, distance),
    radius: orbit.targetRadius,
    midX: (points[0].x + points[1].x) / 2,
    midY: (points[0].y + points[1].y) / 2,
  }
  orbitVelocity.theta = 0
  orbitVelocity.phi = 0
  canvasHost.classList.add('is-grabbing')
}

function cancelPreviewInstant() {
  const drag = interaction.drag
  if (drag?.chosen && drag.items) {
    cube.rotateLayer(drag.items, drag.axis, 0)
  }
  interaction.mode = 'idle'
  interaction.drag = null
  stage.classList.remove('is-turning')
  canvasHost.classList.add('is-grabbing')
  window.setTimeout(() => canvasHost.classList.remove('is-grabbing'), 60)
}

function chooseTurnAxis(drag, dx, dy) {
  let best = null
  for (const candidate of drag.candidates) {
    const dot = dx * candidate.screen.x + dy * candidate.screen.y
    if (!best || Math.abs(dot) > Math.abs(best.dot)) {
      best = { ...candidate, dot }
    }
  }
  if (!best || Math.abs(best.dot) < 1) return false

  const sign = best.dot < 0 ? -1 : 1
  const tangentWorld = best.axis.clone().multiplyScalar(sign)
  const tangentScreen = best.screen.clone().multiplyScalar(sign)
  const rotationAxis = new THREE.Vector3()
    .crossVectors(drag.normal, tangentWorld)
    .normalize()
    .round()
  const axisKey =
    Math.abs(rotationAxis.x) > 0.5
      ? 'x'
      : Math.abs(rotationAxis.y) > 0.5
        ? 'y'
        : 'z'
  const axisSign = Math.sign(rotationAxis[axisKey]) || 1
  const layer = Math.round(drag.coords[axisKey])

  drag.chosen = true
  drag.axis = axisKey
  drag.layer = layer
  drag.axisSign = axisSign
  drag.screen = tangentScreen
  drag.items = cube.captureLayer(axisKey, layer)
  interaction.mode = 'turn'
  stage.classList.add('is-turning')
  return true
}

function updatePreview(drag, dx, dy) {
  const distance = dx * drag.screen.x + dy * drag.screen.y
  const rawAngle = (distance / drag.pixelsPerQuarter) * (Math.PI / 2)
  drag.angle = rawAngle * drag.axisSign
  cube.rotateLayer(drag.items, drag.axis, drag.angle)
  const previewLabel = quarterTurnLabel(
    drag.axis,
    drag.layer,
    drag.angle,
  )
  if (previewLabel) {
    turnReadout.textContent = previewLabel.replace("'", '′')
    turnDetail.textContent = turnDescription(
      drag.axis,
      drag.layer,
      drag.angle,
    )
  }
}

function finishTurnDrag() {
  const drag = interaction.drag
  if (!drag?.chosen) {
    interaction.mode = 'idle'
    interaction.drag = null
    stage.classList.remove('is-turning')
    return
  }
  const quarters = drag.angle / (Math.PI / 2)
  let targetQuarters = 0
  if (Math.abs(quarters) >= 0.34) {
    targetQuarters =
      Math.sign(quarters) *
      Math.min(2, Math.max(1, Math.round(Math.abs(quarters))))
  }
  const targetAngle = targetQuarters * (Math.PI / 2)
  interaction.mode = 'settling'
  stage.classList.remove('is-turning')
  cube
    .settleLayer(
      drag.items,
      drag.axis,
      drag.angle,
      targetAngle,
      reducedMotion ? 0.02 : 0.165,
    )
    .then(() => {
      interaction.mode = 'idle'
      interaction.drag = null
      if (targetQuarters !== 0) {
        addHistory(drag.axis, drag.layer, targetAngle)
        updateTurnCount(Math.abs(targetQuarters))
        setReadout(
          quarterTurnLabel(drag.axis, drag.layer, targetAngle)?.replace("'", '′') ??
            'MOVE',
          turnDescription(drag.axis, drag.layer, targetAngle),
        )
        hideHint()
      } else {
        resetReadout()
      }
    })
}

function pointerPosition(event) {
  return { x: event.clientX, y: event.clientY }
}

renderer.domElement.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return
  event.preventDefault()
  try {
    renderer.domElement.setPointerCapture?.(event.pointerId)
  } catch {
    /* Synthetic pointers and older Safari may not support capture here. */
  }
  pointers.set(event.pointerId, pointerPosition(event))

  if (pointers.size === 1) {
    if (interaction.mode === 'settling') return
    const hit = hitSticker(event.clientX, event.clientY)
    if (hit && !sequence.running) {
      interaction.mode = 'pending'
      interaction.pointerId = event.pointerId
      interaction.drag = createDrag(hit, event.clientX, event.clientY)
      hideHint()
      return
    }
    if (hit && sequence.running) {
      showToast('재생이 끝난 뒤 직접 돌려보세요.')
    }
    beginOrbit(event.clientX, event.clientY)
    return
  }

  if (pointers.size === 2) {
    if (interaction.mode === 'turn') {
      cube.rotateLayer(interaction.drag.items, interaction.drag.axis, 0)
      interaction.drag = null
      stage.classList.remove('is-turning')
    } else if (interaction.mode === 'pending') {
      interaction.drag = null
    }
    beginPinch()
  }
})

renderer.domElement.addEventListener('pointermove', (event) => {
  if (!pointers.has(event.pointerId)) return
  pointers.set(event.pointerId, pointerPosition(event))

  if (interaction.mode === 'pinch') {
    const points = [...pointers.values()]
    if (points.length < 2 || !interaction.pinch) return
    const distance = Math.hypot(
      points[0].x - points[1].x,
      points[0].y - points[1].y,
    )
    userZoomed = true
    orbit.targetRadius = clamp(
      interaction.pinch.radius * (interaction.pinch.distance / Math.max(1, distance)),
      6.2,
      13.7,
    )
    const midX = (points[0].x + points[1].x) / 2
    const midY = (points[0].y + points[1].y) / 2
    orbit.targetTheta -= (midX - interaction.pinch.midX) * 0.006
    orbit.targetPhi = clamp(
      orbit.targetPhi - (midY - interaction.pinch.midY) * 0.006,
      0.36,
      1.48,
    )
    interaction.pinch.midX = midX
    interaction.pinch.midY = midY
    return
  }

  if (interaction.mode === 'orbit') {
    const dx = event.clientX - interaction.lastX
    const dy = event.clientY - interaction.lastY
    interaction.lastX = event.clientX
    interaction.lastY = event.clientY
    orbit.targetTheta -= dx * 0.0065
    orbit.targetPhi = clamp(orbit.targetPhi - dy * 0.0065, 0.36, 1.48)
    orbitVelocity.theta = -dx * 0.00032
    orbitVelocity.phi = -dy * 0.00032
    return
  }

  if (interaction.mode === 'pending' || interaction.mode === 'turn') {
    const drag = interaction.drag
    if (!drag) return
    const dx = event.clientX - drag.startX
    const dy = event.clientY - drag.startY
    if (!drag.chosen) {
      if (Math.hypot(dx, dy) < 6) return
      if (!chooseTurnAxis(drag, dx, dy)) return
    }
    updatePreview(drag, dx, dy)
  }
})

function releasePointer(event) {
  if (!pointers.has(event.pointerId)) return
  pointers.delete(event.pointerId)

  if (interaction.mode === 'turn') {
    finishTurnDrag()
  } else if (interaction.mode === 'pending') {
    interaction.mode = 'idle'
    interaction.drag = null
  } else if (interaction.mode === 'orbit') {
    interaction.mode = 'idle'
    canvasHost.classList.remove('is-grabbing')
  } else if (interaction.mode === 'pinch') {
    if (pointers.size === 1) {
      const point = [...pointers.values()][0]
      beginOrbit(point.x, point.y)
    } else {
      interaction.mode = 'idle'
      interaction.pinch = null
      canvasHost.classList.remove('is-grabbing')
    }
  }
}

renderer.domElement.addEventListener('pointerup', releasePointer)
renderer.domElement.addEventListener('pointercancel', (event) => {
  if (!pointers.has(event.pointerId)) return
  pointers.delete(event.pointerId)
  if (interaction.mode === 'turn' || interaction.mode === 'pending') {
    cancelPreviewInstant()
  } else {
    interaction.mode = 'idle'
    interaction.pinch = null
    canvasHost.classList.remove('is-grabbing')
  }
})

renderer.domElement.addEventListener(
  'wheel',
  (event) => {
    event.preventDefault()
    userZoomed = true
    orbit.targetRadius = clamp(
      orbit.targetRadius + event.deltaY * 0.0035,
      6.2,
      13.7,
    )
  },
  { passive: false },
)

/* ———————————————————————————————————————————————
   Motion / tilt
——————————————————————————————————————————————— */

const motion = {
  active: false,
  source: null,
  hasData: false,
  baseline: null,
  verifyTimer: 0,
  listening: false,
}

function clampTilt(value) {
  return clamp(value, -1, 1)
}

function resetTiltBaseline() {
  motion.baseline = null
  motion.hasData = false
}

function handleOrientation(event) {
  if (!motion.active || motion.source === 'motion') return
  if (event.beta === null || event.gamma === null) return
  if (!motion.baseline) {
    motion.baseline = { a: event.beta, b: event.gamma }
    motion.source = 'orientation'
  }
  if (motion.source !== 'orientation') return
  tilt.targetX = clampTilt((event.gamma - motion.baseline.b) / 22)
  tilt.targetY = clampTilt((event.beta - motion.baseline.a) / 22)
  registerMotionData()
}

function handleMotion(event) {
  if (!motion.active || motion.source === 'orientation') return
  const acceleration = event.accelerationIncludingGravity
  if (!acceleration || acceleration.x === null) return
  if (!motion.baseline) {
    motion.baseline = { x: acceleration.x, y: acceleration.y }
    motion.source = 'motion'
  }
  if (motion.source !== 'motion') return
  tilt.targetX = clampTilt((acceleration.x - motion.baseline.x) / 4.8)
  tilt.targetY = clampTilt((acceleration.y - motion.baseline.y) / 4.8)
  registerMotionData()
}

function registerMotionData() {
  motion.hasData = true
}

function attachMotionListeners() {
  if (motion.listening) return
  motion.listening = true
  window.addEventListener('deviceorientation', handleOrientation, { passive: true })
  window.addEventListener('devicemotion', handleMotion, { passive: true })
}

function detachMotionListeners() {
  if (!motion.listening) return
  motion.listening = false
  window.removeEventListener('deviceorientation', handleOrientation)
  window.removeEventListener('devicemotion', handleMotion)
}

function setTiltVisual(active) {
  motionButton.classList.toggle('is-active', active)
  motionButton.setAttribute('aria-pressed', String(active))
  motionButton.setAttribute(
    'aria-label',
    active ? '기울기 센서 끄기' : '기울기 센서 켜기',
  )
  tiltBadge.classList.toggle('is-visible', active)
  motionStatus.textContent = active ? 'MOTION ON' : 'MOTION OFF'
}

function disableTilt({ message = '' } = {}) {
  motion.active = false
  motion.source = null
  motion.baseline = null
  tilt.targetX = 0
  tilt.targetY = 0
  clearTimeout(motion.verifyTimer)
  detachMotionListeners()
  setTiltVisual(false)
  motionButton.classList.remove('is-loading')
  if (message) showToast(message)
}

async function requestMotionPermission() {
  const MotionEvent = window.DeviceMotionEvent
  if (MotionEvent && typeof MotionEvent.requestPermission === 'function') {
    const permission = await MotionEvent.requestPermission()
    if (permission !== 'granted') {
      throw new Error('motion-permission-denied')
    }
  }
}

async function enableTilt() {
  if (motion.active) {
    disableTilt({ message: '기울기 모드를 껐어요.' })
    return
  }
  motionButton.classList.add('is-loading')
  motionButton.disabled = true
  hideHint()

  try {
    await requestMotionPermission()
    motion.active = true
    motion.source = null
    motion.baseline = null
    motion.hasData = false
    attachMotionListeners()
    setTiltVisual(true)
    showToast('기기를 천천히 기울여 시점을 움직여 보세요.')

    clearTimeout(motion.verifyTimer)
    motion.verifyTimer = window.setTimeout(() => {
      if (!motion.hasData) {
        disableTilt({
          message:
            '이 기기에서 센서 값을 받을 수 없어요. 터치로 시점을 돌려주세요.',
        })
      }
    }, 1800)
  } catch (error) {
    console.warn('Motion permission was not granted:', error)
    disableTilt({
      message:
        '기울기 권한이 필요해요. Safari 설정에서 모션 및 방향 접근을 허용해 주세요.',
    })
  } finally {
    motionButton.classList.remove('is-loading')
    motionButton.disabled = false
  }
}

motionButton.addEventListener('click', enableTilt)

/* ———————————————————————————————————————————————
   Guide dialog
——————————————————————————————————————————————— */

guideButton.addEventListener('click', () => {
  guideDialog.showModal()
})
guideClose.addEventListener('click', () => guideDialog.close())
guideStart.addEventListener('click', () => guideDialog.close())
guideDialog.addEventListener('click', (event) => {
  if (event.target === guideDialog) guideDialog.close()
})

/* ———————————————————————————————————————————————
   Lifecycle niceties
——————————————————————————————————————————————— */

document.addEventListener('visibilitychange', () => {
  previousFrame = performance.now()
})

window.addEventListener('pagehide', () => {
  detachMotionListeners()
  pmrem.dispose()
  environment.dispose()
  renderer.dispose()
})
