import { dayKey } from './util.js';

const KEY = 'pycode-save-v1';
const blank = () => ({
  xp: 0, streak: 0, best: 0, lastDay: '', today: { day: '', xp: 0 }, goal: 60,
  units: {},   // { [id]: { st:[배우기, 퍼즐, 코딩, 보스] 별 } }
  srs: {},     // { key: { box, due } }
  codes: {},   // 마지막으로 쓴 코드 (과제별)
  play: 'print("Hello, Python!")\n',
  stats: { runs: 0, solved: 0 },
  settings: { open: false, theme: '', big: false },
});
let mem;
(function init() {
  let loaded = null;
  try { const t = localStorage.getItem(KEY); if (t) loaded = JSON.parse(t); } catch (e) { /* */ }
  const b = blank();
  mem = loaded ? { ...b, ...loaded, settings: { ...b.settings, ...(loaded.settings || {}) }, stats: { ...b.stats, ...(loaded.stats || {}) } } : b;
})();

export const store = {
  get s() { return mem; },
  save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* */ } },
  reset() { mem = blank(); this.save(); },
  unit(id) { const u = mem.units[id] || (mem.units[id] = { st: [] }); while (u.st.length < 4) u.st.push(0); return u; },
  addXp(n) {
    const d = dayKey();
    if (mem.today.day !== d) mem.today = { day: d, xp: 0 };
    mem.today.xp += n; mem.xp += n;
    if (mem.lastDay !== d) {
      const y = dayKey(Date.now() - 86400000);
      mem.streak = mem.lastDay === y ? mem.streak + 1 : 1;
      mem.lastDay = d; mem.best = Math.max(mem.best, mem.streak);
    }
    this.save();
  },
  todayXp() { return mem.today.day === dayKey() ? mem.today.xp : 0; },
  streakNow() { const d = dayKey(), y = dayKey(Date.now() - 86400000); return mem.lastDay === d || mem.lastDay === y ? mem.streak : 0; },
};

const DAYS = [0, 1, 2, 4, 8, 16];
export function srsMark(key, ok) {
  const e = mem.srs[key] || (mem.srs[key] = { box: 0, due: 0 });
  e.box = ok ? Math.min(5, e.box + 1) : Math.max(0, e.box - 2);
  e.due = Date.now() + DAYS[e.box] * 86400000;
}
export const srsDue = (k) => { const e = mem.srs[k]; return !!e && e.due <= Date.now(); };
export function srsTouch(k) { if (!mem.srs[k]) mem.srs[k] = { box: 0, due: Date.now() + 43200000 }; }

// 레벨: 총 XP 기준
export const LEVELS = [['새싹 코더', 0], ['파이썬 입문자', 150], ['변수 탐험가', 500], ['반복의 달인', 1200], ['리스트 정복자', 2400], ['함수 마법사', 4200], ['파이썬 개발자', 6500], ['코드 마스터', 9500]];
export function levelOf(xp) { let i = 0; LEVELS.forEach(([, t], k) => { if (xp >= t) i = k; }); const nx = LEVELS[i + 1]; return { i, name: LEVELS[i][0], next: nx ? nx[1] : null, base: LEVELS[i][1] }; }
