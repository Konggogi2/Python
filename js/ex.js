// 문제 유형별 화면. 각 함수는 { el, check()[async 가능], noCheck?, teach? } 를 돌려준다.
import { h, shuffle } from './util.js';
import { codeHtml } from './highlight.js';
import { createEditor } from './editor.js';
import { runCode, runTask, onStatus } from './py.js';
import { store } from './store.js';

export const ERR_TIPS = {
  SyntaxError: '문법 오류예요. 괄호·따옴표가 짝이 맞는지, 줄 끝의 콜론(:)이 빠지지 않았는지 확인해 보세요.',
  IndentationError: '들여쓰기(줄 앞 공백)가 맞지 않아요. 같은 블록은 같은 칸 수로 맞춰 주세요.',
  TabError: '들여쓰기에 탭과 공백이 섞였어요. 공백 4칸으로 맞춰 주세요.',
  NameError: '정의하지 않은 이름을 썼어요. 철자와 대소문자를 확인하고, 변수를 먼저 만들었는지 보세요.',
  TypeError: '맞지 않는 자료형끼리 연산했어요. (예: 문자열 + 숫자) 자료형을 확인해 보세요.',
  ValueError: '값의 형태가 맞지 않아요. (예: 숫자가 아닌 글자를 int()로 바꾸려 함)',
  ZeroDivisionError: '0으로 나눌 수 없어요.',
  IndexError: '리스트·문자열의 범위를 벗어난 번호를 썼어요. 번호는 0부터 시작해요.',
  KeyError: '딕셔너리에 없는 키를 찾았어요.',
  AttributeError: '그 값에는 없는 기능(메서드·속성)을 불렀어요. 철자와 자료형을 확인해 보세요.',
  FileNotFoundError: '파일을 찾을 수 없어요. 파일 이름과 경로를 확인해 보세요.',
  RecursionError: '함수가 자기 자신을 끝없이 불러요. 멈추는 조건이 있는지 확인해 보세요.',
  EOFError: 'input()이 읽을 값이 부족해요. 실행 칸 아래의 “입력값”에 한 줄씩 적어 주세요.',
  ModuleNotFoundError: '불러올 수 없는 모듈이에요. 이름을 확인해 보세요.',
  UnboundLocalError: '함수 안에서 값을 만들기 전에 변수를 썼어요.',
  AssertionError: '검사 조건이 맞지 않아요.',
};

export const codeBlock = (code, opts) => h('div', { class: 'code', html: codeHtml(code, opts) });

export function errBox(err) {
  const tip = ERR_TIPS[err.type] || '오류가 났어요. 메시지를 천천히 읽어 보세요.';
  return h('div', null,
    h('div', { class: 'out err' }, h('span', { class: 'lab' }, '오류'), `${err.type}: ${err.msg}${err.line ? `  (${err.line}번째 줄)` : ''}`),
    h('div', { class: 'err-tip' }, '💡 ' + tip));
}

export function outBox(res) {
  if (res.kind === 'timeout') return h('div', { class: 'out err' }, '시간이 너무 오래 걸려서 멈췄어요. 끝나지 않는 반복(while)이 아닌지 확인해 보세요.');
  if (res.kind === 'engine') return h('div', { class: 'out err' }, '파이썬 엔진에 문제가 생겼어요: ' + (res.msg || ''));
  const d = h('div');
  d.append(h('div', { class: 'out' + (res.err ? '' : '') }, h('span', { class: 'lab' }, '출력'), res.out && res.out.length ? res.out : (res.err ? '' : '(출력 없음)')));
  if (res.err) d.append(errBox(res.err));
  return d;
}

// 실행 버튼 + 출력창
export function runner(getCode, getStdin) {
  const out = h('div');
  const btn = h('button', { class: 'run', onclick: go }, '▶ 실행');
  async function go() {
    btn.disabled = true; btn.textContent = '실행 중…';
    out.innerHTML = '';
    out.append(h('div', { class: 'out' }, '…'));
    const res = await runCode(getCode(), getStdin ? getStdin() : []);
    out.innerHTML = '';
    out.append(outBox(res));
    btn.disabled = false; btn.textContent = '▶ 실행';
    store.s.stats.runs++; store.save();
    return res;
  }
  return { btn, out, run: go };
}

export function statusChip() {
  const dot = h('span', { class: 'dot' });
  const txt = h('span', null, '파이썬 엔진 준비 중…');
  const el = h('div', { class: 'statusbar' }, dot, txt);
  onStatus((s) => { dot.className = 'dot ' + s; txt.textContent = s === 'ready' ? '파이썬 엔진 준비 완료' : s === 'error' ? '엔진을 불러오지 못했어요 (인터넷 연결을 확인하세요)' : '파이썬 엔진 준비 중… (처음 한 번만 오래 걸려요)'; });
  return el;
}

const titleEl = (q) => h('div', { class: 'q-t' }, q.q ? h('span', { html: q.q }) : q.prompt || '');

// ---------------- 배우기 카드
function learn(q) {
  const el = h('div', { class: 'gram' });
  el.append(h('span', { class: 'badge' }, '배우기'), h('h3', { style: { fontSize: '19px', margin: '8px 0' } }, q.h), h('div', { html: q.b }));
  if (q.code) {
    let cur = q.code;
    const holder = h('div');
    const stdinBox = q.stdin ? h('textarea', { class: 'inp', rows: '2', style: { fontSize: '14px', fontFamily: 'monospace' } }, q.stdin.join('\n')) : null;
    const show = () => { holder.innerHTML = ''; holder.append(codeBlock(cur)); };
    show();
    const r = runner(() => cur, () => (stdinBox ? stdinBox.value.split('\n') : []));
    const row = h('div', { class: 'tinyrow' }, r.btn);
    let ed = null;
    const editBtn = h('button', { class: 'btn sm', onclick: () => {
      if (!ed) { ed = createEditor({ value: cur, rows: Math.min(10, cur.split('\n').length + 1), onChange: (v) => { cur = v; } }); holder.innerHTML = ''; holder.append(ed.el); editBtn.textContent = '↩ 원래대로'; }
      else { cur = q.code; ed = null; show(); editBtn.textContent = '✏️ 고쳐서 실행'; }
    } }, '✏️ 고쳐서 실행');
    row.append(editBtn);
    el.append(holder);
    if (stdinBox) el.append(h('div', { style: { fontSize: '12px', color: 'var(--sub)' } }, 'input()에 넣을 값 (한 줄에 하나)'), stdinBox);
    el.append(row, r.out);
  }
  if (q.note) el.append(h('div', { class: 'note', html: q.note }));
  return { el, noCheck: true, teach: true };
}

// ---------------- 객관식
function mc(q, hooks) {
  let sel = -1;
  const el = h('div');
  el.append(titleEl(q));
  if (q.code) el.append(codeBlock(q.code));
  const box = h('div', { class: 'opts' });
  const btns = q.opts.map((o, i) => h('button', { class: 'opt' + (/\n/.test(o) ? ' optcode' : ''), onclick: () => { if (box.dataset.lock) return; sel = i; btns.forEach((b, j) => b.classList.toggle('sel', j === i)); hooks.ready(true); } }, o));
  btns.forEach((b) => box.append(b));
  el.append(box);
  return {
    el,
    check() {
      box.dataset.lock = '1';
      btns.forEach((b, j) => { b.classList.remove('sel'); if (j === q.ans) b.classList.add('ok'); else if (j === sel) b.classList.add('no'); });
      return { correct: sel === q.ans, ans: q.opts[q.ans], why: q.why };
    },
  };
}

// ---------------- 출력 맞히기
function predict(q, hooks) {
  const all = shuffle([q.ans, ...q.wrong]);
  const idx = all.indexOf(q.ans);
  return mc({ q: q.q || '이 코드를 실행하면 무엇이 출력될까요?', code: q.code, opts: all.map((o) => o), ans: idx, why: q.why }, hooks);
}

// ---------------- 빈칸 채우기
function blank(q, hooks) {
  const el = h('div');
  el.append(titleEl({ q: q.q || '빈칸에 알맞은 것을 넣어 코드를 완성하세요' }));
  const filled = Array(q.ans.length).fill(null);
  let selB = 0;
  const holder = h('div', { class: 'code' });
  const bank = h('div', { class: 'bank' });
  const words = shuffle([...q.ans, ...(q.extra || [])]);
  const chips = words.map((w, i) => h('button', { class: 'chip2', onclick: () => put(i) }, w));
  function draw() {
    holder.innerHTML = codeHtml(q.code, { blanks: true });
    holder.querySelectorAll('.blank').forEach((b) => {
      const i = +b.dataset.i;
      if (filled[i] != null) { b.textContent = words[filled[i]]; b.classList.add('filled'); }
      if (i === selB) b.classList.add('sel');
      b.addEventListener('click', () => { if (el.dataset.lock) return; if (filled[i] != null) { chips[filled[i]].classList.remove('used'); filled[i] = null; } selB = i; draw(); });
    });
    hooks.ready(filled.every((x) => x != null));
  }
  function put(wi) {
    if (el.dataset.lock || chips[wi].classList.contains('used')) return;
    let t = filled[selB] == null ? selB : filled.findIndex((x) => x == null);
    if (t < 0) t = selB;
    if (filled[t] != null) chips[filled[t]].classList.remove('used');
    filled[t] = wi; chips[wi].classList.add('used');
    const nx = filled.findIndex((x) => x == null); selB = nx < 0 ? t : nx;
    draw();
  }
  chips.forEach((c) => bank.append(c));
  el.append(holder, bank);
  draw();
  return {
    el,
    async check() {
      el.dataset.lock = '1';
      const got = filled.map((i) => words[i]);
      let ok = got.every((g, i) => g === q.ans[i]);
      if (!ok && q.out != null) {
        let code = q.code; let k = 0; code = code.replace(/_{3,}/g, () => got[k++]);
        const r = await runCode(code, q.stdin || []);
        ok = r.ok && r.out.trim() === String(q.out).trim();
      }
      let k = 0; const full = q.code.replace(/_{3,}/g, () => q.ans[k++]);
      return { correct: ok, ansCode: full, why: q.why };
    },
  };
}

// ---------------- 줄 순서 맞추기
function parsons(q, hooks) {
  const el = h('div');
  el.append(titleEl({ q: q.q || '줄을 눌러 올바른 순서로 코드를 완성하세요' }));
  const items = shuffle([...q.lines, ...(q.extra || [])].map((t, i) => ({ t, i })));
  const chosen = [];
  const ans = h('div', { class: 'pans' });
  const pool = h('div');
  const btns = items.map((it, k) => h('button', { class: 'pline', onclick: () => { if (el.dataset.lock || btns[k].classList.contains('used')) return; btns[k].classList.add('used'); chosen.push(k); draw(); } }, it.t));
  function draw() {
    ans.innerHTML = '';
    if (!chosen.length) ans.append(h('div', { style: { color: 'var(--sub)', fontSize: '13px', padding: '8px' } }, '여기에 줄이 쌓여요 (누르면 되돌려요)'));
    chosen.forEach((k, n) => ans.append(h('button', { class: 'pline', onclick: () => { if (el.dataset.lock) return; chosen.splice(n, 1); btns[k].classList.remove('used'); draw(); } }, items[k].t)));
    hooks.ready(chosen.length >= q.lines.length);
  }
  btns.forEach((b) => pool.append(b));
  el.append(ans, pool);
  draw();
  return {
    el,
    async check() {
      el.dataset.lock = '1';
      const got = chosen.map((k) => items[k].t);
      let ok = got.length === q.lines.length && got.every((t, i) => t === q.lines[i]);
      if (!ok && q.out != null && got.length === q.lines.length) {
        const r = await runCode(got.join('\n'), q.stdin || []);
        ok = r.ok && r.out.trim() === String(q.out).trim();
      }
      return { correct: ok, ansCode: q.lines.join('\n'), why: q.why };
    },
  };
}

// ---------------- 버그 찾기
function bug(q, hooks) {
  const el = h('div');
  el.append(titleEl({ q: q.q || '이 코드에는 버그가 있어요. 잘못된 줄을 눌러 보세요' }));
  if (q.expect) el.append(h('div', { class: 'hintbox', html: q.expect }));
  const holder = h('div', { class: 'code' });
  let sel = 0;
  const lines = q.code.replace(/\n$/, '').split('\n').length;
  const draw = (mark) => {
    holder.innerHTML = codeHtml(q.code, { numbers: true, mark: mark || (sel ? { [sel]: 'bug' } : null) });
    holder.querySelectorAll('[data-line]').forEach((s) => s.addEventListener('click', () => { if (el.dataset.lock) return; sel = +s.dataset.line; draw(); hooks.ready(true); }));
  };
  draw();
  el.append(holder);
  const lineOk = (n) => [].concat(q.line).includes(n);
  return {
    el,
    check() {
      el.dataset.lock = '1';
      const ok = lineOk(sel);
      const mark = {}; [].concat(q.line).forEach((n) => { mark[n] = 'good'; }); if (!ok) mark[sel] = 'bug';
      draw(mark);
      return { correct: ok, ansCode: q.fix ? q.fix : null, ans: ok ? null : `${[].concat(q.line).join(', ')}번째 줄`, why: q.why };
    },
  };
}

// ---------------- 코딩 과제
function code(q, hooks) {
  const el = h('div');
  el.append(h('span', { class: 'badge' }, '코딩 도전'));
  el.append(h('div', { class: 'q-t', style: { marginTop: '6px' } }, h('span', { html: q.q })));
  if (q.examples) el.append(h('div', { class: 'hintbox', html: q.examples }));
  const saved = store.s.codes[q.key];
  const ed = createEditor({ value: saved != null ? saved : (q.starter || ''), rows: Math.max(7, (q.starter || '').split('\n').length + 3), onChange: (v) => { store.s.codes[q.key] = v; hooks.ready(true); } });
  el.append(ed.el);
  const needsIn = /input\s*\(/.test(q.sol || '') || (q.tests || []).some((t) => (t.in || []).length) || (q.in || []).length;
  const stdinBox = needsIn ? h('textarea', { class: 'inp', rows: '2', placeholder: '입력값 (한 줄에 하나)', style: { fontSize: '14px', fontFamily: 'monospace' } }, ((q.tests && q.tests[0] && q.tests[0].in) || q.in || []).join('\n')) : null;
  if (stdinBox) el.append(h('div', { style: { fontSize: '12px', color: 'var(--sub)' } }, '▶ 실행할 때 input()에 들어갈 값'), stdinBox);
  const r = runner(() => ed.value, () => (stdinBox ? stdinBox.value.split('\n') : []));
  const hintBox = h('div');
  let hintN = 0, fails = 0;
  const hintBtn = h('button', { class: 'btn sm sun', onclick: () => {
    if (!q.hints || hintN >= q.hints.length) return;
    hintBox.append(h('div', { class: 'hintbox', html: `💡 힌트 ${hintN + 1}: ` + q.hints[hintN] })); hintN++;
    if (hintN >= q.hints.length) hintBtn.disabled = true;
  } }, '💡 힌트');
  const resetBtn = h('button', { class: 'btn sm', onclick: () => { if (confirm('처음 코드로 되돌릴까요?')) { ed.value = q.starter || ''; store.s.codes[q.key] = ed.value; } } }, '↺ 처음으로');
  const giveBtn = h('button', { class: 'btn sm bad', style: { display: 'none' }, onclick: () => { if (confirm('정답을 보면 이 문제는 나중에 다시 나와요. 볼까요?')) hooks.giveup(); } }, '정답 보기');
  el.append(h('div', { class: 'tinyrow' }, r.btn, hintBtn, resetBtn, giveBtn), r.out, hintBox, statusChip());
  hooks.ready(true);
  return {
    el, hints: () => hintN,
    async check() {
      const res = await runTask(q, ed.value);
      store.s.stats.runs++;
      if (res.ok) { store.s.stats.solved++; return { correct: true, hints: hintN }; }
      fails++; if (fails >= 2) giveBtn.style.display = '';
      return { correct: false, retry: true, detail: taskFail(res), hints: hintN };
    },
    solution: q.sol,
  };
}

export function taskFail(res) {
  const d = h('div');
  if (res.kind === 'timeout' || res.kind === 'engine') { d.append(outBox(res)); return d; }
  if (res.kind === 'error') {
    d.append(errBox(res.err));
    if (res.call) d.append(h('div', { class: 'hintbox' }, `${res.call} 을(를) 실행하다가 오류가 났어요.`));
    return d;
  }
  if (res.kind === 'nofn') { d.append(h('div', { class: 'err-tip' }, `💡 ${res.fn} 라는 이름의 함수를 만들어야 해요. def ${res.fn}(...): 로 시작했는지 확인해 보세요.`)); return d; }
  if (res.kind === 'need' || res.kind === 'ban' || res.kind === 'check') { d.append(h('div', { class: 'err-tip' }, '💡 ' + res.msg)); return d; }
  if (res.kind === 'out') {
    if (res.hidden) { d.append(h('div', { class: 'err-tip' }, '💡 다른 입력값으로 시험했더니 결과가 달랐어요. 여러 경우에서 맞는 코드인지 생각해 보세요.')); return d; }
    if (res.in && res.in.length) d.append(h('div', { class: 'hintbox' }, '입력값: ' + res.in.join(', ')));
    d.append(h('div', { class: 'out' }, h('span', { class: 'lab' }, '기대한 출력'), res.expected), h('div', { class: 'out err' }, h('span', { class: 'lab' }, '내 코드의 출력'), res.got || '(출력 없음)'));
    return d;
  }
  if (res.kind === 'case') {
    if (res.hidden) { d.append(h('div', { class: 'err-tip' }, '💡 다른 값으로 시험했더니 결과가 달랐어요. 여러 경우에서 맞는 코드인지 생각해 보세요.')); return d; }
    d.append(h('div', { class: 'out' }, h('span', { class: 'lab' }, `${res.call} 의 기대값`), res.expected), h('div', { class: 'out err' }, h('span', { class: 'lab' }, '내 코드의 결과'), res.got));
    return d;
  }
  d.append(h('div', { class: 'err-tip' }, '💡 결과가 기대와 달라요.'));
  return d;
}

export function mountQ(q, hooks) {
  const f = { learn, mc, predict, blank, parsons, bug, code }[q.t];
  return f(q, hooks);
}
