import CrownMark from "@/components/ui/CrownMark";

/** Cita manuscrita estilo póster del estudio anime */
export default function ScriptQuote({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "text-[clamp(1.65rem,4vw,2.75rem)]"
      : size === "sm"
        ? "text-lg sm:text-xl"
        : "text-[clamp(1.25rem,3vw,1.85rem)]";

  return (
    <figure className={`flex flex-col items-start gap-1.5 ${className}`}>
      <blockquote
        className={`font-script leading-[1.15] tracking-wide text-ink/90 ${sizeClass}`}
      >
        {children}
      </blockquote>
      <CrownMark className="h-3.5 w-6 text-acid/90" />
    </figure>
  );
}
