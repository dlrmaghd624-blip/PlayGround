# CUBE LAB

손끝으로 직접 돌리는 3×3 큐브 스튜디오. Three.js로 만든 3D 큐브를 터치로 조작하고, 기본 트리거부터 OLL·PLL까지 7가지 공식을 골라 바로 재생할 수 있습니다.

## 기능

- **직접 조작** — 큐브 면을 드래그하면 손가락을 따라 한 줄이 미리 회전하고, 놓으면 가장 가까운 90° 위치로 정렬됩니다.
- **시점 조작** — 배경을 드래그해 카메라를 회전하고, 두 손가락 핀치나 마우스 휠로 확대·축소합니다.
- **공식 라이브러리** — 기본 2개, OLL 2개, PLL 3개(고급 1개 포함). 카테고리 필터, 카드 펼치기, 현재 무브 표시, 진행률, 재생 중지를 지원합니다.
- **되돌리기 · 섞기 · 초기화** — 공식 재생과 직접 조작 모두 되돌릴 수 있습니다.
- **재생 속도** — 1×, 1.5×, 2×, 3×로 전환합니다.
- **기울기 모드** — 선택적으로 기기 기울기로 시점을 움직입니다. iOS 13+에서는 버튼을 누를 때 `DeviceMotionEvent.requestPermission()`으로 센서 권한을 요청합니다.
- **반응형 UI** — 데스크톱, 태블릿 가로·세로, 휴대폰 세로·가로 레이아웃과 모션 감소 설정을 지원합니다.
- **한국어 UI** — 공식 이름, 설명, 팁, 조작 가이드가 모두 한국어입니다.

## 시작하기

Node.js 20.19+ 또는 22.12+가 필요합니다.

```bash
npm install
npm run dev
```

개발 서버가 출력하는 주소(기본 `http://localhost:5173`)를 엽니다. 프로덕션 빌드는 다음과 같습니다.

```bash
npm run build
npm run preview
```

> 기울기 센서는 보안 컨텍스트에서만 동작합니다. `localhost` 또는 HTTPS로 접속하세요. iOS Safari에서는 반드시 화면의 **기울기** 버튼을 눌러 권한을 허용해야 합니다.

## 조작법

| 동작 | 결과 |
| --- | --- |
| 큐브 면 드래그 | 닿은 면의 한 줄 회전 (미리보기 후 90° 스냅) |
| 큐브 바깥 드래그 | 카메라 회전 |
| 두 손가락 핀치 / 휠 | 확대·축소 |
| 공식 카드의 **재생** | 공식을 순서대로 적용 |
| **되돌리기** | 마지막 무브 취소 |
| **섞기** | 무작위 20수 적용 |
| **초기화** | 완성 상태로 복원 |

표기법은 `R`(오른쪽 면 시계 방향 90°), `R′`(반시계), `R2`(180°), `M`(가운데 층)을 따릅니다.

## 공식

| 공식 | 분류 | 무브 |
| --- | --- | --- |
| 오른손 트리거 | 기본 | `R U R' U'` |
| 왼손 트리거 | 기본 | `L' U' L U` |
| 노란 십자 | OLL | `F R U R' U' F'` |
| 썬 | OLL | `R U R' U R U2 R'` |
| 코너 3순환 | PLL | `U R U' L' U R' U' L` |
| T 퍼뮤트 | PLL | `R U R' U' R' F R2 U' R' U' R U R' F'` |
| H 퍼뮤트 | PLL (고급) | `M2 U M2 U2 M2 U M2` |

## 프로젝트 구조

```text
index.html            앱 셸, 컨트롤, 공식 패널, 가이드 다이얼로그
src/main.js           Three.js 씬, 터치 조작, 재생/기록, 센서 권한, UI 연결
src/cube.js           큐비·스티커 생성, 레이어 캡처·회전 애니메이션, 리셋
src/algorithms.js     면 메타데이터, 무브 파서, 공식 데이터
src/style.css         반응형 비주얼 시스템
test/                 무브 파서·공식 데이터 단위 테스트
```

## 테스트

```bash
npm test
```

`node --test`로 다음을 검증합니다.

- 기본·프라임·유니코드 프라임·180°·슬라이스 무브 파싱
- 공백 표기와 `RUR'U'` 같은 압축 표기 확장
- 잘못된 표기 거부와 역무브 왕복
- 라이브러리의 모든 공식이 유효한 무브로 파싱되는지

## 기술 스택

- [Vite](https://vite.dev/) 7
- [Three.js](https://threejs.org/) 0.187
- 바닐라 JavaScript, CSS, HTML
- Node.js 내장 테스트 러너

---

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/dlrmaghd624-blip/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/dlrmaghd624-blip/PlayGround)

- 🎮 [Open the project](https://omgithub.com/dlrmaghd624-blip/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=dlrmaghd624-blip%2FPlayGround).
- 💻 [Explore the source](https://github.com/dlrmaghd624-blip/PlayGround).
- 🛠️ [Check build runs](https://github.com/dlrmaghd624-blip/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/dlrmaghd624-blip/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/dlrmaghd624-blip).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->
