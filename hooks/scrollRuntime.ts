"use client";

/** Shared helpers to keep scroll animations off the main thread when idle. */

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Run `onFrame` via rAF only while dirty / still settling. */
export function createIdleRafLoop(
  onFrame: (dt: number, now: number) => boolean,
) {
  let raf = 0;
  let last = performance.now();
  let alive = true;

  const tick = (now: number) => {
    raf = 0;
    if (!alive) return;
    const dt = Math.min(0.064, (now - last) / 1000);
    last = now;
    const keepGoing = onFrame(dt, now);
    if (keepGoing && alive) {
      raf = requestAnimationFrame(tick);
    }
  };

  const kick = () => {
    if (!alive || raf) return;
    raf = requestAnimationFrame(tick);
  };

  const stop = () => {
    alive = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  return { kick, stop };
}

/** Enable/disable work when an element nears the viewport. */
export function observeNearViewport(
  el: Element,
  onChange: (active: boolean) => void,
  rootMargin = "20% 0px 20% 0px",
) {
  const io = new IntersectionObserver(
    ([entry]) => onChange(entry.isIntersecting),
    { rootMargin },
  );
  io.observe(el);
  return () => io.disconnect();
}
