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
      // Only schedule work while the section is actually near the
      // viewport — this used to run on every scroll anywhere on the
      // page (the `active` check was OR'd with a width check that made
      // it a no-op on mobile), keeping a rAF loop alive site-wide.
      if (!active) return;
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
        } else if (window.innerWidth < 640) {
          // Leaving the pin window — release the transform instead of
          // leaving it stuck at its last value.
          section.dataset.mobilePinY = "0";
          section.style.transform = "";
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
