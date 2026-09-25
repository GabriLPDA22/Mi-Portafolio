/**
 * Capa "videojuego" de la web: pantalla de carga, PRESS START, monigote interactivo,
 * logros desbloqueables y código Konami. Todo opcional: sin JS la web funciona igual.
 */

type Achievement = { id: string; title: string; desc: string };
type GameData = { achievements: Achievement[]; unlocked: string; phrasesLabel?: string };

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
  window.setTimeout(finish, 950);
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
  watch('#proyectos .project-card', 'explorer');
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
/* Código Konami: ↑↑↓↓←→←→BA                                           */
/* ------------------------------------------------------------------ */

export function initKonami() {
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos === code.length) {
      pos = 0;
      document.documentElement.classList.toggle('konami');
      unlock('konami');
    }
  });
}
