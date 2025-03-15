<template>
    <section id="sobre-mi" class="py-24 relative overflow-hidden">
        <!-- Efectos de fondo -->
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-indigo-950/20 opacity-50 z-0"></div>
        <div class="absolute -left-[300px] top-[150px] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0">
        </div>

        <div class="container mx-auto px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    SOBRE MÍ
                </div>
                <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                        Sobre Mí
                    </span>
                </h2>
                <div class="h-1.5 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
            </div>

            <!-- Contenido principal -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Columna de información personal -->
                <div class="lg:col-span-2 fade-in-element">
                    <div
                        class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 h-full hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                        <h3 class="text-2xl font-bold text-white mb-6">Quién soy</h3>

                        <div class="space-y-4 text-zinc-400">
                            <p>
                                Soy Gabriel Saiz, estudiante de segundo año en Desarrollo de Aplicaciones Web (DAW) en
                                modalidad
                                <span class="text-emerald-400 font-medium">DUAL</span>. Actualmente, colaboro en una
                                consultora dentro del área de desarrollo web,
                                especializándome en la implementación de soluciones modernas utilizando tecnologías como
                                PHP, JavaScript, Symfony y PostgreSQL.
                            </p>

                            <p>
                                En mi formación académica he adquirido una base sólida en programación con Java, Python,
                                HTML,
                                CSS y SQL. Además, complementé mis habilidades con el manejo de plataformas como <span
                                    class="text-teal-400">AWS</span> y
                                <span class="text-blue-400">Azure</span>, enfocándome en el despliegue de aplicaciones
                                en la nube.
                            </p>

                            <p class="text-white">
                                Mi enfoque se centra en la innovación, la resolución de problemas técnicos y la mejora
                                continua.
                            </p>

                            <!-- Cita o punto destacado -->
                            <div class="border-l-4 border-teal-500 pl-4 my-8">
                                <p class="text-lg text-white italic">"Siempre buscando aprender algo nuevo cada día y
                                    aplicar esos conocimientos para crear soluciones eficientes."</p>
                            </div>

                            <div class="pt-4">
                                <h4 class="text-lg font-semibold text-white mb-2">Intereses profesionales:</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-center">
                                        <div
                                            class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-teal-400"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Desarrollo de aplicaciones web modernas y eficientes
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-teal-400"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Aprendizaje continuo de nuevas tecnologías
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-teal-400"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Optimización de rendimiento y experiencia de usuario
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columna de habilidades y tecnologías -->
                <div class="fade-in-element" data-delay="200">
                    <div
                        class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 h-full hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                        <h3 class="text-2xl font-bold text-white mb-6">Tecnologías</h3>

                        <!-- Tecnologías aprendidas en DAW -->
                        <div class="mb-8">
                            <h4 class="text-lg font-semibold text-teal-400 mb-4">Aprendidas en el grado DAW:</h4>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div v-for="tech in dawTechnologies" :key="tech"
                                    class="flex items-center justify-center p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white text-sm hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 text-center">
                                    {{ tech }}
                                </div>
                            </div>
                        </div>

                        <!-- Tecnologías usadas en trabajo -->
                        <div>
                            <h4 class="text-lg font-semibold text-emerald-400 mb-4">Utilizadas en mi trabajo:</h4>
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div v-for="tech in workTechnologies" :key="tech"
                                    class="flex items-center justify-center p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white text-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 text-center">
                                    {{ tech }}
                                </div>
                            </div>
                        </div>

                        <!-- Certificaciones o logros -->
                        <div class="mt-8 pt-6 border-t border-zinc-800">
                            <h4 class="text-lg font-semibold text-white mb-4">Formación</h4>
                            <div class="space-y-3">
                                <div
                                    class="p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors duration-300">
                                    <div class="font-medium text-teal-400">Grado Superior en DAW</div>
                                    <div class="text-sm">Formación Dual - En curso</div>
                                </div>
                                <div
                                    class="p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors duration-300">
                                    <div class="font-medium text-emerald-400">Grado Medio en Sistemas Microinformáticos
                                    </div>
                                    <div class="text-sm">Completado - 2022</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Botón para descargar CV -->
            <div class="flex justify-center mt-12 fade-in-element" data-delay="400">
                <a href="/cv.pdf" target="_blank"
                    class="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300">
                    <span class="relative z-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        Descargar mi CV completo
                    </span>
                    <span
                        class="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutMeSection',
    data() {
        return {
            dawTechnologies: ['Java', 'Python', 'C#', 'SQL', 'AWS', 'Vue.js', 'SCSS', 'JavaScript'],
            workTechnologies: ['PHP', 'JavaScript', 'HTML', 'Twig', 'CSS', 'Symfony', 'PostgreSQL', 'TailwindCSS', 'Docker']
        }
    },
    mounted() {
        // Configurar animaciones
        this.setupAnimations();
    },
    methods: {
        setupAnimations() {
            const fadeElements = document.querySelectorAll('.fade-in-element');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const delay = entry.target.dataset.delay || 0;
                            setTimeout(() => {
                                entry.target.classList.add('visible');
                            }, delay);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            fadeElements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}
</script>

<style scoped>
.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-in-element.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>