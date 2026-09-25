/**
 * Animaciones de la web sin framework (sustituye a framer-motion y a los hooks de React).
 *
 * - Entradas al hacer scroll: IntersectionObserver añade `.is-in`; la transición es CSS.
 * - "Scrub" (elementos que se desplazan con el scroll): un único bucle rAF por sección que
 *   solo corre cuando la sección está cerca del viewport y se detiene al asentarse.
 *   Lee todas las posiciones primero y escribe después, para no forzar reflows.
 */

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Ejecuta `onFrame` con rAF solo mientras haya movimiento pendiente. */
export function createIdleRafLoop(onFrame: (dt: number) => boolean) {
  let raf = 0;
  let last = performance.now();

  const tick = (now: number) => {
    raf = 0;
    const dt = Math.min(0.064, (now - last) / 1000);
    last = now;
    if (onFrame(dt)) raf = requestAnimationFrame(tick);
  };

  return {
    kick() {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    },
  };
}

/** Activa/desactiva el trabajo cuando el elemento se acerca al viewport. */
export function observeNearViewport(el: Element, onChange: (active: boolean) => void, rootMargin = '20% 0px 20% 0px') {
  const io = new IntersectionObserver(([entry]) => onChange(entry.isIntersecting), { rootMargin });
  io.observe(el);
}

/* ------------------------------------------------------------------ */
/* Entradas al entrar en pantalla                                      */
/* ------------------------------------------------------------------ */

export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }

  // Un observer por margen (equivalente al `viewport.margin` de framer-motion).
  const observers = new Map<string, IntersectionObserver>();
  els.forEach((el) => {
    const margin = el.dataset.revealMargin ?? '0px';
    let io = observers.get(margin);
    if (!io) {
      io = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        },
        { rootMargin: `${margin} 0px ${margin} 0px`, threshold: Number(el.dataset.revealAmount ?? 0) },
      );
      observers.set(margin, io);
    }
    io.observe(el);
  });
}

/* ------------------------------------------------------------------ */
/* Scrub ligado al scroll                                               */
/* ------------------------------------------------------------------ */

type ScrubVars = { x?: number; y?: number; rotate?: number; scale?: number; opacity?: number; mobileX?: number };
type ScrubItem = {
  el: HTMLElement;
  vars: ScrubVars;
  cur: { x: number; y: number; r: number; s: number; o: number };
};

const settled = (a: number, b: number) => Math.abs(a - b) < 0.05;

function initScrubScope(scope: HTMLElement) {
  const items: ScrubItem[] = [...scope.querySelectorAll<HTMLElement>('[data-scrub]')]
    .filter((el) => el.closest('[data-scrub-scope]') === scope)
    .map((el) => ({
      el,
      vars: JSON.parse(el.dataset.scrub ?? '{}') as ScrubVars,
      cur: { x: 0, y: 0, r: 0, s: 1, o: 1 },
    }));
  if (!items.length) return;

  const distance = 300;
  const scrubSeconds = 2;
  const xlMq = window.matchMedia('(min-width: 1280px)');
  let active = false;

  const loop = createIdleRafLoop((dt) => {
    if (!active) return false;
    const lag = 1 - Math.exp(-dt / scrubSeconds);
    const xl = xlMq.matches;
    const startLine = window.innerHeight * (xl ? 0.08 : 0.15);

    // 1) Lecturas agrupadas
    const tops = items.map((item) => item.el.getBoundingClientRect().top);

    // 2) Escrituras
    let moving = false;
    items.forEach((item, i) => {
      const { vars, cur } = item;
      const p = Math.min(1, Math.max(0, (startLine - tops[i]) / distance));
      const tx = (xl ? (vars.x ?? 0) : (vars.mobileX ?? vars.x ?? 0)) * p;
      const ty = (vars.y ?? 0) * p;
      const tr = (vars.rotate ?? 0) * p;
      const ts = 1 + ((vars.scale ?? 1) - 1) * p;
      const to = 1 + ((vars.opacity ?? 1) - 1) * p;

      cur.x += (tx - cur.x) * lag;
      cur.y += (ty - cur.y) * lag;
      cur.r += (tr - cur.r) * lag;
      cur.s += (ts - cur.s) * lag;
      cur.o += (to - cur.o) * lag;

      item.el.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0) rotate(${cur.r.toFixed(3)}deg) scale(${cur.s.toFixed(4)})`;
      if (vars.opacity !== undefined) item.el.style.opacity = cur.o.toFixed(3);

      if (!settled(cur.x, tx) || !settled(cur.y, ty) || !settled(cur.r, tr) || !settled(cur.s, ts) || !settled(cur.o, to)) {
        moving = true;
      }
    });
    return moving;
  });

  observeNearViewport(scope, (isActive) => {
    active = isActive;
    // will-change solo mientras la sección está cerca: no acumula capas de GPU.
    items.forEach((item) => item.el.classList.toggle('gsap-scrub', isActive));
    if (active) loop.kick();
  });

  const kick = () => active && loop.kick();
  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', kick, { passive: true });
  xlMq.addEventListener('change', kick);
}

export function initScrub() {
  if (prefersReducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-scrub-scope]').forEach(initScrubScope);
}
