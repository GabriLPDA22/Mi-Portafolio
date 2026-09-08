"use client";

import { useEffect, type RefObject } from "react";
import {
  observeNearViewport,
  prefersReducedMotion,
} from "@/hooks/scrollRuntime";

export function usePinnedSectionExit(
  sectionRef: RefObject<HTMLElement | null>,
  coverSelector: string,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const cover = document.querySelector<HTMLElement>(coverSelector);
    if (!section || !cover) return;

    let frame = 0;
    let naturalTop = 0;
    let active = false;

    const measure = () => {
      const previousPin = Number(section.dataset.mobilePinY ?? "0");
      naturalTop =
        section.getBoundingClientRect().top + window.scrollY - previousPin;
    };

    const update = () => {
      frame = 0;
      const mobile = window.innerWidth < 640 && !prefersReducedMotion();
      if (!mobile) {
        section.dataset.mobilePinY = "0";
        section.style.transform = "";
        return;
      }
      if (!active) return;

      const pinStart = naturalTop + section.offsetHeight - window.innerHeight;
      const pinY = Math.min(
        cover.offsetHeight,
        Math.max(0, window.scrollY - pinStart),
      );

      section.dataset.mobilePinY = String(pinY);
      section.style.transform = `translate3d(0, ${pinY.toFixed(2)}px, 0)`;
    };

    const requestUpdate = () => {
      if (!active && window.innerWidth >= 640) return;
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const handleResize = () => {
      measure();
      requestUpdate();
    };

    const unobserve = observeNearViewport(
      section,
      (isActive) => {
        active = isActive;
        if (active) {
          measure();
          requestUpdate();
        }
      },
      "40% 0px 40% 0px",
    );

    measure();
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      unobserve();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
      delete section.dataset.mobilePinY;
      section.style.transform = "";
    };
  }, [coverSelector, sectionRef]);
}
