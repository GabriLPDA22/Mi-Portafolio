"use client";

import { motion, type Variants } from "framer-motion";
import {
  Zap,
  Eye,
  Shield,
  MapPin,
  Building2,
  CheckCircle2,
  Calendar,
} from "lucide-react";

/* ============================================
   ANIMATIONS - TIPADO CORRECTO
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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

/* ============================================
   DATA
   ============================================ */
const valueProps = [
  {
    icon: Zap,
    title: "Ejecución rápida",
    description: "Iteraciones semanales, entregas continuas. Sin bloqueos.",
  },
  {
    icon: Eye,
    title: "Visión de producto",
    description: "No solo código: entiendo negocio, UX y objetivos reales.",
  },
  {
    icon: Shield,
    title: "Código mantenible",
    description: "Clean Architecture, tests y documentación. A largo plazo.",
  },
];

const techStack = [
  "React Native",
  "Next.js",
  "Vue.js",
  ".NET",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Docker",
];

/* ============================================
   EXPERIENCE CARD COMPONENT
   ============================================ */
function ExperienceCard() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6]/10">
            <Building2 className="h-5 w-5 text-[#8b5cf6]" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-white">
              Experiencia profesional
            </h4>
            <p className="text-[13px] text-white/50">Consultora tecnológica</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
          <CheckCircle2 className="h-3 w-3" />
          Completado
        </span>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-white/[0.08] pl-6">
        {/* Timeline item */}
        <div className="relative pb-6">
          {/* Dot */}
          <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-[#8b5cf6] bg-[#0a0a0b]" />

          {/* Content */}
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <Calendar className="h-3.5 w-3.5" />
            <span>Sep 2024 – Jun 2025</span>
          </div>

          <h5 className="mt-2 text-[14px] font-medium text-white">
            Desarrollador Full Stack
          </h5>

          <ul className="mt-3 space-y-2">
            {[
              "Desarrollo Full Stack en entorno de producción",
              "Proyectos reales con clientes enterprise",
              "Metodologías ágiles y trabajo en equipo",
              "Calidad de código y buenas prácticas",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] text-white/50"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8b5cf6]/60" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech used */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {[".NET", "Vue.js", "SQL Server", "Azure"].map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/45"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-white/20 bg-[#0a0a0b]" />

          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <Calendar className="h-3.5 w-3.5" />
            <span>2022 – 2025</span>
          </div>

          <h5 className="mt-2 text-[14px] font-medium text-white">
            Formación Dual · DAM/DAW
          </h5>

          <p className="mt-2 text-[13px] text-white/50">
            Formación técnica vinculada a proyectos reales. Desarrollo de
            software, bases de datos y arquitectura de sistemas.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   METRICS CARD
   ============================================ */
function MetricsCard() {
  const metrics = [
    { label: "Respuesta", value: "<24h" },
    { label: "Iteraciones", value: "Semanales" },
    { label: "Código", value: "Mantenible" },
  ];

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
        >
          <p className="text-lg font-semibold text-[#8b5cf6]">{metric.value}</p>
          <p className="mt-1 text-[11px] text-white/40">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ============================================
   MAIN SECTION
   ============================================ */
export default function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#8b5cf6]">
            Sobre mí
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Full-Stack Product Developer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/50 sm:text-lg">
            Especializado en producto, rendimiento y código mantenible.
            Transformo ideas en soluciones digitales que funcionan.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - About */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Bio */}
            <div className="mb-10">
              <p className="text-[15px] leading-relaxed text-white/60">
                No soy solo un programador que escribe código. Soy un{" "}
                <span className="text-white">product developer</span> que
                entiende de negocio, UX y tecnología. Mi objetivo es construir
                productos que los usuarios realmente quieran usar.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                Trabajo con{" "}
                <span className="text-white">startups</span>,{" "}
                <span className="text-white">autónomos</span> y{" "}
                <span className="text-white">equipos pequeños</span> que
                necesitan velocidad sin sacrificar calidad.
              </p>
              <p className="mt-6 text-[15px] font-medium leading-relaxed text-white/70">
                Busco colaborar en proyectos donde el producto importe tanto como
                la tecnología.
              </p>
            </div>

            {/* Value Props */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mb-10 space-y-4"
            >
              {valueProps.map((prop) => (
                <motion.div
                  key={prop.title}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#8b5cf6]/10">
                    <prop.icon
                      className="h-5 w-5 text-[#8b5cf6]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-white">
                      {prop.title}
                    </h4>
                    <p className="mt-1 text-[13px] text-white/50">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <div>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-white/40">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 flex items-center gap-2 text-[13px] text-white/40">
              <MapPin className="h-4 w-4" />
              <span>Zaragoza, España · GMT+1</span>
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <ExperienceCard />
            <MetricsCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
