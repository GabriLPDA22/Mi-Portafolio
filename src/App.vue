<template>
    <div class="relative text-black dark:text-white">
        <!-- Background gradient -->
        <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>

        <!-- Header -->
        <TheHeader />

        <!-- Main Content -->
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

        <!-- Footer -->
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Global styles preserved from original CSS */
:root {
    color-scheme: light dark;
}

html {
    font-family: 'Onest Variable', system-ui, sans-serif;
    scroll-behavior: smooth;
}

body {
    color: rgba(17, 17, 17, 0.9);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overscroll-behavior: none;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        color: rgba(255, 255, 255, 0.9);
    }
}
</style>