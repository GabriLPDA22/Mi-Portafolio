"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { EntryStagger } from "@/components/motion/Entry";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/GabriLPDA22",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/saiz_gabriel",
    icon: Instagram,
  },
];

export default function SocialPills({
  compact = false,
}: {
  compact?: boolean;
}) {
  const links = socials.map((item, index) => {
    const Icon = item.icon;
    const offset =
      !compact && (index === 0 || index === socials.length - 1)
        ? "2xl:mt-3"
        : "";

    return (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-pill ${offset}`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.8} />
        <span>{item.label}</span>
      </a>
    );
  });

  const layout = compact
    ? "flex flex-wrap justify-center gap-3 sm:gap-5"
    : "flex flex-wrap justify-center gap-3 sm:gap-5 xl:gap-10";

  if (compact) {
    return <div className={layout}>{links}</div>;
  }

  return (
    <EntryStagger order={2} className={layout}>
      {links}
    </EntryStagger>
  );
}
