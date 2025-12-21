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
      <div className="min-h-screen bg-[#0B0D10] pt-24 pb-32">
        <div className="container-main max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-white mb-8">{t.privacy.title}</h1>
            <p className="text-white/60 mb-6">
              {t.privacy.lastUpdated}: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.responsible.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.responsible.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                <li><strong>{p.responsible.name}:</strong> Gabriel Saiz</li>
                <li><strong>{p.responsible.email}:</strong> gsaiz.bajo@gmail.com</li>
                <li><strong>{p.responsible.website}:</strong> gabrielcodes.dev</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.dataCollected.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.dataCollected.description}</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">{p.dataCollected.contactForm.title}</h3>
              <p className="text-white/80 leading-relaxed mb-4">{p.dataCollected.contactForm.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.dataCollected.contactForm.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mb-4">{p.dataCollected.contactForm.note}</p>

              <h3 className="text-xl font-semibold text-white mb-3">{p.dataCollected.cookies.title}</h3>
              <p className="text-white/80 leading-relaxed mb-4">{p.dataCollected.cookies.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.dataCollected.cookies.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mb-4">{p.dataCollected.cookies.note}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.purpose.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.purpose.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.purpose.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.legalBasis.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.legalBasis.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.legalBasis.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.retention.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.retention.description}</p>
              <p className="text-white/80 leading-relaxed mb-4">{p.retention.cookiesNote}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.retention.cookieItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.rights.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.rights.description}</p>
              <ul className="text-white/80 list-disc list-inside space-y-2 mb-4">
                {p.rights.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mb-4">
                {p.rights.contact} <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:underline">gsaiz.bajo@gmail.com</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.security.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.security.description}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.thirdParty.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>{p.thirdParty.description}</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.changes.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.changes.description}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">{p.contact.title}</h2>
              <p className="text-white/80 leading-relaxed mb-4">{p.contact.description}</p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Email:</strong> <a href="mailto:gsaiz.bajo@gmail.com" className="text-[#8b5cf6] hover:underline">gsaiz.bajo@gmail.com</a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#8b5cf6] hover:text-[#a78bfa] transition-colors"
              >
                {t.privacy.backHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

