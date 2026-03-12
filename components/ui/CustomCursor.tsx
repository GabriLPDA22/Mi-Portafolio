"use client";

import { useEffect, useRef, useReducer } from "react";
import { m, useSpring, useMotionValue } from "framer-motion";

interface CursorState {
  isHovering: boolean;
  isPointer: boolean;
  text: string;
  isHidden: boolean;
  isDisabledZone: boolean;
  isMobile: boolean;
  isReducedMotion: boolean;
}

type CursorAction =
  | { type: "DEVICE_INIT"; isMobile: boolean; isReducedMotion: boolean }
  | { type: "SHOW" }
  | { type: "HIDE" }
  | { type: "ENTER_DISABLED_ZONE" }
  | { type: "LEAVE_DISABLED_ZONE" }
  | { type: "ELEMENT_HOVER"; text: string; isPointer: boolean }
  | { type: "ELEMENT_LEAVE" };

function cursorReducer(state: CursorState, action: CursorAction): CursorState {
  switch (action.type) {
    case "DEVICE_INIT":
      return { ...state, isMobile: action.isMobile, isReducedMotion: action.isReducedMotion };
    case "SHOW":
      return { ...state, isHidden: false };
    case "HIDE":
      return { ...state, isHidden: true };
    case "ENTER_DISABLED_ZONE":
      return { ...state, isDisabledZone: true, isHidden: true, isHovering: false, isPointer: false, text: "" };
    case "LEAVE_DISABLED_ZONE":
      return { ...state, isDisabledZone: false, isHidden: false };
    case "ELEMENT_HOVER":
      return { ...state, isHovering: true, isPointer: action.isPointer, text: action.text };
    case "ELEMENT_LEAVE":
      return { ...state, isHovering: false, isPointer: false, text: "" };
    default:
      return state;
  }
}

export default function CustomCursor() {
  const [state, dispatch] = useReducer(cursorReducer, {
    isHovering: false,
    isPointer: false,
    text: "",
    isHidden: true,
    isDisabledZone: false,
    isMobile: false,
    isReducedMotion: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  const spotlightElements = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    dispatch({ type: "DEVICE_INIT", isMobile: isTouchDevice, isReducedMotion: motionQuery.matches });

    if (isTouchDevice || motionQuery.matches) return;

    const isInDisabledZone = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      return !!el?.closest?.("[data-no-cursor]");
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const disabled = isInDisabledZone(e.clientX, e.clientY);

      if (disabled) {
        dispatch({ type: "ENTER_DISABLED_ZONE" });
        return;
      }

      dispatch({ type: "LEAVE_DISABLED_ZONE" });

      spotlightElements.current.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (element as HTMLElement).style.setProperty("--spotlight-x", `${x}px`);
        (element as HTMLElement).style.setProperty("--spotlight-y", `${y}px`);
      });
    };

    const handleMouseEnter = () => dispatch({ type: "SHOW" });
    const handleMouseLeave = () => dispatch({ type: "HIDE" });

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-no-cursor]")) return;

      const cursorText = target.dataset.cursorText || "";
      const isInteractive = !!(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursorPointer === "true"
      );

      dispatch({ type: "ELEMENT_HOVER", text: cursorText, isPointer: isInteractive });
    };

    const handleElementLeave = () => dispatch({ type: "ELEMENT_LEAVE" });

    const spotlightCards = document.querySelectorAll("[data-spotlight]");
    spotlightCards.forEach((card) => spotlightElements.current.add(card));

    const interactiveSelector = 'a, button, [data-cursor-text], [data-cursor-pointer="true"]';

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      if (target.matches(interactiveSelector) || target.closest(interactiveSelector)) {
        handleElementHover(e);
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (
        (target.matches(interactiveSelector) || target.closest(interactiveSelector)) &&
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

  if (state.isMobile || state.isReducedMotion) return null;

  if (state.isDisabledZone) return null;

  return (
    <>
      {/* Main dot cursor */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
      >
        <m.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: state.isHovering ? 0.5 : 1,
            opacity: state.isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </m.div>
      </m.div>

      {/* Outer ring */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <m.div
          className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          animate={{
            width: state.isHovering ? 80 : 40,
            height: state.isHovering ? 80 : 40,
            opacity: state.isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <m.div
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

          <m.div
            className="absolute inset-0 rounded-full bg-accent/10 blur-md"
            animate={{
              opacity: state.isPointer ? 1 : 0,
              scale: state.isPointer ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {state.text && (
            <m.span
              className="text-[10px] font-medium text-white/80 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {state.text}
            </m.span>
          )}
        </m.div>
      </m.div>
    </>
  );
}
