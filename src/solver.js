export class SolverClient {
  constructor() {
    this.ready = false;
    this.failed = false;
    this.pending = new Map();
    this.nextId = 1;
    this.statusListeners = new Set();
    this.readyPromise = new Promise((resolve, reject) => {
      this.resolveReady = resolve;
      this.rejectReady = reject;
    });
    this.readyPromise.catch(() => {});

    try {
      this.worker = new Worker(new URL('./solver.worker.js', import.meta.url), { type: 'module' });
      this.worker.onmessage = (event) => this.handleMessage(event.data);
      this.worker.onerror = (event) => {
        this.failed = true;
        this.emitStatus('error');
        const error = new Error(event.message || '솔버 워커를 시작할 수 없습니다.');
        this.rejectReady?.(error);
        for (const item of this.pending.values()) item.reject(error);
        this.pending.clear();
      };
      this.worker.postMessage({ type: 'init' });
    } catch (error) {
      this.failed = true;
      this.emitStatus('error');
      this.rejectReady?.(error);
    }
  }

  handleMessage(data) {
    if (data.type === 'ready') {
      this.ready = true;
      this.emitStatus('ready');
      this.resolveReady?.();
      return;
    }
    if (data.type === 'init-error') {
      this.failed = true;
      this.emitStatus('error');
      this.rejectReady?.(new Error(data.message));
      return;
    }
    const pending = this.pending.get(data.id);
    if (!pending) return;
    this.pending.delete(data.id);
    clearTimeout(pending.timer);
    if (data.type === 'solution') pending.resolve(data.solution);
    else pending.reject(new Error(data.message || '풀이를 계산하지 못했습니다.'));
  }

  onStatus(listener) {
    this.statusListeners.add(listener);
    if (this.ready) listener('ready');
    else if (this.failed) listener('error');
    else listener('loading');
    return () => this.statusListeners.delete(listener);
  }

  emitStatus(status) {
    for (const listener of this.statusListeners) listener(status);
  }

  async solve(facelets) {
    await this.readyPromise;
    if (this.failed) throw new Error('솔버를 사용할 수 없습니다.');
    const id = this.nextId++;
    this.emitStatus('solving');
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        this.emitStatus('ready');
        reject(new Error('풀이 계산 시간이 초과되었습니다.'));
      }, 30000);
      this.pending.set(id, {
        resolve: (value) => {
          this.emitStatus('ready');
          resolve(value);
        },
        reject: (error) => {
          this.emitStatus('ready');
          reject(error);
        },
        timer,
      });
      this.worker.postMessage({ type: 'solve', id, facelets });
    });
  }

  destroy() {
    this.worker?.terminate();
  }
}
