"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CursorState {
  isHovering: boolean;
  isPointer: boolean;
  text: string;
  isHidden: boolean;
  isDisabledZone: boolean; // <- NUEVO (para hero)
}

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>({
    isHovering: false,
    isPointer: false,
    text: "",
    isHidden: true,
    isDisabledZone: false,
  });

  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const spotlightElements = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    if (isTouchDevice || motionQuery.matches) return;

    const isInDisabledZone = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      return !!el?.closest?.("[data-no-cursor]");
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const disabled = isInDisabledZone(e.clientX, e.clientY);

      // Si estamos en el hero, ocultamos el cursor custom y no aplicamos hover logic
      if (disabled) {
        setState((prev) => ({
          ...prev,
          isDisabledZone: true,
          isHidden: true,
          isHovering: false,
          isPointer: false,
          text: "",
        }));
        return;
      }

      // fuera del hero = normal
      setState((prev) => ({
        ...prev,
        isDisabledZone: false,
        isHidden: false,
      }));

      // Spotlight
      spotlightElements.current.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (element as HTMLElement).style.setProperty("--spotlight-x", `${x}px`);
        (element as HTMLElement).style.setProperty("--spotlight-y", `${y}px`);
      });
    };

    const handleMouseEnter = () => {
      setState((prev) => ({ ...prev, isHidden: false }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isHidden: true }));
    };

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;

      // Si está dentro del hero, no aplicamos estados
      if (target.closest("[data-no-cursor]")) return;

      const cursorText = target.dataset.cursorText || "";
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursorPointer === "true";

      setState((prev) => ({
        ...prev,
        isHovering: true,
        isPointer: !!isInteractive,
        text: cursorText,
      }));
    };

    const handleElementLeave = () => {
      setState((prev) => ({
        ...prev,
        isHovering: false,
        isPointer: false,
        text: "",
      }));
    };

    // Spotlight tracking
    const spotlightCards = document.querySelectorAll("[data-spotlight]");
    spotlightCards.forEach((card) => spotlightElements.current.add(card));

    const interactiveSelector =
      'a, button, [data-cursor-text], [data-cursor-pointer="true"]';

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      if (
        target.matches(interactiveSelector) ||
        target.closest(interactiveSelector)
      ) {
        handleElementHover(e);
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (
        (target.matches(interactiveSelector) ||
          target.closest(interactiveSelector)) &&
        (!relatedTarget || !relatedTarget.closest(interactiveSelector))
      ) {
        handleElementLeave();
      }
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.hasAttribute("data-spotlight")) {
              spotlightElements.current.add(node);
            }
            node.querySelectorAll("[data-spotlight]").forEach((card) => {
              spotlightElements.current.add(card);
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (isMobile || isReducedMotion) return null;

  // Si estamos en el hero, no renderizamos nada
  if (state.isDisabledZone)
    return (
      <>
        <style jsx global>{`
          /* En el hero recupera cursor normal */
          [data-no-cursor],
          [data-no-cursor] * {
            cursor: auto !important;
          }
        `}</style>
      </>
    );

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: state.isHovering ? 0.5 : 1,
            opacity: state.isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          animate={{
            width: state.isHovering ? 80 : 40,
            height: state.isHovering ? 80 : 40,
            opacity: state.isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{
              borderColor: state.isPointer
                ? "rgba(139, 92, 246, 0.5)"
                : "rgba(255, 255, 255, 0.2)",
              boxShadow: state.isPointer
                ? "0 0 20px rgba(139, 92, 246, 0.3)"
                : "none",
            }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="absolute inset-0 rounded-full bg-accent/10 blur-md"
            animate={{
              opacity: state.isPointer ? 1 : 0,
              scale: state.isPointer ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {state.text && (
            <motion.span
              className="text-[10px] font-medium text-white/80 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {state.text}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        [data-spotlight] {
          position: relative;
          overflow: hidden;
        }

        [data-spotlight]::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
            rgba(139, 92, 246, 0.1),
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        [data-spotlight]:hover::before {
          opacity: 1;
        }

        /* Hide default cursor on desktop (except hero) */
        @media (hover: hover) and (pointer: fine) {
          body *:not([data-no-cursor] *):not([data-no-cursor]) {
            cursor: none !important;
          }

          [data-no-cursor],
          [data-no-cursor] * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
