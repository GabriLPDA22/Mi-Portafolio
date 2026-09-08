"use client";

import { useEffect, useRef } from "react";
import {
  createIdleRafLoop,
  observeNearViewport,
  prefersReducedMotion,
} from "@/hooks/scrollRuntime";

export type ScrubVars = {
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  /** Override X below the xl breakpoint. */
  mobileX?: number;
};

type Item = {
  el: HTMLElement;
  selector: string;
  current: { x: number; y: number; rotate: number; scale: number; opacity: number };
};

/**
 * Scroll-scrub with a single idle-aware rAF loop per scope.
 * Pauses when the section is offscreen — avoids N forever-running loops.
 */
export function useScrollScrub(animations: Record<string, ScrubVars>) {
  const scopeRef = useRef<HTMLElement | null>(null);
  const animationsRef = useRef(animations);
  animationsRef.current = animations;

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || prefersReducedMotion()) return;

    const items: Item[] = [];
    for (const selector of Object.keys(animationsRef.current)) {
      scope.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.classList.add("gsap-scrub");
        items.push({
          el,
          selector,
          current: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
        });
      });
    }
    if (!items.length) return;

    const distance = 300;
    const scrubSeconds = 2;
    let active = false;
    let xl = window.matchMedia("(min-width: 1280px)").matches;
    const xlMq = window.matchMedia("(min-width: 1280px)");

    const settled = (a: number, b: number) => Math.abs(a - b) < 0.05;

    const loop = createIdleRafLoop((dt) => {
      if (!active) return false;
      const lag = 1 - Math.exp(-dt / scrubSeconds);
      const startLine = window.innerHeight * (xl ? 0.08 : 0.15);
      let moving = false;

      for (const item of items) {
        const vars = animationsRef.current[item.selector];
        if (!vars) continue;

        const rect = item.el.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (startLine - rect.top) / distance),
        );

        const targetX =
          (xl ? (vars.x ?? 0) : (vars.mobileX ?? vars.x ?? 0)) * progress;
        const targetY = (vars.y ?? 0) * progress;
        const targetR = (vars.rotate ?? 0) * progress;
        const targetS = 1 + ((vars.scale ?? 1) - 1) * progress;
        const targetO = 1 + ((vars.opacity ?? 1) - 1) * progress;

        item.current.x += (targetX - item.current.x) * lag;
        item.current.y += (targetY - item.current.y) * lag;
        item.current.rotate += (targetR - item.current.rotate) * lag;
        item.current.scale += (targetS - item.current.scale) * lag;
        item.current.opacity += (targetO - item.current.opacity) * lag;

        const { x, y, rotate, scale, opacity } = item.current;
        item.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(3)}deg) scale(${scale.toFixed(4)})`;
        if (vars.opacity !== undefined) {
          item.el.style.opacity = opacity.toFixed(3);
        }

        if (
          !settled(item.current.x, targetX) ||
          !settled(item.current.y, targetY) ||
          !settled(item.current.rotate, targetR) ||
          !settled(item.current.scale, targetS) ||
          !settled(item.current.opacity, targetO)
        ) {
          moving = true;
        }
      }

      return moving;
    });

    const onXl = () => {
      xl = xlMq.matches;
      loop.kick();
    };
    xlMq.addEventListener("change", onXl);

    const onScroll = () => {
      if (active) loop.kick();
    };

    const unobserve = observeNearViewport(scope, (isActive) => {
      active = isActive;
      if (active) loop.kick();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    loop.kick();

    return () => {
      loop.stop();
      unobserve();
      xlMq.removeEventListener("change", onXl);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      items.forEach((item) => {
        item.el.style.transform = "";
        item.el.style.opacity = "";
        item.el.classList.remove("gsap-scrub");
      });
    };
  }, []);

  return scopeRef;
}
