import { initEasterEgg } from './easter-egg';
import {
  initAnchors,
  initClock,
  initCopy,
  initCounters,
  initHeaderAutoHide,
  initReveal,
  initSmoothScroll,
  initSpotlight,
  initStack,
  initTimeline,
} from './motion';
import { initContactForm, initHeader, initScrollToTop } from './ui';

// Lo que se ve al cargar: inmediato
initReveal();
initHeader();
initAnchors();
initCounters();

// Ya no hay aviso de cookies (la web no usa ninguna): se borra la elección que guardaba antes
try {
  localStorage.removeItem('cookie-consent');
  localStorage.removeItem('cookie-consent-date');
} catch {
  /* almacenamiento bloqueado: no hay nada que borrar */
}

// El resto, cuando el navegador esté libre (no compite con el primer pintado)
const idle = (fn: () => void) =>
  'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 200);
idle(() => {
  void initSmoothScroll();
  initScrollToTop();
  initContactForm();
  initSpotlight();
  initHeaderAutoHide();
  initTimeline();
  initStack();
  initClock();
  initCopy();
  initEasterEgg();
});
