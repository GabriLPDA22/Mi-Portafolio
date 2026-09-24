"use client";

import { useEffect, useId, useRef } from "react";
import {
  createIdleRafLoop,
  observeNearViewport,
  prefersReducedMotion,
} from "@/hooks/scrollRuntime";

export default function ArcMarquee({ text }: { text: string }) {
  const pathRef = useRef<SVGTextPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const pathId = `arc-path-${uid}`;
  const loop = `${text}  ·  ${text}  ·  ${text}  ·  `;

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap || prefersReducedMotion()) return;

    let active = false;
    let current = 0;

    const anim = createIdleRafLoop((dt) => {
      if (!active) return false;
      const lag = 1 - Math.exp(-dt / 0.55);
      const rect = wrap.getBoundingClientRect();
      const travel = window.innerHeight + rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / travel),
      );
      const target = -progress * 42;
      current += (target - current) * lag;
      path.setAttribute("startOffset", `${current.toFixed(2)}%`);
      return Math.abs(current - target) > 0.05;
    });

    const kick = () => {
      if (active) anim.kick();
    };

    const unobserve = observeNearViewport(wrap, (isActive) => {
      active = isActive;
      if (active) anim.kick();
    });

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });

    return () => {
      anim.stop();
      unobserve();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none relative -mx-5 mb-2 overflow-hidden sm:mx-0"
    >
      <svg
        viewBox="0 0 1200 280"
        className="h-[12.5rem] w-[175%] max-w-none -translate-x-[21%] sm:h-[12rem] sm:w-full sm:translate-x-0 xl:h-[14rem]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 48 204 Q 600 40 1152 204"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="152"
          strokeLinecap="round"
          className="sm:[stroke-width:112]"
        />
        <path id={pathId} d="M 48 204 Q 600 40 1152 204" fill="none" />
        <text
          fill="var(--color-noir)"
          className="font-code text-[52px] font-bold uppercase tracking-[0.12em] sm:text-[34px] xl:text-[36px]"
        >
          <textPath ref={pathRef} href={`#${pathId}`} startOffset="0%">
            {loop}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
