/**
 * Luz violeta que sigue al ratón en los bloques con [data-glow] (CSS en globals: --mx / --my).
 * Solo con ratón y sin "reducir movimiento"; en táctil la luz se queda en su sitio por defecto.
 */
export function initGlow() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((el) => {
    let frame = 0;
    let x = 0;
    let y = 0;
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect();
        x = e.clientX - r.left;
        y = e.clientY - r.top;
        frame ||= requestAnimationFrame(() => {
          frame = 0;
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
        });
      },
      { passive: true },
    );
  });
}
