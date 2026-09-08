import Image from "next/image";

/** Marca real (g + núcleo dorado) */
export default function BrandMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src="/img/brand-mark-64.png"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
