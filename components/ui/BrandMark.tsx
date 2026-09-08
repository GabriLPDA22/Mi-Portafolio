import Image from "next/image";

/** Marca g abierta + núcleo dorado (logo fila 2 · 3) */
export default function BrandMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/img/brand-mark-on-dark.png"
        alt=""
        fill
        className="object-contain"
        sizes="40px"
        priority
      />
    </span>
  );
}
