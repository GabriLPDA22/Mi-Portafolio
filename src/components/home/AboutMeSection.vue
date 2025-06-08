<template>
    <section id="sobre-mi" class="py-20 sm:py-24 relative overflow-hidden">
        <!-- Efectos de fondo mejorados -->
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-teal-950/20 opacity-50 z-0"></div>
        <div class="absolute -left-[300px] top-[150px] w-[600px] h-[600px] rounded-full bg-teal-600/8 blur-3xl z-0 animate-pulse">
        </div>
        <div class="absolute -right-[200px] bottom-[100px] w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-2xl z-0 animate-pulse" style="animation-delay: 2s;">
        </div>

        <div class="container mx-auto px-4 sm:px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    SOBRE MÍ
                </div>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 inline-block mb-3 sm:mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
                        Conoce Mi Historia
                    </span>
                </h2>
                <div class="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
                <p class="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
                    De estudiante a desarrollador profesional, especializado en transformación digital
                </p>
            </div>

            <!-- Grid principal -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">

                <!-- Columna principal - Información personal ampliada -->
                <div class="lg:col-span-2 fade-in-element">
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-zinc-800 h-full hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                            <h3 class="text-xl sm:text-2xl font-bold text-white">Mi Trayectoria</h3>
                        </div>

                        <div class="space-y-4 sm:space-y-5 text-zinc-300 text-sm sm:text-base">
                            <p>
                                Soy <strong class="text-white">Gabriel Saiz</strong>, desarrollador web full-stack recién graduado del
                                <span class="text-teal-400 font-medium">Grado Superior en DAW</span> con modalidad DUAL.
                                Actualmente trabajo en <span class="text-emerald-400 font-medium">GOLIVE Services</span>
                                en el departamento de Mobile Technology y Web Integrations, donde colaboro con diversos
                                clientes en proyectos de desarrollo y mantenimiento.
                            </p>

                            <p>
                                Completé exitosamente mi <strong class="text-white">Trabajo de Fin de Grado</strong> desarrollando
                                <span class="text-violet-400">"Elixium Foods Delivery"</span>, una plataforma completa de delivery
                                con arquitectura moderna usando <span class="text-purple-400">.NET 9</span>, PostgreSQL,
                                Docker, Kubernetes y despliegue en AWS con CI/CD automatizado.
                            </p>

                            <p>
                                Además del desarrollo web, he creado <span class="text-red-400 font-medium">McPoints v1.0.1</span>,
                                una aplicación Android para coleccionar números de pedido de McDonald's que surgió de una
                                idea personal y ahora cuenta con usuarios activos.
                            </p>

                            <p>
                                Actualmente estoy ampliando mis competencias como <strong class="text-emerald-400">
                                Agente de Transformación Digital</strong> a través del programa "Generación Digital - Agentes del Cambio"
                                del Plan Nacional de Capacidades Digitales, financiado por fondos Next Generation EU.
                            </p>

                            <!-- Cita destacada -->
                            <div class="border-l-4 border-teal-500 pl-4 my-6 sm:my-8 bg-teal-500/5 rounded-r-lg py-3">
                                <p class="text-base sm:text-lg text-white italic">
                                    "Mi objetivo es combinar el desarrollo técnico con la transformación digital empresarial,
                                    y especializarme en Inteligencia Artificial para estar a la vanguardia de la innovación."
                                </p>
                            </div>

                            <!-- Visión futura -->
                            <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20">
                                <h4 class="text-base sm:text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                                    <span class="text-lg sm:text-xl">🚀</span>
                                    Próximos Pasos
                                </h4>
                                <p class="text-zinc-300 text-sm sm:text-base">
                                    En 2026 planeo cursar un <strong class="text-white">Máster en Inteligencia Artificial</strong>
                                    para fusionar mis conocimientos en desarrollo web con IA, machine learning y crear
                                    soluciones tecnológicas que realmente marquen la diferencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columna lateral - Stats y tecnologías -->
                <div class="space-y-6 sm:space-y-8 fade-in-element" data-delay="200">

                    <!-- Métricas rápidas -->
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
                        <h3 class="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span class="text-emerald-400">📊</span>
                            En Números
                        </h3>
                        <div class="grid grid-cols-2 gap-3 sm:gap-4">
                            <div class="text-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                <div class="text-lg sm:text-xl font-bold text-teal-400">1+</div>
                                <div class="text-xs sm:text-sm text-zinc-400">Año de Experiencia</div>
                            </div>
                            <div class="text-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                <div class="text-lg sm:text-xl font-bold text-emerald-400">7+</div>
                                <div class="text-xs sm:text-sm text-zinc-400">Proyectos Completados</div>
                            </div>
                            <div class="text-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                <div class="text-lg sm:text-xl font-bold text-violet-400">1</div>
                                <div class="text-xs sm:text-sm text-zinc-400">TFG Finalizado</div>
                            </div>
                            <div class="text-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                <div class="text-lg sm:text-xl font-bold text-red-400">1.0.1</div>
                                <div class="text-xs sm:text-sm text-zinc-400">App Android</div>
                            </div>
                        </div>
                    </div>

                    <!-- Stack tecnológico actualizado -->
                    <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-800 hover:border-teal-500/30 transition-all duration-300">
                        <h3 class="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span class="text-teal-400">⚡</span>
                            Stack Actual
                        </h3>

                        <!-- Frontend -->
                        <div class="mb-4">
                            <h4 class="text-sm font-semibold text-teal-400 mb-2">Frontend</h4>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs border border-orange-500/20">HTML5</span>
                                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/20">CSS3</span>
                                <span class="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs border border-yellow-500/20">JavaScript</span>
                                <span class="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/20">Vue.js</span>
                                <span class="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">TailwindCSS</span>
                            </div>
                        </div>

                        <!-- Backend -->
                        <div class="mb-4">
                            <h4 class="text-sm font-semibold text-emerald-400 mb-2">Backend</h4>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-500/20">PHP</span>
                                <span class="px-2 py-1 bg-purple-600/10 text-purple-400 rounded text-xs border border-purple-600/20">.NET 9</span>
                                <span class="px-2 py-1 bg-blue-700/10 text-blue-400 rounded text-xs border border-blue-700/20">PostgreSQL</span>
                                <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs border border-red-500/20">Symfony</span>
                            </div>
                        </div>

                        <!-- DevOps -->
                        <div>
                            <h4 class="text-sm font-semibold text-blue-400 mb-2">DevOps & Cloud</h4>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="px-2 py-1 bg-blue-600/10 text-blue-400 rounded text-xs border border-blue-600/20">Docker</span>
                                <span class="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-500/20">Kubernetes</span>
                                <span class="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs border border-orange-500/20">AWS</span>
                                <span class="px-2 py-1 bg-gray-500/10 text-gray-400 rounded text-xs border border-gray-500/20">GitHub Actions</span>
                            </div>
                        </div>
                    </div>

                    <!-- Formación actual -->
                    <div class="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-emerald-800/50">
                        <h3 class="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span class="text-emerald-400">🎓</span>
                            Formación
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-start gap-3">
                                <div class="w-2 h-2 rounded-full bg-emerald-500 mt-2 animate-pulse"></div>
                                <div>
                                    <div class="font-medium text-emerald-400 text-sm">Agentes del Cambio 2025</div>
                                    <div class="text-xs text-zinc-400">Transformación Digital PYMEs</div>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                                <div>
                                    <div class="font-medium text-blue-400 text-sm">Grado Superior DAW</div>
                                    <div class="text-xs text-zinc-400">✅ Graduado - Junio 2025</div>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                                <div>
                                    <div class="font-medium text-purple-400 text-sm">Máster en IA</div>
                                    <div class="text-xs text-zinc-400">🎯 Planificado 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sección de intereses y especialidades -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">

                <!-- Desarrollo Web -->
                <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-teal-500/30 transition-all duration-300 fade-in-element" data-delay="300">
                    <div class="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-3">Desarrollo Full-Stack</h3>
                    <p class="text-zinc-400 text-sm">Especializado en crear aplicaciones web modernas desde el frontend hasta el backend, con arquitecturas escalables y buenas prácticas.</p>
                    <div class="mt-3 text-xs text-teal-400">Vue.js • .NET 9 • PostgreSQL • Docker</div>
                </div>

                <!-- Transformación Digital -->
                <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 fade-in-element" data-delay="400">
                    <div class="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-3">Transformación Digital</h3>
                    <p class="text-zinc-400 text-sm">Ayudo a PYMEs a digitalizarse e implementar soluciones tecnológicas que optimicen sus procesos y mejoren su competitividad.</p>
                    <div class="mt-3 text-xs text-emerald-400">Consultoría • Automatización • Growth</div>
                </div>

                <!-- Innovación -->
                <div class="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 fade-in-element" data-delay="500">
                    <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-3">Futuro en IA</h3>
                    <p class="text-zinc-400 text-sm">Mi próximo objetivo es especializarme en Inteligencia Artificial para integrar ML y automatización inteligente en aplicaciones web.</p>
                    <div class="mt-3 text-xs text-purple-400">Machine Learning • NLP • Computer Vision</div>
                </div>
            </div>

            <!-- Call to action mejorado -->
            <div class="text-center fade-in-element" data-delay="600">
                <div class="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a href="/cv.pdf" target="_blank"
                        class="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            Descargar CV Completo
                        </span>
                        <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>

                    <div class="flex gap-3">
                        <a href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/" target="_blank"
                            class="group relative px-4 sm:px-6 py-3 sm:py-4 overflow-hidden rounded-full border-2 border-blue-500/50 text-blue-400 font-medium hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                            <span class="relative z-10 flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                <span class="hidden sm:inline">LinkedIn</span>
                            </span>
                        </a>

                        <button @click="copyEmail"
                            class="group relative px-4 sm:px-6 py-3 sm:py-4 overflow-hidden rounded-full border-2 border-teal-500/50 text-teal-400 font-medium hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                            <span class="relative z-10 flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span class="hidden sm:inline">Email</span>
                            </span>
                        </button>
                    </div>
                </div>

                <p class="text-zinc-400 text-sm mt-4">
                    💡 Siempre abierto a nuevas oportunidades y colaboraciones
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutMeSection',
    mounted() {
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
        },
        async copyEmail() {
            const email = 'gsaiz.bajo@gmail.com';

            try {
                await navigator.clipboard.writeText(email);

                // Mostrar notificación de éxito
                this.showNotification('📧 Email copiado al portapapeles!');

                // Opcional: tracking del evento
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'email_copy', {
                        'event_category': 'contact',
                        'event_label': 'email_copied_about_section'
                    });
                }
            } catch (err) {
                // Fallback para navegadores que no soportan clipboard API
                this.showNotification('📧 Mi email: ' + email);
            }
        },
        showNotification(message) {
            // Crear notificación temporal
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 right-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';
            notification.textContent = message;

            document.body.appendChild(notification);

            // Animar entrada
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
                notification.style.opacity = '1';
            }, 100);

            // Remover después de 3 segundos
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
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

/* Animación de pulso personalizada */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Efectos hover mejorados */
.hover\:-translate-y-1:hover {
    transform: translateY(-0.25rem);
}

/* Responsive text */
@media (max-width: 640px) {
    .text-xs {
        font-size: 0.75rem;
    }
    .text-sm {
        font-size: 0.875rem;
    }
}
</style>
