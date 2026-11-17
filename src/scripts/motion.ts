/**
 * Movimiento de la web. Todo es mejora progresiva: sin JS (o con "reducir movimiento") el
 * contenido está visible y el scroll es el nativo.
 * - Lenis: scroll suave con inercia (solo con ratón/trackpad; en táctil manda el scroll nativo).
 * - Revelado de bloques y titulares al entrar en pantalla (IntersectionObserver).
 * - Contadores, foco de luz bajo el cursor, cabecera que se esconde al bajar,
 *   raíl de la trayectoria y tarjetas de proyectos que se apilan.
 * Las lecturas de layout se agrupan en un único frame por scroll (sin reflows forzados).
 */
import type Lenis from 'lenis';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// El margen de la cabecera lo pone el CSS (scroll-padding-top en <html>), que Lenis también respeta

let lenis: Lenis | null = null;
const scrollCallbacks: Array<() => void> = [];
let scheduled = false;
const onScroll = () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    scrollCallbacks.forEach((fn) => fn());
  });
};

/** Scroll suave a un destino (usa Lenis si está activo). */
export function scrollToTarget(target: HTMLElement | number) {
  if (lenis) {
    lenis.start();
    lenis.scrollTo(target, { duration: 1.4 });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: reduced() ? 'auto' : 'smooth' });
  } else {
    target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' });
  }
}

/* ------------------------------------------------------------------ */
/* Scroll suave                                                        */
/* ------------------------------------------------------------------ */
export async function initSmoothScroll() {
  window.addEventListener('scroll', onScroll, { passive: true });

  // En dispositivos táctiles el scroll nativo ya es suave: no se carga Lenis
  if (reduced() || window.matchMedia('(pointer: coarse)').matches) return;
  const { default: LenisClass } = await import('lenis');
  lenis = new LenisClass({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1 });
  (window as unknown as { lenis?: Lenis }).lenis = lenis;

  // El menú móvil y el minijuego bloquean el scroll del documento
  new MutationObserver(() => {
    const locked = document.documentElement.style.overflow === 'hidden' || !!document.querySelector('.arcade');
    if (locked) lenis?.stop();
    else lenis?.start();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['style'], subtree: false });
  new MutationObserver(() => {
    if (document.querySelector('.arcade')) lenis?.stop();
    else lenis?.start();
  }).observe(document.body, { childList: true });
}

/* Enlaces a secciones de la misma página: scroll suave y URL actualizada */
export function initAnchors() {
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const a = (e.target as Element | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
    if (!a || a.pathname !== location.pathname || !a.hash || a.hasAttribute('download')) return;
    const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    // El menú móvil se cierra en el mismo clic (ui.ts): esperar a que libere el scroll
    requestAnimationFrame(() => scrollToTarget(target));
    history.pushState(null, '', a.hash);
  });
}

/* ------------------------------------------------------------------ */
/* Revelado al entrar en pantalla                                      */
/* ------------------------------------------------------------------ */
export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-split], [data-timeline] > li');
  if (!('IntersectionObserver' in window) || reduced()) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Contadores                                                          */
/* ------------------------------------------------------------------ */
export function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length || reduced() || !('IntersectionObserver' in window)) return;
  const run = (el: HTMLElement) => {
    const to = Number(el.dataset.count);
    const t0 = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        // El valor final queda en el HTML (SEO / sin JS); fuera de pantalla se pone a 0 para contarlo luego
        if (!entry.isIntersecting) {
          if (entry.boundingClientRect.top > 0) el.textContent = '0';
          return;
        }
        io.unobserve(el);
        run(el);
      });
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Foco de luz bajo el cursor                                          */
/* ------------------------------------------------------------------ */
export function initSpotlight() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as Element | null)?.closest?.('[data-spotlight]') as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}

/* ------------------------------------------------------------------ */
/* Cabecera: se esconde al bajar y vuelve al subir                     */
/* ------------------------------------------------------------------ */
export function initHeaderAutoHide() {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  if (!header) return;
  let last = window.scrollY;
  scrollCallbacks.push(() => {
    const y = window.scrollY;
    const menuOpen = document.querySelector('[data-menu][data-open="true"]');
    const hide = y > 400 && y > last + 4 && !menuOpen;
    if (y < last - 4 || y < 400 || menuOpen) header.dataset.hidden = 'false';
    else if (hide) header.dataset.hidden = 'true';
    last = y;
  });
  // Al recibir el foco con el teclado siempre se muestra
  header.addEventListener('focusin', () => (header.dataset.hidden = 'false'));
}

/* ------------------------------------------------------------------ */
/* Raíl de la trayectoria                                              */
/* ------------------------------------------------------------------ */
export function initTimeline() {
  const tl = document.querySelector<HTMLElement>('[data-timeline]');
  if (!tl || reduced()) return;
  const update = () => {
    const r = tl.getBoundingClientRect();
    const start = window.innerHeight * 0.75;
    const p = Math.min(1, Math.max(0, (start - r.top) / r.height));
    tl.style.setProperty('--tl', p.toFixed(3));
  };
  tl.style.setProperty('--tl', '0');
  scrollCallbacks.push(update);
  onScroll();
}

/* ------------------------------------------------------------------ */
/* Proyectos: la tarjeta de debajo se encoge al apilarse la siguiente  */
/* ------------------------------------------------------------------ */
export function initStack() {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-stack]')];
  if (cards.length < 2 || reduced()) return;
  const mq = window.matchMedia('(min-width: 1024px) and (min-height: 760px)');
  const update = () => {
    if (!mq.matches) return;
    const vh = window.innerHeight;
    const tops = cards.map((c) => c.getBoundingClientRect().top);
    cards.forEach((card, i) => {
      const next = tops[i + 1];
      if (next === undefined) return;
      // 0 cuando la siguiente está abajo del todo, 1 cuando ya la tapa
      const p = Math.min(1, Math.max(0, 1 - (next - tops[i]) / vh));
      card.style.transform = `scale(${(1 - p * 0.06).toFixed(4)})`;
      card.style.filter = p > 0.01 ? `brightness(${(1 - p * 0.45).toFixed(3)})` : '';
    });
  };
  mq.addEventListener('change', () => {
    if (!mq.matches) cards.forEach((c) => ((c.style.transform = ''), (c.style.filter = '')));
    else update();
  });
  scrollCallbacks.push(update);
  onScroll();
}

/* ------------------------------------------------------------------ */
/* Detalles: hora local y copiar email                                 */
/* ------------------------------------------------------------------ */
export function initClock() {
  const els = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat(document.documentElement.lang === 'es' ? 'es-ES' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid',
  });
  const tick = () => els.forEach((el) => (el.textContent = fmt.format(new Date())));
  tick();
  window.setInterval(tick, 30_000);
}

export function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    const original = label?.textContent ?? '';
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy!);
        if (label) label.textContent = btn.dataset.copied!;
        window.setTimeout(() => label && (label.textContent = original), 1800);
      } catch {
        window.location.href = `mailto:${btn.dataset.copy}`;
      }
    });
  });
}
