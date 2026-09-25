/**
 * Capa "videojuego" de la web: pantalla de carga, PRESS START, monigote interactivo,
 * logros desbloqueables y código Konami. Todo opcional: sin JS la web funciona igual.
 */

type Achievement = { id: string; title: string; desc: string };
type ArcadeTexts = { title: string; start: string; over: string; retry: string; score: string; best: string; close: string; hint: string };
type GameData = { achievements: Achievement[]; arcade?: ArcadeTexts; unlocked: string };

const STORE = 'gs-achievements';
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const readData = (): GameData | null => {
  const el = document.getElementById('game-data');
  if (!el?.textContent) return null;
  try {
    return JSON.parse(el.textContent) as GameData;
  } catch {
    return null;
  }
};

/* ------------------------------------------------------------------ */
/* Pantalla de carga (solo primera visita de la sesión, < 1 s)          */
/* ------------------------------------------------------------------ */

export function initBoot() {
  const boot = document.querySelector<HTMLElement>('[data-boot]');
  if (!boot || document.documentElement.classList.contains('no-boot')) return;

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    try {
      sessionStorage.setItem('gs-boot', '1');
    } catch {
      /* sin almacenamiento: se volverá a ver en la próxima visita */
    }
    boot.classList.add('is-leaving');
    window.setTimeout(() => boot.remove(), 450);
    window.removeEventListener('keydown', finish);
    boot.removeEventListener('click', finish);
  };

  window.addEventListener('keydown', finish);
  boot.addEventListener('click', finish);
  // La barra llega al 100 % a los ~1,7 s; se deja ver el "¡Listo!" y se abre.
  window.setTimeout(finish, 2150);
}

/* ------------------------------------------------------------------ */
/* Logros                                                              */
/* ------------------------------------------------------------------ */

let unlock: (id: string) => void = () => {};

export function initAchievements() {
  const data = readData();
  const toast = document.querySelector<HTMLElement>('[data-achievement]');
  if (!data || !toast) return;

  const titleEl = toast.querySelector<HTMLElement>('[data-ach-title]')!;
  const descEl = toast.querySelector<HTMLElement>('[data-ach-desc]')!;
  const countEl = toast.querySelector<HTMLElement>('[data-ach-count]')!;

  let got: string[] = [];
  try {
    got = JSON.parse(localStorage.getItem(STORE) ?? '[]');
  } catch {
    got = [];
  }

  const queue: Achievement[] = [];
  let showing = false;
  const showNext = () => {
    const next = queue.shift();
    if (!next) {
      showing = false;
      return;
    }
    showing = true;
    titleEl.textContent = next.title;
    descEl.textContent = next.desc;
    countEl.textContent = `${got.length}/${data.achievements.length}`;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('is-in'));
    window.setTimeout(() => {
      toast.classList.remove('is-in');
      window.setTimeout(() => {
        toast.hidden = true;
        showNext();
      }, 350);
    }, 3200);
  };

  unlock = (id: string) => {
    if (got.includes(id)) return;
    const ach = data.achievements.find((a) => a.id === id);
    if (!ach) return;
    got.push(id);
    try {
      localStorage.setItem(STORE, JSON.stringify(got));
    } catch {
      /* sin almacenamiento: el logro vale solo para esta visita */
    }
    queue.push(ach);
    if (!showing) showNext();
  };

  // Explorador: ver los proyectos · Jefe final: llegar al formulario
  const watch = (selector: string, id: string) => {
    const el = document.querySelector(selector);
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          unlock(id);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
  };
  watch('#proyectos [data-level-select]', 'explorer');
  watch('#contacto-form', 'boss');

  // Reclutador pro: descargar el CV
  document.querySelectorAll('a[download]').forEach((a) => a.addEventListener('click', () => unlock('cv')));
}

/* ------------------------------------------------------------------ */
/* PRESS START: transición pixel y a jugar                              */
/* ------------------------------------------------------------------ */

export function initPressStart() {
  const start = document.querySelector<HTMLAnchorElement>('[data-press-start]');
  const wipe = document.querySelector<HTMLElement>('[data-wipe]');
  if (!start) return;

  const go = () => {
    const target = document.querySelector<HTMLElement>(start.hash);
    unlock('start');
    if (!target) return;
    if (!wipe || reduced()) {
      target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' });
      return;
    }
    wipe.hidden = false;
    wipe.classList.remove('is-out');
    wipe.classList.add('is-in');
    // A mitad de la transición (pantalla tapada) saltamos a la sección sin scroll animado.
    window.setTimeout(() => {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      target.scrollIntoView();
      html.style.scrollBehavior = prev;
      wipe.classList.remove('is-in');
      wipe.classList.add('is-out');
      window.setTimeout(() => {
        wipe.hidden = true;
        wipe.classList.remove('is-out');
      }, 420);
    }, 420);
  };

  start.addEventListener('click', (e) => {
    e.preventDefault();
    go();
  });

  // Enter en la portada (sin foco en un control) también empieza la partida.
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || window.scrollY > window.innerHeight * 0.6) return;
    const active = document.activeElement;
    if (active && active !== document.body) return;
    e.preventDefault();
    go();
  });
}

/* ------------------------------------------------------------------ */
/* Monigote: salta y habla al pulsarlo                                 */
/* ------------------------------------------------------------------ */

export function initMascot() {
  const btn = document.querySelector<HTMLButtonElement>('[data-mascot]');
  const speech = document.querySelector<HTMLElement>('[data-speech]');
  if (!btn) return;
  const phrases: string[] = JSON.parse(btn.dataset.phrases ?? '[]');
  const svg = btn.querySelector('svg');
  let i = 0;
  let clicks = 0;

  btn.addEventListener('click', () => {
    i = (i + 1) % Math.max(1, phrases.length);
    if (speech && phrases.length) speech.textContent = phrases[i];
    if (svg && !reduced()) {
      svg.classList.remove('is-jumping');
      // reinicia la animación aunque se pulse muy rápido
      void (svg as unknown as HTMLElement).offsetWidth;
      svg.classList.add('is-jumping');
    }
    clicks += 1;
    if (clicks >= 5) unlock('friend');
  });
}

/* ------------------------------------------------------------------ */
/* Modo arcade: BUG RUN (código Konami ↑↑↓↓←→←→BA o botón del pie)      */
/* ------------------------------------------------------------------ */

const openArcadeLazy = () => {
  const texts = readData()?.arcade;
  if (!texts) return;
  unlock('konami');
  // Import dinámico: el juego no pesa nada hasta que alguien lo abre.
  void import('./arcade').then(({ openArcade }) =>
    openArcade(texts, (score) => {
      if (score >= 300) unlock('bughunter');
    }),
  );
};

export function initArcade() {
  document.querySelectorAll<HTMLButtonElement>('[data-arcade-open]').forEach((btn) => {
    btn.hidden = false;
    btn.addEventListener('click', openArcadeLazy);
  });

  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.arcade')) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos === code.length) {
      pos = 0;
      openArcadeLazy();
    }
  });
}

/* ------------------------------------------------------------------ */
/* Selección de nivel (proyectos): pestañas accesibles                  */
/* ------------------------------------------------------------------ */

export function initLevelSelect() {
  const root = document.querySelector<HTMLElement>('[data-level-select]');
  if (!root) return;
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-level-tab]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-level-panel]')];

  const select = (i: number, focus = false) => {
    tabs.forEach((tab, j) => {
      const on = i === j;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel, j) => {
      if (i === j) panel.removeAttribute('data-hidden-js');
      else panel.setAttribute('data-hidden-js', 'true');
    });
    if (focus) tabs[i].focus();
    tabs[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced() ? 'auto' : 'smooth' });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      let next = -1;
      if (e.key === 'ArrowRight') next = i === last ? 0 : i + 1;
      else if (e.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = last;
      if (next < 0) return;
      e.preventDefault();
      select(next, true);
    });
  });
}

/* ------------------------------------------------------------------ */
/* Inventario de tecnologías: ficha del objeto elegido                  */
/* ------------------------------------------------------------------ */

export function initInventory() {
  const root = document.querySelector<HTMLElement>('[data-inventory]');
  if (!root) return;
  const items = [...root.querySelectorAll<HTMLButtonElement>('[data-inv-item]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[data-inv-panel]')];
  const hover = window.matchMedia('(hover: hover)');

  const select = (id: string, reveal = false) => {
    items.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.invItem === id)));
    panels.forEach((p) => {
      if (p.dataset.invPanel === id) p.removeAttribute('data-hidden-js');
      else p.setAttribute('data-hidden-js', 'true');
    });
    // En móvil la ficha está encima del inventario: si ha quedado fuera de pantalla, se acerca.
    const panel = panels[0]?.parentElement;
    if (reveal && panel && !hover.matches) {
      const top = panel.getBoundingClientRect().top;
      if (top < 80) window.scrollBy({ top: top - 96, behavior: reduced() ? 'auto' : 'smooth' });
    }
  };

  items.forEach((b) => {
    const id = b.dataset.invItem!;
    b.addEventListener('click', () => select(id, true));
    b.addEventListener('mouseenter', () => hover.matches && select(id));
  });
}

/* ------------------------------------------------------------------ */
/* Diálogo del contacto: texto que se escribe solo y opciones            */
/* ------------------------------------------------------------------ */

export function initDialog() {
  const box = document.querySelector<HTMLElement>('[data-dialog]');
  if (!box) return;
  const text = box.querySelector<HTMLElement>('[data-dialog-text]')!;
  const typed = box.querySelector<HTMLElement>('[data-dialog-typed]')!;
  const yes = box.querySelector<HTMLAnchorElement>('[data-choice-yes]');
  const no = box.querySelector<HTMLButtonElement>('[data-choice-no]');
  let timer = 0;

  // El texto real se queda en el flujo (invisible) para reservar su altura: sin saltos de layout.
  const say = (line: string) => {
    window.clearInterval(timer);
    text.textContent = line;
    if (reduced()) {
      text.style.visibility = '';
      typed.textContent = '';
      return;
    }
    text.style.visibility = 'hidden';
    box.classList.add('is-typing');
    let i = 0;
    timer = window.setInterval(() => {
      i += 2;
      typed.textContent = line.slice(0, i);
      if (i >= line.length) {
        window.clearInterval(timer);
        text.style.visibility = '';
        typed.textContent = '';
        box.classList.remove('is-typing');
      }
    }, 26);
  };

  if (!reduced() && 'IntersectionObserver' in window) {
    const intro = text.textContent ?? '';
    text.style.visibility = 'hidden';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        say(intro);
      },
      { threshold: 0.5 },
    );
    io.observe(box);
  }

  if (no) {
    no.hidden = false;
    no.addEventListener('click', () => say(box.dataset.lineNo ?? ''));
  }
  yes?.addEventListener('click', (e) => {
    const form = document.getElementById('contacto-form');
    if (!form) return;
    e.preventDefault();
    say(box.dataset.lineYes ?? '');
    form.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => document.getElementById('name')?.focus({ preventScroll: true }), reduced() ? 0 : 600);
  });
}
