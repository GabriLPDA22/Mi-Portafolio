"use client";

import { useState } from "react";
import { m, AnimatePresence, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollScrub } from "@/hooks/useScrollScrub";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <m.div
      variants={fadeInUp}
      className={`faq-item-gsap overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-acid/30 bg-acid/[0.04]"
          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
      }`}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-3 sm:gap-4">
          <span
            className={`font-display text-[12px] font-semibold transition-colors ${
              isOpen ? "text-acid" : "text-ink/30"
            }`}
          >
            0{index + 1}
          </span>
          <span
            className={`font-display text-[15px] font-medium tracking-tight transition-colors sm:text-[17px] ${
              isOpen ? "text-ink" : "text-ink/75 group-hover:text-ink"
            }`}
          >
            {item.question}
          </span>
        </span>

        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-acid bg-acid text-noir"
              : "border-white/[0.12] text-ink/50 group-hover:border-acid/40 group-hover:text-acid"
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 pb-5 pl-[3.1rem] text-[14px] leading-relaxed text-ink/60 sm:px-6 sm:pb-6 sm:pl-[3.6rem] sm:text-[15px]">
              {item.answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function FAQSection() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>("timeline");
  const scopeRef = useScrollScrub({
    ".section-head-gsap": { y: -22, x: -10, mobileX: -5 },
    ".faq-item-gsap": { y: 18 },
  });

  const items: FAQItem[] = Object.entries(t.faq.questions).map(
    ([id, { q, a }]) => ({ id, question: q, answer: a })
  );

  return (
    <section
      ref={scopeRef}
      id="faq"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="container-main max-w-3xl">
        <SectionHeading
          tag={t.faq.title}
          headline={t.faq.headline}
          subtitle={t.faq.subtitle}
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-3"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
}
