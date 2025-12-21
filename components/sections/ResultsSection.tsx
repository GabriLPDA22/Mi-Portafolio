"use client";

import { motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Code2,
  Target,
} from "lucide-react";

/* ============================================
   DATA
   ============================================ */
interface WorkBlock {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const workBlocks: WorkBlock[] = [
  {
    id: "communication",
    icon: MessageSquare,
    title: "Comunicación clara",
    description: "Hablamos claro desde el primer día. Feedback continuo y sin sorpresas.",
  },
  {
    id: "iterations",
    icon: Calendar,
    title: "Iteraciones semanales",
    description: "Avanzamos por entregas pequeñas y constantes, no proyectos eternos.",
  },
  {
    id: "code",
    icon: Code2,
    title: "Código que se mantiene",
    description: "Arquitectura limpia y decisiones pensadas para el largo plazo.",
  },
  {
    id: "product",
    icon: Target,
    title: "Producto antes que features",
    description: "No construyo por construir. Cada decisión tiene un porqué.",
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
   WORK BLOCK CARD
   ============================================ */
function WorkBlockCard({ block, index }: { block: WorkBlock; index: number }) {
  const Icon = block.icon;

  return (
    <motion.div
      variants={fadeInUp}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8b5cf6]/10 sm:p-8"
    >
      {/* Icon */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#8b5cf6]/10 transition-all duration-300 group-hover:bg-[#8b5cf6]/20">
        <Icon
          className="h-5 w-5 text-[#8b5cf6] transition-transform duration-300 group-hover:rotate-[-6deg]"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="mb-2 font-display text-lg font-semibold text-white">
        {block.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
        {block.description}
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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Cómo es trabajar conmigo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Sin promesas vacías. Trabajo claro, entregas reales y comunicación
            directa.
          </p>
        </motion.div>

        {/* Work Blocks - Grid 4 columns desktop, stack mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {workBlocks.map((block, index) => (
            <WorkBlockCard key={block.id} block={block} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
