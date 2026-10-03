/**
 * Letras vivas ([data-stretch], componente StretchText): cada letra se ensancha y engorda según
 * la distancia al cursor (ejes wdth/wght de Archivo vía --w / --g). Con data-idle, sin ratón
 * cerca, una ola recorre las letras.
 *
 * Sin saltos de diseño (CLS 0): cada letra tiene un hueco de ancho fijo (su ancho en reposo) y el
 * glifo crece dentro de él; el "empujón" a las vecinas se hace con transform, que no mueve cajas.
 * Para eso se mide una vez cada letra en reposo y al máximo y se interpola.
 * El bucle solo corre con el bloque a la vista y se duerme en reposo. Con "reducir movimiento"
 * no se hace nada.
 */
const REST_W = 100;
const MAX_W = 125;
const REST_G = 700;
const MAX_G = 900;
const IDLE_AFTER = 2500; // ms sin mover el ratón para volver a la ola
const IDLE_START = 2000; // la ola empieza un poco después de cargar: la carga no compite con ella

type Block = { visible: boolean; wake: () => void };

export function initStretch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const blocks: Block[] = [];
  // Hasta que la página ha cargado del todo (y un poco más) no hay ola: solo el cursor
  let idleAllowed = false;
  const allowIdle = () => window.setTimeout(() => {
    idleAllowed = true;
    blocks.forEach((b) => b.visible && b.wake());
  }, IDLE_START);
  if (document.readyState === 'complete') allowIdle();
  else window.addEventListener('load', allowIdle, { once: true });

  let px = -1e4;
  let py = -1e4;
  let lastMove = 0;
  let idleTimer = 0;
  const wakeAll = () => blocks.forEach((b) => b.visible && b.wake());
  if (fine) {
    window.addEventListener(
      'pointermove',
      (e) => {
        px = e.clientX;
        py = e.clientY;
        lastMove = performance.now();
        wakeAll();
        clearTimeout(idleTimer);
        idleTimer = window.setTimeout(wakeAll, IDLE_AFTER + 50);
      },
      { passive: true },
    );
  }

  document.querySelectorAll<HTMLElement>('[data-stretch]').forEach((el) => {
    const letters = [...el.querySelectorAll<HTMLElement>('.sl')];
    const hasIdle = el.hasAttribute('data-idle');
    const cur = letters.map(() => 0);
    let w0: number[] = []; // ancho en reposo
    let w1: number[] = []; // ancho al máximo
    let line: number[] = []; // línea de cada letra (los nombres largos ocupan varias)
    let radius = 200;
    let ready = false;

    const measure = () => {
      letters.forEach((l) => {
        l.style.width = '';
        l.style.transform = '';
        l.style.setProperty('--w', `${REST_W}%`);
        l.style.setProperty('--g', String(REST_G));
      });
      // Ancho de maquetación (getComputedStyle): no le afectan los transform de la animación de entrada
      const width = (l: HTMLElement) => parseFloat(getComputedStyle(l).width);
      w0 = letters.map(width);
      line = letters.map((l) => l.offsetTop);
      letters.forEach((l) => {
        l.style.setProperty('--w', `${MAX_W}%`);
        l.style.setProperty('--g', String(MAX_G));
      });
      w1 = letters.map(width);
      letters.forEach((l, i) => {
        l.style.setProperty('--w', `${REST_W}%`);
        l.style.setProperty('--g', String(REST_G));
        l.style.width = `${w0[i]}px`;
        cur[i] = 0;
      });
      radius = parseFloat(getComputedStyle(el).fontSize) * 1.6;
      ready = true;
    };

    let raf = 0;
    let fontsReady = false;
    const block: Block = {
      visible: false,
      wake: () => {
        if (!block.visible || !fontsReady) return;
        if (!ready) measure();
        if (!raf) raf = requestAnimationFrame(frame);
      },
    };

    const frame = (now: number) => {
      raf = 0;
      const idle = hasIdle && idleAllowed;
      const pointerActive = fine && now - lastMove < IDLE_AFTER;
      let moving = false;
      // Las cajas no se mueven nunca (solo transform): su posición vale como referencia
      const rects = pointerActive ? letters.map((l) => l.getBoundingClientRect()) : [];
      let shift = 0;
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

        if (i > 0 && line[i] !== line[i - 1]) shift = 0; // nueva línea
        const grow = (w1[i] - w0[i]) * cur[i];
        l.style.setProperty('--w', `${(REST_W + cur[i] * (MAX_W - REST_W)).toFixed(1)}%`);
        l.style.setProperty('--g', (REST_G + cur[i] * (MAX_G - REST_G)).toFixed(0));
        const x = shift + grow / 2;
        l.style.transform = x > 0.05 ? `translateX(${x.toFixed(1)}px)` : '';
        shift += grow;
      });
      if (moving || (idle && !pointerActive)) raf = requestAnimationFrame(frame);
    };

    blocks.push(block);
    document.fonts.ready.then(() => {
      fontsReady = true;
      block.wake();
    });
    let resizeTimer = 0;
    window.addEventListener(
      'resize',
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          cancelAnimationFrame(raf);
          raf = 0;
          ready = false; // se vuelve a medir la próxima vez que esté a la vista
          block.wake();
        }, 150);
      },
      { passive: true },
    );
    new IntersectionObserver(([entry]) => {
      block.visible = entry.isIntersecting;
      if (block.visible) block.wake();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }).observe(el);
  });
}
