import { h, toast } from './util.js';
import { store, levelOf } from './store.js';
import { UNITS, SECTIONS, STAGES, lessonQuestions, checkpointQuestions, reviewQuestions, dueCount, learnedUnits } from './gen.js';
import { runLesson } from './lesson.js';
import { createEditor } from './editor.js';
import { runner, statusChip, codeBlock } from './ex.js';
import { startEngine } from './py.js';

const app = () => document.getElementById('app');
let tab = 'home';
let route = { name: 'tabs' };

export function go(name, p = {}) { route = { name, ...p }; render(); }
export function setTab(t) { tab = t; route = { name: 'tabs' }; render(); }

export function render() {
  const a = app(); a.innerHTML = '';
  const t = store.s.settings.theme;
  if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
  const r = route;
  if (r.name === 'unit') return unitScreen(a, r.id);
  if (r.name === 'sheet') return sheetScreen(a, r.id);
  if (r.name === 'lesson') return lessonScreen(a, r);
  if (r.name === 'result') return resultScreen(a, r);
  tabsScreen(a);
}

const isUnlocked = (u) => store.s.settings.open || u.id === 1 || store.unit(u.id - 1).st[2] > 0;
const unitStars = (u) => store.unit(u.id).st.filter((x) => x > 0).length;
const unitDone = (u) => store.unit(u.id).st[3] >= 2;
const secUnlocked = (c) => store.s.settings.open || store.unit(c.to).st[2] > 0;
const starStr = (n) => '★'.repeat(n) + '☆'.repeat(Math.max(0, 3 - n));

function tabsBar(a) {
  const mk = (id, ic, tx) => h('button', { class: tab === id ? 'on' : '', onclick: () => setTab(id) }, h('b', null, ic), tx);
  a.append(h('div', { class: 'tabs' }, mk('home', '🐍', '학습'), mk('play', '⌨️', '연습장'), mk('review', '🔁', '복습'), mk('more', '⚙️', '더보기')));
}

function tabsScreen(a) {
  const scr = h('div', { class: 'scr' });
  a.append(scr);
  if (tab === 'home') homeTab(scr);
  else if (tab === 'play') playTab(scr);
  else if (tab === 'review') reviewTab(scr);
  else moreTab(scr);
  tabsBar(a);
}

const TIPS = [
  '오류 메시지는 적이 아니라 힌트예요. 끝에서부터 읽어 보세요.',
  '코드는 “짧게 쓰고, 바로 실행해 보기”가 가장 빨리 느는 방법이에요.',
  '막히면 print()로 중간 값을 찍어 보세요. 대부분의 버그가 보여요.',
  '정답을 외우기보다 “왜 그렇게 되는지” 한 줄로 말해 보세요.',
];

function homeTab(scr) {
  const s = store.s, lv = levelOf(s.xp);
  const prog = Math.min(100, Math.round((store.todayXp() / s.goal) * 100));
  const doneUnits = UNITS.filter(unitDone).length;
  scr.append(h('div', { class: 'stats' },
    h('div', { class: 'chip' }, h('b', null, '🔥 ' + store.streakNow()), '연속 학습일'),
    h('div', { class: 'chip' }, h('b', null, '⭐ ' + s.xp), lv.name),
    h('div', { class: 'chip' }, h('b', null, '👑 ' + doneUnits), `완료 / ${UNITS.length}`)));
  scr.append(h('div', { class: 'goal' }, h('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 800 } }, h('span', null, '오늘의 목표'), h('span', null, `${Math.min(store.todayXp(), s.goal)} / ${s.goal} XP`)), h('div', { class: 'bar' }, h('i', { style: { width: prog + '%' } }))));
  const due = dueCount();
  scr.append(h('div', { class: 'mascot' }, h('div', { class: 'm' }, '🐍'), h('div', { class: 't' }, h('b', null, '파이'), h('br'), TIPS[new Date().getDate() % TIPS.length], due > 0 ? h('div', { style: { marginTop: '4px' } }, `복습할 문제 ${due}개가 기다려요 🔁`) : null)));
  SECTIONS.forEach((sec) => {
    const us = UNITS.filter((u) => u.id >= sec.from && u.id <= sec.to);
    scr.append(h('div', { class: 'sect', style: { background: sec.color } }, h('span', null, sec.name), h('small', null, sec.sub)));
    const path = h('div', { class: 'path' });
    us.forEach((u, i) => {
      const unlocked = isUnlocked(u), st = unitStars(u);
      const off = [0, 40, 60, 40, 0, -40][i % 6] * (Math.floor((u.id - 1) / 6) % 2 ? -1 : 1);
      const wrap = h('div', { style: { transform: `translateX(${off}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' } });
      const node = h('button', { class: 'node' + (unitDone(u) ? ' done' : unlocked ? '' : ' lock'), onclick: () => { if (!unlocked) { toast('앞 유닛의 “코딩 도전”까지 끝내면 열려요'); return; } go('unit', { id: u.id }); } },
        unlocked ? u.emoji : '🔒', h('span', { class: 'no' }, u.id), unitDone(u) ? h('span', { class: 'crown' }, '👑') : null);
      wrap.append(node, h('div', { class: 'nlabel' }, h('b', null, u.title), unlocked ? `${st}/4 단계` : ''));
      path.append(wrap);
    });
    const ok = secUnlocked(sec), stars = (s.cps || (s.cps = {}))[sec.id] || 0;
    path.append(h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' } },
      h('button', { class: 'node cp' + (stars >= 2 ? ' done' : ok ? '' : ' lock'), onclick: () => { if (!ok) { toast('이 섹션의 코딩 도전을 끝내면 열려요'); return; } go('lesson', { kind: 'cp', sec }); } }, ok ? '🚩' : '🔒', stars ? h('span', { class: 'crown' }, '★'.repeat(stars)) : null),
      h('div', { class: 'nlabel' }, h('b', null, sec.name.replace(/^섹션 \d+ · /, '') + ' 점검'), '종합 문제')));
    scr.append(path);
  });
  scr.append(h('div', { class: 'card', style: { textAlign: 'center', color: 'var(--sub)', fontSize: '13px' } }, '모든 유닛을 마치면 파이썬 기초부터 클래스까지 직접 프로그램을 만들 수 있어요. 🎓'));
}

// ---------- 유닛
function unitScreen(a, id) {
  const u = UNITS.find((x) => x.id === id);
  const us = store.unit(id);
  const scr = h('div', { class: 'scr nonav' });
  scr.append(h('div', { class: 'hd' }, h('button', { class: 'back', onclick: () => go('tabs') }, '←'), h('h2', null, `유닛 ${u.id} · ${u.title}`)));
  scr.append(h('div', { class: 'card' }, h('div', { style: { fontSize: '15px', lineHeight: 1.6 } }, u.emoji + ' ' + u.goal), u.tips ? h('div', { class: 'hintbox', style: { marginTop: '10px', marginBottom: 0 }, html: '💡 ' + u.tips }) : null));
  STAGES.forEach((stg, i) => {
    const prevOk = i === 0 || us.st[i - 1] > 0 || store.s.settings.open;
    const stars = us.st[i];
    scr.append(h('button', { class: 'stage' + (stars ? ' done' : '') + (prevOk ? '' : ' lock'), onclick: () => { if (!prevOk) { toast('앞 단계를 먼저 끝내 주세요'); return; } go('lesson', { kind: 'unit', id, stage: i }); } },
      h('div', { class: 'ic' }, stg.icon), h('div', { class: 'tx' }, h('b', null, stg.name), stg.desc), h('div', { class: 'stars', style: { color: stars ? '#e8a410' : '#bbb' } }, starStr(stars))));
  });
  scr.append(h('button', { class: 'btn', style: { marginTop: '6px' }, onclick: () => go('sheet', { id }) }, '📋 이 유닛 요약(치트시트) 보기'));
  a.append(scr);
}

function sheetScreen(a, id) {
  const u = UNITS.find((x) => x.id === id);
  const scr = h('div', { class: 'scr nonav gram' });
  scr.append(h('div', { class: 'hd' }, h('button', { class: 'back', onclick: () => go(route.from || 'unit', { id }) }, '←'), h('h2', null, `유닛 ${u.id} 요약`)));
  scr.append(h('div', { class: 'card' }, h('h3', null, u.title), (u.sum || []).map((l) => h('div', { style: { padding: '4px 0', lineHeight: 1.6, fontSize: '15px' }, html: '• ' + l }))));
  a.append(scr);
}

// ---------- 레슨
function lessonScreen(a, r) {
  const wrap = h('div', { style: { display: 'flex', flexDirection: 'column', height: '100%' } });
  a.append(wrap);
  startEngine();
  let questions, title, onDone;
  if (r.kind === 'unit') {
    const u = UNITS.find((x) => x.id === r.id);
    questions = lessonQuestions(u, r.stage);
    title = `${u.title} · ${STAGES[r.stage].name}`;
    onDone = (res) => {
      const us = store.unit(r.id);
      if (r.stage === 3) { if (res.stars >= 2) us.st[3] = Math.max(us.st[3], res.stars); }
      else us.st[r.stage] = Math.max(us.st[r.stage], res.stars);
      store.save();
      go('result', { res, back: { name: 'unit', id: r.id }, title, nextStage: r.stage < 3 ? r.stage + 1 : null, id: r.id, test: r.stage === 3 });
    };
  } else if (r.kind === 'cp') {
    questions = checkpointQuestions(r.sec); title = r.sec.name + ' 점검';
    onDone = (res) => { const c = store.s.cps || (store.s.cps = {}); c[r.sec.id] = Math.max(c[r.sec.id] || 0, res.stars); store.save(); go('result', { res, back: { name: 'tabs' }, title }); };
  } else {
    questions = reviewQuestions(10); title = '복습';
    onDone = (res) => go('result', { res, back: { name: 'tabs' }, title });
  }
  if (!questions.length) { toast('아직 복습할 내용이 없어요. 먼저 유닛을 시작해 보세요!'); setTab(tab); return; }
  runLesson(wrap, { questions, xpBase: r.kind === 'unit' ? 10 : 8, onExit: () => go(r.kind === 'unit' ? 'unit' : 'tabs', { id: r.id }), onFinish: onDone });
}

function resultScreen(a, r) {
  const { res } = r;
  const scr = h('div', { class: 'scr nonav' });
  const msg = res.stars === 3 ? ['완벽해요! 코드 마스터!', '🎉'] : res.stars === 2 ? ['잘했어요!', '😊'] : ['끝까지 해냈어요! 다시 하면 별이 늘어요', '💪'];
  const extra = r.test ? (res.stars >= 2 ? '👑 왕관을 받았어요! 유닛 완료!' : '보스는 ★2개 이상이면 왕관을 받아요. 다시 도전해 보세요!') : '';
  scr.append(h('div', { class: 'result' }, h('div', { class: 'big' }, msg[1]), h('h2', { style: { margin: '8px 0' } }, msg[0]), h('div', { class: 'stars', style: { fontSize: '40px', color: '#e8a410' } }, starStr(res.stars)),
    extra ? h('div', { style: { marginTop: '8px', fontWeight: 800 } }, extra) : null,
    h('div', { class: 'xp' }, h('div', null, h('b', null, '+' + res.xp), 'XP'), h('div', null, h('b', null, Math.round(res.acc * 100) + '%'), '한 번에 맞힘'), h('div', null, h('b', null, '🔥' + store.streakNow()), '연속'))));
  if (r.nextStage != null && !r.test) scr.append(h('button', { class: 'btn pri', style: { marginBottom: '10px' }, onclick: () => go('lesson', { kind: 'unit', id: r.id, stage: r.nextStage }) }, `다음: ${STAGES[r.nextStage].name}`));
  scr.append(h('button', { class: 'btn', onclick: () => go(r.back.name === 'unit' ? 'unit' : 'tabs', r.back) }, r.back.name === 'unit' ? '유닛으로 돌아가기' : '홈으로'));
  a.append(scr);
}

// ---------- 연습장
function playTab(scr) {
  startEngine();
  scr.append(h('div', { class: 'hd' }, h('h2', null, '연습장')));
  scr.append(h('div', { style: { fontSize: '14px', color: 'var(--sub)', marginBottom: '6px' } }, '무엇이든 자유롭게 써서 실행해 보세요. 실험은 최고의 공부예요!'));
  const ed = createEditor({ value: store.s.play, rows: 10, onChange: (v) => { store.s.play = v; } });
  const stdin = h('textarea', { class: 'inp', rows: '2', placeholder: 'input()에 들어갈 값 (한 줄에 하나)', style: { fontSize: '14px', fontFamily: 'monospace' } });
  const r = runner(() => ed.value, () => stdin.value.split('\n'));
  const sel = h('select', { onchange: () => { if (sel.value) { const [ui, ci] = sel.value.split(':').map(Number); const c = UNITS[ui].learn[ci]; ed.value = c.code; store.s.play = c.code; if (c.stdin) stdin.value = c.stdin.join('\n'); sel.value = ''; } } }, h('option', { value: '' }, '📂 예제 불러오기…'));
  UNITS.forEach((u, ui) => { const og = h('optgroup', { label: `유닛 ${u.id} ${u.title}` }); (u.learn || []).forEach((c, ci) => { if (c.code) og.append(h('option', { value: ui + ':' + ci }, c.h)); }); if (og.children.length) sel.append(og); });
  scr.append(h('div', { class: 'tinyrow' }, sel), ed.el, stdin, h('div', { class: 'tinyrow' }, r.btn, h('button', { class: 'btn sm', onclick: () => { if (confirm('연습장을 비울까요?')) { ed.value = ''; store.s.play = ''; r.out.innerHTML = ''; } } }, '🗑 비우기')), r.out, statusChip());
}

// ---------- 복습
function reviewTab(scr) {
  const due = dueCount(), n = learnedUnits().length;
  scr.append(h('div', { class: 'hd' }, h('h2', null, '복습')));
  scr.append(h('div', { class: 'card' }, h('h3', null, '간격 반복 복습'), h('div', { style: { fontSize: '14px', color: 'var(--sub)', lineHeight: 1.6 } }, '배운 코드 퍼즐을 잊어버릴 때쯤 다시 보여 줘요. 매일 5분이면 오래 기억돼요.'),
    h('div', { class: 'row', style: { margin: '12px 0' } }, h('div', { class: 'chip' }, h('b', null, due), '지금 복습할 것'), h('div', { class: 'chip' }, h('b', null, n), '배운 유닛'))));
  scr.append(h('button', { class: 'btn pri', onclick: () => { if (!n) { toast('먼저 유닛 1을 시작해 주세요'); return; } go('lesson', { kind: 'review' }); } }, due ? `복습 시작 (${Math.min(due, 10)}문제)` : '약한 문제 연습하기'));
}

// ---------- 더보기
function moreTab(scr) {
  const s = store.s, lv = levelOf(s.xp);
  scr.append(h('div', { class: 'hd' }, h('h2', null, '더보기')));
  scr.append(h('div', { class: 'card' }, h('h3', null, `레벨: ${lv.name}`), h('div', { style: { fontSize: '14px', color: 'var(--sub)' } }, `총 ${s.xp} XP` + (lv.next ? ` · 다음 레벨까지 ${lv.next - s.xp} XP` : ' · 최고 레벨!')), h('div', { class: 'goal', style: { border: 0, padding: 0, marginBottom: 0 } }, h('div', { class: 'bar' }, h('i', { style: { width: lv.next ? Math.round(((s.xp - lv.base) / (lv.next - lv.base)) * 100) + '%' : '100%' } })))));
  // 배지
  const solved = s.stats.solved, crowns = UNITS.filter(unitDone).length;
  const badges = [['🐣', '첫 실행', s.stats.runs >= 1], ['⌨️', '코딩 도전 5개 해결', solved >= 5], ['💪', '코딩 도전 30개 해결', solved >= 30], ['👑', '왕관 5개', crowns >= 5], ['🏅', '왕관 25개', crowns >= 25], ['🎓', '모든 유닛 완료', crowns >= UNITS.length], ['🔥', '3일 연속', s.best >= 3], ['🌟', '7일 연속', s.best >= 7], ['🚀', '30일 연속', s.best >= 30]];
  scr.append(h('div', { class: 'card' }, h('h3', null, '배지'), h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '10px' } }, badges.map(([ic, tx, got]) => h('div', { style: { width: '30%', textAlign: 'center', opacity: got ? 1 : .3, fontSize: '12px' } }, h('div', { style: { fontSize: '30px' } }, ic), tx)))));
  // 치트시트
  const sheet = h('div', { class: 'card' }, h('h3', null, '📋 치트시트 (유닛별 요약)'));
  UNITS.forEach((u) => sheet.append(h('button', { class: 'wrow', style: { width: '100%', textAlign: 'left' }, onclick: () => { route = { name: 'sheet', id: u.id, from: 'tabs' }; render(); } }, h('span', { style: { flex: 1 } }, `${u.emoji} ${u.id}. ${u.title}`), h('span', { class: 'lvl' }, '보기'))));
  scr.append(sheet);
  scr.append(h('div', { class: 'card' }, h('h3', null, '학습 설정'),
    h('div', { class: 'switch' }, h('span', null, '하루 목표'), (() => { const sel = h('select', { onchange: () => { s.goal = +sel.value; store.save(); } }, [30, 60, 100, 150].map((n) => h('option', { value: n, selected: s.goal === n }, n + ' XP' + (n === 30 ? ' (가볍게)' : n === 60 ? ' (보통)' : n === 100 ? ' (열심히)' : ' (집중)')))); return sel; })()),
    h('label', { class: 'switch' }, h('span', null, '모든 유닛 열어 두기'), h('input', { type: 'checkbox', checked: s.settings.open, onchange: (e) => { s.settings.open = e.target.checked; store.save(); } })),
    h('div', { class: 'switch' }, h('span', null, '화면 색'), (() => { const sel = h('select', { onchange: () => { s.settings.theme = sel.value; store.save(); render(); } }, [['', '자동'], ['light', '밝게'], ['dark', '어둡게']].map(([v, t]) => h('option', { value: v, selected: s.settings.theme === v }, t))); return sel; })())));
  scr.append(statusChip());
  scr.append(h('button', { class: 'btn bad', style: { marginTop: '12px' }, onclick: () => { if (confirm('모든 진도를 지울까요? 되돌릴 수 없어요.')) { store.reset(); render(); toast('초기화했어요'); } } }, '진도 초기화'));
}
