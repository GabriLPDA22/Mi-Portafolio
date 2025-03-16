<template>
    <a :href="url" target="_blank" rel="noopener noreferrer"
        class="social-link group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 transition-all duration-300">
        <!-- Fondo y borde -->
        <span class="absolute inset-0 border border-zinc-700/50 rounded-full bg-zinc-800/30 backdrop-blur-sm z-0 
                   group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300"></span>

        <!-- Brillo en hover -->
        <span
            class="absolute -inset-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 
                   group-hover:via-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

        <!-- Círculo animado al hover -->
        <span class="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-indigo-500/20 scale-0 opacity-0 
                   group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0"></span>

        <!-- Icono y texto -->
        <span class="relative z-10 text-zinc-400 group-hover:text-white transition-colors duration-300"
            v-html="icon"></span>
        <span
            class="relative z-10 text-sm md:text-base text-zinc-400 group-hover:text-white transition-colors duration-300">{{
            name }}</span>
    </a>
</template>

<script>
export default {
    name: 'SocialLink',
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.social-link {
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
}

/* Animación para círculo decorativo */
@keyframes pulse-subtle {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.2;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.3;
    }
}

.social-link:hover .circle-pulse {
    animation: pulse-subtle 2s infinite;
}
</style>