"use client";

import { useEffect, useState } from "react";

const EVENT = "gs-intro-ready";

export function dispatchIntroReady() {
  window.dispatchEvent(new Event(EVENT));
}

/** True when the preloader is gone (or was skipped) so entry animations can play. */
export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (
        sessionStorage.getItem("gs-preloader") === "1" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setReady(true);
        return;
      }
    } catch {
      setReady(true);
      return;
    }

    const onReady = () => setReady(true);
    window.addEventListener(EVENT, onReady);
    const fallback = window.setTimeout(onReady, 4000);
    return () => {
      window.removeEventListener(EVENT, onReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return ready;
}
