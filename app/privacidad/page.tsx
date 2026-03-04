"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/contexts/LocaleContext";

export default function PrivacyPage() {
  const { t } = useLocale();
  const p = t.privacy.sections;

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
            {t.privacy.backHome}
          </Link>

          {/* Header */}
          <div className="mb-12 border-b border-white/[0.07] pb-8">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">Legal</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.privacy.title}
            </h1>
            <p className="mt-3 text-[13px] text-white/35">
              {t.privacy.lastUpdated}:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">

            {/* 1. Responsable */}
            <Section title={p.responsible.title}>
              <p>{p.responsible.description}</p>
              <ul className="mt-3 space-y-1">
                <li><span className="text-white/60">{p.responsible.name}:</span> Gabriel Saiz</li>
                <li><span className="text-white/60">{p.responsible.email}:</span>{" "}
                  <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors">
                    gsaiz.bajo@gmail.com
                  </a>
                </li>
                <li><span className="text-white/60">{p.responsible.website}:</span> gabrielcodes.dev</li>
              </ul>
            </Section>

            {/* 2. Datos */}
            <Section title={p.dataCollected.title}>
              <p>{p.dataCollected.description}</p>
              <SubSection title={p.dataCollected.contactForm.title}>
                <p>{p.dataCollected.contactForm.description}</p>
                <BulletList items={p.dataCollected.contactForm.items} />
                <p className="mt-3">{p.dataCollected.contactForm.note}</p>
              </SubSection>
              <SubSection title={p.dataCollected.cookies.title}>
                <p>{p.dataCollected.cookies.description}</p>
                <BulletList items={p.dataCollected.cookies.items} />
                <p className="mt-3">{p.dataCollected.cookies.note}</p>
              </SubSection>
            </Section>

            {/* 3. Finalidad */}
            <Section title={p.purpose.title}>
              <p>{p.purpose.description}</p>
              <BulletList items={p.purpose.items} />
            </Section>

            {/* 4. Base legal */}
            <Section title={p.legalBasis.title}>
              <p>{p.legalBasis.description}</p>
              <BulletList items={p.legalBasis.items} />
            </Section>

            {/* 5. Conservación */}
            <Section title={p.retention.title}>
              <p>{p.retention.description}</p>
              <p className="mt-3">{p.retention.cookiesNote}</p>
              <BulletList items={p.retention.cookieItems} />
            </Section>

            {/* 6. Derechos */}
            <Section title={p.rights.title}>
              <p>{p.rights.description}</p>
              <BulletList items={p.rights.items} />
              <p className="mt-3">
                {p.rights.contact}{" "}
                <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors">
                  gsaiz.bajo@gmail.com
                </a>
              </p>
            </Section>

            {/* 7. Seguridad */}
            <Section title={p.security.title}>
              <p>{p.security.description}</p>
            </Section>

            {/* 8. Terceros */}
            <Section title={p.thirdParty.title}>
              <p>{p.thirdParty.description}</p>
            </Section>

            {/* 9. Cambios */}
            <Section title={p.changes.title}>
              <p>{p.changes.description}</p>
            </Section>

            {/* 10. Contacto */}
            <Section title={p.contact.title}>
              <p>{p.contact.description}</p>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 border-t border-white/[0.05] pt-4">
      <h3 className="mb-2 text-[14px] font-semibold text-white/80">{title}</h3>
      <div className="space-y-2 text-[14px] leading-relaxed text-white/55">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/55">
          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}
