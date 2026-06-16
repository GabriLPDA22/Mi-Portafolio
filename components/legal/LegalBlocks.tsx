const EMAIL = "gsaiz.bajo@gmail.com";

export function LegalEmailLink() {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className="text-ink underline decoration-white/20 underline-offset-[3px] transition-colors hover:text-acid hover:decoration-acid/40"
    >
      {EMAIL}
    </a>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 mb-10 last:mb-0 sm:mb-12">
      <h2 className="text-[17px] font-semibold leading-snug text-acid sm:text-lg">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-ink/65">
        {children}
      </div>
    </section>
  );
}

export function LegalSubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-[15px] font-semibold text-acid/85">{title}</h3>
      <div className="mt-3 space-y-4 text-[15px] leading-[1.8] text-ink/65">
        {children}
      </div>
    </div>
  );
}

export function LegalBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-ink/30">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalKeyValueList({
  items,
}: {
  items: { label: string; value: React.ReactNode }[];
}) {
  return (
    <dl className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,8.5rem)_1fr] sm:gap-6 sm:py-4"
        >
          <dt className="text-[13px] font-medium text-ink/45">{label}</dt>
          <dd className="text-[15px] leading-relaxed text-ink/80">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LegalContactBlock({ description }: { description: string }) {
  return (
    <div className="space-y-3">
      <p>{description}</p>
      <p>
        <LegalEmailLink />
      </p>
    </div>
  );
}
