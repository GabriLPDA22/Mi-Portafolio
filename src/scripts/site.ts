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
import { initContactForm, initCookieBanner, initHeader, initScrollToTop } from './ui';

// Lo que se ve al cargar: inmediato
initReveal();
initHeader();
initAnchors();
initCookieBanner();
initCounters();

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
