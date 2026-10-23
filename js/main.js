import { render, go, setTab } from './screens.js';
import { store } from './store.js';
import { UNITS } from './data/index.js';
import { startEngine } from './py.js';

render();
setTimeout(() => { try { startEngine(); } catch (e) { /* */ } }, 2500);
window.__app = { store, UNITS, go, setTab };

if ('serviceWorker' in navigator && location.protocol.startsWith('http') && location.hostname !== 'localhost') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
