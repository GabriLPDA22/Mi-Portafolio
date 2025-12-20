"use client";

import { useEffect, useState, useCallback } from "react";

interface SpotlightPosition {
  x: number;
  y: number;
}

export function useSpotlight(
  containerRef: React.RefObject<HTMLElement | null>
) {
  const [position, setPosition] = useState<SpotlightPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable on mobile and reduced motion
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setIsEnabled(!isMobile && !prefersReducedMotion);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current || !isEnabled) return;

      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [containerRef, isEnabled]
  );

  const handleMouseEnter = useCallback(() => {
    if (isEnabled) setIsVisible(true);
  }, [isEnabled]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isEnabled) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    containerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isEnabled,
  ]);

  return { position, isVisible, isEnabled };
}
