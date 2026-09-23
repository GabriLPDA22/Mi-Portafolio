<template>
    <transition name="fade">
        <button v-show="visible" @click="scrollToTop"
            class="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/90 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 group">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>

            <!-- Círculo decorativo animado (visible solo en hover) -->
            <div
                class="absolute inset-0 rounded-full border border-white/20 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
            </div>
        </button>
    </transition>
</template>

<script>
export default {
    name: 'BackToTop',
    data() {
        return {
            visible: false,
            scrollThreshold: 500, // pixels de scroll para mostrar el botón
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.visible = window.scrollY > this.scrollThreshold;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Animación del botón al hacer hover */
@keyframes pulse-border {
    0% {
        box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
    }

    70% {
        box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
    }
}

button {
    animation: pulse-border 2s infinite;
}
</style>