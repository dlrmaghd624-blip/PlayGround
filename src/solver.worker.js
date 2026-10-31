import Cube from 'cubejs';

let ready = false;
let initializing = false;

function initialize() {
  if (ready || initializing) return;
  initializing = true;
  try {
    Cube.initSolver();
    ready = true;
    self.postMessage({ type: 'ready' });
  } catch (error) {
    self.postMessage({ type: 'init-error', message: error?.message || String(error) });
  } finally {
    initializing = false;
  }
}

self.onmessage = (event) => {
  const data = event.data || {};
  if (data.type === 'init') {
    initialize();
    return;
  }

  if (data.type === 'solve') {
    if (!ready) {
      self.postMessage({ type: 'error', id: data.id, message: '솔버가 아직 준비되지 않았습니다.' });
      return;
    }
    try {
      const cube = Cube.fromString(data.facelets);
      const solution = cube.solve();
      self.postMessage({ type: 'solution', id: data.id, solution: solution || '' });
    } catch (error) {
      self.postMessage({ type: 'error', id: data.id, message: error?.message || String(error) });
    }
  }
};

initialize();
