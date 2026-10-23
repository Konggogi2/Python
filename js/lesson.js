// 레슨 진행기: 문제를 차례로 풀고, 틀리거나 포기한 문제는 뒤로 보내 다시 풀게 한다.
import { h, confetti } from './util.js';
import { mountQ, codeBlock } from './ex.js';
import { store, srsMark, srsTouch } from './store.js';

const PRAISE = ['잘했어요!', '정답!', '멋져요!', '좋아요, 계속!', '완벽해요!', '코딩 천재!'];
const SOFT = ['괜찮아요, 다시 나와요', '아깝다! 해설을 읽어 봐요', '실수는 최고의 선생님이에요'];
const rnd = (a) => a[Math.floor(Math.random() * a.length)];
const XP = { mc: 4, predict: 5, blank: 5, parsons: 6, bug: 6, code: 14, learn: 0 };

// opts: { questions, onExit(), onFinish(result), xpBase }
export function runLesson(root, opts) {
  const total = opts.questions.length;
  const queue = opts.questions.slice();
  let done = 0, graded = 0, firstOk = 0, xpGain = 0;
  const attempts = new Map();
  const counted = new Set();
  let comp = null, current = null, state = 'q', busy = false;
  root.innerHTML = '';
  const bar = h('i'); bar.style.width = '0%';
  const hd = h('div', { class: 'lhd' }, h('button', { class: 'x', 'aria-label': '나가기', onclick: () => { if (confirm('레슨을 그만둘까요? 이번 진행은 저장되지 않아요.')) opts.onExit(); } }, '✕'), h('div', { class: 'pbar' }, bar));
  const body = h('div', { class: 'lbody' });
  const fb = h('div', { class: 'fb idle' });
  const btn = h('button', { class: 'btn pri' }, '확인');
  fb.append(btn);
  root.append(hd, body, fb);
  const progress = () => { bar.style.width = Math.min(100, Math.round((done / total) * 100)) + '%'; };

  function next() {
    if (!queue.length) { finish(); return; }
    current = queue.shift();
    window.__q = current;
    state = 'q'; busy = false;
    body.innerHTML = ''; body.scrollTop = 0;
    fb.className = 'fb idle'; fb.innerHTML = ''; fb.append(btn);
    const hooks = { ready: (b) => { if (state === 'q' && !busy) btn.disabled = !b; }, giveup: () => giveUp() };
    comp = mountQ(current, hooks);
    body.append(comp.el);
    if (comp.teach) { btn.disabled = false; btn.textContent = '계속'; btn.className = 'btn teal'; btn.onclick = () => { if (current.key) srsTouch(current.key); done++; progress(); next(); }; }
    else { btn.disabled = current.t !== 'code'; btn.textContent = current.t === 'code' ? '제출하기' : '확인'; btn.className = 'btn pri'; btn.onclick = check; }
  }

  async function check() {
    if (state !== 'q' || busy) return;
    busy = true; btn.disabled = true; const old = btn.textContent; btn.textContent = '채점 중…';
    let res;
    try { res = await comp.check(); } catch (e) { res = { correct: false, retry: true, detail: h('div', { class: 'out err' }, '채점 중 문제가 생겼어요: ' + e) }; }
    busy = false; btn.textContent = old;
    settle(res);
  }

  function showDetail(node) {
    const old = body.querySelector('.detail'); if (old) old.remove();
    if (node) { const w = h('div', { class: 'detail' }, node); body.append(w); setTimeout(() => w.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 50); }
  }

  function settle(res) {
    if (res.retry) {
      attempts.set(current, (attempts.get(current) || 0) + 1);
      state = 'fb';
      showDetail(res.detail);
      fb.className = 'fb no'; fb.innerHTML = '';
      fb.append(h('div', { class: 'tt' }, '아직이에요! 다시 도전해 봐요'), h('div', { class: 'why' }, '결과를 살펴보고 코드를 고친 뒤 다시 제출하세요.'));
      fb.append(h('button', { class: 'btn bad', onclick: () => { state = 'q'; fb.className = 'fb idle'; fb.innerHTML = ''; btn.disabled = false; fb.append(btn); } }, '코드 고치러 가기'));
      return;
    }
    state = 'fb';
    const q = current;
    const failedBefore = attempts.get(q) || 0;
    const first = !q._retried;
    const ok = res.correct;
    if (!counted.has(q)) { counted.add(q); graded++; if (ok && !failedBefore && first) firstOk++; }
    if (q.key) srsMark(q.key, ok && !failedBefore);
    if (ok) { const hintPenalty = Math.min(res.hints || 0, 3); const g = Math.max(2, (XP[q.t] || 4) - hintPenalty * 2 - failedBefore * 2); if (first) xpGain += g; }
    else { q._retried = true; queue.push(q); }
    done++; progress();
    fb.className = 'fb ' + (ok ? 'ok' : 'no'); fb.innerHTML = '';
    fb.append(h('div', { class: 'tt' }, ok ? rnd(PRAISE) : rnd(SOFT)));
    if (!ok && (res.ans || res.ansCode || res.solution)) {
      if (res.ans) fb.append(h('div', { class: 'ans' }, ['정답: ', h('b', null, res.ans)]));
      const c = res.ansCode || res.solution;
      if (c) fb.append(h('div', { style: { maxHeight: '28vh', overflow: 'auto' } }, codeBlock(c)));
    } else if (ok && res.ansCode && q.t === 'blank') {
      fb.append(h('div', { style: { maxHeight: '22vh', overflow: 'auto' } }, codeBlock(res.ansCode)));
    }
    if (res.why) fb.append(h('div', { class: 'why', html: res.why }));
    fb.append(h('button', { class: 'btn ' + (ok ? 'pri' : 'bad'), onclick: next }, '계속'));
  }

  function giveUp() {
    if (state === 'done') return;
    settle({ correct: false, solution: comp.solution, why: '정답을 보고 흐름을 익혀 두세요. 이 문제는 나중에 다시 나와요.', hints: 0 });
  }

  function finish() {
    const acc = graded ? firstOk / graded : 1;
    const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
    const xp = (opts.xpBase || 10) + xpGain;
    store.addXp(xp);
    if (stars >= 2) confetti();
    opts.onFinish({ acc, stars, xp, graded, firstOk });
  }

  progress();
  next();
}
