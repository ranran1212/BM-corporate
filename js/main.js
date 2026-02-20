/**
 * Main — boot sequence, auto-demo, and input handling.
 */
import { Terminal } from './terminal.js';
import commands from './commands.js';

/* ── DOM refs ── */
const outputEl = document.querySelector('.output');
const wrapEl = document.querySelector('.output-wrap');
const inputEl = document.querySelector('.input-bar__field');

const term = new Terminal(outputEl, wrapEl);

/* ── auto-demo state ── */
let autoMode = true;
let autoStep = 0;
let autoTimer = null;

/* ── command execution ── */

function exec(raw) {
  if (autoMode) {
    autoMode = false;
    clearTimeout(autoTimer);
    autoTimer = null;
  }

  const trimmed = raw.trim();
  if (!trimmed) return;

  term.promptLine(trimmed);

  const [cmd, ...rest] = trimmed.split(/\s+/);
  const args = rest.join(' ');
  const handler = commands[cmd.toLowerCase()];

  if (handler) {
    handler(term, args);
  } else {
    term.typeLines([
      { html: `<span class="t-red">command not found: ${Terminal.escapeHtml(cmd)}</span>` },
      { html: '<span class="t-dim">Type \'help\' for available commands.</span>' },
      { html: '' },
    ]);
  }
}

/* ── auto-demo ── */

const DEMO_SEQUENCE = [
  { cmd: 'about',    delay: 3000 },
  { cmd: 'services', delay: 4000 },
  { cmd: 'ran2',     delay: 3000 },
  { cmd: 'bmh',      delay: 3000 },
  { cmd: 'dev',      delay: 3000 },
  { cmd: 'sukipi',   delay: 2500 },
  { cmd: 'oniden',   delay: 2500 },
  { cmd: 'floppy',   delay: 2500 },
  { cmd: 'contact',  delay: 3000 },
  { cmd: 'spec',     delay: 3000 },
];

function runDemo() {
  if (!autoMode || autoStep >= DEMO_SEQUENCE.length) {
    if (autoMode) {
      term.addRaw('<span class="t-dim">───────────────────────────────────────</span>\n');
      term.addRaw('<span class="t-teal">Demo complete. Type commands to explore, or \'demo\' to replay.</span>\n\n');
      autoMode = false;
    }
    return;
  }

  const { cmd, delay } = DEMO_SEQUENCE[autoStep++];
  term.promptLine(cmd);
  commands[cmd]?.(term);
  autoTimer = setTimeout(runDemo, delay);
}

commands.demo = (term) => {
  autoMode = true;
  autoStep = 0;
  term.typeLines([
    { html: '<span class="t-dim">Starting auto-demo...</span>' },
    { html: '' },
  ]);
  autoTimer = setTimeout(runDemo, 1000);
};

/* ── event listeners ── */

inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = inputEl.value;
    inputEl.value = '';
    exec(value);
  }
});

// Quick command buttons — event delegation
document.querySelector('.quick-cmds').addEventListener('click', (e) => {
  const btn = e.target.closest('.quick-cmds__btn');
  if (!btn) return;
  exec(btn.dataset.cmd);
  inputEl.focus();
});

// Focus input on tap
wrapEl.addEventListener('click', () => inputEl.focus());

/* ── boot ── */

const BOOT_LINES = [
  { html: '<span class="t-dim">[boot] Blue Menhera OS v2.026</span>',                                                         delay: 60 },
  { html: '<span class="t-dim">[boot] loading ゆがみ kernel...</span>',                                                        delay: 60 },
  { html: '<span class="t-dim">[boot] initializing services... 6 found</span>',                                                delay: 60 },
  { html: '<span class="t-dim">[boot] REIGETSU compatibility layer: <span class="t-strike">enabled</span> <span class="t-red">removed</span></span>', delay: 60 },
  { html: '<span class="t-dim">[boot] ready.</span>',                                                                          delay: 40 },
  { html: '' },
  { html: '<span class="t-teal">Welcome to <span class="t-bold">Blue Menhera Corporation</span> terminal.</span>' },
  { html: '<span class="t-dim">Type \'help\' for commands, or wait for auto-demo.</span>' },
  { html: '' },
];

term.typeLines(BOOT_LINES).then(() => {
  autoTimer = setTimeout(() => {
    if (autoMode) runDemo();
  }, 3500);
});
