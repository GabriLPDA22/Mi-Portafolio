// Datos de experiencia profesional
export const experiences = [
    {
        id: 1,
        company: "GOLIVE Services",
        position: "Mobile Technology y Web Development",
        period: "Actualmente",
        description: "Actualmente trabajo en GOLIVE, una consultora tecnológica en el departamento de Mobile Technology y Web Integrations. Aquí colaboro con diversos clientes, participando en proyectos de desarrollo y mantenimiento de webs y apps. Mi rol incluye diseñar soluciones personalizadas, implementar funcionalidades, y asegurar el rendimiento óptimo de las plataformas de nuestros clientes.",
        url: "https://www.onegolive.com",
        technologies: [
            "PHP", "JavaScript", "HTML", "Twig", "CSS", "Symfony", "PostgreSQL", "TailwindCSS", "Docker"
        ]
    }
];

// Datos de tecnologías agrupadas por categoría
export const skills = {
    frontend: [
        { name: "HTML5", icon: ["fab", "html5"], level: 90 },
        { name: "CSS3", icon: ["fab", "css3-alt"], level: 85 },
        { name: "JavaScript", icon: ["fab", "js"], level: 80 },
        { name: "Vue.js", icon: ["fab", "vuejs"], level: 75 },
        { name: "TailwindCSS", icon: null, level: 85 }
    ],
    backend: [
        { name: "PHP", icon: ["fab", "php"], level: 80 },
        { name: "Symfony", icon: ["fab", "symfony"], level: 75 },
        { name: "Node.js", icon: ["fab", "node-js"], level: 65 },
        { name: "PostgreSQL", icon: null, level: 70 }
    ],
    otros: [
        { name: "Git", icon: ["fab", "git-alt"], level: 80 },
        { name: "Docker", icon: ["fab", "docker"], level: 65 },
        { name: "AWS", icon: null, level: 60 },
        { name: "React", icon: ["fab", "react"], level: 50 }
    ]
};