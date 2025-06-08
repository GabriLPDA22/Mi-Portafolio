<template>
    <section id="estudios" class="py-16 sm:py-24 relative overflow-hidden">
        <ParticleBackground color="#6366f1" :particleCount="80" :connectionDistance="150" :speed="0.8"
        :interactive="true" :size="1.5" />
        <!-- Efectos de fondo optimizados para móvil -->
        <div class="absolute -top-[200px] sm:-top-[400px] -right-[100px] sm:-right-[200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-blue-600/5 blur-2xl sm:blur-3xl z-0"></div>

        <div class="container mx-auto px-4 sm:px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-12 sm:mb-16 relative">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    ESTUDIOS
                </div>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                        Formación Académica
                    </span>
                </h2>
                <div class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
                <p class="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto px-4">
                    Mi camino académico y formación continua en el mundo del desarrollo y la transformación digital.
                </p>
            </div>

            <!-- Timeline de educación -->
            <div class="relative max-w-4xl mx-auto">
                <!-- Línea de tiempo -->
                <div class="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-500/50 to-emerald-500/50"></div>

                <!-- Items de formación -->
                <div class="space-y-12 sm:space-y-20">

                    <!-- Curso Agentes del Cambio - Actual -->
                    <div class="relative reveal-card">
                        <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-emerald-500 bg-zinc-900 z-10 education-dot-current"></div>

                        <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                            <!-- Fecha y título -->
                            <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                                <span class="inline-block px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-2">
                                    En Curso - 2025
                                </span>
                                <h3 class="text-xl sm:text-2xl font-bold text-white">Generación Digital - Agentes del Cambio</h3>
                                <div class="text-emerald-400 mt-1 sm:mt-2 text-sm sm:text-base">Grupo San Valero | EOI</div>
                                <div class="text-xs sm:text-sm text-zinc-500 mt-1">Fondos Next Generation EU</div>
                            </div>

                            <!-- Contenido -->
                            <div class="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50 shadow-lg sm:ml-12 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/10">
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="text-emerald-400 text-lg sm:text-xl">🚀</span>
                                    <span class="text-emerald-400 font-semibold text-sm sm:text-base">Transformación Digital para PYMEs</span>
                                </div>

                                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                    Programa oficial del Plan Nacional de Capacidades Digitales para formar <strong class="text-white">agentes de transformación digital</strong>
                                    especializados en PYMEs. Financiado por la Unión Europea a través de los fondos Next Generation EU.
                                </p>

                                <div class="space-y-2 mb-4 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-emerald-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Marketing digital y estrategias de crecimiento</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-emerald-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Optimización de procesos empresariales</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-emerald-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Implementación de tecnologías digitales</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-emerald-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Mentorización por especialistas del sector</span>
                                    </div>
                                </div>

                                <!-- Competencias especializadas -->
                                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Transformación Digital</span>
                                    <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Marketing Digital</span>
                                    <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Consultoría PYME</span>
                                    <span class="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">Innovación</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Grado Superior DAW - Completado -->
                    <div class="relative reveal-card">
                        <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-blue-500 bg-zinc-900 z-10 education-dot"></div>

                        <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                            <!-- Fecha y título -->
                            <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                                <span class="inline-block px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-2">
                                    Septiembre 2023 - Junio 2025
                                </span>
                                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado Superior en DAW</h3>
                                <div class="text-blue-400 mt-1 sm:mt-2 text-sm sm:text-base">Desarrollo de Aplicaciones Web</div>
                                <div class="text-xs sm:text-sm text-zinc-500 mt-1">✅ Graduado con modalidad DUAL</div>
                            </div>

                            <!-- Contenido -->
                            <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10">
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="text-blue-400 text-lg sm:text-xl">🎓</span>
                                    <span class="text-blue-400 font-semibold text-sm sm:text-base">Titulación Oficial Completada</span>
                                </div>

                                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                    Completé exitosamente el Grado Superior en Desarrollo de Aplicaciones Web con formación dual en GOLIVE Services.
                                    Durante estos dos años adquirí conocimientos sólidos en tecnologías web modernas y experiencia práctica real.
                                </p>

                                <div class="space-y-2 mb-4 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-blue-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Desarrollo Frontend con HTML5, CSS3, JavaScript y Vue.js</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-blue-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Backend con PHP, Symfony, Node.js y bases de datos</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-blue-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">DevOps con Docker, Git y plataformas cloud</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-blue-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Experiencia práctica en empresa durante la formación dual</span>
                                    </div>
                                </div>

                                <!-- Competencias -->
                                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Desarrollo Frontend</span>
                                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Desarrollo Backend</span>
                                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Bases de Datos</span>
                                    <span class="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">Cloud Computing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Grado Medio -->
                    <div class="relative reveal-card">
                        <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-cyan-500 bg-zinc-900 z-10 education-dot"></div>

                        <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                            <!-- Fecha y título -->
                            <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                                <span class="inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-2">
                                    Septiembre 2020 - Junio 2022
                                </span>
                                <h3 class="text-xl sm:text-2xl font-bold text-white">Grado Medio SMR</h3>
                                <div class="text-cyan-400 mt-1 sm:mt-2 text-sm sm:text-base">Sistemas Microinformáticos y Redes</div>
                            </div>

                            <!-- Contenido -->
                            <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 shadow-lg sm:ml-12 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/10">
                                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                    Base sólida en sistemas informáticos, redes y mantenimiento de equipos.
                                    Este título me proporcionó los fundamentos técnicos necesarios para continuar hacia el desarrollo web.
                                </p>

                                <div class="space-y-2 mb-4 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-cyan-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Administración de sistemas operativos</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-cyan-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Configuración y gestión de redes</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-cyan-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Mantenimiento de hardware y software</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-cyan-400 mt-0.5">✓</span>
                                        <span class="text-zinc-300">Fundamentos de programación</span>
                                    </div>
                                </div>

                                <!-- Competencias -->
                                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Redes</span>
                                    <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Hardware</span>
                                    <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Sistemas Operativos</span>
                                    <span class="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">Soporte Técnico</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Próximos pasos académicos - MÁSTER EN IA -->
                    <div class="relative reveal-card">
                        <div class="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full border-4 border-purple-500 bg-zinc-900 z-10 education-dot-future"></div>

                        <div class="ml-12 sm:ml-0 sm:grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                            <!-- Fecha y título -->
                            <div class="sm:text-right sm:pr-12 mb-4 sm:mb-0">
                                <span class="inline-block px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mb-2">
                                    Planificado - 2026
                                </span>
                                <h3 class="text-xl sm:text-2xl font-bold text-white">Máster en Inteligencia Artificial</h3>
                                <div class="text-purple-400 mt-1 sm:mt-2 text-sm sm:text-base">Especialización Avanzada en IA</div>
                                <div class="text-xs sm:text-sm text-zinc-500 mt-1">🎯 Objetivo a medio plazo</div>
                            </div>

                            <!-- Contenido -->
                            <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-800/50 shadow-lg sm:ml-12 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10">
                                <div class="flex items-center gap-2 mb-3">
                                    <span class="text-purple-400 text-lg sm:text-xl">🤖</span>
                                    <span class="text-purple-400 font-semibold text-sm sm:text-base">Formación Continua en IA</span>
                                </div>

                                <p class="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">
                                    Tengo planeado continuar mi formación académica con un máster especializado en Inteligencia Artificial
                                    para profundizar en machine learning, deep learning y aplicaciones de IA en el desarrollo de software.
                                </p>

                                <div class="space-y-2 mb-4 text-sm">
                                    <div class="flex items-start gap-2">
                                        <span class="text-purple-400 mt-0.5">🧠</span>
                                        <span class="text-zinc-300">Machine Learning y Deep Learning</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-purple-400 mt-0.5">🧠</span>
                                        <span class="text-zinc-300">Procesamiento de lenguaje natural (NLP)</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-purple-400 mt-0.5">🧠</span>
                                        <span class="text-zinc-300">Computer Vision y análisis de imágenes</span>
                                    </div>
                                    <div class="flex items-start gap-2">
                                        <span class="text-purple-400 mt-0.5">🧠</span>
                                        <span class="text-zinc-300">Integración de IA en aplicaciones web</span>
                                    </div>
                                </div>

                                <!-- Competencias futuras -->
                                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Machine Learning</span>
                                    <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Deep Learning</span>
                                    <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">NLP</span>
                                    <span class="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">Computer Vision</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Habilidades adicionales y certificaciones -->
            <div class="mt-12 sm:mt-20 text-center">
                <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Certificaciones y Formación Complementaria</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    <!-- Tarjeta 1 -->
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                        <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-blue-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h4 class="text-base sm:text-lg font-bold text-white mb-2">Desarrollo Full-Stack</h4>
                        <p class="text-zinc-400 text-sm sm:text-base">Especialización en desarrollo frontend y backend con tecnologías modernas y frameworks actuales.</p>
                    </div>

                    <!-- Tarjeta 2 -->
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                        <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-emerald-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 class="text-base sm:text-lg font-bold text-white mb-2">Transformación Digital</h4>
                        <p class="text-zinc-400 text-sm sm:text-base">Agente certificado en digitalización de PYMEs con enfoque en innovación y crecimiento empresarial.</p>
                    </div>

                    <!-- Tarjeta 3 - Actualizada para IA -->
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 text-center hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                        <div class="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-purple-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h4 class="text-base sm:text-lg font-bold text-white mb-2">Inteligencia Artificial</h4>
                        <p class="text-zinc-400 text-sm sm:text-base">Formación continua en IA, machine learning y tecnologías emergentes para el futuro del desarrollo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';

export default {
    name: 'EducationSection',
    components: {
        ParticleBackground
    },
    mounted() {
        this.setupCardAnimations();
    },
    methods: {
        setupCardAnimations() {
            const cards = document.querySelectorAll('.reveal-card');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('visible');
                            }, index * 200);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            cards.forEach(card => {
                observer.observe(card);
            });
        }
    }
}
</script>

<style scoped>
.reveal-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.education-dot {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    animation: pulse 2s infinite;
}

.education-dot-current {
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
    animation: pulse-green 2s infinite;
}

.education-dot-future {
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
    animation: pulse-purple 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
    50% {
        box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
    }
    100% {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
    }
}

@keyframes pulse-green {
    0% {
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
    }
    50% {
        box-shadow: 0 0 25px rgba(16, 185, 129, 0.9);
    }
    100% {
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
    }
}

@keyframes pulse-purple {
    0% {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
    }
    50% {
        box-shadow: 0 0 25px rgba(168, 85, 247, 0.8);
    }
    100% {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
    }
}

/* Optimizaciones para móvil */
@media (max-width: 640px) {
    .blur-2xl {
        filter: blur(20px);
    }

    .blur-3xl {
        filter: blur(30px);
    }
}
</style>
