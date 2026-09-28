/**
 * BUG RUN — minijuego arcade (estilo "dinosaurio de Chrome") con el monigote.
 * Se carga bajo demanda (import dinámico) al introducir el código Konami o pulsar "Modo arcade":
 * no pesa nada en la carga inicial de la web.
 */
import { MASCOT_PALETTE } from '@/data/mascot';
import { BUG_PALETTE, BUG_SPRITE, RUN_FRAMES } from '@/data/arcade';

type Texts = {
  title: string;
  start: string;
  over: string;
  retry: string;
  score: string;
  best: string;
  close: string;
  hint: string;
  top: string;
  name: string;
  save: string;
  saved: string;
  failed: string;
  empty: string;
};

const BEST_KEY = 'gs-bugrun-best';
const NAME_KEY = 'gs-bugrun-name';
/** Ranking global (PHP + MySQL en el mismo Hostinger). Si no responde, el juego funciona igual sin él. */
const API = '/api/scores.php';

type Row = { name: string; score: number };

const api = async (body?: object) => {
  const res = await fetch(API, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {});
  if (!res.ok || !res.headers.get('content-type')?.includes('json')) throw new Error(String(res.status));
  return res.json();
};

const esc = (s: string) => s.replace(/[^A-Z0-9 ]/gi, '');
const VH = 140;
const GROUND = 118;

/** Pinta una rejilla de caracteres en un canvas pequeño (1 px por carácter). */
const spriteCanvas = (rows: readonly string[], pal: Record<string, string>) => {
  const c = document.createElement('canvas');
  c.width = rows[0].length;
  c.height = rows.length;
  const ctx = c.getContext('2d')!;
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const col = pal[row[x]];
      if (col) {
        ctx.fillStyle = col;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  });
  return c;
};

const STYLE = `
.arcade{position:fixed;inset:0;z-index:95;display:grid;place-items:center;background:rgba(10,7,6,.88);padding:1rem}
.arcade-box{width:min(760px,100%);border:3px solid #0a0706;border-radius:1.4rem;background:#221c17;box-shadow:inset 0 2px 0 rgba(255,243,230,.08),0 8px 0 #0a0706,0 0 0 3px rgba(240,180,41,.3);padding:1rem}
.arcade-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.75rem;font-family:var(--font-pixel);text-transform:uppercase;font-size:12px;color:#f0b429;letter-spacing:.08em}
.arcade-title{font-family:var(--font-display);font-weight:900;font-size:1.4rem;color:#fff3e6;-webkit-text-stroke:.08em #0a0706;paint-order:stroke fill;text-shadow:.04em .05em 0 #f0b429;white-space:nowrap}
.arcade canvas{display:block;width:100%;height:auto;image-rendering:pixelated;border:3px solid #0a0706;border-radius:.8rem;background:#1a1511;touch-action:manipulation;cursor:pointer}
.arcade-foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;margin-top:.75rem;font-family:var(--font-pixel);font-size:10px;text-transform:uppercase;color:rgba(255,243,230,.65);letter-spacing:.06em}
.arcade-close{border:3px solid #0a0706;border-radius:.7rem;background:#fff3e6;color:#120e0b;padding:.35rem .8rem;font-family:var(--font-pixel);font-size:11px;box-shadow:0 4px 0 #0a0706;cursor:pointer}
.arcade-close:active{transform:translateY(3px);box-shadow:0 1px 0 #0a0706}
.arcade{overflow-y:auto}
.arcade-board{margin-top:.75rem;border:3px solid #0a0706;border-radius:.8rem;background:#1a1511;padding:.7rem .9rem;font-family:var(--font-pixel);text-transform:uppercase;letter-spacing:.06em;font-size:11px;color:#fff3e6}
.arcade-board[hidden],.arcade-form[hidden]{display:none}
.arcade-board h3{margin:0 0 .5rem;font-size:12px;color:#f0b429}
.arcade-board ol{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:1fr;gap:.25rem .9rem}
@media (min-width:560px){.arcade-board ol{grid-template-columns:1fr 1fr;grid-auto-flow:column;grid-template-rows:repeat(5,auto)}}
.arcade-board li{display:flex;justify-content:space-between;gap:.5rem;padding:.15rem .35rem;border-radius:.35rem}
.arcade-board li b{display:inline-block;color:#f0b429;font-weight:400;min-width:2.4em}
.arcade-board li.me{background:#f0b429;color:#120e0b}
.arcade-board li.me b{color:#120e0b}
.arcade-form{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem;margin-bottom:.7rem}
.arcade-form input{width:4.2em;border:3px solid #0a0706;border-radius:.5rem;background:#fff3e6;color:#120e0b;padding:.3rem .4rem;font-family:var(--font-pixel);font-size:14px;text-transform:uppercase;letter-spacing:.2em;text-align:center}
.arcade-form button{border:3px solid #0a0706;border-radius:.6rem;background:#f0b429;color:#120e0b;padding:.3rem .7rem;font-family:var(--font-pixel);font-size:11px;text-transform:uppercase;box-shadow:0 3px 0 #0a0706;cursor:pointer}
.arcade-msg{margin:0 0 .5rem;color:rgba(255,243,230,.7)}
.arcade-msg:empty{display:none}
`;

export function openArcade(texts: Texts, onScore?: (score: number) => void) {
  // Resolución interna: en móvil más estrecha para que los sprites se vean más grandes.
  const VW = window.innerWidth < 640 ? 220 : 320;
  const touch = window.matchMedia('(pointer: coarse)').matches;
  if (document.querySelector('.arcade')) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!document.getElementById('arcade-style')) {
    const st = document.createElement('style');
    st.id = 'arcade-style';
    st.textContent = STYLE;
    document.head.appendChild(st);
  }

  const lastFocus = document.activeElement as HTMLElement | null;
  const root = document.createElement('div');
  root.className = 'arcade';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', texts.title);
  root.innerHTML = `
    <div class="arcade-box">
      <div class="arcade-top"><span class="arcade-title">${texts.title}</span><span data-score aria-live="off"></span></div>
      <canvas width="${VW}" height="${VH}" aria-label="${texts.hint}"></canvas>
      <div class="arcade-foot"><span>${texts.hint}</span><span class="sr-only" data-announce aria-live="polite"></span><button type="button" class="arcade-close">${touch ? '✕' : 'Esc ·'} ${texts.close}</button></div>
      <section class="arcade-board" data-board hidden aria-live="polite">
        <form class="arcade-form" data-form hidden>
          <label for="arcade-name">${texts.name}</label>
          <input id="arcade-name" name="name" maxlength="3" autocomplete="off" autocapitalize="characters" spellcheck="false" pattern="[A-Za-z]{3}" required />
          <button type="submit">${texts.save}</button>
        </form>
        <p class="arcade-msg" data-msg></p>
        <h3>★ ${texts.top}</h3>
        <ol data-list></ol>
      </section>
    </div>`;
  document.body.appendChild(root);
  document.documentElement.style.overflow = 'hidden';

  const canvas = root.querySelector('canvas')!;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  const scoreEl = root.querySelector<HTMLElement>('[data-score]')!;
  const announce = root.querySelector<HTMLElement>('[data-announce]')!;
  const closeBtn = root.querySelector<HTMLButtonElement>('.arcade-close')!;
  closeBtn.focus();

  // --- Ranking global -------------------------------------------------
  const board = root.querySelector<HTMLElement>('[data-board]')!;
  const form = root.querySelector<HTMLFormElement>('[data-form]')!;
  const nameInput = form.querySelector('input')!;
  const msg = root.querySelector<HTMLElement>('[data-msg]')!;
  const list = root.querySelector<HTMLOListElement>('[data-list]')!;
  let token: string | null = null;
  let pending = 0; // puntuación de la partida terminada, pendiente de guardar
  try {
    nameInput.value = localStorage.getItem(NAME_KEY) ?? '';
  } catch {
    /* sin almacenamiento */
  }

  const render = (rows: Row[], highlight?: { name: string; score: number }) => {
    let marked = false;
    list.innerHTML = rows.length
      ? rows
          .map((r, i) => {
            const me = !marked && highlight && r.name === highlight.name && r.score === highlight.score;
            if (me) marked = true;
            return `<li${me ? ' class="me"' : ''}><span><b>${i + 1}.</b>${esc(r.name)}</span><span>${String(r.score).padStart(5, '0')}</span></li>`;
          })
          .join('')
      : `<li>${texts.empty}</li>`;
    board.hidden = false;
  };

  api()
    .then((d: { scores: Row[] }) => render(d.scores))
    .catch(() => {
      /* sin backend (p. ej. en local): el juego sigue funcionando sin ranking */
    });

  const newRun = () => {
    token = null;
    pending = 0;
    form.hidden = true;
    msg.textContent = '';
    if (board.hidden) return;
    api({ action: 'start' })
      .then((d: { token: string }) => (token = d.token))
      .catch(() => (token = null));
  };

  const offerSave = (sc: number) => {
    if (board.hidden || !token || sc < 1) return;
    pending = sc;
    form.hidden = false;
    msg.textContent = '';
    nameInput.focus({ preventScroll: true });
    nameInput.select();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (name.length !== 3 || !token || !pending) return;
    const score = pending;
    form.hidden = true;
    try {
      localStorage.setItem(NAME_KEY, name);
    } catch {
      /* sin almacenamiento */
    }
    api({ action: 'submit', token, name, score })
      .then((d: { rank: number; scores: Row[] }) => {
        msg.textContent = texts.saved.replace('{rank}', String(d.rank));
        render(d.scores, { name, score });
      })
      .catch(() => (msg.textContent = texts.failed));
    token = null;
    pending = 0;
    closeBtn.focus();
  });

  const pal = { ...MASCOT_PALETTE };
  const run = [spriteCanvas(RUN_FRAMES.runA, pal), spriteCanvas(RUN_FRAMES.runB, pal)];
  const jumpImg = spriteCanvas(RUN_FRAMES.jump, pal);
  const bugImg = spriteCanvas(BUG_SPRITE, BUG_PALETTE);

  let best = 0;
  try {
    best = Number(localStorage.getItem(BEST_KEY) ?? 0) || 0;
  } catch {
    best = 0;
  }

  // Estado del juego
  type Bug = { x: number; y: number; w: number; h: number; fly: boolean };
  let state: 'ready' | 'play' | 'over' = 'ready';
  let y = 0; // altura del salto (0 = suelo)
  let vy = 0;
  let speed = 150; // px/s en resolución interna
  let dist = 0;
  let bugs: Bug[] = [];
  let nextBug = 1.2;
  let frame = 0;
  let raf = 0;
  let last = performance.now();
  let groundOffset = 0;

  const P = { x: 22, w: 32, h: 42 }; // sprite a escala 1:1 (pixel art sin deformar)
  const score = () => Math.floor(dist / 8);

  const reset = () => {
    y = 0;
    vy = 0;
    speed = 150;
    dist = 0;
    bugs = [];
    nextBug = 1.1;
  };

  const jump = () => {
    if (state === 'ready' || state === 'over') {
      state = 'play';
      reset();
      newRun();
      return;
    }
    if (y === 0) vy = 360;
  };

  const spawn = () => {
    // A partir de 150 puntos pueden salir parejas de bugs (hay que saltar más largo).
    const pair = score() > 150 && Math.random() < 0.35;
    bugs.push({ x: VW + 10, y: GROUND - 12, w: 14, h: 12, fly: false });
    if (pair) bugs.push({ x: VW + 26, y: GROUND - 12, w: 14, h: 12, fly: false });
    // separación aleatoria que se acorta con la velocidad (siempre saltable)
    nextBug = Math.max(0.55, 1.35 - speed / 600) + Math.random() * 0.9;
  };

  const hit = (b: Bug) => {
    const px = P.x + 9;
    const py = GROUND - P.h - y + 4;
    const pw = P.w - 18;
    const ph = P.h - 6;
    return px < b.x + b.w - 2 && px + pw > b.x + 2 && py < b.y + b.h - 2 && py + ph > b.y + 2;
  };

  const drawText = (txt: string, x: number, yy: number, size = 8, color = '#fff3e6', align: CanvasTextAlign = 'center') => {
    ctx.font = `${size}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-tiny') || 'monospace'}, monospace`;
    ctx.textAlign = align;
    ctx.fillStyle = '#0a0706';
    ctx.fillText(txt, x + 1, yy + 1);
    ctx.fillStyle = color;
    ctx.fillText(txt, x, yy);
  };

  const draw = () => {
    // cielo de atardecer por bandas (sin degradados suaves: estética pixel)
    const bands = ['#1a1511', '#221a14', '#2c2118', '#3a2a1c', '#4a3320'];
    bands.forEach((c, i) => {
      ctx.fillStyle = c;
      ctx.fillRect(0, (i * GROUND) / bands.length, VW, GROUND / bands.length + 1);
    });
    // sol pixel
    const sx = VW - 70;
    ctx.fillStyle = '#f0b429';
    ctx.fillRect(sx + 6, 26, 16, 28);
    ctx.fillRect(sx + 2, 30, 24, 20);
    ctx.fillRect(sx, 34, 28, 12);
    ctx.fillStyle = '#ffd06a';
    ctx.fillRect(sx + 8, 30, 8, 6);
    // suelo con marcas que se desplazan
    ctx.fillStyle = '#f0b429';
    ctx.fillRect(0, GROUND, VW, 2);
    ctx.fillStyle = '#6b4a2e';
    ctx.fillRect(0, GROUND + 2, VW, VH - GROUND - 2);
    ctx.fillStyle = '#8a6242';
    for (let x = -groundOffset % 24; x < VW; x += 24) ctx.fillRect(x, GROUND + 6, 6, 2);
    for (let x = (-groundOffset * 0.6) % 40; x < VW; x += 40) ctx.fillRect(x + 12, GROUND + 13, 4, 2);

    // bugs
    bugs.forEach((b) => ctx.drawImage(bugImg, Math.round(b.x), Math.round(b.y), b.w, b.h));

    // jugador
    const img = y > 0 ? jumpImg : run[Math.floor(frame * 10) % 2];
    ctx.drawImage(img, P.x, Math.round(GROUND - P.h - y + 1));

    // HUD
    const s = String(score()).padStart(5, '0');
    scoreEl.textContent = `${texts.score} ${s} · ${texts.best} ${String(best).padStart(5, '0')}`;

    if (state === 'ready') {
      drawText(texts.title, VW / 2, 52, 16, '#f0b429');
      drawText(texts.start, VW / 2, 74, 8);
    } else if (state === 'over') {
      drawText(texts.over, VW / 2, 52, 16, '#f0b429');
      drawText(`${texts.score} ${score()}`, VW / 2, 70, 8);
      drawText(texts.retry, VW / 2, 86, 8);
    }
  };

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (state === 'play') {
      frame += dt;
      speed = Math.min(420, speed + dt * 9);
      dist += speed * dt;
      groundOffset += speed * dt;
      // física del salto
      if (y > 0 || vy > 0) {
        vy -= 1000 * dt;
        y = Math.max(0, y + vy * dt);
        if (y === 0) vy = 0;
      }
      nextBug -= dt;
      if (nextBug <= 0) spawn();
      bugs.forEach((b) => (b.x -= speed * dt));
      bugs = bugs.filter((b) => b.x > -30);
      if (bugs.some(hit)) {
        state = 'over';
        const sc = score();
        if (sc > best) {
          best = sc;
          try {
            localStorage.setItem(BEST_KEY, String(best));
          } catch {
            /* sin almacenamiento */
          }
        }
        announce.textContent = `${texts.over}. ${texts.score} ${sc}. ${texts.best} ${best}.`;
        onScore?.(sc);
        offerSave(sc);
      }
    }
    draw();
    raf = requestAnimationFrame(tick);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (form.contains(e.target as Node)) {
      // escribiendo el nombre: las teclas no controlan el juego
      return;
    } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || (e.key === 'Enter' && document.activeElement !== closeBtn)) {
      e.preventDefault();
      jump();
    } else if (e.key === 'r' && state === 'over') {
      jump();
    }
  };
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };

  function close() {
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', onKey, true);
    document.removeEventListener('visibilitychange', onVisibility);
    document.documentElement.style.overflow = '';
    root.remove();
    lastFocus?.focus?.();
  }

  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    jump();
  });
  closeBtn.addEventListener('click', close);
  root.addEventListener('click', (e) => {
    if (e.target === root) close();
  });
  window.addEventListener('keydown', onKey, true);
  document.addEventListener('visibilitychange', onVisibility);

  if (reduced) speed = 120;
  draw();
  raf = requestAnimationFrame(tick);
}
