<!-- src/components/home/SkillsSection.vue -->
<template>
    <section id="skills" class="py-24 relative overflow-hidden">
        <!-- Fondo con efecto de partículas -->
        <ParticleBackground color="#8b5cf6" :particleCount="80" :connectionDistance="150" :speed="0.5"
            :interactive="true" />

        <!-- Gradientes de fondo -->
        <div class="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl z-0">
        </div>
        <div
            class="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl z-0">
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    SKILLS
                </div>
                <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                        Mis Habilidades
                    </span>
                </h2>
                <div class="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-zinc-400 max-w-xl mx-auto">
                    Tecnologías y herramientas con las que trabajo y me especializo.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Columna izquierda: Terminal interactiva -->
                <div class="reveal-element">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-white mb-4">Mis Tecnologías</h3>
                        <p class="text-zinc-400">
                            Como desarrollador full-stack, trabajo con diversas tecnologías y frameworks modernos.
                            Mi objetivo es seguir aprendiendo y mejorando mis habilidades constantemente.
                        </p>
                    </div>

                    <!-- Terminal interactiva con código -->
                    <CodeTerminalEffect :code="codeSkills" :speed="40" title="skills.js" :loop="true" />
                </div>

                <!-- Columna derecha: Habilidades con barras de progreso -->
                <div class="space-y-8 fade-in-element">
                    <h3 class="text-2xl font-bold text-white mb-6">Área de especialización</h3>

                    <!-- Categorías de habilidades -->
                    <div v-for="(category, index) in skillCategories" :key="category.name" class="mb-6 reveal-element"
                        :style="`transition-delay: ${index * 150}ms`">
                        <div class="flex items-center justify-between mb-2">
                            <h4 class="text-lg font-semibold text-white">{{ category.name }}</h4>
                            <div class="text-sm text-indigo-400">{{ category.level }}%</div>
                        </div>

                        <!-- Barra de progreso animada -->
                        <div class="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div class="progress-bar h-full rounded-full" :class="category.colorClass"
                                :style="`width: ${category.level}%`"></div>
                        </div>

                        <!-- Tecnologías específicas -->
                        <div class="mt-3 flex flex-wrap gap-2">
                            <span v-for="tech in category.technologies" :key="tech" class="px-2 py-1 rounded-full text-xs border border-zinc-700 hover:border-indigo-500/50
                            bg-zinc-800/50 hover:bg-indigo-500/10 text-zinc-400 hover:text-white
                            transition-all duration-300">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- Botón para ver CV completo -->
                    <div class="text-center mt-8 pt-6 border-t border-zinc-800">
                        <a href="/cv.pdf" target="_blank"
                            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Ver mi CV completo
                        </a>
                    </div>
                </div>
            </div>

            <!-- Tarjetas de herramientas -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-white text-center mb-10">Herramientas que uso</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(tool, index) in toolCards" :key="tool.name" class="glass-card p-6 rounded-xl border border-zinc-800 hover:border-purple-500/30 
                       transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10
                       reveal-card" :style="`transition-delay: ${index * 100}ms`">
                        <div
                            class="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                            <div class="text-purple-400 text-2xl" v-html="tool.icon"></div>
                        </div>
                        <h4 class="text-xl font-bold text-white text-center mb-2">{{ tool.name }}</h4>
                        <p class="text-zinc-400 text-center text-sm">{{ tool.description }}</p>

                        <!-- Etiquetas de nivel -->
                        <div class="mt-4 flex justify-center">
                            <span class="px-3 py-1 rounded-full text-xs font-medium" :class="tool.levelColor">
                                {{ tool.level }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';
import CodeTerminalEffect from '@/components/ui/CodeTerminalEffect.vue';

export default {
    name: 'SkillsSection',
    components: {
        ParticleBackground,
        CodeTerminalEffect
    },
    data() {
        return {
            // Código para la terminal interactiva
            codeSkills: [
                '// Mis habilidades de desarrollo',
                'const skills = {',
                '  frontend: [',
                '    "HTML", "CSS", "JavaScript",',
                '    "Vue.js", "TailwindCSS", "SCSS"',
                '  ],',
                '  backend: [',
                '    "PHP", "Node.js", "Symfony",',
                '    "Java", "C#", "Express"',
                '  ],',
                '  databases: [',
                '    "MySQL", "PostgreSQL", "MongoDB"',
                '  ],',
                '  devOps: [',
                '    "Docker", "Git", "AWS", "CI/CD"',
                '  ]',
                '};',
                '',
                '// Tecnologías que estoy aprendiendo',
                'const learning = [',
                '  "TypeScript", "React", "Next.js"',
                '];',
                '',
                '// Mostrando mi experiencia',
                'function showExperience() {',
                '  console.log("Desarrollador Web Full-Stack");',
                '  ',
                '  // Listando mis habilidades',
                '  Object.keys(skills).forEach(category => {',
                '    console.log(`${category}:`);',
                '    skills[category].forEach(skill => {',
                '      console.log(`  - ${skill}`);',
                '    });',
                '  });',
                '  ',
                '  // Compromiso con el aprendizaje',
                '  console.log("\\nActualmente aprendiendo:");',
                '  learning.forEach(tech => console.log(`  - ${tech}`));',
                '}',
                '',
                'showExperience(); // ¡Ejecutar para conocerme mejor!'
            ],

            // Categorías de habilidades con nivel de experiencia
            skillCategories: [
                {
                    name: 'Desarrollo Frontend',
                    level: 85,
                    colorClass: 'bg-gradient-to-r from-indigo-500 to-purple-500',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'SCSS']
                },
                {
                    name: 'Desarrollo Backend',
                    level: 75,
                    colorClass: 'bg-gradient-to-r from-purple-500 to-pink-500',
                    technologies: ['PHP', 'Node.js', 'Java', 'C#', 'Symfony', 'Express']
                },
                {
                    name: 'Bases de Datos',
                    level: 70,
                    colorClass: 'bg-gradient-to-r from-blue-500 to-indigo-500',
                    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server']
                },
                {
                    name: 'DevOps & Herramientas',
                    level: 65,
                    colorClass: 'bg-gradient-to-r from-teal-500 to-emerald-500',
                    technologies: ['Git', 'Docker', 'AWS', 'CI/CD','Trello']
                }
            ],

            // Tarjetas de herramientas
            toolCards: [
                {
                    name: 'VSCode',
                    description: 'Mi editor de código principal para todos los proyectos de desarrollo.',
                    icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
                    level: 'Avanzado',
                    levelColor: 'bg-indigo-500/20 text-indigo-400'
                },
                {
                    name: 'Git',
                    description: 'Control de versiones y gestión de flujo de trabajo para todos mis proyectos.',
                    icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>',
                    level: 'Avanzado',
                    levelColor: 'bg-indigo-500/20 text-indigo-400'
                },
                {
                    name: 'Figma',
                    description: 'Diseño de interfaces y prototipos antes de la implementación de código.',
                    icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>',
                    level: 'Intermedio',
                    levelColor: 'bg-purple-500/20 text-purple-400'
                },
                {
                    name: 'Docker',
                    description: 'Contenedores para entornos de desarrollo consistentes y despliegues.',
                    icon: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>',
                    level: 'Intermedio',
                    levelColor: 'bg-purple-500/20 text-purple-400'
                }
            ]
        }
    },
    mounted() {
        // Configurar animaciones de revelación con retraso para el efecto escalonado
        this.setupAnimations();
    },
    methods: {
        setupAnimations() {
            const revealElements = document.querySelectorAll('.reveal-element');
            const revealCards = document.querySelectorAll('.reveal-card');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Obtener delay personalizado si existe
                            const delay = entry.target.dataset.delay || 0;

                            setTimeout(() => {
                                if (entry.target.classList.contains('reveal-element')) {
                                    entry.target.classList.add('revealed');
                                } else if (entry.target.classList.contains('reveal-card')) {
                                    entry.target.classList.add('revealed');
                                } else if (entry.target.classList.contains('fade-in-element')) {
                                    entry.target.classList.add('visible');
                                }
                            }, delay);

                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            // Observar elementos
            revealElements.forEach(element => observer.observe(element));
            revealCards.forEach(card => observer.observe(card));

            // Observar elementos con fade-in
            document.querySelectorAll('.fade-in-element').forEach(element => {
                observer.observe(element);
            });
        }
    }
}
</script>

<style scoped>
.progress-bar {
    transition: width 1.5s ease-in-out;
    width: 0;
}

.reveal-element.revealed .progress-bar,
.fade-in-element.visible .progress-bar {
    animation: progressAnimation 1.5s ease-out forwards;
}

@keyframes progressAnimation {
    0% {
        width: 0;
    }

    100% {
        width: var(--progress-width);
    }
}

.glass-card {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
</style>