<template>
    <div class="tech-badge-wrapper group">
        <!-- Badge con animación y efecto hover -->
        <div
            class="relative inline-flex overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
            <!-- Borde con degradado animado -->
            <span
                class="absolute inset-[-1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            <!-- Contenido del badge -->
            <div
                class="relative inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full text-sm font-medium border border-zinc-800 group-hover:border-transparent transition-all duration-300">
                <!-- Icono (si existe) -->
                <span v-if="icon" class="tech-icon text-indigo-400 group-hover:text-indigo-300">
                    <font-awesome-icon :icon="icon" />
                </span>

                <!-- Texto -->
                <span class="text-zinc-300 group-hover:text-white transition-colors duration-300">{{ name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TechnologyBadge',
    props: {
        name: {
            type: String,
            required: true
        },
        icon: {
            type: Array,
            required: false,
            default: null
        },
        color: {
            type: String,
            default: 'indigo'
        }
    }
}
</script>

<style scoped>
.tech-badge-wrapper {
    display: inline-flex;
}

@keyframes pulse-subtle {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.03);
    }
}

.tech-icon {
    animation: pulse-subtle 2s infinite;
}

/* Colores personalizados según prop */
.tech-badge-wrapper.blue .tech-icon {
    @apply text-blue-400 group-hover:text-blue-300;
}

.tech-badge-wrapper.purple .tech-icon {
    @apply text-purple-400 group-hover:text-purple-300;
}

.tech-badge-wrapper.green .tech-icon {
    @apply text-green-400 group-hover:text-green-300;
}

.tech-badge-wrapper.pink .tech-icon {
    @apply text-pink-400 group-hover:text-pink-300;
}

.tech-badge-wrapper.cyan .tech-icon {
    @apply text-cyan-400 group-hover:text-cyan-300;
}

.tech-badge-wrapper.red .tech-icon {
    @apply text-red-400 group-hover:text-red-300;
}

.tech-badge-wrapper.orange .tech-icon {
    @apply text-orange-400 group-hover:text-orange-300;
}

.tech-badge-wrapper.yellow .tech-icon {
    @apply text-yellow-400 group-hover:text-yellow-300;
}
</style>