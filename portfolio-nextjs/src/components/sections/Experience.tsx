"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Shield,
  Rocket,
  MapPin,
  Calendar,
  ExternalLink,
  Target,
} from "lucide-react";
import { useRef } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const experiences = [
  {
    id: 1,
    icon: Rocket,
    title: "Mobile Technology y Web Development",
    company: "GOLIVE Services",
    location: "Formación Dual",
    period: "Sept 2024 - Presente",
    current: true,
    description:
      "Consultora tecnológica en el departamento de Mobile Technology y Web Integrations",
    highlights: [
      "Colaboración con diversos clientes en proyectos de desarrollo y mantenimiento",
      "Diseño de soluciones personalizadas",
      "Implementación de funcionalidades con tecnologías modernas",
      "Asegurar el rendimiento óptimo de las plataformas",
    ],
    tags: [
      "PHP",
      "JavaScript",
      "HTML",
      "Twig",
      "CSS",
      "Symfony",
      "PostgreSQL",
      "TailwindCSS",
      "Docker",
    ],
    color: "from-primary-500 to-primary-600",
    link: "https://www.onegolive.com",
  },
];

const education = [
  {
    id: 1,
    icon: Shield,
    title: "Máster en Ciberseguridad",
    institution: "Escuela de Postgrado y Tecnología",
    period: "Iniciando - Oct. 2025",
    status: "Próximamente",
    description:
      "Especialización en ciberseguridad para profundizar en la protección de infraestructuras, desarrollo seguro (SecDevOps) y técnicas de pentesting",
    skills: [
      "Seguridad Ofensiva",
      "SecDevOps",
      "Gestión de Riesgos",
      "Arquitectura Segura",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Grado en Ingeniería Informática",
    institution: "UNED (Universidad Nacional de Educación a Distancia)",
    period: "Próximo Objetivo",
    status: "Planificado",
    description:
      "Consolidar una base teórica robusta en ciencias de la computación, algoritmia y arquitectura de sistemas",
    skills: [
      "Algoritmia",
      "Estructura de Datos",
      "Matemática Discreta",
      "Paradigmas de Programación",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    institution: "CPIFP Montessori, Zaragoza (Modalidad DUAL)",
    period: "Finalizado - Junio 2025",
    status: "Completado",
    description:
      "Formación completa como desarrollador Full-Stack. La modalidad DUAL permitió aplicar conocimientos en entorno profesional real",
    skills: [
      "Desarrollo Frontend",
      "Desarrollo Backend",
      "Bases de Datos",
      "Cloud Computing",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Grado Medio en Sistemas Microinformáticos y Redes",
    institution: "IES Pilar Lorengar, Zaragoza",
    period: "Finalizado - Junio 2022",
    status: "Completado",
    description:
      "Base sólida en mantenimiento de equipos, gestión de redes locales y optimización de sistemas operativos",
    skills: [
      "Redes",
      "Hardware",
      "Sistemas Operativos",
      "Fundamentos Programación",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
];

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-8 hover:border-primary-500/50 transition-all overflow-hidden"
      >
        {/* Badge Activo */}
        {exp.current && (
          <div className="absolute top-6 right-6">
            <div className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-bold text-primary-400">Activo</span>
            </div>
          </div>
        )}

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} mb-6 shadow-lg`}
        >
          <exp.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary-400 transition-colors">
              {exp.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-dark-300 mb-3">
              <span className="font-semibold text-primary-400">
                {exp.company}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-dark-400">
              <Calendar className="w-4 h-4" />
              {exp.period}
            </div>
          </div>

          <p className="text-dark-200 leading-relaxed">{exp.description}</p>

          {/* Highlights */}
          <ul className="space-y-2">
            {exp.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-dark-300"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-dark-900 border border-dark-700 text-dark-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {exp.link && (
            <motion.a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm pt-2"
            >
              Visitar sitio web
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-dark-950 overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="absolute bottom-0 left-1/2 w-[1000px] h-[1000px] bg-primary-500/10 rounded-full blur-[200px] -translate-x-1/2" />
      </motion.div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
          >
            <Briefcase className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-400">
              Mi Trayectoria
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Experiencia &{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Formación
            </span>
          </h2>

          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Un viaje de aprendizaje continuo y crecimiento profesional
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-black text-white mb-10 flex items-center gap-3"
          >
            <Rocket className="w-8 h-8 text-primary-400" />
            Experiencia Profesional
          </motion.h3>

          <div className="max-w-3xl">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-3xl font-black text-white mb-10 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-accent-400" />
            Formación Académica
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-6 hover:border-accent-500/50 transition-all"
              >
                {/* Status */}
                {(edu.status === "Próximamente" ||
                  edu.status === "Planificado") && (
                  <div className="absolute top-6 right-6">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        edu.status === "Próximamente"
                          ? "bg-purple-500/10 border border-purple-500/30 text-purple-400"
                          : "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                      }`}
                    >
                      {edu.status}
                    </div>
                  </div>
                )}

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} mb-4`}
                >
                  <edu.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {edu.title}
                </h4>
                <p className="text-accent-400 font-semibold text-sm mb-2">
                  {edu.institution}
                </p>
                <p className="text-dark-400 text-sm mb-3">{edu.period}</p>
                <p className="text-dark-300 text-sm leading-relaxed mb-3">
                  {edu.description}
                </p>

                {edu.skills && (
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded bg-dark-900 border border-dark-700 text-dark-400 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
