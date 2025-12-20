"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ============================================
   DATA
   ============================================ */
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "¿Cuánto tardas en entregar una primera versión?",
    answer:
      "Depende del alcance del proyecto. Una web corporativa puede estar lista en 2-4 semanas. Una aplicación móvil completa, entre 2-4 meses. Trabajo en sprints semanales, así que verás progreso constante desde el primer día. En la primera llamada te doy una estimación realista basada en tus necesidades específicas.",
  },
  {
    id: "2",
    question: "¿Trabajas con presupuestos cerrados o por iteraciones?",
    answer:
      "Ambos modelos funcionan. Para proyectos con alcance claro, trabajo con presupuesto cerrado y entregas por fases. Para proyectos más ágiles o en evolución, prefiero trabajar por iteraciones semanales con un presupuesto mensual. El objetivo es que tengas visibilidad y control en cada paso.",
  },
  {
    id: "3",
    question: "¿Incluyes diseño UI/UX?",
    answer:
      "Sí. No solo desarrollo, también diseño de interfaces. Trabajo con un enfoque de producto: primero entendemos el usuario y el objetivo, luego diseñamos la experiencia y finalmente desarrollamos. Si ya tienes un diseñador, me integro perfectamente con su trabajo.",
  },
  {
    id: "4",
    question: "¿Puedes mantener y escalar el proyecto?",
    answer:
      "Absolutamente. Ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, pequeñas mejoras, monitorización y soporte prioritario. También puedo escalar la arquitectura cuando el proyecto crezca. El código que escribo está pensado para mantenerse y escalar a largo plazo.",
  },
  {
    id: "5",
    question: "¿Qué stack usas normalmente?",
    answer:
      "Frontend: Next.js, Vue.js, React Native. Backend: .NET 9, PostgreSQL, SignalR. Cloud: AWS. También Docker, TypeScript y las herramientas modernas que cada proyecto requiera. El stack lo elijo según las necesidades específicas, no por moda.",
  },
  {
    id: "6",
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Empezamos con una llamada gratuita para entender tu proyecto y objetivos. Después preparo una propuesta con alcance, tiempos y presupuesto. Una vez aprobada, trabajo en sprints semanales con demos y feedback continuo. Mantengo comunicación constante y transparencia total durante todo el proceso hasta el lanzamiento.",
  },
];

/* ============================================
   ANIMATIONS
   ============================================ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/* ============================================
   ACCORDION ITEM
   ============================================ */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="group flex w-full items-start justify-between gap-4 py-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[15px] font-medium transition-colors sm:text-base ${
            isOpen ? "text-white" : "text-white/70 group-hover:text-white"
          }`}
        >
          {item.question}
        </span>

        <span
          className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md transition-all ${
            isOpen
              ? "bg-[#8b5cf6]/20 text-[#8b5cf6]"
              : "bg-white/[0.05] text-white/40 group-hover:bg-white/[0.08] group-hover:text-white/60"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5" strokeWidth={2} />
            ) : (
              <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            )}
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Split FAQs into two columns
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿Alguna pregunta?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Todo lo que necesitas saber antes de empezar. Si tienes más dudas,
            escríbeme.
          </p>
        </motion.div>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="mx-auto max-w-4xl">
          {/* Mobile: Single column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 backdrop-blur-xl sm:px-8 lg:hidden"
          >
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </motion.div>

          {/* Desktop: Two columns */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-2">
            {/* Left column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 backdrop-blur-xl"
            >
              {leftColumn.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </motion.div>

            {/* Right column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 backdrop-blur-xl"
            >
              {rightColumn.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-[14px] text-white/40">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#8b5cf6] transition-colors hover:text-[#a78bfa]"
          >
            Pregúntame directamente
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
