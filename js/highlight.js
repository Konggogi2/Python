// 간단한 파이썬 구문 강조 (읽기용). 결과는 줄 단위 HTML 배열.
const KW = new Set('False None True and as assert break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'.split(' '));
const BI = new Set('print len range input int str float bool list dict set tuple sum min max abs round sorted reversed type open isinstance enumerate zip map filter any all chr ord format repr super'.split(' '));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function tokenize(code) {
  const toks = [];
  let i = 0;
  const n = code.length;
  let prevKw = '';
  while (i < n) {
    const c = code[i];
    if (c === '#') { let j = i; while (j < n && code[j] !== '\n') j++; toks.push(['c', code.slice(i, j)]); i = j; continue; }
    const sm = /^([rRbBfFuU]{0,2})('''|"""|'|")/.exec(code.slice(i, i + 5));
    if (sm) {
      const q = sm[2]; let j = i + sm[0].length;
      while (j < n) {
        if (code[j] === '\\') { j += 2; continue; }
        if (code.startsWith(q, j)) { j += q.length; break; }
        if (q.length === 1 && code[j] === '\n') break;
        j++;
      }
      toks.push(['s', code.slice(i, j)]); i = j; continue;
    }
    if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(code[i + 1] || ''))) { let j = i; while (j < n && /[0-9._eE]/.test(code[j])) j++; toks.push(['n', code.slice(i, j)]); i = j; continue; }
    if (/[A-Za-z_가-힣]/.test(c)) {
      let j = i; while (j < n && /[A-Za-z0-9_가-힣]/.test(code[j])) j++;
      const w = code.slice(i, j);
      if (w === '___') toks.push(['b', w]);
      else if (KW.has(w)) toks.push(['k', w]);
      else if (prevKw === 'def' || prevKw === 'class') toks.push(['f', w]);
      else if (BI.has(w)) toks.push(['f', w]);
      else toks.push(['', w]);
      prevKw = w; i = j; continue;
    }
    if (c === '_') { let j = i; while (j < n && code[j] === '_') j++; toks.push([j - i >= 3 ? 'b' : '', code.slice(i, j)]); i = j; continue; }
    if (!/\s/.test(c)) prevKw = '';
    toks.push(['', c]); i++;
  }
  return toks;
}

// opts: { numbers:boolean, mark:{lineNo:'bug'|'good'}, blanks:boolean }
export function highlightLines(code, opts = {}) {
  const lines = [''];
  let blank = 0;
  tokenize(code).forEach(([t, txt]) => {
    const parts = txt.split('\n');
    parts.forEach((p, k) => {
      if (k > 0) lines.push('');
      if (!p) return;
      if (t === 'b' && opts.blanks) { lines[lines.length - 1] += `<span class="blank" data-i="${blank++}">${'&nbsp;'.repeat(3)}</span>`; return; }
      const e = esc(p);
      lines[lines.length - 1] += t ? `<span class="${t}">${e}</span>` : e;
    });
  });
  return lines;
}

export function codeHtml(code, opts = {}) {
  const lines = highlightLines(code.replace(/\n$/, ''), opts);
  return lines.map((l, i) => {
    const no = opts.numbers ? `<span class="ln">${i + 1}</span>` : '';
    const m = opts.mark && opts.mark[i + 1];
    return (m ? `<span class="${m}" data-line="${i + 1}">` : `<span data-line="${i + 1}">`) + no + (l || ' ') + '</span>';
  }).join('\n');
}
