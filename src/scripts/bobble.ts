/**
 * Bobblehead del hero: la cabeza es un oscilador amortiguado (muelle) que recibe "golpes" al mover
 * el ratón, al pasar por encima, al hacer scroll y al tocarla; la figura entera gira en 3D hacia
 * el cursor. El bucle de animación se duerme en cuanto todo vuelve al reposo.
 * Con "reducir movimiento" la figura se queda quieta (el toque solo cuenta para el easter egg).
 */
export function initBobble() {
  const stage = document.querySelector<HTMLElement>('[data-bobble]');
  const figure = stage?.querySelector<HTMLButtonElement>('[data-bobble-figure]');
  const tilt = stage?.querySelector<HTMLElement>('[data-bobble-tilt]');
  const head = stage?.querySelector<HTMLElement>('[data-bobble-head]');
  const bubble = stage?.querySelector<HTMLElement>('[data-bobble-bubble]');
  const hero = stage?.closest('section');
  if (!stage || !figure || !tilt || !head || !hero) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Muelle: ~1,9 Hz con amortiguación baja (varios rebotes antes de pararse)
  const K = 140;
  const C = 5.2;
  const MAX = 26; // grados
  let angle = 0;
  let vel = 0;
  let rx = 0;
  let ry = 0;
  let targetX = 0;
  let targetY = 0;
  let raf = 0;
  let last = 0;

  const render = () => {
    head.style.setProperty('--ha', `${angle.toFixed(2)}deg`);
    head.style.setProperty('--hx', `${(angle * 0.35).toFixed(2)}px`);
    head.style.setProperty('--hy', `${(-Math.abs(angle) * 0.18).toFixed(2)}px`);
    tilt.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    tilt.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    stage.style.setProperty('--tiltabs', (Math.abs(ry) / 16).toFixed(3));
  };

  const step = (now: number) => {
    const dt = Math.min(0.032, (now - last) / 1000);
    last = now;
    vel += (-K * angle - C * vel) * dt;
    angle = Math.max(-MAX, Math.min(MAX, angle + vel * dt));
    const ease = Math.min(1, dt * 7);
    rx += (targetX - rx) * ease;
    ry += (targetY - ry) * ease;
    render();
    const resting = Math.abs(angle) < 0.03 && Math.abs(vel) < 0.05 && Math.abs(targetX - rx) < 0.02 && Math.abs(targetY - ry) < 0.02;
    raf = resting ? 0 : requestAnimationFrame(step);
  };
  const wake = () => {
    if (raf || reduced) return;
    last = performance.now();
    raf = requestAnimationFrame(step);
  };
  const kick = (v: number) => {
    vel += v;
    wake();
  };

  // Toque (ratón, dedo o teclado): rebote fuerte hacia un lado al azar
  let boops = 0;
  figure.addEventListener('click', () => {
    kick((Math.random() < 0.5 ? -1 : 1) * (190 + Math.random() * 70));
    boops += 1;
    if (boops === 5 && bubble) bubble.hidden = false;
  });

  if (reduced) return;

  // Pasar por encima: un empujón suave en la dirección en la que entra el cursor
  figure.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = figure.getBoundingClientRect();
    kick(e.clientX < r.left + r.width / 2 ? 70 : -70);
  });

  // Giro 3D hacia el cursor y "arrastre" de la cabeza con la velocidad del ratón
  if (finePointer) {
    let lastX: number | null = null;
    hero.addEventListener(
      'pointermove',
      (e) => {
        const r = figure.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
        targetY = Math.max(-1, Math.min(1, dx)) * 16;
        targetX = Math.max(-1, Math.min(1, dy)) * -7;
        if (lastX !== null) vel += Math.max(-40, Math.min(40, (e.clientX - lastX) * -0.9));
        lastX = e.clientX;
        wake();
      },
      { passive: true },
    );
    hero.addEventListener('pointerleave', () => {
      targetX = 0;
      targetY = 0;
      lastX = null;
      wake();
    });
  }

  // Scroll: la cabeza "nota" el movimiento mientras el hero está a la vista
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(hero);
  let lastScroll = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const d = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (visible) kick(Math.max(-60, Math.min(60, d * 1.2)));
    },
    { passive: true },
  );

  // Saludo inicial: cuando la figura termina de caer sobre la peana
  window.setTimeout(() => kick(150), 1100);
}
