/**
 * BUG RUN — minijuego arcade (estilo "dinosaurio de Chrome") con el monigote.
 * Se carga bajo demanda (import dinámico) al introducir el código Konami o pulsar "Modo arcade":
 * no pesa nada en la carga inicial de la web.
 *
 * Menú con pestañas (Jugar / Ranking / Cómo jugar), sonidos 8-bit sintetizados y ranking global
 * paginado contra /api/scores.php. Sin backend (p. ej. en local) el juego funciona igual sin ranking.
 */
import { MASCOT_PALETTE } from '@/data/mascot';
import { BUG_PALETTE, BUG_SPRITE, DUCK_FRAMES, FLY_FRAMES, RUN_FRAMES } from '@/data/arcade';
import { isMuted, setMuted, sfx, unlockAudio } from './arcade-sound';

type Texts = {
  title: string;
  start: string;
  over: string;
  retry: string;
  pause: string;
  resume: string;
  score: string;
  best: string;
  close: string;
  hint: string;
  hintTouch: string;
  jump: string;
  duck: string;
  top: string;
  name: string;
  save: string;
  saved: string;
  notBest: string;
  outOfRanking: string;
  dailyLimit: string;
  failed: string;
  empty: string;
  invalid: string;
  rude: string;
  tabPlay: string;
  tabRank: string;
  tabHelp: string;
  sound: string;
  on: string;
  off: string;
  page: string;
  prev: string;
  next: string;
  players: string;
  worldBest: string;
  loading: string;
  offline: string;
  help: { title: string; items: string[] }[];
};

type Row = { rank: number; name: string; score: number };
type Page = { scores: Row[]; page: number; pages: number; total: number };
type Tab = 'play' | 'rank' | 'help';

const BEST_KEY = 'gs-bugrun-best';
const NAME_KEY = 'gs-bugrun-name';
const API = '/api/scores.php';
const MIN_SCORE = 10; // igual que en el servidor
const VH = 140;
const GROUND = 118;

const api = async (body?: object, query = '') => {
  const res = await fetch(
    API + query,
    body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {},
  );
  if (!res.headers.get('content-type')?.includes('json')) throw new Error(String(res.status));
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error ?? String(res.status));
  return data;
};

/** Nombre del ranking: 3-12 letras (con tildes/ñ), números, "_" o "-". Mismas reglas que el servidor. */
const NAME_RE = /^[\p{L}\p{N}_-]{3,12}$/u;
const cleanName = (s: string) => s.replace(/[^\p{L}\p{N}_-]/gu, '').slice(0, 12);
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const pad = (n: number) => String(n).padStart(5, '0');

/** Pinta una rejilla de caracteres en un canvas pequeño (1 px por carácter). */
const spriteCanvas = (rows: readonly string[], pal: Record<string, string>) => {
  const c = document.createElement('canvas');
  c.width = rows[0].length;
  c.height = rows.length;
  const g = c.getContext('2d')!;
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const col = pal[row[x]];
      if (col) {
        g.fillStyle = col;
        g.fillRect(x, y, 1, 1);
      }
    }
  });
  return c;
};

const STYLE = `
.arcade{position:fixed;inset:0;z-index:95;display:grid;place-items:center;background:rgba(10,7,6,.88);padding:1rem;overflow-y:auto}
.arcade-box{width:min(760px,100%);border:3px solid #0a0706;border-radius:1.4rem;background:#221c17;box-shadow:inset 0 2px 0 rgba(255,243,230,.08),0 8px 0 #0a0706,0 0 0 3px rgba(240,180,41,.3);padding:1rem}
.arcade-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem 1rem;margin-bottom:.75rem;font-family:var(--font-pixel);text-transform:uppercase;font-size:12px;color:#f0b429;letter-spacing:.08em}
.arcade-title{font-family:var(--font-display);font-weight:900;font-size:1.4rem;color:#fff3e6;-webkit-text-stroke:.08em #0a0706;paint-order:stroke fill;text-shadow:.04em .05em 0 #f0b429;white-space:nowrap}
.arcade-tabs{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem;margin-bottom:.75rem}
.arcade-tabs .grow{flex:1}
.arcade button{font-family:var(--font-pixel);text-transform:uppercase;letter-spacing:.06em;cursor:pointer}
.arcade-tab,.arcade-chip{border:3px solid #0a0706;border-radius:.7rem;background:#1a1511;color:rgba(255,243,230,.75);padding:.35rem .7rem;font-size:11px;box-shadow:0 3px 0 #0a0706;transition:transform .1s}
.arcade-tab:hover,.arcade-chip:hover{color:#fff3e6;transform:translateY(-1px)}
.arcade-tab[aria-selected="true"]{background:#f0b429;color:#120e0b}
.arcade-tab:active,.arcade-chip:active{transform:translateY(2px);box-shadow:0 1px 0 #0a0706}
.arcade-chip[aria-pressed="false"]{color:rgba(255,243,230,.45)}
.arcade-close{border:3px solid #0a0706;border-radius:.7rem;background:#fff3e6;color:#120e0b;padding:.35rem .8rem;font-size:11px;box-shadow:0 3px 0 #0a0706}
.arcade-close:active{transform:translateY(2px);box-shadow:0 1px 0 #0a0706}
.arcade [hidden]{display:none!important}
.arcade canvas{display:block;width:100%;height:auto;image-rendering:pixelated;border:3px solid #0a0706;border-radius:.8rem;background:#1a1511;touch-action:manipulation;cursor:pointer}
.arcade-line{margin:.6rem 0 0;font-family:var(--font-pixel);font-size:10px;text-transform:uppercase;color:rgba(255,243,230,.65);letter-spacing:.06em}
.arcade-card{border:3px solid #0a0706;border-radius:.8rem;background:#1a1511;padding:.8rem .9rem;font-family:var(--font-pixel);text-transform:uppercase;letter-spacing:.06em;font-size:11px;color:#fff3e6}
.arcade-card h3{margin:0;font-size:12px;color:#f0b429}
.arcade-save{margin-top:.75rem}
.arcade-form{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem}
.arcade-form input{width:12.5em;max-width:100%;border:3px solid #0a0706;border-radius:.5rem;background:#fff3e6;color:#120e0b;padding:.3rem .5rem;font-family:var(--font-pixel);font-size:14px;text-transform:uppercase;letter-spacing:.08em}
.arcade-form input[aria-invalid="true"]{border-color:#e0457b}
.arcade-form button{border:3px solid #0a0706;border-radius:.6rem;background:#f0b429;color:#120e0b;padding:.3rem .7rem;font-size:11px;box-shadow:0 3px 0 #0a0706}
.arcade-hint{flex-basis:100%;font-size:10px;color:rgba(255,243,230,.55)}
.arcade-hint.err{color:#ff8fb1}
.arcade-msg{margin:0;color:#f0b429}
.arcade-msg:empty{display:none}
.arcade-rank-head{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;margin-bottom:.6rem}
.arcade-rank-head span{font-size:10px;color:rgba(255,243,230,.55)}
.arcade-list{margin:0;padding:0;list-style:none;display:grid;gap:.2rem;min-height:15.5rem;align-content:start}
.arcade-list li{display:grid;grid-template-columns:3.2em 1fr auto;gap:.5rem;padding:.25rem .4rem;border-radius:.4rem}
.arcade-list li:nth-child(odd){background:rgba(255,243,230,.035)}
.arcade-list li b{color:#f0b429;font-weight:400}
.arcade-list li.medal-1 b{color:#ffd06a}.arcade-list li.medal-2 b{color:#dde6ee}.arcade-list li.medal-3 b{color:#d69c76}
.arcade-list li.me{background:#f0b429;color:#120e0b}
.arcade-list li.me b{color:#120e0b}
.arcade-list li.info{display:block;color:rgba(255,243,230,.6)}
.arcade-pager{display:flex;justify-content:center;align-items:center;gap:.8rem;margin-top:.7rem}
.arcade-pager button:disabled{opacity:.35;cursor:default;transform:none}
.arcade-help{display:grid;gap:.75rem}
.arcade-help ul{margin:.4rem 0 0;padding:0;list-style:none;display:grid;gap:.3rem;text-transform:none;font-family:var(--font-sans);font-size:14px;letter-spacing:0;color:rgba(255,243,230,.85)}
.arcade-help li::before{content:'▸ ';color:#f0b429}
.arcade-pad{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-top:.6rem}
.arcade-pad button{min-height:3.4rem;border:3px solid #0a0706;border-radius:.8rem;background:#f0b429;color:#120e0b;font-size:12px;box-shadow:0 4px 0 #0a0706;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}
.arcade-pad button[data-duck]{background:#fff3e6}
.arcade-pad button.is-down{transform:translateY(3px);box-shadow:0 1px 0 #0a0706}
.arcade-help kbd{font-family:var(--font-pixel);font-size:11px;border:2px solid #0a0706;border-radius:.3rem;background:#fff3e6;color:#120e0b;padding:0 .3rem}
@media (min-width:560px){.arcade-help{grid-template-columns:1fr 1fr}.arcade-help section:last-child{grid-column:1/-1}}
`;

export function openArcade(texts: Texts, onScore?: (score: number) => void) {
  if (document.querySelector('.arcade')) return;
  // Resolución interna: en móvil más estrecha para que los sprites se vean más grandes.
  const VW = window.innerWidth < 640 ? 220 : 320;
  const touch = window.matchMedia('(pointer: coarse)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!document.getElementById('arcade-style')) {
    const st = document.createElement('style');
    st.id = 'arcade-style';
    st.textContent = STYLE;
    document.head.appendChild(st);
  }

  const help = texts.help
    .map((s) => `<section class="arcade-card"><h3>${s.title}</h3><ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul></section>`)
    .join('');

  const lastFocus = document.activeElement as HTMLElement | null;
  const root = document.createElement('div');
  root.className = 'arcade';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', texts.title);
  root.innerHTML = `
    <div class="arcade-box">
      <div class="arcade-top"><span class="arcade-title">${texts.title}</span><span data-score aria-live="off"></span></div>
      <div class="arcade-tabs">
        <div role="tablist" aria-label="${texts.title}" style="display:contents">
          <button type="button" role="tab" class="arcade-tab" data-tab="play" id="arcade-t-play" aria-controls="arcade-p-play" aria-selected="true">▶ ${texts.tabPlay}</button>
          <button type="button" role="tab" class="arcade-tab" data-tab="rank" id="arcade-t-rank" aria-controls="arcade-p-rank" aria-selected="false" tabindex="-1">★ ${texts.tabRank}</button>
          <button type="button" role="tab" class="arcade-tab" data-tab="help" id="arcade-t-help" aria-controls="arcade-p-help" aria-selected="false" tabindex="-1">? ${texts.tabHelp}</button>
        </div>
        <span class="grow"></span>
        <button type="button" class="arcade-chip" data-sound aria-pressed="true"></button>
        <button type="button" class="arcade-close">${touch ? '✕' : 'Esc ·'} ${texts.close}</button>
      </div>

      <div role="tabpanel" id="arcade-p-play" aria-labelledby="arcade-t-play" data-panel="play">
        <canvas width="${VW}" height="${VH}" aria-label="${touch ? texts.hintTouch : texts.hint}"></canvas>
        ${touch ? `<div class="arcade-pad"><button type="button" data-jump>▲ ${texts.jump}</button><button type="button" data-duck>▼ ${texts.duck}</button></div>` : ''}
        <p class="arcade-line">${touch ? texts.hintTouch : texts.hint}</p>
        <span class="sr-only" data-announce aria-live="polite"></span>
        <div class="arcade-card arcade-save" data-save hidden>
          <form class="arcade-form" data-form>
            <label for="arcade-name">${texts.name}</label>
            <input id="arcade-name" name="name" maxlength="12" autocomplete="nickname" spellcheck="false" aria-describedby="arcade-name-hint" />
            <button type="submit">${texts.save}</button>
            <small id="arcade-name-hint" class="arcade-hint">${texts.invalid}</small>
          </form>
        </div>
        <p class="arcade-line arcade-msg" data-msg aria-live="polite"></p>
      </div>

      <div role="tabpanel" id="arcade-p-rank" aria-labelledby="arcade-t-rank" data-panel="rank" hidden>
        <div class="arcade-card">
          <div class="arcade-rank-head"><h3>★ ${texts.top}</h3><span data-total></span></div>
          <ol class="arcade-list" data-list aria-live="polite"></ol>
          <div class="arcade-pager" data-pager hidden>
            <button type="button" class="arcade-chip" data-prev aria-label="${texts.prev}">◀</button>
            <span data-pageinfo></span>
            <button type="button" class="arcade-chip" data-next aria-label="${texts.next}">▶</button>
          </div>
        </div>
      </div>

      <div role="tabpanel" id="arcade-p-help" aria-labelledby="arcade-t-help" data-panel="help" hidden>
        <div class="arcade-help">${help}</div>
      </div>
    </div>`;
  document.body.appendChild(root);
  document.documentElement.style.overflow = 'hidden';

  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const canvas = $<HTMLCanvasElement>('canvas');
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  const scoreEl = $('[data-score]');
  const announce = $('[data-announce]');
  const closeBtn = $<HTMLButtonElement>('.arcade-close');
  const soundBtn = $<HTMLButtonElement>('[data-sound]');
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
  const saveBox = $('[data-save]');
  const form = $<HTMLFormElement>('[data-form]');
  const nameInput = $<HTMLInputElement>('#arcade-name');
  const hint = $('.arcade-hint');
  const msg = $('[data-msg]');
  const list = $<HTMLOListElement>('[data-list]');
  const totalEl = $('[data-total]');
  const pager = $('[data-pager]');
  const pageInfo = $('[data-pageinfo]');
  const prevBtn = $<HTMLButtonElement>('[data-prev]');
  const nextBtn = $<HTMLButtonElement>('[data-next]');
  tabs[0].focus();

  // --- Sonido ---------------------------------------------------------
  const paintSound = () => {
    const on = !isMuted();
    soundBtn.textContent = `♪ ${on ? texts.on : texts.off}`;
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.setAttribute('aria-label', `${texts.sound}: ${on ? texts.on : texts.off}`);
  };
  const toggleSound = () => {
    setMuted(!isMuted());
    paintSound();
  };
  paintSound();
  soundBtn.addEventListener('click', toggleSound);

  // --- Pestañas -------------------------------------------------------
  let tab: Tab = 'play';
  const setTab = (next: Tab, focus = false) => {
    if (next === tab) return;
    // Ranking y Cómo jugar ocupan como mínimo lo que ocupa Jugar (la ventana no encoge al cambiar);
    // Jugar conserva siempre su altura natural, sin heredar la de pestañas más largas.
    if (tab === 'play') root.style.setProperty('--play-h', `${panels[0].offsetHeight}px`);
    if (state === 'play') state = 'pause';
    tab = next;
    tabs.forEach((t) => {
      const on = t.dataset.tab === next;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    panels.forEach((p) => {
      p.hidden = p.dataset.panel !== next;
      p.style.minHeight = p.hidden || p.dataset.panel === 'play' ? '' : 'var(--play-h)';
    });
    sfx.select();
    if (next === 'rank') void loadPage(page);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => setTab(t.dataset.tab as Tab));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      e.stopPropagation();
      const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      setTab(n.dataset.tab as Tab, true);
    });
  });

  // --- Ranking --------------------------------------------------------
  let online = false;
  let page = 1;
  let pages = 1;
  let highlight = 0; // puesto de la última puntuación guardada
  let worldBest: Row | null = null;
  let token: string | null = null;
  let pending = 0;
  try {
    nameInput.value = localStorage.getItem(NAME_KEY) ?? '';
  } catch {
    /* sin almacenamiento */
  }

  const renderPage = (d: Page) => {
    page = d.page;
    pages = d.pages;
    if (d.page === 1) worldBest = d.scores[0] ?? null;
    list.innerHTML = d.scores.length
      ? d.scores
          .map((r) => {
            const cls = [r.rank <= 3 ? `medal-${r.rank}` : '', r.rank === highlight ? 'me' : ''].filter(Boolean).join(' ');
            return `<li${cls ? ` class="${cls}"` : ''}><b>${r.rank}.</b><span>${esc(r.name)}</span><span>${pad(r.score)}</span></li>`;
          })
          .join('')
      : `<li class="info">${texts.empty}</li>`;
    totalEl.textContent = texts.players.replace('{n}', String(d.total));
    pager.hidden = d.pages <= 1;
    pageInfo.textContent = texts.page.replace('{page}', String(d.page)).replace('{pages}', String(d.pages));
    prevBtn.disabled = d.page <= 1;
    nextBtn.disabled = d.page >= d.pages;
  };

  const loadPage = async (n: number) => {
    if (!online) {
      list.innerHTML = `<li class="info">${texts.offline}</li>`;
      pager.hidden = true;
      totalEl.textContent = '';
      return;
    }
    list.setAttribute('aria-busy', 'true');
    try {
      renderPage(await api(undefined, `?page=${n}`));
    } catch {
      list.innerHTML = `<li class="info">${texts.offline}</li>`;
    } finally {
      list.removeAttribute('aria-busy');
    }
  };
  prevBtn.addEventListener('click', () => {
    sfx.select();
    void loadPage(page - 1);
  });
  nextBtn.addEventListener('click', () => {
    sfx.select();
    void loadPage(page + 1);
  });

  api(undefined, '?page=1')
    .then((d: Page) => {
      online = true;
      renderPage(d);
    })
    .catch(() => {
      /* sin backend: el juego sigue funcionando sin ranking */
    });

  const newRun = () => {
    token = null;
    pending = 0;
    saveBox.hidden = true;
    msg.textContent = '';
    if (!online) return;
    api({ action: 'start' })
      .then((d: { token: string }) => (token = d.token))
      .catch(() => (token = null));
  };

  const offerSave = (sc: number) => {
    if (sc < MIN_SCORE) return;
    // Sin conexión con el ranking: decirlo claro en vez de no mostrar nada
    if (!online || !token) {
      msg.textContent = texts.offline;
      return;
    }
    pending = sc;
    saveBox.hidden = false;
    nameError(null);
    nameInput.focus({ preventScroll: true });
    nameInput.select();
  };

  const nameError = (text: string | null) => {
    hint.textContent = text ?? texts.invalid;
    hint.classList.toggle('err', text !== null);
    nameInput.setAttribute('aria-invalid', String(text !== null));
    if (text) {
      sfx.error();
      nameInput.focus();
    }
  };
  nameInput.addEventListener('input', () => {
    const clean = cleanName(nameInput.value);
    if (clean !== nameInput.value) nameInput.value = clean;
    nameError(null);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = cleanName(nameInput.value.trim());
    if (!NAME_RE.test(name)) return nameError(texts.invalid);
    if (!token || !pending) return;
    const score = pending;
    const button = form.querySelector('button')!;
    button.disabled = true;
    api({ action: 'submit', token, name, score })
      .then((d: Page & { rank: number; best: number; improved: boolean }) => {
        try {
          localStorage.setItem(NAME_KEY, name);
        } catch {
          /* sin almacenamiento */
        }
        token = null;
        pending = 0;
        saveBox.hidden = true;
        highlight = d.rank;
        renderPage(d);
        if (d.rank === 1) worldBest = d.scores[0];
        if (!d.rank) {
          msg.textContent = texts.outOfRanking;
          sfx.error();
          return;
        }
        msg.textContent = d.improved
          ? texts.saved.replace('{rank}', String(d.rank))
          : texts.notBest.replace('{best}', String(d.best)).replace('{rank}', String(d.rank));
        sfx.save();
        setTab('rank', true);
      })
      .catch((err: Error) => {
        // Nombre rechazado: el token sigue valiendo, se puede corregir y reintentar
        if (err.message === 'rude_name') return nameError(texts.rude);
        if (err.message === 'invalid') return nameError(texts.invalid);
        token = null;
        pending = 0;
        saveBox.hidden = true;
        msg.textContent = err.message === 'daily_limit' ? texts.dailyLimit : texts.failed;
        sfx.error();
      })
      .finally(() => (button.disabled = false));
  });

  // --- Juego ----------------------------------------------------------
  const pal = { ...MASCOT_PALETTE };
  const run = [spriteCanvas(RUN_FRAMES.runA, pal), spriteCanvas(RUN_FRAMES.runB, pal)];
  const jumpImg = spriteCanvas(RUN_FRAMES.jump, pal);
  const duckImg = DUCK_FRAMES.map((f) => spriteCanvas(f, pal));
  const bugImg = spriteCanvas(BUG_SPRITE, BUG_PALETTE);
  const flyImg = FLY_FRAMES.map((f) => spriteCanvas(f, BUG_PALETTE));

  let best = 0;
  try {
    best = Number(localStorage.getItem(BEST_KEY) ?? 0) || 0;
  } catch {
    best = 0;
  }

  /**
   * Obstáculos: bug (en el suelo, en grupos de 1-3), torre (dos bugs apilados) y volador a tres
   * alturas (bajo: se salta; medio: se salta o se esquiva agachado; alto: se pasa por debajo sin saltar).
   * Con solo saltar siempre se puede pasar: agacharse es una ayuda, como en el dinosaurio de Chrome.
   */
  type Obstacle = { kind: 'bug' | 'tower' | 'fly'; x: number; y: number; w: number; h: number; vx: number };
  let state: 'ready' | 'play' | 'pause' | 'over' = 'ready';
  let y = 0; // altura del salto (0 = suelo)
  let vy = 0;
  let speed = 160; // px/s en resolución interna
  let dist = 0;
  let obstacles: Obstacle[] = [];
  let nextSpawn = 1.1;
  let frame = 0;
  let raf = 0;
  let last = performance.now();
  let groundOffset = 0;
  let milestone = 0;
  let duckKey = false; // ↓ / S
  let duckPad = false; // botón táctil
  let night = 0; // 0 = día, 1 = noche (transición progresiva)
  let isNight = false;

  // Velocidad: igual que en el servidor (maxScore en scores.php); si cambia aquí, cambiarla allí
  const START_SPEED = 160;
  const ACCEL = 8;
  const MAX_SPEED = 480;
  const P = { x: 22, w: 32, h: 42 }; // sprite a escala 1:1 (pixel art sin deformar)
  const DUCK_H = DUCK_FRAMES[0].length;
  const score = () => Math.floor(dist / 8);
  const ducking = () => duckKey || duckPad;
  // Noche entre los puntos 700-999, 1400-1699…
  const nightAt = (sc: number) => sc >= 700 && sc % 700 < 300;

  const reset = () => {
    y = 0;
    vy = 0;
    speed = reduced ? 120 : START_SPEED;
    dist = 0;
    obstacles = [];
    nextSpawn = 1.1;
    milestone = 0;
    isNight = false;
  };

  const jump = () => {
    if (state === 'ready' || state === 'over') {
      state = 'play';
      reset();
      newRun();
      sfx.start();
      return;
    }
    if (state === 'pause') {
      state = 'play';
      last = performance.now();
      return;
    }
    if (y === 0) {
      vy = 360;
      sfx.jump();
    }
  };

  const spawn = () => {
    const sc = score();
    const r = Math.random();
    const x = VW + 10;
    let width: number;
    if (sc >= 250 && r < (sc >= 450 ? 0.3 : 0.2)) {
      // volador: bajo y medio desde 250 puntos, también alto desde 450
      const alts = sc >= 450 ? [4, 28, 40] : [4, 28];
      const alt = alts[Math.floor(Math.random() * alts.length)];
      obstacles.push({ kind: 'fly', x, y: GROUND - alt - 10, w: 16, h: 10, vx: sc >= 600 ? Math.random() * 25 : 0 });
      width = 16;
    } else if (sc >= 250 && r < 0.42) {
      obstacles.push({ kind: 'tower', x, y: GROUND - 24, w: 14, h: 24, vx: 0 });
      width = 14;
    } else {
      // parejas desde 100 puntos y tríos desde 450
      let n = sc >= 100 && Math.random() < 0.35 ? 2 : 1;
      if (n === 2 && sc >= 450 && Math.random() < 0.4) n = 3;
      for (let i = 0; i < n; i++) obstacles.push({ kind: 'bug', x: x + i * 16, y: GROUND - 12, w: 14, h: 12, vx: 0 });
      width = 14 + (n - 1) * 16;
    }
    // Hueco mínimo = lo que se recorre en un salto (0,72 s) + margen: siempre saltable.
    // Con los puntos el hueco se acerca a ese mínimo y varía menos.
    const coef = Math.max(0.76, 0.95 - sc / 4000);
    const spread = Math.max(0.45, 0.9 - sc / 5000);
    nextSpawn = (speed * coef + width + 24) / speed + Math.random() * spread;
  };

  // Cajas de colisión algo más pequeñas que los sprites (se perdonan los píxeles de las esquinas)
  const playerBox = () =>
    ducking() && y === 0
      ? { x: P.x + 12, y: GROUND - DUCK_H + 4, w: 14, h: DUCK_H - 6 }
      : { x: P.x + 9, y: GROUND - P.h - y + 4, w: P.w - 18, h: P.h - 6 };
  const hit = (o: Obstacle, p: ReturnType<typeof playerBox>) =>
    p.x < o.x + o.w - 2 && p.x + p.w > o.x + 2 && p.y < o.y + o.h - 2 && p.y + p.h > o.y + 2;

  const font = getComputedStyle(document.documentElement).getPropertyValue('--font-tiny') || 'monospace';
  const drawText = (txt: string, x: number, yy: number, size = 8, color = '#fff3e6') => {
    ctx.font = `${size}px ${font}, monospace`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0a0706';
    ctx.fillText(txt, x + 1, yy + 1);
    ctx.fillStyle = color;
    ctx.fillText(txt, x, yy);
  };

  // --- Día y noche: las paletas se mezclan de forma continua (64 niveles precalculados)
  const DAY = {
    sky: ['#1a1511', '#221a14', '#2c2118', '#3a2a1c', '#4a3320'],
    cloud: '#5a4230',
    line: '#f0b429',
    ground: '#6b4a2e',
    mark: '#8a6242',
  };
  const NIGHT = {
    sky: ['#07060d', '#0b0914', '#100d1c', '#161226', '#1d1830'],
    cloud: '#262040',
    line: '#9d86d8',
    ground: '#2e2433',
    mark: '#4a3b52',
  };
  const rgb = (c: string) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
  const mix = (a: string, b: string, k: number) => {
    const [x, z] = [rgb(a), rgb(b)];
    return `rgb(${x.map((v, i) => Math.round(v + (z[i] - v) * k)).join(',')})`;
  };
  const LEVELS = 64;
  const themes = Array.from({ length: LEVELS + 1 }, (_, i) => {
    const k = i / LEVELS;
    return {
      sky: DAY.sky.map((c, j) => mix(c, NIGHT.sky[j], k)),
      cloud: mix(DAY.cloud, NIGHT.cloud, k),
      line: mix(DAY.line, NIGHT.line, k),
      ground: mix(DAY.ground, NIGHT.ground, k),
      mark: mix(DAY.mark, NIGHT.mark, k),
    };
  });
  const stars = Array.from({ length: 22 }, (_, i) => ({ x: (i * 97) % VW, y: 6 + ((i * 53) % 70), t: i * 0.7 }));
  const clouds = [
    { x: 40, y: 22 },
    { x: 170, y: 40 },
    { x: 290, y: 16 },
  ];
  let cloudOffset = 0;

  const draw = () => {
    const k = night * night * (3 - 2 * night); // smoothstep: arranca y termina suave
    const th = themes[Math.round(k * LEVELS)];
    th.sky.forEach((c, i) => {
      ctx.fillStyle = c;
      ctx.fillRect(0, (i * GROUND) / th.sky.length, VW, GROUND / th.sky.length + 1);
    });
    // estrellas (aparecen con la noche y parpadean)
    if (k > 0) {
      ctx.fillStyle = '#fff3e6';
      stars.forEach((s) => {
        const tw = reduced ? 1 : 0.55 + 0.45 * Math.sin(frame * 3 + s.t);
        ctx.globalAlpha = k * tw;
        ctx.fillRect(s.x, s.y, 1, 1);
      });
      ctx.globalAlpha = 1;
    }
    // sol que se pone y luna que sale (quedan ocultos tras el suelo)
    const sx = VW - 70;
    const sy = Math.round(26 + k * 100);
    ctx.fillStyle = '#f0b429';
    ctx.fillRect(sx + 6, sy, 16, 28);
    ctx.fillRect(sx + 2, sy + 4, 24, 20);
    ctx.fillRect(sx, sy + 8, 28, 12);
    ctx.fillStyle = '#ffd06a';
    ctx.fillRect(sx + 8, sy + 4, 8, 6);
    const mx = VW - 120;
    const my = Math.round(20 + (1 - k) * 110);
    ctx.fillStyle = '#fff3e6';
    ctx.fillRect(mx + 4, my, 12, 20);
    ctx.fillRect(mx, my + 4, 20, 12);
    ctx.fillRect(mx + 2, my + 2, 16, 16);
    ctx.fillStyle = '#d8cdbb';
    ctx.fillRect(mx + 5, my + 5, 4, 4);
    ctx.fillRect(mx + 12, my + 11, 3, 3);
    // nubes con paralaje
    ctx.fillStyle = th.cloud;
    clouds.forEach((c) => {
      const cx = ((((c.x - cloudOffset) % (VW + 60)) + VW + 60) % (VW + 60)) - 40;
      ctx.fillRect(cx + 6, c.y, 18, 4);
      ctx.fillRect(cx, c.y + 4, 32, 4);
    });
    // suelo con marcas que se desplazan
    ctx.fillStyle = th.line;
    ctx.fillRect(0, GROUND, VW, 2);
    ctx.fillStyle = th.ground;
    ctx.fillRect(0, GROUND + 2, VW, VH - GROUND - 2);
    ctx.fillStyle = th.mark;
    for (let x = -groundOffset % 24; x < VW; x += 24) ctx.fillRect(x, GROUND + 6, 6, 2);
    for (let x = (-groundOffset * 0.6) % 40; x < VW; x += 40) ctx.fillRect(x + 12, GROUND + 13, 4, 2);

    const wing = Math.floor(frame * 8) % 2;
    obstacles.forEach((o) => {
      const ox = Math.round(o.x);
      const oy = Math.round(o.y);
      if (o.kind === 'fly') ctx.drawImage(flyImg[wing], ox, oy);
      else {
        ctx.drawImage(bugImg, ox, oy);
        if (o.kind === 'tower') ctx.drawImage(bugImg, ox, oy + 12);
      }
    });

    const stride = Math.floor(frame * 10) % 2;
    if (state === 'play' && ducking() && y === 0) ctx.drawImage(duckImg[stride], P.x + 3, GROUND - DUCK_H + 1);
    else ctx.drawImage(y > 0 ? jumpImg : run[stride], P.x, Math.round(GROUND - P.h - y + 1));

    scoreEl.textContent = `${texts.score} ${pad(score())} · ${texts.best} ${pad(best)}`;

    if (state === 'ready') {
      drawText(texts.title, VW / 2, 46, 16, '#f0b429');
      drawText(texts.start, VW / 2, 66, 8);
      if (worldBest) drawText(`★ ${texts.worldBest}: ${worldBest.name} ${pad(worldBest.score)}`, VW / 2, 84, 8, '#ffd06a');
    } else if (state === 'pause') {
      drawText(texts.pause, VW / 2, 60, 16, '#f0b429');
      drawText(texts.resume, VW / 2, 78, 8);
    } else if (state === 'over') {
      drawText(texts.over, VW / 2, 52, 16, '#f0b429');
      drawText(`${texts.score} ${score()}`, VW / 2, 70, 8);
      drawText(texts.retry, VW / 2, 86, 8);
    }
  };

  const gameOver = () => {
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
    sfx.over();
    announce.textContent = `${texts.over}. ${texts.score} ${sc}. ${texts.best} ${best}.`;
    onScore?.(sc);
    offerSave(sc);
  };

  /** Un paso de simulación (pasos cortos: a velocidad máxima nada atraviesa a nadie entre dos frames). */
  const step = (dt: number) => {
    frame += dt;
    speed = Math.min(MAX_SPEED, speed + dt * ACCEL);
    dist += speed * dt;
    groundOffset += speed * dt;
    cloudOffset += speed * dt * 0.15;
    const sc = score();
    if (Math.floor(sc / 100) > milestone) {
      milestone = Math.floor(sc / 100);
      sfx.point();
    }
    if (nightAt(sc) !== isNight) {
      isNight = !isNight;
      (isNight ? sfx.night : sfx.day)();
    }
    // física del salto; agachado en el aire = caída rápida
    if (y > 0 || vy > 0) {
      vy -= (ducking() ? 3000 : 1000) * dt;
      y = Math.max(0, y + vy * dt);
      if (y === 0) vy = 0;
    }
    nextSpawn -= dt;
    if (nextSpawn <= 0) spawn();
    obstacles.forEach((o) => (o.x -= (speed + o.vx) * dt));
    obstacles = obstacles.filter((o) => o.x > -40);
    const p = playerBox();
    if (obstacles.some((o) => hit(o, p))) gameOver();
  };

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (state === 'play') {
      for (let rest = dt; rest > 0 && state === 'play'; rest -= 1 / 120) step(Math.min(rest, 1 / 120));
    }
    // transición día/noche (también continúa en pausa o game over hasta completarse)
    const target = isNight ? 1 : 0;
    if (night !== target) night = target > night ? Math.min(1, night + dt / 3) : Math.max(0, night - dt / 3);
    draw();
    raf = requestAnimationFrame(tick);
  };

  const typing = (t: EventTarget | null) => t instanceof HTMLInputElement;
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (typing(e.target)) return; // escribiendo el nombre: las teclas no controlan el juego
    if (e.key === 'm' || e.key === 'M') {
      toggleSound();
      return;
    }
    if (tab !== 'play') return; // en Ranking / Cómo jugar el teclado navega por la interfaz
    const onButton = document.activeElement instanceof HTMLButtonElement;
    if (e.key === 'ArrowDown' || e.key === 's') {
      e.preventDefault();
      duckKey = true;
    } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || (e.key === 'Enter' && !onButton)) {
      e.preventDefault();
      jump();
    } else if (e.key === 'r' && state === 'over') {
      jump();
    }
  };
  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 's') duckKey = false;
  };
  const onBlur = () => {
    duckKey = false;
    duckPad = false;
  };
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
      if (state === 'play') state = 'pause';
    } else if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };

  function close() {
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', onKey, true);
    window.removeEventListener('keyup', onKeyUp, true);
    window.removeEventListener('blur', onBlur);
    document.removeEventListener('visibilitychange', onVisibility);
    document.documentElement.style.overflow = '';
    root.remove();
    lastFocus?.focus?.();
  }

  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    jump();
  });
  // Mandos táctiles: saltar al pulsar y agacharse mientras se mantiene
  const padJump = root.querySelector<HTMLButtonElement>('[data-jump]');
  const padDuck = root.querySelector<HTMLButtonElement>('[data-duck]');
  if (padJump && padDuck) {
    const press = (b: HTMLButtonElement, down: boolean) => b.classList.toggle('is-down', down);
    padJump.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      press(padJump, true);
      jump();
    });
    padDuck.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      padDuck.setPointerCapture(e.pointerId);
      press(padDuck, true);
      duckPad = true;
    });
    (['pointerup', 'pointercancel', 'lostpointercapture'] as const).forEach((ev) => {
      padJump.addEventListener(ev, () => press(padJump, false));
      padDuck.addEventListener(ev, () => {
        press(padDuck, false);
        duckPad = false;
      });
    });
    padDuck.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  // Desbloqueo de audio en gestos válidos (en táctil el pointerdown del salto no cuenta)
  const unlockEvents = ['pointerup', 'touchend', 'click', 'keydown'] as const;
  unlockEvents.forEach((ev) => root.addEventListener(ev, unlockAudio, { passive: true }));
  closeBtn.addEventListener('click', close);
  root.addEventListener('click', (e) => {
    if (e.target === root) close();
  });
  window.addEventListener('keydown', onKey, true);
  window.addEventListener('keyup', onKeyUp, true);
  window.addEventListener('blur', onBlur);
  document.addEventListener('visibilitychange', onVisibility);

  // Solo en desarrollo (se elimina del build): saltar a una puntuación para probar noche y obstáculos
  if (import.meta.env.DEV) {
    (window as unknown as { __bugrun: object }).__bugrun = {
      setScore: (sc: number) => (dist = sc * 8),
      clear: () => (obstacles = []),
      list: () => obstacles,
      spawn,
    };
  }

  reset();
  draw();
  raf = requestAnimationFrame(tick);
  // Se abre desde un toque/clic (botón o código Konami): aún dentro del gesto, arrancar el audio
  if (!isMuted()) unlockAudio();
}
