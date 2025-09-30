"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tuusuario",
    username: "@gabrielsaiz",
    color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tuusuario",
    username: "@gabrielsaiz",
    color: "hover:bg-white hover:text-dark-900 hover:border-white",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:tu@email.com",
    username: "tu@email.com",
    color: "hover:bg-primary-500 hover:border-primary-500",
  },
];

export default function Contact() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-dark-950 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-400">
                Hablemos
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              ¿Tienes un proyecto{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                en mente?
              </span>
            </h2>

            <p className="text-lg md:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Estoy disponible para proyectos freelance y oportunidades
              profesionales.
              <br />
              ¡Hagamos algo increíble juntos!
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-dark-900/80 backdrop-blur-xl border border-dark-800 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    ¿Listo para empezar?
                  </h3>
                  <p className="text-dark-300 text-lg">
                    Envíame un mensaje y charlemos sobre tu proyecto
                  </p>
                </div>
                <motion.a
                  href="mailto:tu@email.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg shadow-2xl shadow-primary-500/50 hover:shadow-accent-500/50 transition-all"
                >
                  Enviar mensaje
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-6 transition-all ${social.color}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <social.icon className="w-6 h-6 text-dark-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {social.label}
                    </div>
                    <div className="text-dark-400 text-sm">
                      {social.username}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-dark-400"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Zaragoza, España 🇪🇸</span>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative mt-20 pt-8 border-t border-dark-800"
      >
        <div className="container-custom text-center">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} Gabriel Saiz. Hecho con{" "}
            <span className="text-primary-400">❤️</span> y{" "}
            <span className="text-accent-400">Next.js</span>
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
