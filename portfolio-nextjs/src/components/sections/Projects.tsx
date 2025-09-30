"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Github, X, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "ELIXIUM FOODS Delivery",
    subtitle: "TFG - Plataforma de Delivery",
    description:
      "Plataforma completa de entrega de comida estilo UberEats desarrollada como TFG",
    longDescription:
      "Plataforma completa de entrega de comida estilo UberEats desarrollada como TFG. Incluye panel de administración, sistema de pedidos en tiempo real, gestión de restaurantes y un despliegue profesional en la nube con .NET 9 y PostgreSQL.",
    image: "/images/home-screen.webp",
    gallery: [
      "/images/restaurants-screen.webp",
      "/images/categories-screen.webp",
    ],
    tags: ["Vue.js", "TypeScript", ".NET 9", "PostgreSQL", "Docker", "AWS"],
    category: "Destacado",
    achievements: [
      "TFG completado con éxito",
      "Despliegue automatizado con CI/CD",
      "Arquitectura escalable en la nube",
      "Panel de administración completo",
    ],
    links: [
      {
        label: "Ver proyecto",
        url: "https://github.com/GabriLPDA22/ELIXIUM-FOODS",
        icon: Github,
      },
    ],
    featured: true,
    video: "/videos/DEMO-ELIXIUMFOODS.mp4",
  },
  {
    id: 2,
    title: "McPoints",
    subtitle: "App Android",
    description: "Aplicación para coleccionar números de pedido de McDonald's",
    longDescription:
      "Aplicación Android v1.0.1 para coleccionar números de pedido de McDonald's. Mi amigo quería coleccionar todos los números que aparecen en los tickets, así que desarrollé esta app para escanearlos y llevar un registro detallado con estadísticas.",
    image: "/images/McPointsHome.webp",
    gallery: [
      "/images/McPointsScanner.webp",
      "/images/McPointsStats.webp",
      "/images/McPointsSettings.webp",
    ],
    tags: ["React Native", "Java", "Android", "CameraX"],
    category: "Mobile",
    version: "v1.0.1",
    links: [
      {
        label: "Ver código",
        url: "https://github.com/GabriLPDA22/McPoints",
        icon: Github,
      },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Elixium Foods",
    subtitle: "Sistema de Restaurante",
    description:
      "Plataforma para restaurante con reservas online y menú interactivo",
    longDescription:
      "Plataforma para restaurante con reservas online, menú interactivo y sistema de pedidos. Desarrollado con tecnologías modernas para ofrecer una experiencia fluida al usuario.",
    image: "/images/Elixium_Foods.webp",
    gallery: [
      "/images/Menu-Elixium.webp",
      "/images/Reseva-Elixium.webp",
      "/images/Select-Table.webp",
      "/images/Checkout.webp",
    ],
    tags: ["Vue.js", "TypeScript", "SCSS", "C#"],
    category: "Web",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/GabriLPDA22/Restaurante-Front",
        icon: Github,
      },
      {
        label: "Backend",
        url: "https://github.com/GabriLPDA22/Restaurante-Back",
        icon: Github,
      },
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Sistema Cine",
    subtitle: "Gestión de Cine",
    description: "Sistema de gestión con visualización de películas y horarios",
    longDescription:
      "Gestión de un sistema de cine con visualización de películas y horarios. Frontend en HTML, SCSS y JavaScript. API en C#, con Swagger.",
    image: "/images/Cine.webp",
    tags: ["HTML", "SCSS", "JavaScript", "C#", "Docker"],
    category: "Web",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/GabriLPDA22/Cine-front",
        icon: Github,
      },
      {
        label: "Backend",
        url: "https://github.com/GabriLPDA22/Cine-Back",
        icon: Github,
      },
    ],
  },
  {
    id: 5,
    title: "BurgerVibes",
    subtitle: "Gestión de Pedidos",
    description: "Aplicación para gestión de pedidos y menús en restaurante",
    longDescription:
      "Aplicación para gestión de pedidos y menús en un restaurante. Base de datos en SQL (Oracle), frontend en HTML/CSS/JS y backend en Java.",
    image: "/images/BurerVibes.webp",
    tags: ["HTML", "CSS", "JavaScript", "Java", "Oracle"],
    category: "Web",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/GabriLPDA22/BurgerVibesFront",
        icon: Github,
      },
      {
        label: "Backend",
        url: "https://github.com/GabriLPDA22/BurgerVibesBack",
        icon: Github,
      },
    ],
  },
  {
    id: 6,
    title: "CoreEvo Gym",
    subtitle: "Web de Gimnasio",
    description: "Mi primer proyecto web responsivo para un gimnasio",
    longDescription:
      "Mi primer proyecto web para un gimnasio. Sitio web responsivo con HTML, CSS y JavaScript que ofrece una experiencia interactiva y visualmente atractiva.",
    image: "/images/Banner.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    links: [
      {
        label: "Ver proyecto",
        url: "https://github.com/GabriLPDA22/CoreEvo",
        icon: Github,
      },
    ],
  },
  {
    id: 7,
    title: "Portfolio Personal",
    subtitle: "Mi Portfolio",
    description: "Portfolio web personal con Vue.js y TailwindCSS",
    longDescription:
      "Mi portafolio web personal desarrollado con Vue.js y TailwindCSS, con secciones para mostrar mis proyectos, experiencia y habilidades.",
    image: "/images/portfolio.webp",
    tags: ["Vue.js", "TailwindCSS", "JavaScript"],
    category: "Web",
    links: [
      {
        label: "Ver código",
        url: "https://github.com/GabriLPDA22/Mi-Portafolio",
        icon: Github,
      },
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-dark-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-dark-900 border border-dark-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-dark-800 hover:bg-dark-700 text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
          {project.featured && (
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              Destacado
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="mb-6">
            <span className="text-sm font-bold text-primary-400 mb-2 block">
              {project.category}
            </span>
            <h2 className="text-4xl font-black text-white mb-2">
              {project.title}
            </h2>
            <p className="text-xl text-dark-300">{project.subtitle}</p>
          </div>

          <p className="text-lg text-dark-200 leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-dark-300 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Achievements */}
          {project.achievements && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Logros</h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Galería</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative py-20 md:py-32 bg-dark-950 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
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
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            >
              <Award className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-bold text-accent-400">
                Mis Proyectos
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Experiencias que{" "}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                transforman
              </span>
            </h2>

            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Cada proyecto es una oportunidad para innovar y crear soluciones
              excepcionales
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 hover:border-primary-500/50 transition-all cursor-pointer"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold">
                    Destacado
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-dark-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />

                  {/* Play icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-primary-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags (solo 3 primeros) */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-dark-800 border border-dark-700 text-dark-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded bg-dark-800 border border-dark-700 text-dark-400 text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
