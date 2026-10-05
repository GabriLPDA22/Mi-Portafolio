import { initArcade } from './game';
import { initGlow } from './glow';
import { initContactForm, initHeader } from './ui';

initHeader();
initContactForm();
initGlow();

// BUG RUN sigue escondido: botón del pie y código Konami (↑↑↓↓←→←→BA)
initArcade();

// Ya no hay aviso de cookies: se borra la elección que guardaba (la política dice qué se guarda)
try {
  localStorage.removeItem('cookie-consent');
  localStorage.removeItem('cookie-consent-date');
} catch {
  /* almacenamiento bloqueado: no hay nada que borrar */
}
