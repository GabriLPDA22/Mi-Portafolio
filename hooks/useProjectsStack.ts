"use client";

import { useEffect, type RefObject } from "react";
import {
  createIdleRafLoop,
  observeNearViewport,
  prefersReducedMotion,
} from "@/hooks/scrollRuntime";

/**
 * Sticky project stack — only ticks while the stack is near the viewport.
 */
export function useProjectsStack(
  containerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(".project-card"),
    );
    const contents = Array.from(
      container.querySelectorAll<HTMLElement>(".project-card-content"),
    );
    if (cards.length < 2) return;

    let active = false;
    let naturalTops: number[] = [];

    const measure = () => {
      const scrollY = window.scrollY;
      naturalTops = cards.map((card) => {
        const previousPin = Number(card.dataset.pinY ?? "0");
        return card.getBoundingClientRect().top + scrollY - previousPin;
      });
    };

    const loop = createIdleRafLoop((dt) => {
      if (!active) return false;
      const lag = 1 - Math.exp(-dt / 0.45);
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const headerOffset = window.innerWidth < 1280 ? 70 : 85;
      if (!naturalTops.length) measure();

      const containerEnd =
        naturalTops[naturalTops.length - 1] +
        cards[cards.length - 1].offsetHeight;

      let moving = false;

      cards.forEach((card, i) => {
        const naturalTop = naturalTops[i];
        const isLast = i === cards.length - 1;
        const nextTop = isLast ? naturalTop : (naturalTops[i + 1] ?? containerEnd);
        const pinStart = naturalTop - headerOffset;
        const pinDistance = Math.max(0, nextTop - naturalTop);
        const pinY = Math.min(pinDistance, Math.max(0, scrollY - pinStart));
        const prevPin = Number(card.dataset.pinY ?? "0");
        card.dataset.pinY = String(pinY);
        card.style.transform = `translate3d(0, ${pinY.toFixed(2)}px, 0)`;
        if (Math.abs(pinY - prevPin) > 0.1) moving = true;

        const viewportTop = naturalTop - scrollY;
        const start = vh;
        const end = vh * 0.5;
        const p = Math.min(
          1,
          Math.max(0, (start - viewportTop) / (start - end)),
        );
        const content = contents[i];
        if (!content) return;

        if (i > 0) {
          const incoming = 1.05 - 0.05 * p;
          const current = Number(content.dataset.stackIn ?? "1.05");
          const next = current + (incoming - current) * lag;
          content.dataset.stackIn = String(next);
          if (!content.dataset.stackOp) {
            content.style.transform = `scale(${next.toFixed(4)})`;
          }
          if (Math.abs(next - incoming) > 0.001) moving = true;
        }

        if (i > 0 && contents[i - 1]) {
          const prev = contents[i - 1];
          const op = 1 - 0.9 * p;
          const sc = 1 - 0.15 * p;
          const curOp = Number(prev.dataset.stackOp ?? "1");
          const curSc = Number(prev.dataset.stackSc ?? "1");
          const nextOp = curOp + (op - curOp) * lag;
          const nextSc = curSc + (sc - curSc) * lag;
          prev.dataset.stackOp = String(nextOp);
          prev.dataset.stackSc = String(nextSc);
          prev.style.opacity = nextOp.toFixed(3);
          prev.style.transform = `scale(${nextSc.toFixed(4)})`;
          if (Math.abs(nextOp - op) > 0.001 || Math.abs(nextSc - sc) > 0.001) {
            moving = true;
          }
        }
      });

      return moving;
    });

    const kick = () => {
      if (!active) return;
      measure();
      loop.kick();
    };

    const unobserve = observeNearViewport(
      container,
      (isActive) => {
        active = isActive;
        if (active) kick();
      },
      "30% 0px 30% 0px",
    );

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    measure();
    kick();

    return () => {
      loop.stop();
      unobserve();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      cards.forEach((card) => {
        card.style.transform = "";
        delete card.dataset.pinY;
      });
      contents.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
        delete el.dataset.stackOp;
        delete el.dataset.stackSc;
        delete el.dataset.stackIn;
      });
    };
  }, [containerRef]);
}
