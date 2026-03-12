"use client";

import { useEffect, useReducer } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type ThemeState = {
  isDark: boolean;
  mounted: boolean;
};

type ThemeAction =
  | { type: "MOUNT"; isDark: boolean }
  | { type: "TOGGLE" };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "MOUNT":
      return { isDark: action.isDark, mounted: true };
    case "TOGGLE":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
}

export default function ThemeToggle() {
  const [state, dispatch] = useReducer(themeReducer, { isDark: true, mounted: false });

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    dispatch({ type: "MOUNT", isDark });
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !state.isDark;
    dispatch({ type: "TOGGLE" });
    const theme = newDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", !newDark);
  };

  if (!state.mounted) return null;

  return (
    <m.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center 
                 bg-[var(--bg-glass)] border border-[var(--border-subtle)]
                 hover:border-[var(--border-visible)] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={state.isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor-text={state.isDark ? "Light" : "Dark"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={state.isDark ? "moon" : "sun"}
          initial={{ scale: 0.95, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.95, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {state.isDark ? (
            <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
          ) : (
            <Sun className="w-4 h-4 text-[var(--text-secondary)]" />
          )}
        </m.div>
      </AnimatePresence>
    </m.button>
  );
}
