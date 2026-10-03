import { initArcade } from './game';
import { initGlow } from './glow';
import { initContactForm, initCookieBanner, initHeader } from './ui';

initHeader();
initCookieBanner();
initContactForm();
initGlow();

// BUG RUN sigue escondido: botón del pie y código Konami (↑↑↓↓←→←→BA)
initArcade();
