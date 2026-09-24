export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: string;
  link: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Arch of Oxford",
    description:
      "Plataforma digital exclusiva para estudiantes, alumni y staff de la Universidad de Oxford. Networking profesional, eventos exclusivos, dating (Bridge), chat en tiempo real con SignalR y sistema innovador de Study Buddies para estudio colaborativo.",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800&h=600&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Expo", "TypeScript", "SignalR", ".NET", "Stripe"],
    metrics: "Comunidad Oxford University",
    link: "https://archofoxford.com",
    featured: true,
  },
  {
    id: 2,
    title: "HiveGym",
    description:
      "Aplicación de gestión para gimnasios con sistema de reservas de clases, seguimiento de progreso, planes de entrenamiento personalizados y comunidad fitness.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    category: "Web + Mobile",
    technologies: ["React Native", "Next.js", ".NET", "PostgreSQL"],
    metrics: "Gestión integral de gimnasios",
    link: "#",
    featured: true,
  },
];

export const services = [
  {
    icon: "Monitor",
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas con React, Next.js y Vue.js. Optimizadas para SEO y rendimiento.",
  },
  {
    icon: "Smartphone",
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma con React Native. Una base de código, todas las plataformas.",
  },
  {
    icon: "Cloud",
    title: "Backend & APIs",
    description:
      "Arquitecturas escalables con .NET, Symfony y Node. APIs REST y GraphQL de alto rendimiento.",
  },
  {
    icon: "Zap",
    title: "Optimización",
    description:
      "Mejora de rendimiento, Core Web Vitals y experiencia de usuario. Velocidad que convierte.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Diseño de interfaces que conectan con usuarios. Prototipado y sistemas de diseño en Figma.",
  },
  {
    icon: "LineChart",
    title: "Consultoría Tech",
    description:
      "Asesoramiento técnico para startups. Arquitectura, stack tecnológico y escalabilidad.",
  },
];

export const technologies = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];
