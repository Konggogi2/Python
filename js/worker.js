// 파이썬 실행 워커 (Pyodide). 메인 스레드가 멈추지 않도록 따로 돌린다.
importScripts('../pyodide/pyodide.js');
let py = null;
const ready = (async () => {
  py = await loadPyodide({ indexURL: new URL('../pyodide/', self.location.href).href });
  const src = await (await fetch(new URL('harness.py', self.location.href).href)).text();
  py.FS.writeFile('/harness.py', src);
  py.runPython('import sys\nsys.path.insert(0, "/")\nimport json, harness');
  postMessage({ type: 'ready' });
})();

self.onmessage = async (e) => {
  const { id, req } = e.data;
  try {
    await ready;
    py.globals.set('_req_json', JSON.stringify(req));
    const out = py.runPython('json.dumps(harness.handle(json.loads(_req_json)), ensure_ascii=False)');
    postMessage({ type: 'result', id, res: JSON.parse(out) });
  } catch (err) {
    postMessage({ type: 'result', id, res: { ok: false, kind: 'engine', msg: String(err) } });
  }
};
