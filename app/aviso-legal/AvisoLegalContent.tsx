"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/contexts/LocaleContext";

export default function AvisoLegalContent() {
  const { t } = useLocale();
  const s = t.legalNotice.sections;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-32">
        <div className="container-main max-w-3xl">

          {/* Back link */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center text-[13px] text-white/40 transition-colors hover:text-white/70"
          >
            {t.legalNotice.backHome}
          </Link>

          {/* Header */}
          <div className="mb-12 border-b border-white/[0.07] pb-8">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">Legal</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.legalNotice.title}
            </h1>
            <p className="mt-3 text-[13px] text-white/35">
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">

            {/* 1. Identificación */}
            <Section title={s.identity.title}>
              <p>{s.identity.intro}</p>
              <ul className="mt-3 space-y-1.5">
                <li className="flex gap-2">
                  <span className="min-w-[130px] text-white/60">{s.identity.name}:</span>
                  <span>{s.identity.nameValue}</span>
                </li>
                <li className="flex gap-2">
                  <span className="min-w-[130px] text-white/60">{s.identity.email}:</span>
                  <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors">
                    {s.identity.emailValue}
                  </a>
                </li>
                <li className="flex gap-2">
                  <span className="min-w-[130px] text-white/60">{s.identity.website}:</span>
                  <span>{s.identity.websiteValue}</span>
                </li>
                <li className="flex gap-2">
                  <span className="min-w-[130px] text-white/60">{s.identity.activity}:</span>
                  <span>{s.identity.activityValue}</span>
                </li>
              </ul>
            </Section>

            {/* 2. Objeto */}
            <Section title={s.purpose.title}>
              <p>{s.purpose.description}</p>
            </Section>

            {/* 3. Condiciones de uso */}
            <Section title={s.terms.title}>
              <p>{s.terms.description}</p>
              <BulletList items={s.terms.items} />
            </Section>

            {/* 4. Propiedad intelectual */}
            <Section title={s.ip.title}>
              <p>{s.ip.description}</p>
            </Section>

            {/* 5. Exclusión de responsabilidad */}
            <Section title={s.liability.title}>
              <p>{s.liability.description}</p>
              <BulletList items={s.liability.items} />
            </Section>

            {/* 6. Política de enlaces */}
            <Section title={s.links.title}>
              <p>{s.links.description}</p>
            </Section>

            {/* 7. Legislación aplicable */}
            <Section title={s.law.title}>
              <p>{s.law.description}</p>
            </Section>

            {/* 8. Modificaciones */}
            <Section title={s.changes.title}>
              <p>{s.changes.description}</p>
            </Section>

            {/* 9. Contacto */}
            <Section title={s.contact.title}>
              <p>{s.contact.description}</p>
              <p className="mt-3">
                <span className="text-white/60">Email:</span>{" "}
                <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors">
                  gsaiz.bajo@gmail.com
                </a>
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">
      <h2 className="mb-4 font-display text-lg font-semibold text-white sm:text-xl">{title}</h2>
      <div className="space-y-2 text-[14px] leading-relaxed text-white/55">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/55">
          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}
