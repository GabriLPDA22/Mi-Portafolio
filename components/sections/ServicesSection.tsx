"use client";

import { useRef, useState, useCallback } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Smartphone, Globe, Server, Container, Gauge, Wrench } from "lucide-react";

/* ============================================
   INTERFACES & MAPS
   ============================================ */
interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  chips: string[];
  cta: { label: string; href: string };
}

const iconMap: Record<string, React.ElementType> = {
  mobile: Smartphone,
  web: Globe,
  backend: Server,
  devops: Container,
  performance: Gauge,
  maintenance: Wrench,
};

const ctaHrefMap: Record<string, string> = {
  "Cómo trabajo": "#proceso",
  "How I work": "#proceso",
  "Ver ejemplos": "#proyectos",
  "See examples": "#proyectos",
  "Solicitar info": "#contacto",
  "Request info": "#contacto",
  "Hablemos": "#contacto",
  "Let's talk": "#contacto",
  "Ver proceso": "#proceso",
  "See process": "#proceso",
  "Ver planes": "#contacto",
  "See plans": "#contacto",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

/* ============================================
   VISUAL ILLUSTRATIONS
   ============================================ */
function MobileVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute h-40 w-40 rounded-full bg-[#8b5cf6]/15 blur-2xl" />
      {/* Back screen */}
      <div
        className="absolute rounded-[14px] border border-white/[0.08] bg-[#1a1a2e] shadow-lg"
        style={{ width: "30%", height: "68%", left: "16%", top: "14%", transform: "rotate(-8deg)", zIndex: 1 }}
      >
        <div className="p-2 space-y-1.5">
          <div className="h-1.5 w-8 rounded-full bg-[#8b5cf6]/50" />
          <div className="h-1 w-12 rounded-full bg-white/15" />
          <div className="h-1 w-9 rounded-full bg-white/10" />
          <div className="mt-2 h-10 rounded-lg bg-[#8b5cf6]/15" />
        </div>
      </div>
      {/* Middle screen */}
      <div
        className="absolute rounded-[14px] border border-white/[0.12] bg-[#14142a] shadow-2xl"
        style={{ width: "30%", height: "74%", left: "35%", top: "8%", zIndex: 2 }}
      >
        <div className="p-2.5 space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
            <div className="h-1 w-10 rounded-full bg-white/25" />
          </div>
          <div className="h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/30 to-[#8b5cf6]/05" />
          <div className="space-y-1">
            <div className="h-1 w-full rounded bg-white/12" />
            <div className="h-1 w-4/5 rounded bg-white/08" />
          </div>
        </div>
      </div>
      {/* Front screen */}
      <div
        className="absolute rounded-[14px] border border-[#8b5cf6]/25 bg-[#0f0f1e] shadow-xl"
        style={{ width: "30%", height: "65%", right: "14%", top: "18%", transform: "rotate(7deg)", zIndex: 3 }}
      >
        <div className="p-2 space-y-1.5">
          <div className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
          <div className="h-9 rounded-xl bg-gradient-to-br from-[#8b5cf6]/35 to-[#8b5cf6]/08" />
          <div className="h-1 w-4/5 rounded bg-white/18" />
          <div className="h-1 w-3/5 rounded bg-white/10" />
        </div>
      </div>
      {/* Arrow connector */}
      <div
        className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/08 text-white/50"
        style={{ bottom: "24%", left: "47%", zIndex: 10 }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="absolute flex gap-1" style={{ bottom: "26%", left: "37%", zIndex: 9 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-white/25" />
        ))}
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-[170px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f1a]">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-3 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
          <div className="ml-2 h-1.5 flex-1 rounded-full bg-white/[0.07]" />
        </div>
        <div className="p-3">
          {/* Metric cards */}
          <div className="mb-3 flex gap-2">
            <div className="flex-1 rounded-lg bg-[#8b5cf6]/15 p-2">
              <div className="text-[10px] font-bold text-white/80">12.4k</div>
              <div className="text-[7px] text-white/35">visits</div>
            </div>
            <div className="flex-1 rounded-lg bg-emerald-500/10 p-2">
              <div className="text-[10px] font-bold text-emerald-400">98%</div>
              <div className="text-[7px] text-white/35">uptime</div>
            </div>
          </div>
          {/* Bar chart */}
          <div className="flex h-10 items-end gap-1">
            {[35, 55, 42, 78, 58, 92, 68].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all"
                style={{
                  height: `${h}%`,
                  background:
                    i === 5
                      ? "linear-gradient(to top, #8b5cf6, #a78bfa)"
                      : "rgba(139, 92, 246, 0.22)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BackendVisual() {
  const nodes = [
    { x: "18%", y: "25%", label: "REST" },
    { x: "82%", y: "25%", label: "SQL"  },
    { x: "18%", y: "75%", label: "Cache"},
    { x: "82%", y: "75%", label: "Auth" },
  ];
  const lines = [
    { x1: "18%", y1: "25%", x2: "50%", y2: "50%" },
    { x1: "82%", y1: "25%", x2: "50%", y2: "50%" },
    { x1: "18%", y1: "75%", x2: "50%", y2: "50%" },
    { x1: "82%", y1: "75%", x2: "50%", y2: "50%" },
  ];
  return (
    <div className="relative h-full w-full">
      {/* Glow central */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/15 blur-2xl" />

      {/* Líneas SVG — ocupan todo el área */}
      <svg className="absolute inset-0 h-full w-full">
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1}
            x2={l.x2} y2={l.y2}
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {/* Icono central */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-[#8b5cf6]/40 bg-[#8b5cf6]/15">
        <Server className="h-4 w-4 text-[#8b5cf6]" strokeWidth={1.5} />
      </div>

      {/* Nodos — centrados en su posición */}
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute z-10 flex h-7 min-w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.05] px-2 text-[8px] font-semibold text-white/55"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}

function DevOpsVisual() {
  const stages = [
    { label: "Code",   dot: "bg-blue-400",    color: "#60a5fa" },
    { label: "Build",  dot: "bg-yellow-400",  color: "#facc15" },
    { label: "Test",   dot: "bg-orange-400",  color: "#fb923c" },
    { label: "Deploy", dot: "bg-emerald-400", color: "#34d399" },
  ];
  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="relative flex w-full items-center justify-between">
        {/* Continuous line behind all nodes */}
        <div
          className="absolute left-4 right-4 h-px"
          style={{
            top: "18px",
            background: "linear-gradient(to right, #60a5fa99, #facc1599, #fb923c99, #34d39999)",
          }}
        />

        {/* Stage nodes */}
        {stages.map((stage) => (
          <div key={stage.label} className="relative flex flex-col items-center gap-1.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl border bg-[#0f0f1a]"
              style={{ borderColor: `${stage.color}30` }}
            >
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: stage.color, boxShadow: `0 0 6px ${stage.color}` }}
              />
            </div>
            <span className="text-[8px] text-white/40">{stage.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PerformanceVisual() {
  const score = 97;
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
          <circle
            cx="32" cy="32" r={r}
            fill="none"
            stroke="url(#perf-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
          />
          <defs>
            <linearGradient id="perf-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-bold leading-none text-white">{score}</span>
          <span className="text-[7px] text-white/40">score</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { label: "LCP", val: "0.8s", color: "bg-emerald-400" },
          { label: "CLS", val: "0.02", color: "bg-emerald-400" },
          { label: "FID", val: "12ms", color: "bg-yellow-400" },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <div className={`h-1.5 w-1.5 rounded-full ${m.color}`} />
            <span className="text-[8px] text-white/40">{m.label}</span>
            <span className="text-[8px] font-medium text-white/65">{m.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceVisual() {
  const pts = [62, 60, 63, 59, 61, 60, 62, 58, 63, 61, 60, 62];
  const W = 120;
  const H = 40;
  const minV = Math.min(...pts);
  const maxV = Math.max(...pts);
  const norm = (v: number) => H - ((v - minV) / (maxV - minV || 1)) * (H * 0.7) - H * 0.1;
  const pathD = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * W} ${norm(p)}`)
    .join(" ");
  const areaD = `${pathD} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-3">
      <div className="flex w-full items-center justify-between">
        <span className="text-[9px] text-white/35">Uptime</span>
        <span className="text-[10px] font-semibold text-emerald-400">99.9%</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-10 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="maint-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#maint-fill)" />
        <path d={pathD} fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex w-full justify-between">
        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
          <span key={m} className="text-[7px] text-white/25">{m}</span>
        ))}
      </div>
    </div>
  );
}

const visualMap: Record<string, React.FC> = {
  mobile: MobileVisual,
  web: WebVisual,
  backend: BackendVisual,
  devops: DevOpsVisual,
  performance: PerformanceVisual,
  maintenance: MaintenanceVisual,
};

/* ============================================
   BENTO CARD
   ============================================ */
function BentoCard({
  service,
  index,
  featured = false,
  className = "",
}: {
  service: Service;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const Icon = service.icon;
  const Visual = visualMap[service.id];

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      cardRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp as unknown as Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index * 0.07}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={[
        "service-card group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] sm:backdrop-blur-xl",
        "transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.04]",
        "hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.12)]",
        className,
      ].join(" ")}
    >
      {/* Spotlight */}
      <div className="service-card-spotlight pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Visual area */}
      <div
        className={[
          "relative z-10 w-full border-b border-white/[0.06] bg-white/[0.02]",
          featured ? "h-[52%]" : "h-[44%]",
        ].join(" ")}
      >
        <Visual />
      </div>

      {/* Content */}
      <div className={["relative z-10 flex flex-col", featured ? "h-[48%] p-6" : "h-[56%] p-5"].join(" ")}>
        {/* Icon + Title */}
        <div className="mb-2 flex items-center gap-2.5">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#8b5cf6]/10 transition-all duration-300 group-hover:bg-[#8b5cf6]/20">
            <Icon className="h-4 w-4 text-[#8b5cf6]" strokeWidth={1.5} />
          </div>
          <h3 className={["font-display font-semibold text-white leading-tight", featured ? "text-lg" : "text-base"].join(" ")}>
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className={["text-white/50 leading-relaxed", featured ? "text-[13.5px] mb-4" : "text-[12.5px] mb-3"].join(" ")}>
          {service.description}
        </p>

        {/* Footer */}
        <div className="mt-auto">
          {/* Chips */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {service.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/45"
              >
                {chip}
              </span>
            ))}
          </div>
          {/* CTA */}
          <a
            href={service.cta.href}
            className="group/cta inline-flex items-center gap-1.5 text-[12px] font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
          >
            {service.cta.label}
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover/cta:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================
   MOBILE SLIDER (Apple-style navigation)
   ============================================ */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.28, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function MobileCarousel({ services }: { services: Service[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setCurrent(next);
    },
    []
  );

  const prev = () => goTo((current - 1 + services.length) % services.length, -1);
  const next = () => goTo((current + 1) % services.length, 1);

  const service = services[current];
  const Icon = service.icon;
  const Visual = visualMap[service.id];

  return (
    <div className="lg:hidden px-5">
      {/* Card — altura fija para que no salte al cambiar de tarjeta */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]" style={{ height: "430px" }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants as unknown as Variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col"
          >
            {/* Visual illustration */}
            <div className="h-44 w-full flex-shrink-0 border-b border-white/[0.06] bg-white/[0.015]">
              <Visual />
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-5 pb-6">
              {/* Icon + Title */}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#8b5cf6]/12">
                  <Icon className="h-[18px] w-[18px] text-[#8b5cf6]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[17px] font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[13.5px] leading-relaxed text-white/50">
                {service.description}
              </p>

              {/* Footer: chips + next arrow — siempre al fondo */}
              <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/45"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTA arrow — next card button */}
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#8b5cf6] text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-transform duration-150 active:scale-90"
                >
                  <svg className="h-4 w-4 translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar: counter + nav arrows */}
      <div className="mt-4 flex items-center justify-between px-1">
        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to service ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300",
                i === current
                  ? "h-2 w-5 bg-[#8b5cf6]"
                  : "h-2 w-2 bg-white/20 hover:bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.05] text-white/60 transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white active:scale-90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.05] text-white/60 transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white active:scale-90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   DESKTOP BENTO GRID
   ============================================ */
function DesktopBento({ services }: { services: Service[] }) {
  // Layout:
  //  [0 mobile - 2col 2row] [1 web   ]
  //  [0 mobile - 2col 2row] [2 backend]
  //  [3 devops] [4 performance] [5 maintenance]
  const [s0, s1, s2, s3, s4, s5] = services;

  return (
    <div
      className="hidden lg:grid lg:gap-4"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "260px 260px 260px",
      }}
    >
      <BentoCard service={s0} index={0} featured className="[grid-column:1/3] [grid-row:1/3]" />
      <BentoCard service={s1} index={1} className="[grid-column:3/4] [grid-row:1/2]" />
      <BentoCard service={s2} index={2} className="[grid-column:3/4] [grid-row:2/3]" />
      <BentoCard service={s3} index={3} className="[grid-column:1/2] [grid-row:3/4]" />
      <BentoCard service={s4} index={4} className="[grid-column:2/3] [grid-row:3/4]" />
      <BentoCard service={s5} index={5} className="[grid-column:3/4] [grid-row:3/4]" />
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function ServicesSection() {
  const { t } = useLocale();

  const services: Service[] = t.services.items.map((item) => ({
    id: item.id,
    icon: iconMap[item.id],
    title: item.title,
    description: item.description,
    bullets: [...item.bullets],
    chips: [...item.chips],
    cta: {
      label: item.cta,
      href: ctaHrefMap[item.cta] || "#contacto",
    },
  }));

  return (
    <section id="servicios" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="mb-12 max-w-2xl px-5 lg:mb-16 lg:px-0"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            {t.services.title}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.services.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Mobile: Carousel */}
        <MobileCarousel services={services} />

        {/* Desktop: Bento Grid */}
        <DesktopBento services={services} />
      </div>
    </section>
  );
}
