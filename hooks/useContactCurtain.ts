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

      // Telón fuera del todo — sin franjas laterales en el footer
      const curtainX = currentOpen * 105;
      const reveal = 0.06 + currentOpen * 0.94;
      const mobile = window.innerWidth < 640;
      // En móvil el form se lee mejor encima del corte diagonal
      const exitFade = mobile ? 0.55 : 0.78;
      const exitBright = mobile ? 0.28 : 0.5;
      const exitScale = mobile ? 0.04 : 0.08;
      const opacity = reveal * (1 - currentExit * exitFade);
      const scale = 0.97 + currentOpen * 0.03 - currentExit * exitScale;
      const shiftY = currentExit * (mobile ? -18 : -6);
      const brightness = 1 - currentExit * exitBright;

      stage.style.transform = `translate3d(0, ${pinY.toFixed(2)}px, 0)`;
      stage.style.pointerEvents = currentExit > 0.25 ? "none" : "auto";
      left.style.transform = `translate3d(-${curtainX.toFixed(2)}%, 0, 0)`;
      right.style.transform = `translate3d(${curtainX.toFixed(2)}%, 0, 0)`;
      content.style.opacity = opacity.toFixed(3);
      content.style.transform = `translate3d(0, ${shiftY.toFixed(2)}vh, 0) scale(${scale.toFixed(4)})`;
      content.style.filter = `brightness(${brightness.toFixed(3)})`;
      if (veil) {
        veil.style.opacity = (currentExit * (mobile ? 0.28 : 0.55)).toFixed(3);
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
      content.style.filter = "";
      if (veil) veil.style.opacity = "";
    };
  }, [contentRef, leftRef, rightRef, sectionRef, stageRef, veilRef]);
}
