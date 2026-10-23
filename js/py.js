// 파이썬 엔진 클라이언트: 워커를 띄우고, 시간 초과(무한 반복)면 워커를 새로 만든다.
let worker = null, readyP = null, seq = 0, status = 'loading';
const pending = new Map();
const listeners = new Set();
const setStatus = (s) => { status = s; listeners.forEach((f) => f(s)); };

function spawn() {
  setStatus('loading');
  worker = new Worker('js/worker.js');
  readyP = new Promise((res) => {
    worker.onmessage = (e) => {
      const m = e.data;
      if (m.type === 'ready') { setStatus('ready'); res(); }
      else if (m.type === 'result') { const p = pending.get(m.id); if (p) { pending.delete(m.id); p(m.res); } }
    };
    worker.onerror = () => { setStatus('error'); res(); };
  });
}

export const onStatus = (f) => { listeners.add(f); f(status); return () => listeners.delete(f); };
export const engineStatus = () => status;
export function startEngine() { if (!worker) spawn(); return readyP; }

function call(req, timeout) {
  startEngine();
  return new Promise((resolve) => {
    const id = ++seq;
    let done = false;
    const t = setTimeout(() => {
      if (done) return;
      done = true; pending.delete(id);
      try { worker.terminate(); } catch (e) { /* */ }
      worker = null; spawn();
      resolve({ ok: false, kind: 'timeout' });
    }, timeout);
    readyP.then(() => {
      if (done) return;
      pending.set(id, (res) => { if (done) return; done = true; clearTimeout(t); resolve(res); });
      worker.postMessage({ id, req });
    });
  });
}

// 처음 엔진을 불러오는 시간은 시간 제한에 넣지 않는다.
export async function runCode(code, stdin = [], timeout = 6000) {
  await startEngine();
  return call({ kind: 'run', code, stdin }, timeout);
}
export async function runTask(task, code, timeout = 7000) {
  await startEngine();
  return call({ kind: 'task', task, code }, timeout);
}
