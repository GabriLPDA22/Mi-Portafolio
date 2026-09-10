"use client";

import { useEffect, type RefObject } from "react";
import {
  createIdleRafLoop,
  observeNearViewport,
  prefersReducedMotion,
} from "@/hooks/scrollRuntime";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const range = (value: number, start: number, end: number) =>
  clamp((value - start) / (end - start));

const smooth = (value: number) => value * value * (3 - 2 * value);

export function useContactCurtain(
  sectionRef: RefObject<HTMLElement | null>,
  stageRef: RefObject<HTMLDivElement | null>,
  leftRef: RefObject<HTMLDivElement | null>,
  rightRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
  veilRef?: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const content = contentRef.current;
    const veil = veilRef?.current ?? null;
    if (!section || !stage || !left || !right || !content) return;

    // Below sm the section renders as plain static-flow content (see
    // ContactSection.tsx) — no pinned stage, no curtain, nothing to
    // animate. Skip the whole rAF/scroll rig there: it was the main
    // source of the "telón" jank on phones.
    if (window.innerWidth < 640) return;

    if (prefersReducedMotion()) {
      left.style.transform = "translate3d(-105%, 0, 0)";
      right.style.transform = "translate3d(105%, 0, 0)";
      content.style.opacity = "1";
      stage.style.pointerEvents = "auto";
      if (veil) veil.style.opacity = "0";
      return;
    }

    let active = false;
    let currentOpen = 0;
    let currentExit = 0;

    const loop = createIdleRafLoop((dt) => {
      if (!active) return false;
      const lag = 1 - Math.exp(-dt / 0.18);
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / distance);
      const pinY = Math.min(distance, Math.max(0, -rect.top));
      const targetOpen = smooth(range(progress, 0.05, 0.28));
      const targetExit = smooth(range(progress, 0.55, 0.82));

      currentOpen += (targetOpen - currentOpen) * lag;
      currentExit += (targetExit - currentExit) * lag;

      // Telón fuera del todo — sin franjas laterales en el footer.
      // Esta animación solo corre en sm+ (ver el bail-out más arriba),
      // así que las constantes ya no necesitan una variante "mobile".
      const curtainX = currentOpen * 105;
      const reveal = 0.06 + currentOpen * 0.94;
      const opacity = reveal * (1 - currentExit * 0.78);
      const scale = 0.97 + currentOpen * 0.03 - currentExit * 0.08;
      const shiftY = currentExit * -6;

      stage.style.transform = `translate3d(0, ${pinY.toFixed(2)}px, 0)`;
      stage.style.pointerEvents = currentExit > 0.25 ? "none" : "auto";
      left.style.transform = `translate3d(-${curtainX.toFixed(2)}%, 0, 0)`;
      right.style.transform = `translate3d(${curtainX.toFixed(2)}%, 0, 0)`;
      content.style.opacity = opacity.toFixed(3);
      content.style.transform = `translate3d(0, ${shiftY.toFixed(2)}vh, 0) scale(${scale.toFixed(4)})`;
      if (veil) {
        // El velo (opacidad, barato) sustituye al filter:brightness()
        // anterior, que forzaba repintado en cada frame.
        veil.style.opacity = (currentExit * 0.55).toFixed(3);
      }

      return (
        Math.abs(currentOpen - targetOpen) > 0.001 ||
        Math.abs(currentExit - targetExit) > 0.001
      );
    });

    const kick = () => {
      if (active) loop.kick();
    };

    const unobserve = observeNearViewport(
      section,
      (isActive) => {
        active = isActive;
        if (active) loop.kick();
      },
      "15% 0px 15% 0px",
    );

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    loop.kick();

    return () => {
      loop.stop();
      unobserve();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      stage.style.transform = "";
      stage.style.pointerEvents = "";
      left.style.transform = "";
      right.style.transform = "";
      content.style.opacity = "";
      content.style.transform = "";
      if (veil) veil.style.opacity = "";
    };
  }, [contentRef, leftRef, rightRef, sectionRef, stageRef, veilRef]);
}
