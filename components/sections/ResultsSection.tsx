"use client";

import { motion, type Variants } from "framer-motion";
import { Gauge, Rocket, CheckCircle2 } from "lucide-react";

/* ============================================
   DATA
   ============================================ */
interface Metric {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
}

interface ProofPoint {
  id: string;
  title: string;
  description: string;
}

const metrics: Metric[] = [
  {
    id: "1",
    title: "Rendimiento",
    value: "Objetivo 90+",
    icon: Gauge,
  },
  {
    id: "2",
    title: "Entrega",
    value: "Iteraciones semanales",
    icon: Rocket,
  },
  {
    id: "3",
    title: "Producción real",
    value: "Stack en producción",
    icon: CheckCircle2,
  },
];

const proofPoints: ProofPoint[] = [
  {
    id: "1",
    title: "Código mantenible",
    description: "Clean Architecture, patrones, tests donde aportan valor",
  },
  {
    id: "2",
    title: "Lighthouse optimizado",
    description: "Core Web Vitals / Lighthouse optimizados (objetivo 90+)",
  },
  {
    id: "3",
    title: "Comunicación clara",
    description: "Iteraciones semanales, feedback continuo, transparencia total",
  },
];

/* ============================================
   ANIMATIONS
   ============================================ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* ============================================
   METRIC CARD
   ============================================ */
function MetricCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/5 sm:p-8"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#8b5cf6]/10 transition-all duration-300 group-hover:bg-[#8b5cf6]/20">
        <Icon className="h-5 w-5 text-[#8b5cf6]" strokeWidth={1.5} />
      </div>
      <div className="mb-2 text-2xl font-semibold text-white sm:text-3xl">
        {metric.value}
      </div>
      <div className="text-[14px] text-white/60">{metric.title}</div>
    </motion.div>
  );
}

/* ============================================
   PROOF POINT CARD
   ============================================ */
function ProofPointCard({ point }: { point: ProofPoint }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/5 sm:p-8"
    >
      <h3 className="mb-2 font-display text-lg font-semibold text-white">
        {point.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
        {point.description}
      </p>
    </motion.div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function ResultsSection() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            RESULTADOS
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Resultados reales
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Datos y señales verificables de proyectos en producción.
          </p>
        </motion.div>

        {/* Metrics - 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 grid gap-5 sm:grid-cols-3 lg:mb-16"
        >
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </motion.div>

        {/* Proof Points - 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {proofPoints.map((point) => (
            <ProofPointCard key={point.id} point={point} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
