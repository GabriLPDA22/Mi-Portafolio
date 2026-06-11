"use client";

import { m, type Variants } from "framer-motion";
import { MessageSquare, Repeat, Code2, Target } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";

interface WorkBlock {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function WorkBlockCard({ block, index }: { block: WorkBlock; index: number }) {
  const Icon = block.icon;

  return (
    <m.div
      variants={fadeInUp}
      className="card-acid group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
    >
      {/* Número fantasma gigante */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 font-display text-[6rem] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-acid/[0.07]"
      >
        0{index + 1}
      </span>

      <div className="relative">
        {/* Icon */}
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-ink/70 transition-all duration-300 group-hover:border-acid/40 group-hover:text-acid">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-ink">
          {block.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-ink/55 sm:text-[15px]">
          {block.description}
        </p>
      </div>
    </m.div>
  );
}

export default function ResultsSection() {
  const { t } = useLocale();

  const workBlocks: WorkBlock[] = [
    {
      id: "communication",
      icon: MessageSquare,
      title: t.results.items.communication.title,
      description: t.results.items.communication.text,
    },
    {
      id: "iterations",
      icon: Repeat,
      title: t.results.items.iterations.title,
      description: t.results.items.iterations.text,
    },
    {
      id: "code",
      icon: Code2,
      title: t.results.items.code.title,
      description: t.results.items.code.text,
    },
    {
      id: "product",
      icon: Target,
      title: t.results.items.product.title,
      description: t.results.items.product.text,
    },
  ];

  return (
    <section id="resultados" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-main">
        <SectionHeading
          index="05"
          tag={t.results.title}
          headline={t.results.headline}
          subtitle={t.results.subtitle}
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:gap-5"
        >
          {workBlocks.map((block, index) => (
            <WorkBlockCard key={block.id} block={block} index={index} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
