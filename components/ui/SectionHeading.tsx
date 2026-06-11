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
  tag: string;
  headline: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
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
        className={`mb-4 flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.3em] text-acid sm:text-[14px] ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {tag}
      </p>
      <h2 className="font-display text-[clamp(2.2rem,6.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.02em] text-ink">
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
