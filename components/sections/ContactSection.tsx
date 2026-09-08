"use client";

import { useRef } from "react";
import { Clock, CheckCircle, Sparkles } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import Footer from "@/components/layout/Footer";
import ContactForm from "./contact/ContactForm";
import { useContactCurtain } from "@/hooks/useContactCurtain";

export default function ContactSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [firstName, lastName] = t.hero.name.split(" ");
  const title = t.contact.title;

  useContactCurtain(
    sectionRef,
    stageRef,
    leftCurtainRef,
    rightCurtainRef,
    contentRef,
    veilRef,
  );

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative h-[280svh] scroll-mt-24"
    >
      <div
        ref={stageRef}
        className="absolute inset-x-0 top-0 z-10 h-svh overflow-hidden will-change-transform"
      >
        <div
          ref={contentRef}
          className="contact-stage-content absolute inset-0 overflow-y-auto px-5 pb-10 pt-20 will-change-transform sm:px-6 lg:flex lg:items-center lg:overflow-hidden lg:py-24"
        >
          <div className="relative z-10 mx-auto w-full max-w-[65rem] sm:px-2">
            <h2 className="mb-5 text-center font-code text-3xl font-bold uppercase tracking-[0.08em] text-ink sm:text-5xl lg:mb-10 lg:text-6xl">
              {title}
            </h2>

            <div className="mb-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:mb-10">
              {[
                { icon: Clock, label: t.contact.badges.response },
                { icon: CheckCircle, label: t.contact.badges.free },
                { icon: Sparkles, label: t.contact.badges.noCommitment },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-ink/65 sm:px-4 sm:text-[12px]"
                >
                  <Icon className="h-3.5 w-3.5 text-acid" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className="hidden lg:block">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="font-code text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-none text-ink">
                    {firstName}
                  </p>
                  <a
                    href="#contacto-form"
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-ink/80 transition-colors hover:border-acid hover:text-acid"
                  >
                    {t.hero.ctaPrimary}
                  </a>
                </div>
                <div className="mt-1 flex flex-wrap items-end gap-8 xl:gap-12">
                  <p className="pb-2 text-sm text-ink/50 xl:text-lg">
                    {t.contact.role}
                  </p>
                  <p className="font-code text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-none text-ink">
                    {lastName}
                  </p>
                </div>
                <p className="max-w-md pt-8 text-[15px] leading-relaxed text-ink/55">
                  {t.contact.subtitle}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>

        {/* Velo que oscurece el form cuando entra el footer */}
        <div
          ref={veilRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-noir opacity-0"
        />

        <div
          ref={leftCurtainRef}
          aria-hidden="true"
          className="contact-curtain absolute inset-y-0 left-0 z-30 w-1/2 overflow-hidden bg-[#efe0c8] sm:rounded-r-[2rem]"
        >
          <div className="flex h-full w-[200%] items-center justify-center pb-[0.55em]">
            <p className="relative whitespace-nowrap font-code text-[clamp(2rem,9vw,6.5rem)] font-bold uppercase tracking-[-0.02em] text-noir sm:tracking-[0.04em]">
              {title}
              <span className="text-reflect absolute inset-x-0 top-[88%] block text-noir/35">
                {title}
              </span>
            </p>
          </div>
        </div>

        <div
          ref={rightCurtainRef}
          aria-hidden="true"
          className="contact-curtain absolute inset-y-0 right-0 z-30 w-1/2 overflow-hidden bg-[#efe0c8] sm:rounded-l-[2rem]"
        >
          <div className="ml-[-100%] flex h-full w-[200%] items-center justify-center pb-[0.55em]">
            <p className="relative whitespace-nowrap font-code text-[clamp(2rem,9vw,6.5rem)] font-bold uppercase tracking-[-0.02em] text-noir sm:tracking-[0.04em]">
              {title}
              <span className="text-reflect absolute inset-x-0 top-[88%] block text-noir/35">
                {title}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <Footer overlay />
      </div>
    </section>
  );
}
