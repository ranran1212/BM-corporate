/**
 * Terminal — rendering engine for the terminal UI.
 * Handles output, scrolling, and typewriter effects.
 */
export class Terminal {
  /** @param {HTMLElement} outputEl  @param {HTMLElement} wrapEl */
  constructor(outputEl, wrapEl) {
    this.output = outputEl;
    this.wrap = wrapEl;
    this.typing = false;
  }

  /* ── helpers ── */

  scroll() {
    this.wrap.scrollTop = this.wrap.scrollHeight;
  }

  static escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ── output primitives ── */

  addRaw(html) {
    const frag = document.createRange().createContextualFragment(html);
    this.output.appendChild(frag);
    this.scroll();
  }

  addLine(text, cls) {
    const span = document.createElement('span');
    if (cls) span.className = cls;
    span.textContent = `${text}\n`;
    this.output.appendChild(span);
    this.scroll();
  }

  promptLine(cmd) {
    this.addRaw(
      `<span class="t-teal t-bold">bm $ </span><span class="t-cmd">${Terminal.escapeHtml(cmd)}</span>\n`
    );
  }

  clear() {
    this.output.innerHTML = '';
  }

  /* ── typewriter effect ── */

  /**
   * Renders lines sequentially with optional delays.
   * Each entry is either:
   *   - a string (rendered immediately)
   *   - { html, delay? }
   *   - { pause }
   * Returns a Promise that resolves when all lines are rendered.
   */
  typeLines(lines) {
    this.typing = true;

    return new Promise((resolve) => {
      let i = 0;

      const next = () => {
        if (i >= lines.length) {
          this.typing = false;
          resolve();
          return;
        }

        const line = lines[i++];

        if (typeof line === 'string') {
          this.addRaw(`${line}\n`);
          setTimeout(next, 30);
        } else if (line.html !== undefined) {
          this.addRaw(`${line.html}\n`);
          setTimeout(next, line.delay || 30);
        } else if (line.pause) {
          setTimeout(next, line.pause);
        } else {
          next();
        }
      };

      next();
    });
  }
}
