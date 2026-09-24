"use client";

import { m, type Variants } from "framer-motion";
import { Children, useEffect, useRef, type ReactNode } from "react";
import { useIntroReady } from "@/hooks/useIntroReady";

const EASE = [0.22, 1, 0.36, 1] as const;

function usePrefersReducedMotion() {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);
  return ref;
}

const letterContainer: Variants = {
  hide: {},
  show: (delay: number) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.045,
    },
  }),
};

const letter: Variants = {
  hide: { y: "108%" },
  show: {
    y: "0%",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function SplitTitle({
  text,
  delay = 0,
  play = "intro",
  className = "",
}: {
  text: string;
  delay?: number;
  play?: "intro" | "view";
  className?: string;
}) {
  const introReady = useIntroReady();
  const ready = play === "view" ? true : introReady;
  const letters = Array.from(text);

  return (
    <m.span
      className={`inline-flex overflow-hidden pb-[0.06em] ${className}`}
      variants={letterContainer}
      custom={delay}
      initial="hide"
      animate={play === "intro" ? (ready ? "show" : "hide") : undefined}
      whileInView={play === "view" ? "show" : undefined}
      viewport={play === "view" ? { once: true, amount: 0.15 } : undefined}
    >
      {letters.map((char, i) => (
        <m.span
          key={`${char}-${i}`}
          className="inline-block will-change-transform"
          variants={letter}
        >
          {char === " " ? "\u00A0" : char}
        </m.span>
      ))}
    </m.span>
  );
}

export function EntryFade({
  children,
  order = 0,
  delay,
  className = "",
  play = "intro",
}: {
  children: ReactNode;
  order?: number;
  delay?: number;
  className?: string;
  play?: "intro" | "view";
}) {
  const introReady = useIntroReady();
  const ready = play === "view" ? true : introReady;
  const wait = delay ?? order * 0.4;
  const hidden = { opacity: 0.001, scale: 0.95 };
  const shown = { opacity: 1, scale: 1 };

  return (
    <m.div
      className={`will-change-[opacity,transform] ${className}`}
      initial={hidden}
      animate={play === "intro" ? (ready ? shown : hidden) : undefined}
      whileInView={play === "view" ? shown : undefined}
      viewport={play === "view" ? { once: true, amount: 0.2 } : undefined}
      transition={{ duration: 0.6, delay: wait, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}

export function EntrySlide({
  children,
  direction = "down",
  order = 0,
  delay,
  className = "",
  play = "intro",
}: {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  order?: number;
  delay?: number;
  className?: string;
  play?: "intro" | "view";
}) {
  const introReady = useIntroReady();
  const ready = play === "view" ? true : introReady;
  const wait = delay ?? order * 0.4;
  const offset = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  }[direction];
  const hidden = { opacity: 0.001, ...offset };
  const shown = { opacity: 1, x: 0, y: 0 };

  return (
    <m.div
      className={`will-change-[opacity,transform] ${className}`}
      initial={hidden}
      animate={play === "intro" ? (ready ? shown : hidden) : undefined}
      whileInView={play === "view" ? shown : undefined}
      viewport={play === "view" ? { once: true, amount: 0.15 } : undefined}
      transition={{ duration: 0.7, delay: wait, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}

export function EntryStagger({
  children,
  order = 0,
  stagger = 0.12,
  className = "",
}: {
  children: ReactNode;
  order?: number;
  stagger?: number;
  className?: string;
}) {
  const ready = useIntroReady();

  const container: Variants = {
    hide: {},
    show: {
      transition: {
        delayChildren: order * 0.4,
        staggerChildren: stagger,
      },
    },
  };

  const child: Variants = {
    hide: { opacity: 0.001, scale: 0.95, y: 36 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <m.div
      className={className}
      variants={container}
      initial="hide"
      animate={ready ? "show" : "hide"}
    >
      {Children.toArray(children).map((item, i) => (
        <m.div
          key={i}
          variants={child}
          className="will-change-[opacity,transform]"
        >
          {item}
        </m.div>
      ))}
    </m.div>
  );
}

/** Inclinación al scroll, como el GSAP del portfolio de referencia. */
export function useScrollDrift(x: number, rotate: number) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced.current) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / (window.innerHeight * 0.75)),
      );
      el.style.transform = `translate3d(${x * progress}px, 0, 0) rotate(${rotate * progress}deg)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [x, rotate, reduced]);

  return ref;
}
