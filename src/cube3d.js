import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { COLORS } from './data.js';

const BODY_GEO = new RoundedBoxGeometry(0.97, 0.97, 0.97, 5, 0.085);
const BODY_MAT = new THREE.MeshStandardMaterial({
  color: 0x0b0d13,
  roughness: 0.32,
  metalness: 0.18,
});
const STICKER_GEO = makeRoundedRectGeometry(0.835, 0.835, 0.12);

const FACE_OFFSETS = { U: 0, R: 9, F: 18, D: 27, L: 36, B: 45 };
const FACE_NORMALS = {
  U: [0, 1, 0],
  D: [0, -1, 0],
  R: [1, 0, 0],
  L: [-1, 0, 0],
  F: [0, 0, 1],
  B: [0, 0, -1],
};
const FACE_ROTATIONS = {
  U: [-Math.PI / 2, 0, 0],
  D: [Math.PI / 2, 0, 0],
  R: [0, Math.PI / 2, 0],
  L: [0, -Math.PI / 2, 0],
  F: [0, 0, 0],
  B: [0, Math.PI, 0],
};
const MOVE_AXIS = { U: 'y', D: 'y', R: 'x', L: 'x', F: 'z', B: 'z' };
const MOVE_LAYER = { U: 1, D: -1, R: 1, L: -1, F: 1, B: -1 };
const MOVE_SIGN = { U: -1, D: 1, R: -1, L: 1, F: -1, B: 1 };

function makeRoundedRectGeometry(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return new THREE.ShapeGeometry(shape, 8);
}

function faceletIndex(face, x, y, z) {
  let row;
  let col;
  if (face === 'U') {
    row = z + 1;
    col = x + 1;
  } else if (face === 'D') {
    row = 1 - z;
    col = x + 1;
  } else if (face === 'F') {
    row = 1 - y;
    col = x + 1;
  } else if (face === 'R') {
    row = 1 - y;
    col = 1 - z;
  } else if (face === 'L') {
    row = 1 - y;
    col = z + 1;
  } else {
    row = 1 - y;
    col = 1 - x;
  }
  return FACE_OFFSETS[face] + row * 3 + col;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function makeShadowTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(0,0,0,0.55)');
  gradient.addColorStop(0.35, 'rgba(0,0,0,0.32)');
  gradient.addColorStop(0.7, 'rgba(0,0,0,0.08)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export class Cube3D {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.facelets = options.facelets || 'U'.repeat(9) + 'R'.repeat(9) + 'F'.repeat(9) + 'D'.repeat(9) + 'L'.repeat(9) + 'B'.repeat(9);
    this.cubies = [];
    this.active = true;
    this.destroyed = false;
    this.animating = false;
    this.animationToken = 0;
    this.tiltEnabled = false;
    this.tiltYaw = 0;
    this.tiltPitch = 0;
    this.targetYaw = options.yaw ?? -0.6;
    this.targetPitch = options.pitch ?? -0.02;
    this.dragging = false;
    this.lastPointer = null;
    this.velocity = { x: 0, y: 0 };
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    this.camera.position.set(0, 3.5, 8.45);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.domElement.setAttribute('aria-label', '인터랙티브 3D 큐브');
    this.container.appendChild(this.renderer.domElement);

    this.world = new THREE.Group();
    this.world.rotation.order = 'YXZ';
    this.world.rotation.set(this.targetPitch, this.targetYaw, 0);
    this.scene.add(this.world);

    this.cubeGroup = new THREE.Group();
    this.world.add(this.cubeGroup);

    this.addLights();
    this.addShadow();
    this.build(this.facelets);
    this.bindPointer();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.resize();
    this.animate = this.animate.bind(this);
    this.frame = requestAnimationFrame(this.animate);
  }

  addLights() {
    const hemi = new THREE.HemisphereLight(0xf5f7ff, 0x11131a, 1.55);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 3.1);
    key.position.set(5, 8, 7);
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0x7fe9ff, 1.5);
    rim.position.set(-6, 2, -5);
    this.scene.add(rim);

    const warm = new THREE.PointLight(0xffb86b, 15, 16, 2);
    warm.position.set(4, -3, 4);
    this.scene.add(warm);

    const green = new THREE.PointLight(0xc9ff45, 10, 15, 2);
    green.position.set(-4, 4, 2);
    this.scene.add(green);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.26));
  }

  addShadow() {
    const material = new THREE.MeshBasicMaterial({
      map: makeShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.7,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 4.8), material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -2.38;
    this.shadow = mesh;
    this.scene.add(mesh);
  }

  resize() {
    if (this.destroyed) return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    if (this.shadow) this.shadow.position.y = width < 420 ? -2.05 : -2.32;
  }

  clear() {
    for (const child of [...this.cubeGroup.children]) {
      this.cubeGroup.remove(child);
    }
    this.cubies = [];
  }

  disposeStickers() {
    for (const cubie of this.cubies) {
      for (const sticker of cubie.stickers) {
        sticker.material.dispose();
      }
    }
  }

  build(facelets) {
    this.disposeStickers();
    this.clear();
    this.facelets = facelets;
    const coords = [-1, 0, 1];

    for (const x of coords) {
      for (const y of coords) {
        for (const z of coords) {
          if (x === 0 && y === 0 && z === 0) continue;
          const group = new THREE.Group();
          group.position.set(x * 1.015, y * 1.015, z * 1.015);
          const body = new THREE.Mesh(BODY_GEO, BODY_MAT);
          body.castShadow = false;
          group.add(body);

          const stickers = [];
          for (const [face, normal] of Object.entries(FACE_NORMALS)) {
            const [nx, ny, nz] = normal;
            if (nx !== 0 && x !== nx) continue;
            if (ny !== 0 && y !== ny) continue;
            if (nz !== 0 && z !== nz) continue;

            const index = faceletIndex(face, x, y, z);
            const letter = facelets[index] || 'X';
            const palette = COLORS[letter];
            const material = new THREE.MeshStandardMaterial({
              color: palette ? palette.hex : '#687083',
              roughness: 0.43,
              metalness: 0.04,
              emissive: palette ? new THREE.Color(palette.hex) : new THREE.Color('#262c38'),
              emissiveIntensity: letter === 'X' ? 0.05 : 0.028,
            });
            const sticker = new THREE.Mesh(STICKER_GEO, material);
            sticker.position.set(nx * 0.492, ny * 0.492, nz * 0.492);
            sticker.rotation.set(...FACE_ROTATIONS[face]);
            group.add(sticker);
            stickers.push(sticker);
          }

          this.cubeGroup.add(group);
          this.cubies.push({ group, x, y, z, stickers });
        }
      }
    }
  }

  setState(facelets) {
    if (facelets === this.facelets) return;
    this.build(facelets);
  }

  setActive(active) {
    this.active = active;
  }

  bindPointer() {
    const el = this.renderer.domElement;
    this.onPointerDown = (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      this.dragging = true;
      this.lastPointer = { x: event.clientX, y: event.clientY };
      this.velocity = { x: 0, y: 0 };
      el.setPointerCapture?.(event.pointerId);
      this.options.onInteract?.();
    };
    this.onPointerMove = (event) => {
      if (!this.dragging || !this.lastPointer) return;
      const dx = event.clientX - this.lastPointer.x;
      const dy = event.clientY - this.lastPointer.y;
      this.lastPointer = { x: event.clientX, y: event.clientY };
      this.targetYaw += dx * 0.008;
      this.targetPitch = THREE.MathUtils.clamp(this.targetPitch + dy * 0.006, -0.72, 0.72);
      this.velocity = { x: dx * 0.0008, y: dy * 0.0006 };
    };
    this.onPointerUp = () => {
      this.dragging = false;
      this.lastPointer = null;
    };

    el.addEventListener('pointerdown', this.onPointerDown);
    el.addEventListener('pointermove', this.onPointerMove);
    el.addEventListener('pointerup', this.onPointerUp);
    el.addEventListener('pointercancel', this.onPointerUp);
    el.addEventListener('pointerleave', this.onPointerUp);
  }

  resetView() {
    this.targetYaw = this.options.yaw ?? -0.6;
    this.targetPitch = this.options.pitch ?? -0.02;
    this.velocity = { x: 0, y: 0 };
  }

  setTiltEnabled(enabled) {
    this.tiltEnabled = enabled;
    if (!enabled) {
      this.tiltYaw = 0;
      this.tiltPitch = 0;
    }
  }

  applyOrientation(gamma = 0, beta = 0) {
    if (!this.tiltEnabled) return;
    this.tiltYaw = THREE.MathUtils.clamp(gamma * 0.014, -0.5, 0.5);
    this.tiltPitch = THREE.MathUtils.clamp((beta - 38) * 0.007, -0.35, 0.35);
  }

  async animateMove(move, nextFacelets, duration = 260) {
    if (this.destroyed) return;
    const face = move[0];
    const axis = MOVE_AXIS[face];
    const layer = MOVE_LAYER[face];
    if (!axis) {
      this.setState(nextFacelets);
      return;
    }
    const turns = move.includes('2') ? 2 : 1;
    const prime = move.includes("'");
    const angle = MOVE_SIGN[face] * (Math.PI / 2) * turns * (prime ? -1 : 1);
    const token = ++this.animationToken;

    this.animating = true;
    const pivot = new THREE.Group();
    this.cubeGroup.add(pivot);
    const layerIndex = axis === 'x' ? 0 : axis === 'y' ? 1 : 2;
    for (const cubie of this.cubies) {
      const coordinate = [cubie.x, cubie.y, cubie.z][layerIndex];
      if (coordinate === layer) pivot.attach(cubie.group);
    }

    const start = performance.now();
    await new Promise((resolve) => {
      const step = (now) => {
        if (this.destroyed) {
          resolve();
          return;
        }
        const t = Math.min(1, (now - start) / duration);
        pivot.rotation[axis] = angle * easeInOutCubic(t);
        if (t < 1) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });

    this.animating = false;
    if (token !== this.animationToken || this.destroyed) return;
    this.build(nextFacelets);
  }

  cancelAnimations() {
    this.animationToken += 1;
    this.animating = false;
    this.build(this.facelets);
  }

  animate() {
    if (this.destroyed) return;
    this.frame = requestAnimationFrame(this.animate);
    if (!this.active) return;

    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (!this.dragging && Math.abs(this.velocity.x) + Math.abs(this.velocity.y) > 0.00002) {
      this.targetYaw += this.velocity.x * 16;
      this.targetPitch = THREE.MathUtils.clamp(this.targetPitch + this.velocity.y * 16, -0.72, 0.72);
      this.velocity.x *= 0.93;
      this.velocity.y *= 0.93;
    }

    const desiredYaw = this.targetYaw + this.tiltYaw;
    const desiredPitch = this.targetPitch + this.tiltPitch;
    this.world.rotation.y += (desiredYaw - this.world.rotation.y) * Math.min(1, dt * 11);
    this.world.rotation.x += (desiredPitch - this.world.rotation.x) * Math.min(1, dt * 11);

    const float = this.options.float ? Math.sin(performance.now() * 0.0012) * 0.035 : 0;
    this.cubeGroup.position.y = float;

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    el.removeEventListener('pointermove', this.onPointerMove);
    el.removeEventListener('pointerup', this.onPointerUp);
    el.removeEventListener('pointercancel', this.onPointerUp);
    el.removeEventListener('pointerleave', this.onPointerUp);
    this.disposeStickers();
    this.shadow?.material.map?.dispose();
    this.shadow?.material.dispose();
    this.shadow?.geometry.dispose();
    this.renderer.dispose();
    el.remove();
  }
}
