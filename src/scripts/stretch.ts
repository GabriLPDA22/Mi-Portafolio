/**
 * Letras vivas ([data-stretch], componente StretchText): cada letra se ensancha y engorda según
 * la distancia al cursor (ejes wdth/wght de Archivo vía --w / --g). Con data-idle, sin ratón
 * cerca, una ola recorre las letras. El bucle solo corre con el bloque a la vista y se duerme
 * cuando todo está en reposo. Con "reducir movimiento" no se hace nada (letras en su sitio).
 */
const REST_W = 100;
const MAX_W = 125;
const REST_G = 700;
const MAX_G = 900;

export function initStretch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  type Block = { visible: boolean; wake: () => void };
  const blocks: Block[] = [];

  let px = -1e4;
  let py = -1e4;
  let lastMove = 0;
  let idleTimer = 0;
  const IDLE_AFTER = 2500; // ms sin mover el ratón para volver a la ola
  if (fine) {
    window.addEventListener(
      'pointermove',
      (e) => {
        px = e.clientX;
        py = e.clientY;
        lastMove = performance.now();
        blocks.forEach((b) => b.visible && b.wake());
        // Al dejar quieto el ratón, la ola vuelve a arrancar
        clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => blocks.forEach((b) => b.visible && b.wake()), IDLE_AFTER + 50);
      },
      { passive: true },
    );
    document.documentElement.addEventListener('pointerleave', () => {
      px = py = -1e4;
    });
  }

  document.querySelectorAll<HTMLElement>('[data-stretch]').forEach((el) => {
    const letters = [...el.querySelectorAll<HTMLElement>('.sl')];
    const idle = el.hasAttribute('data-idle');
    const cur = letters.map(() => 0);
    // Radio de influencia del cursor: proporcional al tamaño de la letra
    let radius = 200;
    const measure = () => {
      radius = parseFloat(getComputedStyle(el).fontSize) * 1.6;
    };

    let raf = 0;
    const block: Block = {
      visible: false,
      wake: () => {
        if (!raf && block.visible) raf = requestAnimationFrame(frame);
      },
    };

    const frame = (now: number) => {
      raf = 0;
      const pointerActive = fine && now - lastMove < IDLE_AFTER;
      let moving = false;
      // Posiciones en vivo (como el dock de macOS: las letras que crecen empujan a las demás)
      const rects = pointerActive ? letters.map((l) => l.getBoundingClientRect()) : [];
      letters.forEach((l, i) => {
        let target = 0;
        const c = rects[i];
        if (c) {
          const d = Math.hypot(px - (c.left + c.width / 2), py - (c.top + c.height / 2));
          const t = Math.max(0, 1 - d / radius);
          target = t * t * (3 - 2 * t);
        }
        if (idle && !pointerActive) target = Math.max(target, 0.55 * (0.5 + 0.5 * Math.sin(now / 650 - i * 0.55)));
        cur[i] += (target - cur[i]) * 0.14;
        if (Math.abs(target - cur[i]) > 0.002) moving = true;
        l.style.setProperty('--w', `${(REST_W + cur[i] * (MAX_W - REST_W)).toFixed(1)}%`);
        l.style.setProperty('--g', (REST_G + cur[i] * (MAX_G - REST_G)).toFixed(0));
      });
      if (moving || (idle && !pointerActive)) raf = requestAnimationFrame(frame);
    };

    blocks.push(block);
    document.fonts.ready.then(measure);
    window.addEventListener('resize', measure, { passive: true });
    new IntersectionObserver(([entry]) => {
      block.visible = entry.isIntersecting;
      if (block.visible) {
        measure();
        block.wake();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }).observe(el);
  });
}
