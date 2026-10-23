// 유닛 데이터 → 레슨 문제 목록
import { UNITS, SECTIONS } from './data/index.js';
import { shuffle } from './util.js';
import { srsDue, store } from './store.js';

export const STAGES = [
  { id: 'learn', name: '배우기', icon: '📘', desc: '개념과 예제 + 이해 확인' },
  { id: 'puzzle', name: '코드 퍼즐', icon: '🧩', desc: '출력 맞히기 · 빈칸 · 줄 맞추기 · 버그 찾기' },
  { id: 'code', name: '코딩 도전', icon: '⌨️', desc: '직접 코드를 짜서 통과하기' },
  { id: 'boss', name: '유닛 보스', icon: '🏆', desc: '왕관에 도전' },
];

const mk = (u, q, tag, i) => ({ ...q, key: `u${u.id}:${tag}${i}`, unit: u.id });

export function allPuzzles(u) { return (u.puzzles || []).map((q, i) => mk(u, q, 'p', i)); }
export function allTasks(u) { return (u.tasks || []).map((q, i) => mk(u, { t: 'code', ...q }, 't', i)); }
export const bossTask = (u) => mk(u, { t: 'code', ...u.boss }, 'boss', '');

export function lessonQuestions(u, stage) {
  if (stage === 0) {
    const out = (u.learn || []).map((c, i) => ({ t: 'learn', ...c, key: null, unit: u.id }));
    (u.check || []).forEach((q, i) => out.push(mk(u, { t: 'mc', ...q }, 'c', i)));
    return out;
  }
  if (stage === 1) return shuffle(allPuzzles(u));
  if (stage === 2) return allTasks(u);
  const ps = shuffle(allPuzzles(u)).slice(0, 4);
  return [...ps, bossTask(u)];
}

// 복습: 배운 유닛의 퍼즐 중 기한이 된 것 → 부족하면 약한 것
export function learnedUnits() { return UNITS.filter((u) => store.unit(u.id).st[0] > 0); }
export function reviewQuestions(n = 10) {
  const pool = learnedUnits().flatMap((u) => allPuzzles(u));
  if (!pool.length) return [];
  const due = shuffle(pool.filter((q) => srsDue(q.key)));
  const rest = shuffle(pool.filter((q) => !srsDue(q.key))).sort((a, b) => ((store.s.srs[a.key] || { box: 0 }).box) - ((store.s.srs[b.key] || { box: 0 }).box));
  const picked = [...due, ...rest].slice(0, n);
  const tasks = shuffle(learnedUnits().flatMap((u) => allTasks(u))).slice(0, 1);
  return [...picked, ...tasks];
}
export const dueCount = () => learnedUnits().flatMap((u) => allPuzzles(u)).filter((q) => srsDue(q.key)).length;

export function checkpointQuestions(sec) {
  const us = UNITS.filter((u) => u.id >= sec.from && u.id <= sec.to);
  const ps = shuffle(us.flatMap((u) => allPuzzles(u))).slice(0, 10);
  const ts = shuffle(us.flatMap((u) => allTasks(u))).slice(0, 2);
  return [...ps, ...ts];
}
export { UNITS, SECTIONS };
