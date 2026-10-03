/**
 * Vista previa flotante del índice de proyectos: al pasar el ratón por una fila aparece su
 * imagen y sigue al cursor con un poco de retraso e inclinación según la velocidad.
 * Solo con ratón; en táctil la imagen va dentro del detalle de cada proyecto.
 */
export function initProjectPreview() {
  const list = document.querySelector<HTMLElement>('[data-project-index]');
  const preview = document.querySelector<HTMLElement>('[data-project-preview]');
  if (!list || !preview) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...preview.querySelectorAll<HTMLElement>('[data-preview]')];

  let tx = 0;
  let ty = 0;
  let x = 0;
  let y = 0;
  let raf = 0;
  let on = false;

  const place = () => {
    preview.style.setProperty('--px', `${x}px`);
    preview.style.setProperty('--py', `${y}px`);
    preview.style.setProperty('--pr', `${Math.max(-8, Math.min(8, (tx - x) * 0.04)).toFixed(2)}deg`);
  };
  const frame = () => {
    raf = 0;
    const k = reduced ? 1 : 0.16;
    x += (tx - x) * k;
    y += (ty - y) * k;
    place();
    if (on && (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3)) raf = requestAnimationFrame(frame);
  };

  list.addEventListener(
    'pointermove',
    (e) => {
      // a la derecha y algo por encima del cursor; si no cabe, a la izquierda
      const w = preview.offsetWidth;
      const h = preview.offsetHeight;
      tx = e.clientX + 28 + w > window.innerWidth ? e.clientX - w - 28 : e.clientX + 28;
      ty = Math.max(16, Math.min(window.innerHeight - h - 16, e.clientY - h / 2));
      if (!on) {
        x = tx;
        y = ty;
      }
      raf ||= requestAnimationFrame(frame);
    },
    { passive: true },
  );

  list.querySelectorAll<HTMLElement>('[data-row]').forEach((row) => {
    row.addEventListener('pointerenter', () => {
      items.forEach((it) => it.classList.toggle('is-active', it.dataset.preview === row.dataset.row));
      on = true;
      preview.classList.add('is-on');
    });
  });
  list.addEventListener('pointerleave', () => {
    on = false;
    preview.classList.remove('is-on');
  });
  // Al hacer scroll con el ratón quieto, la vista previa se esconde (ya no está sobre la fila)
  window.addEventListener(
    'scroll',
    () => {
      if (!on) return;
      on = false;
      preview.classList.remove('is-on');
    },
    { passive: true },
  );
}
