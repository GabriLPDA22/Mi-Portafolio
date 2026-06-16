"use client";

import dynamic from "next/dynamic";

const TechCarousel = dynamic(() => import("@/components/ui/TechCarousel"), {
  ssr: false,
  loading: () => (
    <section
      aria-label="Tecnologías"
      className="relative w-full max-w-[100vw] overflow-x-hidden py-14 sm:py-20"
    >
      <p className="mb-8 text-center font-display text-[13px] font-bold uppercase tracking-[0.4em] text-acid sm:text-[14px]">
        Stack
      </p>
      <div className="mx-auto h-11 max-w-4xl rounded-full bg-white/[0.03]" />
    </section>
  ),
});

export default function TechCarouselLoader() {
  return <TechCarousel />;
}
