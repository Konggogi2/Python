// 모바일 친화 코드 편집기: 줄 번호, 자동 들여쓰기, 기호 입력 줄
import { h } from './util.js';

const KEYS = ['⇥', '(', ')', '[', ']', '{', '}', '"', "'", ':', '=', '#', '_', ',', '.', '+', '-', '*', '/', '%', '<', '>', '!', '\\n'];

export function createEditor({ value = '', rows = 7, onChange, keys = true } = {}) {
  const ta = h('textarea', { spellcheck: 'false', autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off', rows: String(rows), 'aria-label': '코드 입력' });
  ta.value = value;
  const gut = h('div', { class: 'gut' });
  const wrap = h('div', { class: 'edwrap' }, gut, ta);
  const syncGut = () => {
    const n = ta.value.split('\n').length;
    let t = ''; for (let i = 1; i <= n; i++) t += i + '\n';
    gut.textContent = t;
    gut.scrollTop = ta.scrollTop;
  };
  const insert = (txt, back = 0) => {
    const s = ta.selectionStart, e = ta.selectionEnd;
    ta.setRangeText(txt, s, e, 'end');
    if (back) { ta.selectionStart = ta.selectionEnd = ta.selectionEnd - back; }
    ta.focus(); fire();
  };
  const fire = () => { syncGut(); if (onChange) onChange(ta.value); };
  ta.addEventListener('input', fire);
  ta.addEventListener('scroll', () => { gut.scrollTop = ta.scrollTop; });
  ta.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') { e.preventDefault(); insert('    '); }
    else if (e.key === 'Enter') {
      const s = ta.selectionStart;
      const before = ta.value.slice(0, s);
      const line = before.slice(before.lastIndexOf('\n') + 1);
      let ind = (/^\s*/.exec(line) || [''])[0];
      if (/:\s*$/.test(line)) ind += '    ';
      e.preventDefault(); insert('\n' + ind);
    }
  });
  const kb = h('div', { class: 'keys' }, KEYS.map((k) => h('button', {
    type: 'button',
    onmousedown: (e) => e.preventDefault(),
    ontouchstart: (e) => e.preventDefault(),
    onclick: () => {
      if (k === '⇥') insert('    ');
      else if (k === '\\n') insert('\n' + (/^\s*/.exec(ta.value.slice(ta.value.lastIndexOf('\n', ta.selectionStart - 1) + 1, ta.selectionStart)) || [''])[0]);
      else if (k === '(') insert('()', 1);
      else if (k === '[') insert('[]', 1);
      else if (k === '{') insert('{}', 1);
      else if (k === '"') insert('""', 1);
      else if (k === "'") insert("''", 1);
      else insert(k);
    },
  }, k === '\\n' ? '⏎' : k)));
  const el = h('div', null, wrap, keys ? kb : null);
  syncGut();
  return {
    el, ta,
    get value() { return ta.value; },
    set value(v) { ta.value = v; syncGut(); },
    focus() { ta.focus(); },
  };
}
