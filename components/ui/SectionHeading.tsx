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
  className?: string;
}

export default function SectionHeading({
  tag,
  headline,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`section-head-gsap mb-12 lg:mb-20 ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      <h2
        className={`font-code text-3xl tracking-tight text-ink xl:text-5xl ${
          isCenter ? "" : ""
        }`}
      >
        ../{tag.toLowerCase()}
      </h2>
      <p
        className={`mt-4 font-code text-xl text-ink/90 xl:text-3xl ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {headline}
      </p>
      {subtitle && (
        <p
          className={`mt-5 max-w-[34rem] text-[15px] leading-relaxed text-ink/55 xl:text-xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </m.div>
  );
}
