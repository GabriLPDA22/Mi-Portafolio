<template>
    <section id="reconocimientos" class="py-24 relative overflow-hidden">
        <!-- Efectos de fondo -->
        <div class="absolute -top-[300px] right-[100px] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl z-0">
        </div>
        <div
            class="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl z-0">
        </div>

        <div class="container mx-auto px-6 relative">
            <!-- Encabezado de sección -->
            <div class="text-center mb-16 relative">
                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
                    LOGROS
                </div>
                <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                        Reconocimientos
                    </span>
                </h2>
                <div class="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
                <p class="text-lg text-zinc-400 max-w-xl mx-auto">
                    Premios y distinciones que he recibido por mi trabajo y dedicación en el ámbito del desarrollo.
                </p>
            </div>

            <!-- Premio principal destacado -->
            <div class="flex flex-col lg:flex-row items-center gap-8 mb-16 reveal-award">
                <div class="w-full lg:w-1/2 overflow-hidden rounded-2xl">
                    <img src="https://pbs.twimg.com/media/FqJhBwUXgAARAUg?format=jpg&name=small"
                        alt="Premio Olimpiada Aragonesa de Apps 2023"
                        class="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105" />
                </div>
                <div class="w-full lg:w-1/2 lg:pl-8">
                    <div
                        class="inline-flex mb-4 items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        1er Premio | Marzo 2023
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">Olimpiada Aragonesa de Apps</h3>
                    <p class="text-zinc-400 mb-4">
                        Obtuve el primer premio en la Olimpiada Aragonesa de Apps 2023, un prestigioso concurso
                        organizado por el Centro de Profesores de Aragón que reconoce el talento y la innovación en el
                        desarrollo de aplicaciones.
                    </p>
                    <p class="text-zinc-400 mb-6">
                        Mi proyecto destacó entre todos los participantes por su originalidad, diseño centrado en el
                        usuario y calidad técnica, siendo valorado por un jurado de expertos en el sector tecnológico.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a href="https://x.com/cpgiiaragon/status/1630972795415822339" target="_blank"
                            class="inline-flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span>Anuncio oficial</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Espacio para futuros premios -->
            <div class="mt-12 text-center">
                <p class="text-zinc-500 italic">Continuamente buscando nuevos retos y oportunidades para crecer
                    profesionalmente.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AwardsSection',
    mounted() {
        // Configurar las animaciones de revelación
        this.setupRevealAnimations();
    },
    methods: {
        setupRevealAnimations() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observar elementos con clase reveal-award
            document.querySelectorAll('.reveal-award').forEach(element => {
                observer.observe(element);
            });
        }
    }
}
</script>

<style scoped>
.reveal-award {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-award.revealed {
    opacity: 1;
    transform: translateY(0);
}
</style>