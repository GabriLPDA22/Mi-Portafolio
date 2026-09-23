<template>
    <div class="section-title-wrapper text-center mb-16 relative reveal-element">
        <!-- Texto grande de fondo -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl font-bold opacity-5 text-white w-full text-center z-0">
            {{ backgroundText || title.toUpperCase() }}
        </div>

        <!-- Título principal con degradado -->
        <h2 class="text-3xl md:text-4xl font-bold relative z-10 inline-block mb-4">
            <span :class="[
                'bg-clip-text text-transparent',
                gradientClass || 'bg-gradient-to-r from-indigo-500 to-purple-500'
            ]">
                {{ title }}
            </span>
        </h2>

        <!-- Línea decorativa con degradado -->
        <div class="h-1.5 w-20 mx-auto rounded-full mb-6" :class="[
            gradientClass || 'bg-gradient-to-r from-indigo-500 to-purple-500'
        ]"></div>

        <!-- Descripción opcional -->
        <p v-if="description" class="text-lg text-zinc-400 max-w-2xl mx-auto">
            {{ description }}
        </p>

        <!-- Contenido adicional -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        backgroundText: {
            type: String,
            default: ''
        },
        gradientClass: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    },
    mounted() {
        // Opcional: Añadir animación al entrar en viewport
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            observer.observe(this.$el);
        }
    }
}
</script>

<style scoped>
.section-title-wrapper {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.section-title-wrapper.revealed {
    opacity: 1;
    transform: translateY(0);
}

@keyframes gradientFlow {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* Clases predefinidas de gradientes */
.bg-gradient-purple {
    background: linear-gradient(90deg, rgba(168, 85, 247, 1) 0%, rgba(139, 92, 246, 1) 100%);
}

.bg-gradient-blue {
    background: linear-gradient(90deg, rgba(59, 130, 246, 1) 0%, rgba(6, 182, 212, 1) 100%);
}

.bg-gradient-pink {
    background: linear-gradient(90deg, rgba(236, 72, 153, 1) 0%, rgba(244, 114, 182, 1) 100%);
}

.bg-gradient-orange {
    background: linear-gradient(90deg, rgba(234, 88, 12, 1) 0%, rgba(249, 115, 22, 1) 100%);
}

.bg-gradient-green {
    background: linear-gradient(90deg, rgba(16, 185, 129, 1) 0%, rgba(5, 150, 105, 1) 100%);
}
</style>