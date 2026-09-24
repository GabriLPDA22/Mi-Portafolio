"use client";

import { useRef, useCallback } from "react";
import { m, Variant, Variants } from "framer-motion";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }) as unknown as Variant,
};

export default function ProjectCard({
  children,
  className = "",
  delay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(139,92,246,0.12), transparent 40%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = "";
    }
  }, []);

  return (
    <m.article
      ref={cardRef}
      variants={fadeInUp as unknown as Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      className={`project-card group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
      />
      <div className="project-card-content">{children}</div>
    </m.article>
  );
}
