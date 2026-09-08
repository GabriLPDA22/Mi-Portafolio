"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { dispatchIntroReady } from "@/hooks/useIntroReady";

const WORDS: Record<string, string[]> = {
  es: ["imagina", "piensa", "diseña", "programa", "itera", "pule", "lanza"],
  en: ["imagine", "think", "design", "code", "iterate", "polish", "ship"],
};

const STORAGE_KEY = "gs-preloader";
const DURATION_MS = 2400;
const EXIT_DELAY_MS = 250;
const EXIT_MS = 750;

/**
 * Se muestra solo una vez por sesión de navegación. Un script inline lo
 * oculta antes del primer paint en visitas repetidas para evitar flashes.
 */
export default function Preloader() {
  const { locale } = useLocale();
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0); // fracción lineal 0..1
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let skip = false;
    try {
      skip =
        sessionStorage.getItem(STORAGE_KEY) === "1" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      // sessionStorage bloqueado: mostramos el loader igualmente
    }

    if (skip) {
      setPhase("done");
      dispatchIntroReady();
      return;
    }

    let raf = 0;
    let exitTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      // easeOutCubic: arranca con energía y frena al final
      const eased = 1 - Math.pow(1 - t, 3);
      setElapsed(t);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // sin sessionStorage el loader simplemente se repetirá
        }
        exitTimer = setTimeout(() => {
          setPhase("exit");
          dispatchIntroReady();
        }, EXIT_DELAY_MS);
        doneTimer = setTimeout(() => setPhase("done"), EXIT_DELAY_MS + EXIT_MS);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Bloquear scroll mientras carga
  useEffect(() => {
    const root = document.documentElement;
    if (phase === "loading") {
      root.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  const words = WORDS[locale] ?? WORDS.es;
  // Rotación uniforme en el tiempo (lineal), independiente del easing de la barra
  const wordIndex = Math.min(
    words.length - 1,
    Math.floor(elapsed * words.length)
  );

  return (
    <>
      {/* suppressHydrationWarning: el script inline puede ponerle display:none
          antes de la hidratación en visitas repetidas */}
      <div
        id="site-preloader"
        aria-hidden="true"
        suppressHydrationWarning
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-noir transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === "exit" ? "-translate-y-full" : ""
        }`}
      >
        <div
          className={`flex w-[min(300px,78vw)] flex-col items-center transition-opacity duration-300 ${
            phase === "exit" ? "opacity-0" : "opacity-100"
          }`}
        >
          <span
            key={wordIndex}
            className="preloader-word text-5xl text-ink sm:text-6xl"
          >
            {words[wordIndex]}
          </span>

          <span className="mt-6 font-mono text-[11px] tracking-[0.5em] text-acid/70">
            {String(progress).padStart(3, "0")}
          </span>

          <div className="mt-4 h-px w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-acid"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Se ejecuta antes del paint: oculta el loader en visitas repetidas
          (o con reduced motion) para evitar flashes */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(sessionStorage.getItem('gs-preloader')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches){var p=document.getElementById('site-preloader');if(p)p.style.display='none'}}catch(e){}",
        }}
      />
    </>
  );
}
