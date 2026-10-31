export const FACE_META = {
  R: { axis: 'x', layer: 1, direction: -1, color: '#ff4d42', label: '오른쪽' },
  L: { axis: 'x', layer: -1, direction: 1, color: '#ff922e', label: '왼쪽' },
  U: { axis: 'y', layer: 1, direction: -1, color: '#ffd21f', label: '위' },
  D: { axis: 'y', layer: -1, direction: 1, color: '#f4f1ea', label: '아래' },
  F: { axis: 'z', layer: 1, direction: -1, color: '#2fbf71', label: '앞' },
  B: { axis: 'z', layer: -1, direction: 1, color: '#3b82f6', label: '뒤' },
  M: { axis: 'x', layer: 0, direction: 1, color: '#b9a5ff', label: '가운데' },
  E: { axis: 'y', layer: 0, direction: 1, color: '#b9a5ff', label: '가운데' },
  S: { axis: 'z', layer: 0, direction: -1, color: '#b9a5ff', label: '가운데' },
}

const FACE_KEYS = new Set(Object.keys(FACE_META))

export function parseMove(raw) {
  const text = String(raw).trim()
  const match = text.match(/^([RLUDFBMES])(['’2]?)$/i)
  if (!match) throw new Error(`Unknown cube move: ${raw}`)
  const face = match[1].toUpperCase()
  if (!FACE_KEYS.has(face)) throw new Error(`Unknown cube move: ${raw}`)
  const meta = FACE_META[face]
  const suffix = match[2]
  const prime = suffix === "'" || suffix === '’'
  const double = suffix === '2'
  return {
    face,
    suffix: double ? '2' : prime ? "'" : '',
    turns: double ? 2 : 1,
    prime,
    axis: meta.axis,
    layer: meta.layer,
    angle: meta.direction * (double ? Math.PI : Math.PI / 2) * (prime ? -1 : 1),
    color: meta.color,
  }
}

export function parseSequence(sequence) {
  const list = Array.isArray(sequence) ? sequence : sequence.trim().split(/\s+/)
  return list.flatMap((token) => {
    // Expand a compact sequence such as RUR'U' only when every token is a turn.
    const compact = token.match(/[RLUDFBMES](?:['’2]?)/gi)
    if (compact && compact.join('') === token && compact.length > 1) {
      return compact.map(parseMove)
    }
    return [parseMove(token)]
  })
}

export function inverseMove(move) {
  return {
    ...move,
    suffix: move.suffix === '2' ? '2' : move.suffix === "'" ? '' : "'",
    prime: move.suffix === '2' ? false : !move.prime,
    angle: -move.angle,
  }
}

export function moveLabel(move) {
  return `${move.face}${move.suffix === "'" ? '′' : move.suffix}`
}

export const algorithms = [
  {
    id: 'right-trigger',
    title: '오른손 트리거',
    english: 'RIGHT HAND TRIGGER',
    category: '기본',
    level: '입문',
    moves: ["R", "U", "R'", "U'"],
    summary: '큐브 리듬의 시작',
    detail:
      '오른쪽 면을 올리고, 윗면을 돌리고, 다시 내리는 4수 리듬. F2L과 대부분의 스피드 공식이 이 움직임 위에 만들어집니다.',
    tip: '손목은 고정하고 검지로 U를 튕기듯 돌려보세요.',
    accent: '#d9ff5a',
  },
  {
    id: 'left-trigger',
    title: '왼손 트리거',
    english: 'LEFT HAND TRIGGER',
    category: '기본',
    level: '입문',
    moves: ["L'", "U'", "L", "U"],
    summary: '양손 균형을 만드는 대칭 리듬',
    detail:
      '오른손 트리거의 거울상 공식. 왼손 검지로 U′를 밀어 넣으며 양손을 번갈아 쓰는 감각을 익혀보세요.',
    tip: 'R 트리거와 번갈아 반복하면 손가락 워밍업이 됩니다.',
    accent: '#ffb35c',
  },
  {
    id: 'yellow-cross',
    title: '노란 십자',
    english: 'YELLOW CROSS',
    category: 'OLL',
    level: '초급',
    moves: ['F', 'R', 'U', "R'", "U'", "F'"],
    summary: '마지막 층 십자를 한 번에',
    detail:
      '마지막 층의 노란 모서리를 위로 끌어올리는 6수 공식. 십자가 선 모양일 때 한 번, L자 모양일 때 두 번 적용합니다.',
    tip: 'F와 F′는 앞면 전체를, 나머지는 오른손 트리거로 이어갑니다.',
    accent: '#ffe16b',
  },
  {
    id: 'sune',
    title: '썬',
    english: 'SUNE',
    category: 'OLL',
    level: '중급',
    moves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
    summary: '노란 면을 완성하는 대표 OLL',
    detail:
      '코너 하나만 노란색이 위를 보고 있을 때 쓰는 7수 OLL. 같은 공식을 두 번 돌리면 여러 코너 패턴이 정리됩니다.',
    tip: 'U2는 윗면을 두 번, 즉 180° 돌립니다.',
    accent: '#7dde92',
  },
  {
    id: 'corner-cycle',
    title: '코너 3순환',
    english: 'CORNER CYCLE',
    category: 'PLL',
    level: '중급',
    moves: ['U', 'R', "U'", "L'", 'U', "R'", "U'", 'L'],
    summary: '마지막 층 코너를 자리로',
    detail:
      '세 코너를 시계 방향으로 순환시키는 A 퍼뮤트 계열 공식. 마지막 층 코너의 위치가 하나만 맞을 때 사용합니다.',
    tip: 'U와 U′의 방향을 정확히 유지하면 코너가 한 칸씩 이동합니다.',
    accent: '#9bb8ff',
  },
  {
    id: 't-perm',
    title: 'T 퍼뮤트',
    english: 'T PERM',
    category: 'PLL',
    level: '고급',
    moves: ['R', 'U', "R'", "U'", "R'", 'F', 'R2', "U'", "R'", "U'", 'R', 'U', "R'", "F'"],
    summary: '두 모서리를 맞바꾸는 PLL',
    detail:
      '마지막 층의 인접한 두 모서리를 교환하는 14수 PLL. 앞면과 오른면을 넘나드는 손목 전환이 핵심입니다.',
    tip: 'R2는 오른쪽 면을 180° 한 번에 돌립니다.',
    accent: '#ff8f82',
  },
  {
    id: 'h-perm',
    title: 'H 퍼뮤트',
    english: 'H PERM',
    category: 'PLL',
    level: '고급',
    moves: ['M2', 'U', 'M2', 'U2', 'M2', 'U', 'M2'],
    summary: '네 모서리를 한 번에 교환',
    detail:
      '가운데 층을 두 칸씩 움직여 네 모서리를 서로 맞바꾸는 대칭 PLL. M2는 오른면과 왼면 사이의 가운데 층을 180° 돌립니다.',
    tip: 'M은 L 방향, 즉 왼쪽 면과 같은 방향으로 돌아갑니다.',
    accent: '#c8b6ff',
  },
]

export const categories = ['전체', '기본', 'OLL', 'PLL', '고급']

export function formatSequence(moves) {
  return moves.join(' ')
}
