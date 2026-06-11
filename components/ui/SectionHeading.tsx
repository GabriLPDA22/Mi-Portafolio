"use client";

import { m, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionHeadingProps {
  index: string;
  tag: string;
  headline: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  index,
  tag,
  headline,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-12 lg:mb-16 ${isCenter ? "text-center" : "text-left"}`}
    >
      <p
        className={`mb-4 flex items-center gap-3 font-display text-[12px] font-semibold uppercase tracking-[0.3em] text-acid ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="text-ink/30">[{index}]</span>
        {tag}
      </p>
      <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
        {headline}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-relaxed text-ink/55 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </m.div>
  );
}
