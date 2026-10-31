import './styles.css';
import Cube from 'cubejs';
import { Cube3D } from './cube3d.js';
import { SolverClient } from './solver.js';
import { icon } from './icons.js';
import {
  ALGORITHMS,
  COLORS,
  COLOR_ORDER,
  CUBE_TYPES,
  HOME_VIDEO_IDS,
  VIDEOS,
  cubeMeta,
  getAlgorithm,
  getVideo,
  youtubeEmbed,
  youtubeThumb,
} from './data.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const SOLVED = new Cube().asString();
const FACE_ORDER = ['U', 'R', 'F', 'D', 'L', 'B'];
const FACE_CENTERS = { U: 4, R: 13, F: 22, D: 31, L: 40, B: 49 };
const FACE_LABELS = { U: '위', R: '오른쪽', F: '앞', D: '아래', L: '왼쪽', B: '뒤' };

function blankFaces() {
  const faces = {};
  for (const face of FACE_ORDER) {
    faces[face] = Array(9).fill(null);
    faces[face][4] = face;
  }
  return faces;
}

function facesToString(faces) {
  return FACE_ORDER.map((face) => faces[face].map((value) => value || 'X').join('')).join('');
}

function facesFromString(facelets) {
  const faces = {};
  FACE_ORDER.forEach((face, index) => {
    faces[face] = facelets.slice(index * 9, index * 9 + 9).split('');
  });
  return faces;
}

function splitMoves(moves) {
  return String(moves || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function inverseMove(move) {
  if (!move) return '';
  if (move.endsWith("'")) return move.slice(0, -1);
  if (move.endsWith('2')) return move;
  return `${move}'`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isSolved(facelets) {
  return facelets === SOLVED;
}

function faceColor(letter) {
  return COLORS[letter]?.hex || '#687083';
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function heroCubeSvg() {
  const top = [
    [210, 48],
    [338, 120],
    [210, 192],
    [82, 120],
  ];
  const left = [
    [82, 120],
    [210, 192],
    [210, 336],
    [82, 264],
  ];
  const right = [
    [210, 192],
    [338, 120],
    [338, 264],
    [210, 336],
  ];

  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const point = (corners, u, v) => {
    const topPoint = lerp(corners[0], corners[1], u);
    const bottomPoint = lerp(corners[3], corners[2], u);
    return lerp(topPoint, bottomPoint, v);
  };
  const polygon = (points, fill, extra = '') =>
    `<polygon points="${points.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${fill}" ${extra}/>`;

  const tiles = (corners, color, shade) => {
    let output = '';
    const gap = 0.055;
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const u0 = (col + gap) / 3;
        const u1 = (col + 1 - gap) / 3;
        const v0 = (row + gap) / 3;
        const v1 = (row + 1 - gap) / 3;
        const points = [
          point(corners, u0, v0),
          point(corners, u1, v0),
          point(corners, u1, v1),
          point(corners, u0, v1),
        ];
        const tileShade = shade + (row * 0.018) + (col * 0.012);
        output += polygon(points, color, `opacity="${Math.min(1, tileShade)}"`);
      }
    }
    return output;
  };

  return `
    <svg class="cube-art" viewBox="0 0 420 420" role="img" aria-label="CUBE LAB 3D 큐브 일러스트">
      <defs>
        <linearGradient id="topShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#efffc9" stop-opacity=".35"/>
          <stop offset=".5" stop-color="#c9ff45" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="cubeShadow">
          <stop offset="0" stop-color="#000" stop-opacity=".55"/>
          <stop offset="1" stop-color="#000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="350" rx="142" ry="25" fill="url(#cubeShadow)"/>
      ${polygon(top, '#080a0f')}
      ${polygon(left, '#080a0f')}
      ${polygon(right, '#080a0f')}
      ${tiles(top, '#c9ff45', 0.92)}
      ${tiles(left, '#4edfc7', 0.8)}
      ${tiles(right, '#ff6b73', 0.87)}
      ${polygon(top, 'url(#topShine)')}
      <polyline points="82,120 210,48 338,120 338,264 210,336 82,264 82,120" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/>
      <path d="M210 192v144M82 120l128 72 128-72" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="2"/>
    </svg>
  `;
}

/* ------------------------------------------------------------------ */
/* state                                                              */
/* ------------------------------------------------------------------ */

const state = {
  view: 'home',
  solverStatus: 'loading',
  cube: new Cube(),
  facelets: SOLVED,
  moveHistory: [],
  prime: false,
  solution: null,
  solutionPlaying: false,
  playToken: 0,
  turning: false,
  queue: [],
  queueEpoch: 0,
  generation: 0,
  solveInitialized: false,
  solveCube3D: null,
  myCubeInitialized: false,
  myCube3D: null,
  myCube: {
    faces: blankFaces(),
    selected: 'U',
    solving: false,
    solution: null,
    status: 'idle',
    error: '',
  },
  learnInitialized: false,
  learnFilter: 'all',
  learnQuery: '',
  selectedVideo: VIDEOS[0].id,
  videoPlaying: false,
  tiltEnabled: false,
  tiltAvailable: typeof DeviceOrientationEvent !== 'undefined',
  tiltHandler: null,
};

const solver = new SolverClient();
solver.onStatus((status) => {
  state.solverStatus = status;
  updateSolverUI();
});

/* ------------------------------------------------------------------ */
/* navigation                                                         */
/* ------------------------------------------------------------------ */

function navigate(view, { push = true, scroll = true } = {}) {
  const valid = ['home', 'solve', 'mycube', 'learn', 'videos'];
  const next = valid.includes(view) ? view : 'home';
  if (state.view === 'solve' && next !== 'solve') {
    state.playToken += 1;
    state.solutionPlaying = false;
    state.solveCube3D?.setActive(false);
  }
  if (state.view === 'mycube' && next !== 'mycube') {
    state.myCube3D?.setActive(false);
  }
  if (state.view === 'videos' && next !== 'videos') {
    state.videoPlaying = false;
  }
  state.view = next;

  $$('.view').forEach((section) => {
    section.hidden = section.dataset.view !== next;
  });

  $$('.desktop-nav [data-nav], .mobile-nav [data-nav]').forEach((button) => {
    button.classList.toggle('active', button.dataset.nav === next);
  });

  if (next === 'solve') {
    if (!state.solveInitialized) initSolveView();
    else {
      state.solveCube3D?.setActive(true);
      refreshSolveUI();
    }
  } else if (next === 'mycube') {
    if (!state.myCubeInitialized) initMyCubeView();
    else {
      state.myCube3D?.setActive(true);
      updateMyCubePreview();
      refreshMyCubeUI();
    }
  } else if (next === 'learn') {
    if (!state.learnInitialized) initLearnView();
    else refreshLearnGrid();
  } else if (next === 'videos') {
    renderVideosView();
  }

  if (push) {
    history.pushState({ view: next }, '', `#${next}`);
  }
  if (scroll) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

window.addEventListener('popstate', (event) => {
  navigate(event.state?.view || location.hash.replace('#', '') || 'home', { push: false, scroll: false });
});

window.addEventListener('scroll', () => {
  $('#topbar')?.classList.toggle('scrolled', window.scrollY > 8);
});

/* ------------------------------------------------------------------ */
/* solver status                                                      */
/* ------------------------------------------------------------------ */

function solverCopy(status) {
  if (status === 'ready') return { label: '솔버 준비 완료', title: 'Kociemba 솔버 준비 완료', sub: '어떤 상태든 22수 이내의 해를 찾을 수 있어요.' };
  if (status === 'solving') return { label: '최적 해 계산 중', title: '최적 해를 계산하고 있어요', sub: '잠시만 기다리면 가장 짧은 풀이를 보여드릴게요.' };
  if (status === 'error') return { label: '솔버 오프라인', title: '솔버를 시작하지 못했어요', sub: '페이지를 새로고침하면 다시 시도합니다.' };
  return { label: '솔버 준비 중', title: '솔버를 준비하고 있어요', sub: '처음 한 번만 계산 테이블을 만듭니다.' };
}

function updateSolverUI() {
  const copy = solverCopy(state.solverStatus);
  const pill = $('#solverPill');
  if (pill) {
    pill.classList.toggle('ready', state.solverStatus === 'ready');
    pill.classList.toggle('busy', state.solverStatus === 'solving' || state.solverStatus === 'loading');
    const label = $('#solverLabel');
    if (label) label.textContent = copy.label;
  }

  const status = $('#solverStatus');
  if (status) {
    status.className = `status-hero ${state.solverStatus === 'ready' ? 'ready' : state.solverStatus === 'solving' ? 'solving' : ''}`;
    status.innerHTML = `
      <div class="status-orb">${icon(state.solverStatus === 'ready' ? 'check' : state.solverStatus === 'solving' ? 'rotate' : 'bolt', 24)}</div>
      <div><b>${copy.title}</b><span>${copy.sub}</span></div>
    `;
  }

  const solveButton = $('#solveCurrentButton');
  if (solveButton) {
    solveButton.disabled = state.solverStatus === 'loading' || state.solverStatus === 'solving' || state.solverStatus === 'error';
    solveButton.innerHTML = state.solverStatus === 'loading'
      ? `${icon('clock', 17)} 솔버 준비 중`
      : state.solverStatus === 'solving'
        ? `${icon('rotate', 17)} 계산 중…`
        : `${icon('sparkles', 17)} 최적 풀이 찾기`;
  }

  const myButton = $('#solveMyCubeButton');
  if (myButton) {
    myButton.disabled = state.myCube.solving || state.solverStatus === 'loading' || state.solverStatus === 'error';
    myButton.innerHTML = state.myCube.solving
      ? `${icon('rotate', 17)} 풀이 계산 중…`
      : state.solverStatus === 'loading'
        ? `${icon('clock', 17)} 솔버 준비 중`
        : `${icon('sparkles', 17)} 내 큐브 풀기`;
  }
}

/* ------------------------------------------------------------------ */
/* home                                                               */
/* ------------------------------------------------------------------ */

function renderHome() {
  const home = $('#view-home');
  const videos = HOME_VIDEO_IDS.map((id) => getVideo(id)).filter(Boolean);
  home.innerHTML = `
    <div class="hero">
      <div class="hero-copy">
        <div class="hero-badge"><b>NEW</b> 3D 솔버 · 내 큐브 입력 · 유튜브 강의</div>
        <h1>큐브는<br/><span class="accent">공식</span>보다<br/><span class="outline">순서</span>입니다.</h1>
        <p>가상 큐브를 직접 돌려보고, 내 큐브 색을 입력해 풀이를 받고, 검증된 유튜브 강의로 원리를 익히세요. 3×3부터 메가밍크스까지 한곳에서.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" data-nav="solve">${icon('cube', 18)} 3D 큐브 풀기</button>
          <button class="btn btn-ghost" data-nav="mycube">${icon('grid', 18)} 내 큐브 입력</button>
        </div>
        <div class="hero-meta">
          <span>${icon('check', 14)} Kociemba 솔버</span>
          <span>${icon('check', 14)} 터치 무브 패드</span>
          <span>${icon('check', 14)} 기울기 시점</span>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-glow"></div>
        <div class="hero-ring"></div>
        <div class="hero-ring hero-ring-2"></div>
        ${heroCubeSvg()}
        <div class="hero-chip hero-chip-a">
          <span class="chip-icon">${icon('sparkles', 16)}</span>
          <div><b>22수 이내</b>최적 해 계산</div>
        </div>
        <div class="hero-chip hero-chip-b">
          <span class="chip-icon">${icon('video', 16)}</span>
          <div><b>10개 강의</b>유튜브 연동</div>
        </div>
      </div>
    </div>

    <div class="stat-strip">
      <div class="stat"><b>22<span>수</span></b><small>최대 풀이 길이</small></div>
      <div class="stat"><b>20<span>+</span></b><small>큐브 공식</small></div>
      <div class="stat"><b>5<span>종</span></b><small>큐브 타입</small></div>
      <div class="stat"><b>10<span>개</span></b><small>유튜브 강의</small></div>
    </div>

    <div class="section-head">
      <div>
        <h2>어디서 시작할까요?</h2>
        <p>풀고 싶다면 솔버, 원리가 궁금하다면 공식과 강의.</p>
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick-card" data-nav="solve" style="--card-accent:#c9ff45;--card-glow:rgba(201,255,69,.12)">
        <span class="quick-icon">${icon('cube', 21)}</span>
        <span class="quick-arrow">${icon('arrowUpRight', 18)}</span>
        <h3>가상 큐브 풀기</h3>
        <p>3D 큐브를 스크램블하고 Kociemba 솔버의 최적 해를 한 수씩 재생합니다.</p>
      </button>
      <button class="quick-card" data-nav="mycube" style="--card-accent:#6fe7ff;--card-glow:rgba(111,231,255,.12)">
        <span class="quick-icon">${icon('grid', 21)}</span>
        <span class="quick-arrow">${icon('arrowUpRight', 18)}</span>
        <h3>내 큐브 풀기</h3>
        <p>실제 큐브의 여섯 면 색을 입력하면 풀이 순서를 알려드립니다.</p>
      </button>
      <button class="quick-card" data-nav="learn" style="--card-accent:#ff9b4a;--card-glow:rgba(255,155,74,.12)">
        <span class="quick-icon">${icon('book', 21)}</span>
        <span class="quick-arrow">${icon('arrowUpRight', 18)}</span>
        <h3>공식 사전</h3>
        <p>3×3, 2×2, 4×4, 피라밍크스, 메가밍크스 공식을 난이도별로.</p>
      </button>
    </div>

    <div class="section-head">
      <div>
        <h2>지금 보기 좋은 강의</h2>
        <p>유튜브 원본으로 연결되는 검증된 튜토리얼.</p>
      </div>
      <button class="text-link" data-nav="videos">전체 강의 ${icon('arrow', 15)}</button>
    </div>
    <div class="video-rail">
      ${videos.map((video) => `
        <button class="video-mini" data-action="open-video" data-id="${video.id}">
          <div class="video-thumb">
            <img src="${youtubeThumb(video.id)}" alt="" loading="lazy" />
            <span class="play-dot">${icon('play', 14)}</span>
          </div>
          <div class="video-mini-body">
            <b>${escapeHtml(video.title)}</b>
            <span>${escapeHtml(video.author)} · ${escapeHtml(video.tag)}</span>
          </div>
        </button>
      `).join('')}
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* solve view                                                         */
/* ------------------------------------------------------------------ */

const MOVE_FACES = [
  { face: 'U', label: '윗면' },
  { face: 'R', label: '오른쪽' },
  { face: 'F', label: '앞면' },
  { face: 'D', label: '아랫면' },
  { face: 'L', label: '왼쪽' },
  { face: 'B', label: '뒷면' },
];

function initSolveView() {
  const view = $('#view-solve');
  view.innerHTML = `
    <div class="page-head">
      <div>
        <span class="eyebrow">3D SOLVER</span>
        <h1>가상 큐브 풀기</h1>
        <p>큐브를 스크램블하거나 직접 돌려보세요. 솔버가 현재 상태에서 가장 짧은 풀이를 찾아 한 수씩 재생합니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${icon('sparkles', 12)} <strong>Kociemba</strong> two-phase</span>
      </div>
    </div>

    <div class="solve-layout">
      <div class="stage-card">
        <div class="stage-top">
          <div class="stage-meta">
            <span class="meta-chip"><span class="live-dot"></span> 3×3</span>
            <span class="meta-chip">무브 <strong id="moveCount">0</strong></span>
            <span class="meta-chip" id="cubeStateChip"><strong>완성</strong></span>
          </div>
          <div class="stage-actions">
            <button class="stage-icon" data-action="toggle-tilt" aria-label="기울기 시점" aria-pressed="false" title="기울여서 보기">${icon('tilt', 16)}</button>
            <button class="stage-icon" data-action="reset-view" aria-label="시점 초기화" title="시점 초기화">${icon('target', 16)}</button>
            <button class="stage-icon" data-action="toggle-fullscreen" aria-label="큐브 크게 보기" title="큐브 크게 보기">${icon('eye', 16)}</button>
          </div>
        </div>

        <div class="cube-canvas" id="solveCanvas"></div>
        <div class="canvas-hint">${icon('drag', 12)} 드래그해서 큐브를 돌려보세요</div>

        <div class="stage-tools">
          <div class="tool-row">
            <button class="pill-btn accent" data-action="scramble">${icon('shuffle', 14)} 스크램블</button>
            <button class="pill-btn" data-action="undo">${icon('rotate', 14)} 되돌리기</button>
            <button class="pill-btn" data-action="reset-cube">${icon('reset', 14)} 초기화</button>
          </div>
          <span class="solve-badge"><span class="dot"></span> 터치로 돌리기</span>
        </div>

        <div class="movepad">
          <div class="movepad-head">
            <span class="movepad-title">${icon('hand', 14)} 무브 패드</span>
            <button class="prime-toggle" data-action="toggle-prime" aria-pressed="false">
              <span>역방향</span><span class="toggle-track"></span>
            </button>
          </div>
          <div class="move-grid">
            ${MOVE_FACES.map(({ face, label }) => `
              <button class="move-btn" data-action="turn" data-face="${face}" aria-label="${label} ${face} 회전">
                <b data-face-letter>${face}</b><span>${label}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="side-stack">
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${icon('sparkles', 16)} 솔버</h2>
            <span class="panel-sub">최대 22수</span>
          </div>
          <div id="solverStatus"></div>
          <button class="btn btn-primary btn-block" id="solveCurrentButton" data-action="solve-current" style="margin-top:12px">${icon('sparkles', 17)} 최적 풀이 찾기</button>
          <div id="solutionPanel" style="margin-top:16px"></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${icon('clock', 16)} 무브 기록</h2>
            <span class="panel-sub" id="historyCount">0수</span>
          </div>
          <div class="history-list" id="historyPanel"></div>
        </div>
      </div>
    </div>
  `;

  state.solveCube3D = new Cube3D($('#solveCanvas'), {
    facelets: state.facelets,
    float: true,
    yaw: -0.62,
    pitch: -0.02,
  });
  state.solveCube3D.setTiltEnabled(state.tiltEnabled);
  state.solveInitialized = true;
  updateSolverUI();
  refreshSolveUI();
}

function updatePrimeUI() {
  $$('.prime-toggle').forEach((button) => button.setAttribute('aria-pressed', String(state.prime)));
  $$('.move-btn').forEach((button) => {
    button.classList.toggle('prime', state.prime);
    const letter = $('[data-face-letter]', button);
    if (letter) letter.textContent = state.prime ? `${button.dataset.face}′` : button.dataset.face;
  });
}

function refreshSolveUI() {
  if (!state.solveInitialized) return;
  updateSolverUI();
  updatePrimeUI();
  const moveCount = $('#moveCount');
  if (moveCount) moveCount.textContent = String(state.moveHistory.length);
  const stateChip = $('#cubeStateChip');
  if (stateChip) {
    stateChip.innerHTML = isSolved(state.facelets)
      ? '<strong style="color:var(--green)">완성</strong>'
      : '<strong style="color:var(--yellow)">스크램블</strong>';
  }
  const historyCount = $('#historyCount');
  if (historyCount) historyCount.textContent = `${state.moveHistory.length}수`;
  renderHistory();
  renderSolution();
}

function renderHistory() {
  const panel = $('#historyPanel');
  if (!panel) return;
  if (!state.moveHistory.length) {
    panel.innerHTML = '<span class="history-empty">아직 움직임이 없어요. 스크램블하거나 무브 패드로 직접 돌려보세요.</span>';
    return;
  }
  panel.innerHTML = state.moveHistory
    .slice(-40)
    .map((move) => `<span class="history-chip">${escapeHtml(move)}</span>`)
    .join('');
}

function renderSolution() {
  const panel = $('#solutionPanel');
  if (!panel) return;
  if (!state.solution) {
    panel.innerHTML = `
      <div class="solution-empty">
        ${icon('sparkles', 29)}
        <b>아직 풀이가 없어요</b>
        <p>스크램블한 뒤 ‘최적 풀이 찾기’를 누르면 가장 짧은 순서를 알려드려요.</p>
      </div>
    `;
    return;
  }

  const { moves, index, title, source } = state.solution;
  panel.innerHTML = `
    <div class="solution-toolbar">
      <span class="solution-count"><b>${moves.length}</b>수${title ? ` · ${escapeHtml(title)}` : ''}</span>
      <span class="panel-sub">${source === 'mycube' ? '내 큐브' : source === 'algorithm' ? '공식 재생' : '최적 해'}</span>
    </div>
    <div class="solution-tokens">
      ${moves.map((move, moveIndex) => `
        <button class="move-token ${moveIndex < index ? 'done' : ''} ${moveIndex === index ? 'active' : ''}" data-action="apply-solution-token" data-index="${moveIndex}">${escapeHtml(move)}</button>
      `).join('')}
    </div>
    <div class="solution-actions">
      <button class="btn btn-primary btn-sm" data-action="play-solution">${icon(state.solutionPlaying ? 'pause' : 'play', 15)} ${state.solutionPlaying ? '일시정지' : index >= moves.length ? '다시 재생' : '전체 재생'}</button>
      <button class="btn btn-ghost btn-sm" data-action="step-solution">${icon('next', 15)} 한 수</button>
      <button class="btn btn-quiet btn-sm" data-action="copy-solution">${icon('copy', 15)} 복사</button>
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* cube interaction                                                   */
/* ------------------------------------------------------------------ */

function enqueueMove(move, options = {}) {
  const generation = state.generation;
  return new Promise((resolve) => {
    state.queue.push({ move, options, generation, resolve });
    processQueue();
  });
}

function clearMoveQueue() {
  for (const task of state.queue) task.resolve();
  state.queue = [];
  state.queueEpoch += 1;
}

async function processQueue() {
  if (state.turning) return;
  state.turning = true;
  const epoch = state.queueEpoch;
  while (state.queue.length) {
    if (epoch !== state.queueEpoch) {
      state.turning = false;
      if (state.queue.length) processQueue();
      return;
    }
    const task = state.queue.shift();
    if (task.generation !== state.generation) {
      task.resolve();
      continue;
    }
    const next = new Cube(state.cube);
    next.move(task.move);
    const duration = task.options.duration ?? 240;
    await state.solveCube3D?.animateMove(task.move, next.asString(), duration);
    if (task.generation !== state.generation) {
      task.resolve();
      continue;
    }
    state.cube = next;
    state.facelets = next.asString();
    if (task.options.record !== false) {
      state.moveHistory.push(task.move);
    }
    if (!task.options.fromSolution) {
      state.solution = null;
      state.solutionPlaying = false;
    }
    refreshSolveUI();
    task.resolve();
  }
  state.turning = false;
  if (state.queue.length) processQueue();
}

function turnFace(face) {
  navigator.vibrate?.(7);
  const move = `${face}${state.prime ? "'" : ''}`;
  state.playToken += 1;
  state.solutionPlaying = false;
  enqueueMove(move, { duration: 240 });
}

function resetCube({ silent = false, keepSolution = false } = {}) {
  state.generation += 1;
  state.playToken += 1;
  clearMoveQueue();
  state.turning = false;
  state.solveCube3D?.cancelAnimations?.();
  state.cube = new Cube();
  state.facelets = SOLVED;
  state.moveHistory = [];
  if (!keepSolution) state.solution = null;
  state.solutionPlaying = false;
  state.solveCube3D?.setState(SOLVED);
  state.solveCube3D?.resetView();
  refreshSolveUI();
  if (!silent) showToast('큐브를 완성 상태로 되돌렸어요.');
}

function randomScramble() {
  const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
  const suffixes = ['', "'", '2'];
  const moves = [];
  let last = '';
  while (moves.length < 20) {
    const face = faces[Math.floor(Math.random() * faces.length)];
    if (face === last) continue;
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    moves.push(`${face}${suffix}`);
    last = face;
  }
  state.generation += 1;
  state.playToken += 1;
  clearMoveQueue();
  state.turning = false;
  state.solveCube3D?.cancelAnimations?.();
  state.cube = new Cube();
  state.facelets = SOLVED;
  state.moveHistory = [];
  state.solution = null;
  state.solutionPlaying = false;
  state.solveCube3D?.setState(SOLVED);
  refreshSolveUI();

  let chain = Promise.resolve();
  for (const move of moves) {
    chain = chain.then(() => enqueueMove(move, { duration: 105, record: true }));
  }
  showToast('20수 스크램블을 만들었어요.');
  return chain;
}

async function solveCurrentCube() {
  if (state.turning || state.queue.length) {
    showToast('회전이 끝난 뒤 다시 시도해 주세요.');
    return;
  }
  if (state.solverStatus !== 'ready') {
    showToast('솔버가 아직 준비되지 않았어요. 잠시만 기다려 주세요.', 'error');
    return;
  }
  if (isSolved(state.facelets)) {
    showToast('이미 완성된 큐브예요. 먼저 스크램블해 보세요.');
    return;
  }
  state.solutionPlaying = false;
  state.solverStatus = 'solving';
  updateSolverUI();
  try {
    const result = await solver.solve(state.facelets);
    const moves = splitMoves(result);
    if (!moves.length) {
      state.solution = null;
      showToast('이미 완성된 상태예요.');
    } else {
      state.solution = { moves, index: 0, source: 'solve', title: '' };
      showToast(`${moves.length}수의 최적 풀이를 찾았어요.`);
    }
  } catch (error) {
    console.error(error);
    state.solution = null;
    showToast('풀이를 찾지 못했어요. 큐브 상태를 확인해 주세요.', 'error');
  } finally {
    if (state.solverStatus === 'solving') state.solverStatus = 'ready';
    updateSolverUI();
    renderSolution();
  }
}

async function playSolution() {
  if (!state.solution) return;
  if (state.solutionPlaying) {
    state.playToken += 1;
    state.solutionPlaying = false;
    renderSolution();
    return;
  }

  if (state.solution.index >= state.solution.moves.length) {
    const previous = state.solution;
    resetCube({ silent: true, keepSolution: true });
    state.solution = { ...previous, index: 0 };
    renderSolution();
  }

  const token = ++state.playToken;
  state.solutionPlaying = true;
  renderSolution();
  while (state.solution && state.solution.index < state.solution.moves.length && token === state.playToken) {
    const move = state.solution.moves[state.solution.index];
    await enqueueMove(move, { duration: 215, fromSolution: true });
    if (token !== state.playToken || !state.solution) break;
    state.solution.index += 1;
    renderSolution();
  }
  if (token === state.playToken) {
    state.solutionPlaying = false;
    renderSolution();
    if (isSolved(state.facelets)) celebrate();
  }
}

async function stepSolution() {
  if (!state.solution) return;
  if (state.solutionPlaying) {
    state.playToken += 1;
    state.solutionPlaying = false;
  }
  if (state.solution.index >= state.solution.moves.length) {
    showToast('풀이를 모두 적용했어요.');
    return;
  }
  const move = state.solution.moves[state.solution.index];
  await enqueueMove(move, { duration: 215, fromSolution: true });
  if (state.solution) {
    state.solution.index += 1;
    renderSolution();
    if (isSolved(state.facelets)) celebrate();
  }
}

async function applySolutionTo(index) {
  if (!state.solution || state.solutionPlaying) return;
  if (index < state.solution.index) {
    showToast('이미 지나간 수예요. 처음부터 재생해 보세요.');
    return;
  }
  const token = ++state.playToken;
  state.solutionPlaying = true;
  while (state.solution && state.solution.index <= index && token === state.playToken) {
    const move = state.solution.moves[state.solution.index];
    await enqueueMove(move, { duration: 190, fromSolution: true });
    if (!state.solution || token !== state.playToken) break;
    state.solution.index += 1;
    renderSolution();
  }
  if (token === state.playToken) {
    state.solutionPlaying = false;
    renderSolution();
    if (isSolved(state.facelets)) celebrate();
  }
}

function undoMove() {
  if (!state.moveHistory.length) {
    showToast('되돌릴 움직임이 없어요.');
    return;
  }
  if (state.turning) {
    showToast('회전이 끝난 뒤 다시 시도해 주세요.');
    return;
  }
  state.playToken += 1;
  state.solutionPlaying = false;
  state.solution = null;
  const last = state.moveHistory.pop();
  enqueueMove(inverseMove(last), { record: false, duration: 220 });
  refreshSolveUI();
}

/* ------------------------------------------------------------------ */
/* my cube                                                            */
/* ------------------------------------------------------------------ */

function initMyCubeView() {
  const view = $('#view-mycube');
  view.innerHTML = `
    <div class="page-head">
      <div>
        <span class="eyebrow">MY CUBE</span>
        <h1>내 큐브 입력</h1>
        <p>실제 큐브의 여섯 면을 펼친 모양으로 입력하세요. 각 면의 중심 조각은 고정되어 있고, 색상은 9개씩 필요합니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${icon('grid', 12)} 펼친 면 입력</span>
      </div>
    </div>

    <div class="mycube-layout">
      <div class="panel net-card">
        <div class="net-toolbar">
          <div class="net-hint">${icon('info', 15)} 면의 방향에 맞춰 스티커를 탭하세요. 같은 색을 다시 누르면 지워집니다.</div>
          <div class="tool-row">
            <button class="pill-btn" data-action="mycube-random">${icon('shuffle', 14)} 랜덤 예시</button>
            <button class="pill-btn" data-action="mycube-clear">${icon('trash', 14)} 전체 지우기</button>
          </div>
        </div>
        <div class="net-stage"><div id="myCubeNet"></div></div>
        <div id="myCubePalette"></div>
        <div id="myCubeCounts"></div>
        <div class="net-actions">
          <button class="btn btn-primary btn-sm" id="solveMyCubeButton" data-action="solve-mycube">${icon('sparkles', 15)} 내 큐브 풀기</button>
          <button class="btn btn-ghost btn-sm" data-action="mycube-help">${icon('help', 15)} 입력 가이드</button>
        </div>
      </div>

      <div class="side-stack">
        <div class="panel preview-card">
          <div class="panel-head">
            <h2 class="panel-title">${icon('cube', 16)} 3D 미리보기</h2>
            <span class="panel-sub" id="myCubeProgress">0 / 54</span>
          </div>
          <div class="preview-wrap"><div class="cube-canvas" id="myCubeCanvas"></div></div>
          <div class="mini-status" id="myCubeStatus"><span class="dot"></span><span>색을 입력하면 3D로 확인할 수 있어요.</span></div>
          <div id="myCubeResult"></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${icon('help', 16)} 이렇게 입력하세요</h2>
          </div>
          <div class="net-hint" style="align-items:flex-start">
            ${icon('info', 15)}
            <span>큐브를 흰색 면이 위로 오게 잡고, 앞면이 초록색이 되도록 맞춘 뒤 각 면을 바라본 상태로 입력하세요. 펼친 전개도의 방향과 실제 면의 방향이 같아야 정확한 풀이가 나옵니다.</span>
          </div>
        </div>
      </div>
    </div>
  `;

  state.myCube3D = new Cube3D($('#myCubeCanvas'), {
    facelets: facesToString(state.myCube.faces),
    float: false,
    yaw: -0.65,
    pitch: -0.08,
  });
  state.myCube3D.setTiltEnabled(state.tiltEnabled);
  state.myCubeInitialized = true;
  renderMyCubeNet();
  updateMyCubePreview();
  updateSolverUI();
  refreshMyCubeUI();
}

function renderMyCubeNet() {
  const net = $('#myCubeNet');
  if (!net) return;
  const faces = state.myCube.faces;
  const faceMarkup = (face, className) => `
    <div class="net-face ${className}" data-label="${face}">
      ${faces[face].map((letter, index) => {
        const isCenter = index === 4;
        const color = letter ? faceColor(letter) : '';
        return `<button class="sticker-cell ${isCenter ? 'center' : ''} ${letter ? '' : 'empty'}" style="${letter ? `background:${color}` : ''}" data-action="paint-cell" data-face="${face}" data-index="${index}" aria-label="${FACE_LABELS[face]} ${index + 1} ${letter ? COLORS[letter].name : '비어 있음'}"></button>`;
      }).join('')}
    </div>
  `;
  net.innerHTML = `
    <div class="cube-net">
      ${faceMarkup('U', 'net-u')}
      ${faceMarkup('L', 'net-l')}
      ${faceMarkup('F', 'net-f')}
      ${faceMarkup('R', 'net-r')}
      ${faceMarkup('B', 'net-b')}
      ${faceMarkup('D', 'net-d')}
    </div>
  `;
  renderMyCubePalette();
  renderMyCubeCounts();
}

function renderMyCubePalette() {
  const container = $('#myCubePalette');
  if (!container) return;
  container.innerHTML = `
    <div class="palette-row">
      ${COLOR_ORDER.map((letter) => `
        <button class="swatch" data-action="select-color" data-color="${letter}" aria-pressed="${state.myCube.selected === letter}" aria-label="${COLORS[letter].name} 선택">
          <i style="--swatch:${COLORS[letter].hex}"></i>
          <span>${COLORS[letter].name}</span>
          <small>${letter}</small>
        </button>
      `).join('')}
    </div>
  `;
}

function countFaceColors() {
  const counts = Object.fromEntries(COLOR_ORDER.map((letter) => [letter, 0]));
  let filled = 0;
  for (const face of FACE_ORDER) {
    for (const letter of state.myCube.faces[face]) {
      if (letter && counts[letter] !== undefined) {
        counts[letter] += 1;
        filled += 1;
      }
    }
  }
  return { counts, filled };
}

function renderMyCubeCounts() {
  const container = $('#myCubeCounts');
  if (!container) return;
  const { counts } = countFaceColors();
  container.innerHTML = `
    <div class="count-row">
      ${COLOR_ORDER.map((letter) => `
        <div class="count ${counts[letter] === 9 ? 'complete' : ''}"><b>${counts[letter]}</b>${COLORS[letter].name}</div>
      `).join('')}
    </div>
  `;
}

function updateMyCubePreview() {
  if (!state.myCube3D) return;
  const facelets = facesToString(state.myCube.faces);
  state.myCube3D.setState(facelets);
}

function refreshMyCubeUI() {
  if (!state.myCubeInitialized) return;
  const { counts, filled } = countFaceColors();
  const progress = $('#myCubeProgress');
  if (progress) progress.textContent = `${filled} / 54`;
  const status = $('#myCubeStatus');
  const allFilled = filled === 54;
  const countsOk = COLOR_ORDER.every((letter) => counts[letter] === 9);

  if (status) {
    let message = '색을 입력하면 3D로 확인할 수 있어요.';
    let className = 'mini-status';
    if (state.myCube.status === 'solving') {
      message = '솔버가 풀이를 계산하고 있어요…';
      className += ' ready';
    } else if (state.myCube.status === 'error') {
      message = state.myCube.error || '큐브 상태를 확인해 주세요.';
      className += ' error';
    } else if (allFilled && !countsOk) {
      message = '색상별 개수를 확인하세요. 각 색은 정확히 9개여야 해요.';
      className += ' error';
    } else if (state.myCube.solution) {
      message = '풀이를 찾았어요. 3D에서 한 수씩 확인해 보세요.';
      className += ' ready';
    } else if (allFilled && countsOk) {
      message = '입력 완료! 이제 풀이를 찾을 수 있어요.';
      className += ' ready';
    } else {
      message = `${54 - filled}개의 스티커가 남았어요.`;
    }
    status.className = className;
    status.innerHTML = `<span class="dot"></span><span>${escapeHtml(message)}</span>`;
  }

  renderMyCubeResult();
  updateSolverUI();
}

function renderMyCubeResult() {
  const container = $('#myCubeResult');
  if (!container) return;
  if (!state.myCube.solution) {
    container.innerHTML = '';
    return;
  }
  const { moves } = state.myCube.solution;
  container.innerHTML = `
    <div class="mycube-result">
      <div class="result-head"><b>풀이를 찾았어요</b><span>${moves.length}수</span></div>
      <div class="solution-tokens" style="max-height:130px">
        ${moves.map((move) => `<span class="move-token">${escapeHtml(move)}</span>`).join('')}
      </div>
      <div class="solution-actions" style="grid-template-columns:1fr auto">
        <button class="btn btn-primary btn-sm" data-action="mycube-to-3d">${icon('cube', 15)} 3D로 확인</button>
        <button class="btn btn-ghost btn-sm" data-action="copy-mycube">${icon('copy', 15)} 복사</button>
      </div>
    </div>
  `;
}

function paintCell(face, index) {
  if (index === 4) {
    showToast('중심 조각은 바꿀 수 없어요.');
    return;
  }
  navigator.vibrate?.(5);
  const current = state.myCube.faces[face][index];
  state.myCube.faces[face][index] = current === state.myCube.selected ? null : state.myCube.selected;
  state.myCube.solution = null;
  state.myCube.status = 'idle';
  state.myCube.error = '';
  renderMyCubeNet();
  updateMyCubePreview();
  refreshMyCubeUI();
}

function validateMyCube() {
  const { counts, filled } = countFaceColors();
  if (filled < 54) {
    const missing = 54 - filled;
    return { ok: false, message: `아직 ${missing}개의 스티커가 비어 있어요.` };
  }
  const wrong = COLOR_ORDER.find((letter) => counts[letter] !== 9);
  if (wrong) {
    return { ok: false, message: `${COLORS[wrong].name} 스티커가 ${counts[wrong]}개예요. 각 색은 9개여야 해요.` };
  }
  for (const [face, index] of Object.entries(FACE_CENTERS)) {
    if (state.myCube.faces[face][4] !== face) {
      return { ok: false, message: '중심 조각이 바뀌었어요. 페이지를 새로고침해 주세요.' };
    }
  }
  return { ok: true, facelets: facesToString(state.myCube.faces) };
}

async function solveMyCube() {
  if (state.myCube.solving) return;
  if (state.solverStatus !== 'ready') {
    showToast('솔버가 아직 준비되지 않았어요. 잠시만 기다려 주세요.', 'error');
    return;
  }
  const validation = validateMyCube();
  if (!validation.ok) {
    state.myCube.status = 'error';
    state.myCube.error = validation.message;
    refreshMyCubeUI();
    showToast(validation.message, 'error');
    return;
  }

  state.myCube.solving = true;
  state.myCube.status = 'solving';
  state.myCube.error = '';
  refreshMyCubeUI();
  state.solverStatus = 'solving';
  updateSolverUI();
  try {
    const result = await solver.solve(validation.facelets);
    const moves = splitMoves(result);
    state.myCube.solution = { moves };
    state.myCube.status = 'ready';
    showToast(`${moves.length}수의 풀이를 찾았어요.`);
  } catch (error) {
    console.error(error);
    state.myCube.status = 'error';
    state.myCube.error = '이 상태는 풀 수 없어요. 스티커 방향과 색을 다시 확인해 주세요.';
    showToast(state.myCube.error, 'error');
  } finally {
    state.myCube.solving = false;
    state.solverStatus = 'ready';
    updateSolverUI();
    refreshMyCubeUI();
  }
}

function loadMyCubeInto3D() {
  if (!state.myCube.solution) return;
  const facelets = facesToString(state.myCube.faces);
  try {
    const cube = Cube.fromString(facelets);
    state.generation += 1;
    state.playToken += 1;
    clearMoveQueue();
    state.turning = false;
    state.cube = cube;
    state.facelets = facelets;
    state.moveHistory = [];
    state.solution = {
      moves: state.myCube.solution.moves,
      index: 0,
      source: 'mycube',
      title: '내 큐브 풀이',
    };
    state.solutionPlaying = false;
    state.solveCube3D?.cancelAnimations?.();
    state.solveCube3D?.setState(facelets);
    state.solveCube3D?.resetView();
    navigate('solve');
    refreshSolveUI();
    showToast('내 큐브를 3D 솔버로 불러왔어요.');
  } catch (error) {
    console.error(error);
    showToast('큐브 상태를 불러오지 못했어요.', 'error');
  }
}

/* ------------------------------------------------------------------ */
/* learn                                                              */
/* ------------------------------------------------------------------ */

function initLearnView() {
  const view = $('#view-learn');
  view.innerHTML = `
    <div class="page-head">
      <div>
        <span class="eyebrow">ALGORITHM LIBRARY</span>
        <h1>공식 사전</h1>
        <p>큐브별 핵심 공식을 난이도와 단계로 정리했습니다. 3×3 공식은 3D 큐브에서 바로 재생해 볼 수 있어요.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${icon('book', 12)} <strong>${ALGORITHMS.length}</strong>개 공식</span>
      </div>
    </div>
    <div class="learn-toolbar">
      <div class="filter-row">
        <button class="filter-chip ${state.learnFilter === 'all' ? 'active' : ''}" data-action="learn-filter" data-filter="all">전체</button>
        ${CUBE_TYPES.map((cube) => `<button class="filter-chip ${state.learnFilter === cube.id ? 'active' : ''}" data-action="learn-filter" data-filter="${cube.id}">${cube.label}</button>`).join('')}
      </div>
      <label class="search-box">
        ${icon('search', 15)}
        <input id="learnSearch" type="search" placeholder="공식, 단계, 큐브 검색" value="${escapeHtml(state.learnQuery)}" autocomplete="off" />
      </label>
    </div>
    <div class="alg-grid" id="algGrid"></div>
  `;
  state.learnInitialized = true;
  $('#learnSearch')?.addEventListener('input', (event) => {
    state.learnQuery = event.target.value;
    refreshLearnGrid();
  });
  refreshLearnGrid();
}

function refreshLearnGrid() {
  if (!state.learnInitialized) return;
  const grid = $('#algGrid');
  if (!grid) return;
  $$('.filter-chip', $('#view-learn')).forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === state.learnFilter);
  });

  const query = state.learnQuery.trim().toLowerCase();
  const filtered = ALGORITHMS.filter((algorithm) => {
    const cube = cubeMeta(algorithm.cube);
    const matchesFilter = state.learnFilter === 'all' || algorithm.cube === state.learnFilter;
    const haystack = `${algorithm.title} ${algorithm.subtitle} ${algorithm.description} ${algorithm.tag} ${algorithm.level} ${cube.label}`.toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><b>검색 결과가 없어요</b><span>다른 큐브나 단계로 검색해 보세요.</span></div>`;
    return;
  }

  grid.innerHTML = filtered.map((algorithm) => {
    const cube = cubeMeta(algorithm.cube);
    return `
      <article class="alg-card" style="--badge-bg:${cube.soft};--badge-color:${cube.text}">
        <div class="alg-top">
          <span class="alg-badge">${cube.label}</span>
          <span class="alg-level">${escapeHtml(algorithm.level)}</span>
        </div>
        <h3>${escapeHtml(algorithm.title)}</h3>
        <p>${escapeHtml(algorithm.description)}</p>
        <div class="alg-moves">
          ${splitMoves(algorithm.moves).map((move) => `<span class="alg-move">${escapeHtml(move)}</span>`).join('')}
        </div>
        <div class="alg-foot">
          <span class="alg-video">${icon('video', 13)} ${escapeHtml(algorithm.tag)}</span>
          <button class="alg-open" data-action="open-alg" data-id="${algorithm.id}">자세히 ${icon('arrow', 13)}</button>
        </div>
      </article>
    `;
  }).join('');
}

/* ------------------------------------------------------------------ */
/* videos                                                             */
/* ------------------------------------------------------------------ */

function renderVideosView() {
  const view = $('#view-videos');
  const selected = getVideo(state.selectedVideo) || VIDEOS[0];
  if (!selected) return;
  view.innerHTML = `
    <div class="page-head">
      <div>
        <span class="eyebrow">YOUTUBE CLASS</span>
        <h1>강의</h1>
        <p>검증된 유튜브 튜토리얼을 앱 안에서 바로 재생하세요. 재생은 YouTube에 연결되며, 원본 채널에서 더 많은 강의를 볼 수 있습니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${icon('video', 12)} <strong>${VIDEOS.length}</strong>개 강의</span>
      </div>
    </div>

    <div class="video-layout">
      <div class="panel player-card">
        <div class="player-frame">
          ${state.videoPlaying
            ? `<iframe src="${youtubeEmbed(selected.id, true)}" title="${escapeHtml(selected.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            : `<div class="player-placeholder">
                <img class="player-bg" src="${youtubeThumb(selected.id, 'maxresdefault')}" alt="" onerror="this.src='${youtubeThumb(selected.id)}'" />
                <button class="play-large" data-action="play-video" aria-label="강의 재생">${icon('play', 22)}</button>
                <b>${escapeHtml(selected.title)}</b>
                <span>${escapeHtml(selected.author)} · YouTube에서 재생</span>
              </div>`}
        </div>
        <div class="player-info">
          <div>
            <h2>${escapeHtml(selected.title)}</h2>
            <p>${escapeHtml(selected.author)} · ${escapeHtml(selected.category)} · ${escapeHtml(selected.tag)}</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="https://www.youtube.com/watch?v=${selected.id}" target="_blank" rel="noopener noreferrer">${icon('external', 15)} YouTube에서 열기</a>
        </div>
        <div class="video-note">
          ${icon('info', 15)}
          <span>강의 영상은 각 원작자와 YouTube의 정책을 따릅니다. 앱은 영상의 재생만 연결하며, 광고나 자막은 YouTube 설정을 따릅니다.</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2 class="panel-title">${icon('layers', 16)} 플레이리스트</h2>
          <span class="panel-sub">${VIDEOS.length}개</span>
        </div>
        <div class="playlist">
          ${VIDEOS.map((video) => `
            <button class="playlist-item ${video.id === selected.id ? 'active' : ''}" data-action="select-video" data-id="${video.id}">
              <span class="playlist-thumb">
                <img src="${youtubeThumb(video.id)}" alt="" loading="lazy" />
                <span>${icon('play', 14)}</span>
              </span>
              <span class="playlist-body">
                <b>${escapeHtml(video.title)}</b>
                <span>${escapeHtml(video.author)} · ${escapeHtml(video.tag)}</span>
              </span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* modals                                                             */
/* ------------------------------------------------------------------ */

function openModal(html, { labelledBy = '' } = {}) {
  const root = $('#modalRoot');
  root.innerHTML = `<div class="modal-backdrop" data-modal-backdrop><div class="modal" role="dialog" aria-modal="true" ${labelledBy ? `aria-labelledby="${labelledBy}"` : ''}>${html}</div></div>`;
  document.body.classList.add('modal-open');
  const close = $('.modal-close', root);
  close?.focus({ preventScroll: true });
}

function closeModal() {
  $('#modalRoot').innerHTML = '';
  document.body.classList.remove('modal-open');
}

function openAlgorithmModal(id) {
  const algorithm = getAlgorithm(id);
  if (!algorithm) return;
  const cube = cubeMeta(algorithm.cube);
  const canDemo = algorithm.cube === '3x3';
  openModal(`
    <div class="modal-head">
      <div>
        <span class="alg-badge" style="--badge-bg:${cube.soft};--badge-color:${cube.text};margin-bottom:9px">${cube.label} · ${escapeHtml(algorithm.tag)}</span>
        <h2 id="algModalTitle">${escapeHtml(algorithm.title)}</h2>
        <p>${escapeHtml(algorithm.subtitle)} · ${escapeHtml(algorithm.level)}</p>
      </div>
      <button class="modal-close" data-action="close-modal" aria-label="닫기">${icon('close', 16)}</button>
    </div>
    <div class="modal-body">
      <div class="modal-video">
        <iframe src="${youtubeEmbed(algorithm.videoId)}" title="${escapeHtml(algorithm.title)} 강의" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="alg-detail-moves">
        ${splitMoves(algorithm.moves).map((move) => `<span class="alg-move">${escapeHtml(move)}</span>`).join('')}
      </div>
      <p class="detail-copy">${escapeHtml(algorithm.description)}</p>
      <ol class="detail-steps">
        ${algorithm.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
      </ol>
      <div class="detail-actions">
        ${canDemo ? `<button class="btn btn-primary btn-sm" data-action="demo-alg" data-id="${algorithm.id}">${icon('cube', 15)} 3D에서 재생</button>` : `<span class="btn btn-ghost btn-sm" style="cursor:default;opacity:.55">${icon('lock', 15)} 3D 재생은 3×3만</span>`}
        <a class="btn btn-ghost btn-sm" href="https://www.youtube.com/watch?v=${algorithm.videoId}" target="_blank" rel="noopener noreferrer">${icon('external', 15)} YouTube</a>
      </div>
    </div>
  `, { labelledBy: 'algModalTitle' });
}

function openInputGuide() {
  openModal(`
    <div class="modal-head">
      <div>
        <h2 id="guideModalTitle">내 큐브 입력 가이드</h2>
        <p>정확한 풀이를 위한 3가지 규칙</p>
      </div>
      <button class="modal-close" data-action="close-modal" aria-label="닫기">${icon('close', 16)}</button>
    </div>
    <div class="modal-body">
      <p class="detail-copy" style="margin-top:0">큐브의 중심 조각은 절대 움직이지 않습니다. 흰색 중심을 위로, 초록색 중심을 앞으로 두고 큐브를 잡으면 면의 방향이 자연스럽게 정해집니다.</p>
      <ol class="detail-steps">
        <li>흰색 면이 위(U), 초록색 면이 앞(F)이 되도록 큐브를 잡습니다.</li>
        <li>전개도의 위·아래·왼쪽·오른쪽·앞·뒤 방향을 실제 면과 똑같이 맞춥니다.</li>
        <li>각 색상은 정확히 9개씩 입력되어야 합니다. 중심 조각은 자동으로 고정됩니다.</li>
        <li>입력이 끝나면 ‘내 큐브 풀기’를 누르고, 결과를 3D에서 한 수씩 확인하세요.</li>
      </ol>
      <div class="detail-actions">
        <button class="btn btn-primary btn-sm" data-action="close-modal">확인</button>
      </div>
    </div>
  `, { labelledBy: 'guideModalTitle' });
}

/* ------------------------------------------------------------------ */
/* celebration / toast                                                */
/* ------------------------------------------------------------------ */

let toastTimer = null;
function showToast(message, type = '') {
  const wrap = $('#toastWrap');
  if (!wrap) return;
  wrap.innerHTML = `<div class="toast ${type}">${escapeHtml(message)}</div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    const toast = $('.toast', wrap);
    if (toast) toast.classList.add('leaving');
    setTimeout(() => { if (wrap.contains(toast)) wrap.innerHTML = ''; }, 260);
  }, 2800);
}

function celebrate() {
  const colors = ['#c9ff45', '#6fe7ff', '#ff6b73', '#ffd84d', '#43dc9a', '#6c95ff'];
  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.35;
    const distance = 90 + Math.random() * 170;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    piece.style.setProperty('--dy', `${Math.sin(angle) * distance + 80}px`);
    piece.style.setProperty('--rot', `${Math.random() * 540 - 270}deg`);
    piece.style.left = `${48 + Math.random() * 4}%`;
    piece.style.top = `${40 + Math.random() * 8}%`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1200);
  }
  showToast('큐브 완성! 수고했어요.');
}

/* ------------------------------------------------------------------ */
/* tilt                                                               */
/* ------------------------------------------------------------------ */

function updateTiltButtons() {
  $$('[data-action="toggle-tilt"]').forEach((button) => {
    button.setAttribute('aria-pressed', String(state.tiltEnabled));
    button.title = state.tiltEnabled ? '기울기 시점 끄기' : '기울여서 보기';
  });
  const top = $('#tiltButton');
  if (top) {
    top.setAttribute('aria-pressed', String(state.tiltEnabled));
    top.title = state.tiltEnabled ? '기울기 시점 끄기' : '기울여서 보기';
  }
}

async function toggleTilt() {
  if (!state.tiltAvailable) {
    showToast('이 기기에서는 기울기 센서를 사용할 수 없어요.', 'error');
    return;
  }

  if (state.tiltEnabled) {
    state.tiltEnabled = false;
    if (state.tiltHandler) {
      window.removeEventListener('deviceorientation', state.tiltHandler);
      state.tiltHandler = null;
    }
    state.solveCube3D?.setTiltEnabled(false);
    state.myCube3D?.setTiltEnabled(false);
    updateTiltButtons();
    showToast('기울기 시점을 껐어요.');
    return;
  }

  try {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== 'granted') {
        showToast('동작 센서 권한이 필요해요. 설정에서 허용해 주세요.', 'error');
        return;
      }
    }
    state.tiltEnabled = true;
    state.tiltHandler = (event) => {
      state.solveCube3D?.applyOrientation(event.gamma || 0, event.beta || 0);
      state.myCube3D?.applyOrientation(event.gamma || 0, event.beta || 0);
    };
    window.addEventListener('deviceorientation', state.tiltHandler, { passive: true });
    state.solveCube3D?.setTiltEnabled(true);
    state.myCube3D?.setTiltEnabled(true);
    updateTiltButtons();
    showToast('기기를 기울여 큐브 시점을 움직여 보세요.');
  } catch (error) {
    console.error(error);
    showToast('동작 센서 권한을 요청하지 못했어요.', 'error');
  }
}

/* ------------------------------------------------------------------ */
/* actions                                                            */
/* ------------------------------------------------------------------ */

async function handleAction(action, element) {
  switch (action) {
    case 'toggle-tilt':
      await toggleTilt();
      break;
    case 'reset-view':
      state.solveCube3D?.resetView();
      state.myCube3D?.resetView();
      showToast('시점을 초기화했어요.');
      break;
    case 'toggle-fullscreen': {
      const stage = $('.stage-card');
      if (!stage) break;
      if (!document.fullscreenElement) {
        try {
          await stage.requestFullscreen?.();
          showToast('전체 화면에서는 ESC로 나올 수 있어요.');
        } catch {
          showToast('이 브라우저에서는 전체 화면을 지원하지 않아요.', 'error');
        }
      } else {
        await document.exitFullscreen?.();
      }
      break;
    }
    case 'scramble':
      await randomScramble();
      break;
    case 'undo':
      undoMove();
      break;
    case 'reset-cube':
      resetCube();
      break;
    case 'toggle-prime':
      state.prime = !state.prime;
      updatePrimeUI();
      break;
    case 'turn':
      turnFace(element.dataset.face);
      break;
    case 'solve-current':
      await solveCurrentCube();
      break;
    case 'play-solution':
      await playSolution();
      break;
    case 'step-solution':
      await stepSolution();
      break;
    case 'apply-solution-token':
      await applySolutionTo(Number(element.dataset.index));
      break;
    case 'copy-solution':
      copySolution();
      break;
    case 'select-color':
      state.myCube.selected = element.dataset.color;
      renderMyCubePalette();
      break;
    case 'paint-cell':
      paintCell(element.dataset.face, Number(element.dataset.index));
      break;
    case 'mycube-random': {
      const random = Cube.random();
      state.myCube.faces = facesFromString(random.asString());
      state.myCube.solution = null;
      state.myCube.status = 'idle';
      state.myCube.error = '';
      renderMyCubeNet();
      updateMyCubePreview();
      refreshMyCubeUI();
      showToast('랜덤 큐브 예시를 불러왔어요.');
      break;
    }
    case 'mycube-clear':
      state.myCube.faces = blankFaces();
      state.myCube.solution = null;
      state.myCube.status = 'idle';
      state.myCube.error = '';
      renderMyCubeNet();
      updateMyCubePreview();
      refreshMyCubeUI();
      showToast('입력을 모두 지웠어요.');
      break;
    case 'mycube-help':
      openInputGuide();
      break;
    case 'solve-mycube':
      await solveMyCube();
      break;
    case 'copy-mycube':
      copyMyCubeSolution();
      break;
    case 'mycube-to-3d':
      loadMyCubeInto3D();
      break;
    case 'learn-filter':
      state.learnFilter = element.dataset.filter;
      refreshLearnGrid();
      break;
    case 'open-alg':
      openAlgorithmModal(element.dataset.id);
      break;
    case 'demo-alg':
      await demoAlgorithm(element.dataset.id);
      break;
    case 'play-video':
      state.videoPlaying = true;
      renderVideosView();
      break;
    case 'select-video':
      state.selectedVideo = element.dataset.id;
      state.videoPlaying = true;
      renderVideosView();
      break;
    case 'open-video':
      state.selectedVideo = element.dataset.id;
      state.videoPlaying = false;
      navigate('videos');
      break;
    case 'close-modal':
      closeModal();
      break;
    default:
      break;
  }
}

function copyText(text, successMessage) {
  if (!text) return;
  navigator.clipboard?.writeText(text).then(
    () => showToast(successMessage),
    () => showToast('복사에 실패했어요. 직접 선택해 주세요.', 'error'),
  );
}

function copySolution() {
  if (!state.solution) {
    showToast('복사할 풀이가 없어요.');
    return;
  }
  copyText(state.solution.moves.join(' '), '풀이 순서를 복사했어요.');
}

function copyMyCubeSolution() {
  if (!state.myCube.solution) return;
  copyText(state.myCube.solution.moves.join(' '), '내 큐브 풀이를 복사했어요.');
}

async function demoAlgorithm(id) {
  const algorithm = getAlgorithm(id);
  if (!algorithm) return;
  if (algorithm.cube !== '3x3') {
    showToast('3D 재생은 3×3 공식에서만 지원해요.');
    return;
  }
  closeModal();
  navigate('solve');
  resetCube({ silent: true });
  await sleep(280);
  state.solution = {
    moves: splitMoves(algorithm.moves),
    index: 0,
    source: 'algorithm',
    title: algorithm.title,
  };
  state.solutionPlaying = false;
  renderSolution();
  showToast(`${algorithm.title} 공식을 재생합니다.`);
  await playSolution();
}

/* ------------------------------------------------------------------ */
/* global events                                                      */
/* ------------------------------------------------------------------ */

document.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.hasAttribute('data-modal-backdrop')) {
    closeModal();
    return;
  }
  const nav = event.target.closest('[data-nav]');
  if (nav) {
    event.preventDefault();
    navigate(nav.dataset.nav);
    return;
  }
  const actionEl = event.target.closest('[data-action]');
  if (actionEl) {
    event.preventDefault();
    handleAction(actionEl.dataset.action, actionEl);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if ($('#modalRoot')?.children.length) closeModal();
    return;
  }
  if (state.view !== 'solve' || $('#modalRoot')?.children.length) return;
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  const face = event.key.toUpperCase();
  if (['U', 'R', 'F', 'D', 'L', 'B'].includes(face) && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    state.prime = event.shiftKey;
    updatePrimeUI();
    turnFace(face);
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    state.playToken += 1;
    state.solutionPlaying = false;
  }
});

/* ------------------------------------------------------------------ */
/* boot                                                               */
/* ------------------------------------------------------------------ */

renderHome();
updateSolverUI();
const initialView = location.hash.replace('#', '') || 'home';
navigate(initialView, { push: false, scroll: false });
