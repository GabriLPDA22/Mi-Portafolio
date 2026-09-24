"use client";

import { SplitTitle } from "@/components/motion/Entry";

export default function ReflectTitle({
  text,
  delay = 0,
  play = "intro",
  className = "",
  gsapClass = "",
  as: Tag = "p",
}: {
  text: string;
  delay?: number;
  play?: "intro" | "view";
  className?: string;
  gsapClass?: string;
  as?: "p" | "span" | "h2";
}) {
  return (
    <div className={`relative w-fit pb-[0.55em] ${gsapClass}`}>
      <Tag className={className}>
        <SplitTitle text={text} delay={delay} play={play} />
      </Tag>
      <span
        aria-hidden="true"
        className={`text-reflect pointer-events-none absolute inset-x-0 top-[88%] block origin-top select-none ${className}`}
      >
        {text}
      </span>
    </div>
  );
}
