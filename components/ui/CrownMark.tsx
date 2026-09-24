/** Corona del retrato — marca recurrente bajo citas script */
export default function CrownMark({
  className = "h-3 w-5 text-acid",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.2 11.5 4.8 3.8c.2-.6 1-.7 1.4-.2L9.2 7l2-5.2c.25-.65 1.15-.65 1.4 0L14.6 7l3-3.4c.4-.45 1.2-.4 1.4.2l2.6 7.7H2.2Z" />
      <rect x="2" y="11.2" width="20" height="1.8" rx="0.6" />
    </svg>
  );
}
