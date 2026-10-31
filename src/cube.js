import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { FACE_META } from './algorithms.js'

const BODY_SIZE = 0.985
const SPACING = 1.012
const STICKER_SIZE = 0.77
const STICKER_RADIUS = 0.13
const STICKER_LIFT = BODY_SIZE / 2 + 0.012

const AXES = {
  x: new THREE.Vector3(1, 0, 0),
  y: new THREE.Vector3(0, 1, 0),
  z: new THREE.Vector3(0, 0, 1),
}

function roundedSquare(size, radius) {
  const s = size / 2
  const r = Math.min(radius, s)
  const shape = new THREE.Shape()
  shape.moveTo(-s + r, -s)
  shape.lineTo(s - r, -s)
  shape.quadraticCurveTo(s, -s, s, -s + r)
  shape.lineTo(s, s - r)
  shape.quadraticCurveTo(s, s, s - r, s)
  shape.lineTo(-s + r, s)
  shape.quadraticCurveTo(-s, s, -s, s - r)
  shape.lineTo(-s, -s + r)
  shape.quadraticCurveTo(-s, -s, -s + r, -s)
  return shape
}

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export class RubiksCube {
  constructor() {
    this.group = new THREE.Group()
    this.group.name = 'RubiksCube'
    this.cubies = []
    this.stickers = []
    this.active = null
    this.spacing = SPACING
    this._build()
  }

  _build() {
    const bodyGeometry = new RoundedBoxGeometry(
      BODY_SIZE,
      BODY_SIZE,
      BODY_SIZE,
      5,
      0.105,
    )
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111318,
      metalness: 0.55,
      roughness: 0.26,
      clearcoat: 0.55,
      clearcoatRoughness: 0.32,
    })
    const stickerGeometry = new THREE.ShapeGeometry(
      roundedSquare(STICKER_SIZE, STICKER_RADIUS),
      10,
    )
    const stickerMaterials = Object.fromEntries(
      Object.entries(FACE_META)
        .filter(([key]) => 'RLUDFB'.includes(key))
        .map(([key, meta]) => [
          key,
          new THREE.MeshPhysicalMaterial({
            color: meta.color,
            metalness: 0.05,
            roughness: 0.4,
            clearcoat: 0.52,
            clearcoatRoughness: 0.24,
            reflectivity: 0.34,
            emissive: new THREE.Color(meta.color).multiplyScalar(0.025),
          }),
        ]),
    )

    const faceDefinitions = {
      R: {
        normal: [1, 0, 0],
        position: [STICKER_LIFT, 0, 0],
        rotation: [0, Math.PI / 2, 0],
      },
      L: {
        normal: [-1, 0, 0],
        position: [-STICKER_LIFT, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
      },
      U: {
        normal: [0, 1, 0],
        position: [0, STICKER_LIFT, 0],
        rotation: [-Math.PI / 2, 0, 0],
      },
      D: {
        normal: [0, -1, 0],
        position: [0, -STICKER_LIFT, 0],
        rotation: [Math.PI / 2, 0, 0],
      },
      F: {
        normal: [0, 0, 1],
        position: [0, 0, STICKER_LIFT],
        rotation: [0, 0, 0],
      },
      B: {
        normal: [0, 0, -1],
        position: [0, 0, -STICKER_LIFT],
        rotation: [0, Math.PI, 0],
      },
    }

    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        for (let z = -1; z <= 1; z += 1) {
          if (x === 0 && y === 0 && z === 0) continue
          const cubie = new THREE.Group()
          cubie.userData.coord = { x, y, z }
          cubie.userData.home = { x, y, z }
          cubie.position.set(x * SPACING, y * SPACING, z * SPACING)
          cubie.castShadow = true
          cubie.receiveShadow = true

          const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
          body.castShadow = true
          body.receiveShadow = true
          cubie.add(body)

          for (const [face, def] of Object.entries(faceDefinitions)) {
            const isOuter =
              (face === 'R' && x === 1) ||
              (face === 'L' && x === -1) ||
              (face === 'U' && y === 1) ||
              (face === 'D' && y === -1) ||
              (face === 'F' && z === 1) ||
              (face === 'B' && z === -1)
            if (!isOuter) continue

            const sticker = new THREE.Mesh(stickerGeometry, stickerMaterials[face])
            sticker.position.set(...def.position)
            sticker.rotation.set(...def.rotation)
            sticker.castShadow = false
            sticker.receiveShadow = true
            sticker.userData = {
              isSticker: true,
              face,
              cubie,
              normal: new THREE.Vector3(...def.normal),
            }
            cubie.add(sticker)
            this.stickers.push(sticker)
          }

          this.cubies.push(cubie)
          this.group.add(cubie)
        }
      }
    }
  }

  update(delta) {
    const anim = this.active
    if (!anim) return
    anim.elapsed = Math.min(anim.elapsed + delta, anim.duration)
    const t = anim.elapsed / anim.duration
    const eased = easeInOutCubic(t)
    if (anim.kind === 'settle') {
      const angle =
        anim.fromAngle + (anim.targetAngle - anim.fromAngle) * eased
      this._applyLayer(anim.items, anim.axis, angle)
    } else {
      const angle = anim.move.angle * eased
      this._applyLayer(anim.items, anim.move.axis, angle)
    }
    if (t >= 1) this._finishActive()
  }

  _applyLayer(items, axis, angle) {
    const rotation = new THREE.Quaternion().setFromAxisAngle(AXES[axis], angle)
    for (const item of items) {
      item.object.position.copy(item.startPosition).applyQuaternion(rotation)
      item.object.quaternion.copy(rotation).multiply(item.startQuaternion)
    }
  }

  captureLayer(axis, layer) {
    return this.cubies
      .filter(
        (cubie) => Math.round(cubie.position[axis] / SPACING) === layer,
      )
      .map((object) => ({
        object,
        startPosition: object.position.clone(),
        startQuaternion: object.quaternion.clone(),
      }))
  }

  rotateLayer(items, axis, angle) {
    this._applyLayer(items, axis, angle)
  }

  settleLayer(items, axis, fromAngle, targetAngle, duration = 0.18) {
    if (Math.abs(targetAngle - fromAngle) < 0.0001) {
      this._applyLayer(items, axis, targetAngle)
      this._snapItems(items)
      return Promise.resolve()
    }
    return new Promise((resolve) => {
      this.active = {
        kind: 'settle',
        axis,
        items,
        fromAngle,
        targetAngle,
        elapsed: 0,
        duration: Math.max(0.06, duration),
        resolve,
      }
    })
  }

  _snapItems(items) {
    for (const item of items) {
      const p = item.object.position
      p.set(
        Math.round(p.x / SPACING) * SPACING,
        Math.round(p.y / SPACING) * SPACING,
        Math.round(p.z / SPACING) * SPACING,
      )
      item.object.quaternion.normalize()
      item.object.userData.coord = {
        x: Math.round(p.x / SPACING),
        y: Math.round(p.y / SPACING),
        z: Math.round(p.z / SPACING),
      }
    }
  }

  turn(move, duration = 0.235) {
    if (this.active) this.snap()
    const items = this.captureLayer(move.axis, move.layer)

    return new Promise((resolve) => {
      this.active = {
        kind: 'turn',
        move,
        items,
        elapsed: 0,
        duration: Math.max(0.08, duration),
        resolve,
      }
    })
  }

  _finishActive() {
    const anim = this.active
    if (!anim) return
    this._snapItems(anim.items)
    this.active = null
    anim.resolve()
  }

  snap() {
    if (!this.active) return
    const anim = this.active
    if (anim.kind === 'settle') {
      this._applyLayer(anim.items, anim.axis, anim.targetAngle)
    } else {
      this._applyLayer(anim.items, anim.move.axis, anim.move.angle)
    }
    this._finishActive()
  }

  reset() {
    this.snap()
    for (const cubie of this.cubies) {
      const home = cubie.userData.home
      cubie.position.set(
        home.x * SPACING,
        home.y * SPACING,
        home.z * SPACING,
      )
      cubie.quaternion.identity()
      cubie.userData.coord = { ...home }
    }
  }
}
