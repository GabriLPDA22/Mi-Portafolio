<template>
    <section id="experiencia" class="py-24 relative overflow-hidden">
        <!-- <ParticleBackground color="#6366f1" :particleCount="100" :connectionDistance="150" :speed="0.8"
        :interactive="true" :size="1.5" /> -->
        <!-- Efectos de fondo -->
        <div class="absolute -top-[300px] left-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0">
        </div>

        <div class="container mx-auto px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    EXPERIENCIA
                </div>
                <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                        Mi Experiencia
                    </span>
                </h2>
                <div class="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-zinc-400 max-w-xl mx-auto">
                    Conoce mi trayectoria profesional y los proyectos en los que he trabajado.
                </p>
            </div>

            <!-- Timeline de experiencia -->
            <div class="relative">
                <!-- Línea central -->
                <div
                    class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600/50 via-purple-600/50 to-transparent">
                </div>

                <!-- Items de la timeline -->
                <div class="mb-16 relative">
                    <!-- Punto de la timeline -->
                    <div
                        class="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-6 h-6 rounded-full border-2 border-indigo-500 bg-zinc-900 z-10 glow-item">
                    </div>

                    <!-- Contenido -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <!-- Fecha (Izquierda) -->
                        <div class="md:text-right md:pr-10 order-2 md:order-1 fade-right">
                            <div class="text-indigo-400 text-xl mb-2">Actualmente...</div>
                            <div class="text-white text-2xl font-semibold opacity-80">GOLIVE Services</div>
                        </div>

                        <!-- Detalles (Derecha) -->
                        <div
                            class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 md:ml-10 order-1 md:order-2 fade-left hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                            <h3 class="text-2xl font-bold text-white mb-2">Mobile Technology y Web Development</h3>
                            <p class="text-zinc-400 mb-4">
                                Actualmente trabajo en GOLIVE, una consultora tecnológica en el departamento de
                                <span class="text-white font-medium">Mobile Technology y Web Integrations</span>. Aquí
                                colaboro con diversos clientes,
                                participando en proyectos de desarrollo y mantenimiento de <span
                                    class="text-indigo-400">webs</span> y
                                <span class="text-purple-400">apps</span>.
                                Mi rol incluye diseñar soluciones personalizadas, implementar funcionalidades, y
                                asegurar el
                                rendimiento óptimo de las plataformas de nuestros clientes.
                            </p>
                            <a href="https://www.onegolive.com" target="_blank"
                                class="inline-flex items-center text-indigo-400 hover:text-white transition-colors">
                                <span>Visitar sitio web</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tecnologías utilizadas -->
            <div class="mt-16 text-center">
                <h3 class="text-2xl font-bold text-white mb-6">Tecnologías con las que trabajo</h3>
                <div class="flex flex-wrap justify-center gap-4">
                    <div v-for="tech in technologies" :key="tech.name"
                        class="px-4 py-2 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300">
                        <span>{{ tech.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ParticleBackground from '@/components/ui/ParticleBackground.vue';
export default {
    name: 'ExperienceSection',
    data() {
        return {
            technologies: [
                { name: 'PHP' },
                { name: 'JavaScript' },
                { name: 'HTML' },
                { name: 'Twig' },
                { name: 'CSS' },
                { name: 'Symfony' },
                { name: 'PostgreSQL' },
                { name: 'TailwindCSS' },
                { name: 'Docker' }
            ]
        }
    },
    mounted() {
        // Animaciones
        this.setupAnimations();
    },
    methods: {
        setupAnimations() {
            // Animación de aparición para elementos con clase fade-right
            const fadeRightElements = document.querySelectorAll('.fade-right');
            const fadeLeftElements = document.querySelectorAll('.fade-left');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (entry.target.classList.contains('fade-right')) {
                                entry.target.classList.add('animated-right');
                            } else if (entry.target.classList.contains('fade-left')) {
                                entry.target.classList.add('animated-left');
                            }
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            fadeRightElements.forEach(el => observer.observe(el));
            fadeLeftElements.forEach(el => observer.observe(el));
        }
    }
}
</script>

<style scoped>
.fade-right {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-left {
    opacity: 0;
    transform: translateX(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.animated-right,
.animated-left {
    opacity: 1;
    transform: translateX(0);
}

.glow-item {
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
    }

    50% {
        box-shadow: 0 0 25px rgba(99, 102, 241, 0.9);
    }

    100% {
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
    }
}
</style>
