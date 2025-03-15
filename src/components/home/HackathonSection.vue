<template>
    <section id="hackathones" class="py-24 relative overflow-hidden">
        <!-- Efectos de fondo -->
        <div class="absolute -bottom-[300px] right-[300px] w-[600px] h-[600px] rounded-full bg-pink-600/5 blur-3xl z-0">
        </div>

        <div class="container mx-auto px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    HACKATHONES
                </div>
                <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                        Hackathones
                    </span>
                </h2>
                <div class="h-1.5 w-20 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            </div>

            <!-- Contenido principal -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <!-- Columna de texto -->
                <div class="space-y-6 reveal-element">
                    <div
                        class="inline-block rounded-lg bg-white/5 backdrop-blur-sm px-3 py-1 text-sm text-pink-400 border border-pink-500/20 mb-4">
                        Premio a la Idea Más Innovadora
                    </div>

                    <h3 class="text-3xl font-bold text-white">Space-Apps de la NASA</h3>
                    <p class="text-xl text-white/60 mb-6">Edición 2023</p>

                    <p class="text-zinc-400 leading-relaxed">
                        Mi experiencia en hackathones ha sido muy enriquecedora y ha contribuido significativamente a mi
                        crecimiento profesional. Un logro destacado fue nuestra participación en el <span
                            class="text-white font-medium">Hackathon de
                            Space-Apps de la NASA edición 2023</span>, donde mi equipo y yo fuimos galardonados con el
                        <span class="text-pink-400 font-medium">Premio a la Idea Más Innovadora</span>.
                    </p>

                    <p class="text-zinc-400 leading-relaxed">
                        Este reconocimiento no solo validó nuestras habilidades técnicas y creativas, sino que también
                        reafirmó
                        nuestra capacidad para trabajar en equipo y desarrollar soluciones originales y efectivas bajo
                        presión.
                    </p>

                    <!-- Tarjeta de reconocimiento -->
                    <div
                        class="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-pink-500/20 mt-8">
                        <div class="flex-shrink-0">
                            <div
                                class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-white font-medium">Reconocimiento</h4>
                            <p class="text-zinc-400 text-sm">Mi equipo recibió un premio de €300 por nuestra innovadora
                                solución.</p>
                        </div>
                    </div>
                </div>

                <!-- Columna de imagen -->
                <div class="relative reveal-element" data-delay="200">
                    <!-- Marco decorativo -->
                    <div class="absolute inset-0 rotate-3 rounded-3xl border border-pink-500/30 bg-pink-500/5"></div>
                    <div class="absolute inset-0 -rotate-3 rounded-3xl border border-rose-500/20 bg-rose-500/5"></div>

                    <!-- Imagen principal -->
                    <div
                        class="relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl shadow-black/50 bg-gradient-to-br from-zinc-800 to-zinc-900 z-10">
                        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>

                        <img src="/img/Space_Apps_1.jpg" alt="Hackathon Space Apps NASA"
                            class="w-full aspect-video object-cover object-center z-10 hover:scale-105 transition-transform duration-700" />
                    </div>

                    <!-- NASA badge -->
                    <div
                        class="absolute -top-5 -right-5 w-20 h-20 rounded-full p-1 bg-black/50 backdrop-blur-md z-20 border border-white/10">
                        <div class="w-full h-full rounded-full bg-[#0B3D91] flex items-center justify-center">
                            <div class="text-white text-center text-xs font-bold">
                                <span class="text-2xl">NASA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HackathonSection',
    mounted() {
        // Configurar animaciones de revelación
        this.setupRevealAnimations();
    },
    methods: {
        setupRevealAnimations() {
            const revealElements = document.querySelectorAll('.reveal-element');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const delay = entry.target.dataset.delay || 0;
                            setTimeout(() => {
                                entry.target.classList.add('revealed');
                            }, delay);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            revealElements.forEach(element => {
                observer.observe(element);
            });
        }
    }
}
</script>

<style scoped>
.reveal-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-element.revealed {
    opacity: 1;
    transform: translateY(0);
}
</style>