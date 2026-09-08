"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          className="glass fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 hover:border-acid hover:bg-acid hover:text-noir hover:shadow-[0_0_30px_-6px_rgba(240,180,41,0.5)] active:scale-95 sm:bottom-8 sm:right-8"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp
            className="h-5 w-5 text-current transition-colors duration-300"
            strokeWidth={2}
          />
        </m.button>
      )}
    </AnimatePresence>
  );
}
