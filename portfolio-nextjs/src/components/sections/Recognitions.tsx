"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Trophy, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const recognitions = [
  {
    id: 1,
    title: "Olimpiada Aragonesa de Apps",
    organization: "Centro de Profesores de Aragón",
    date: "Marzo 2023",
    award: "1er Premio",
    description:
      "Obtuve el primer premio en la Olimpiada Aragonesa de Apps 2023, un prestigioso concurso organizado por el Centro de Profesores de Aragón que reconoce el talento y la innovación en el desarrollo de aplicaciones.",
    details:
      "Mi proyecto destacó entre todos los participantes por su originalidad, diseño centrado en el usuario y calidad técnica, siendo valorado por un jurado de expertos en el sector tecnológico.",
    image: "/images/Banner.webp",
    link: "#",
    color: "from-primary-500 to-primary-600",
  },
];

export default function Recognitions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="recognitions"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900"
      />

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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
          >
            <Trophy className="w-5 h-5 text-accent-400" />
            <span className="text-sm font-bold text-accent-400">Logros</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Reconocimientos
            </span>
          </h2>

          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Premios y distinciones que he recibido por mi trabajo y dedicación
            en el ámbito del desarrollo
          </p>
        </motion.div>

        {/* Recognitions */}
        {recognitions.map((recognition, index) => (
          <motion.div
            key={recognition.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            className="mb-20 last:mb-0"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="relative aspect-video rounded-3xl overflow-hidden border-2 border-dark-800 group-hover:border-primary-500/50 transition-all shadow-2xl"
                >
                  <Image
                    src={recognition.image}
                    alt={recognition.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-6"
                  >
                    <div
                      className={`px-4 py-2 rounded-xl bg-gradient-to-r ${recognition.color} text-white font-bold text-sm shadow-2xl flex items-center gap-2`}
                    >
                      <Award className="w-5 h-5" />
                      {recognition.award}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/20 mb-4"
                  >
                    <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
                    <span className="text-sm font-semibold text-primary-400">
                      {recognition.date}
                    </span>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {recognition.title}
                  </h3>
                  <p className="text-xl text-primary-400 font-bold mb-6">
                    {recognition.organization}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-dark-200 leading-relaxed">
                    {recognition.description}
                  </p>
                  <p className="text-base text-dark-300 leading-relaxed">
                    {recognition.details}
                  </p>
                </div>

                {recognition.link && (
                  <motion.a
                    href={recognition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white font-semibold hover:border-primary-500/50 transition-all"
                  >
                    Anuncio oficial
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
