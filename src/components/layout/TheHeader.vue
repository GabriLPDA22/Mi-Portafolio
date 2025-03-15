<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="{ 'py-3 bg-black/30 backdrop-blur-lg border-b border-white/5 shadow-lg': scrolled, 'py-5': !scrolled }">
        <div class="container mx-auto px-4 md:px-6">
            <nav class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <router-link to="/" class="flex items-center group">
                        <div
                            class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
                            <span class="text-xl font-bold text-white">GS</span>
                        </div>
                        <span class="ml-2 text-white font-semibold text-xl relative overflow-hidden">
                            <span
                                class="block transition-transform duration-300 group-hover:-translate-y-full">Gabriel</span>
                            <span
                                class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-indigo-400">Saiz</span>
                        </span>
                    </router-link>
                </div>

                <!-- Links de navegación - Versión escritorio -->
                <div class="hidden md:flex items-center space-x-1">
                    <div class="relative px-4 py-1 rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/5">
                        <div class="absolute inset-0 rounded-full transition-all duration-300 ease-out" :style="{
                            left: activeTabLeft + 'px',
                            width: activeTabWidth + 'px',
                            background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0.1) 100%)'
                        }"></div>

                        <nav class="relative z-10 flex space-x-1">
                            <router-link v-for="item in navigationItems" :key="item.label" :to="item.path"
                                class="px-4 py-2 text-sm font-medium text-zinc-400 rounded-full transition-all duration-200 hover:text-white"
                                :class="{ 'text-white': activeSection === item.section }" @mouseover="updateActiveTab"
                                ref="navLinks">
                                {{ item.label }}
                            </router-link>
                        </nav>
                    </div>
                </div>

                <!-- Botón de contacto -->
                <div class="hidden md:block">
                    <a href="mailto:gsaiz.bajo@gmail.com"
                        class="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        <span
                            class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#4f46e5_100%)]"></span>
                        <span
                            class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Contacto
                        </span>
                    </a>
                </div>

                <!-- Menú móvil botón -->
                <button @click="toggleMobileMenu"
                    class="block md:hidden text-white p-2 rounded-lg hover:bg-zinc-800/50">
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>
        </div>

        <!-- Menú móvil con transición -->
        <Transition name="slide-fade">
            <div v-if="isMobileMenuOpen"
                class="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 mobile-menu-container"
                @click.self="closeMobileMenu">
                <div class="flex justify-end p-4 sticky top-0 bg-black/80 backdrop-blur-lg z-50">
                    <button @click="closeMobileMenu" class="text-white p-2 rounded-lg hover:bg-zinc-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="flex flex-col space-y-4 px-4 pb-32 mt-4 overflow-y-auto h-full">
                    <router-link v-for="item in navigationItems" :key="item.label" :to="item.path"
                        @click="closeMobileMenu"
                        class="text-center py-4 text-lg font-medium text-white border-b border-white/10 hover:bg-white/5 transition-colors">
                        {{ item.label }}
                    </router-link>

                    <a href="mailto:gsaiz.bajo@gmail.com"
                        class="mt-4 text-center py-4 text-lg font-medium text-indigo-400 border border-indigo-500/30 rounded-xl bg-indigo-500/10">
                        Contacto
                    </a>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    data() {
        return {
            scrolled: false,
            isMobileMenuOpen: false,
            activeSection: '',
            activeTabLeft: 0,
            activeTabWidth: 0,
            navigationItems: [
                { label: 'Inicio', path: '/#inicio', section: 'inicio' },
                { label: 'Proyectos', path: '/#proyectos', section: 'proyectos' },
                { label: 'Experiencia', path: '/#experiencia', section: 'experiencia' },
                { label: 'Sobre mí', path: '/#sobre-mi', section: 'sobre-mi' }
            ]
        }
    },
    watch: {
        isMobileMenuOpen(isOpen) {
            // Controlar el scroll del body cuando se abre el menú móvil
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.height = '';
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('keydown', this.handleKeydown);
        this.setupIntersectionObserver();
        this.$nextTick(() => {
            this.updateActiveTab();
        });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('keydown', this.handleKeydown);
        // Restaurar el scroll al desmontar el componente
        document.body.style.overflow = '';
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 20;
        },
        handleResize() {
            // Cerrar el menú móvil cuando se redimensiona a desktop
            if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
            this.updateActiveTab();
        },
        handleKeydown(e) {
            // Cerrar el menú al presionar Escape
            if (e.key === 'Escape' && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        },
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            // Forzar la actualización del DOM para asegurar que el botón de cierre es visible
            this.$nextTick(() => {
                if (this.isMobileMenuOpen) {
                    // Asegurar que la página esté en la parte superior cuando se abre el menú
                    window.scrollTo(0, 0);
                }
            });
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        },
        setupIntersectionObserver() {
            const sections = document.querySelectorAll('section[id]');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.activeSection = entry.target.id;
                            this.updateActiveTab();
                        }
                    });
                },
                { threshold: 0.3 }
            );

            sections.forEach(section => {
                observer.observe(section);
            });
        },
        updateActiveTab() {
            this.$nextTick(() => {
                if (!this.$refs.navLinks) return;

                const activeLink = this.$refs.navLinks.find((link, index) => {
                    return this.navigationItems[index].section === this.activeSection;
                });

                if (activeLink) {
                    this.activeTabLeft = activeLink.offsetLeft;
                    this.activeTabWidth = activeLink.offsetWidth;
                } else if (this.$refs.navLinks.length > 0) {
                    // Si no hay sección activa, usa el primer enlace
                    this.activeTabLeft = this.$refs.navLinks[0].offsetLeft;
                    this.activeTabWidth = this.$refs.navLinks[0].offsetWidth;
                }
            });
        }
    }
}
</script>

<style scoped>
/* Animación para el menú móvil */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}

/* Estilos adicionales para el menú móvil */
button {
    -webkit-tap-highlight-color: transparent;
    /* Elimina el highlight al tocar en móviles */
}

/* Asegurar que el menú móvil cubra todo el viewport */
.mobile-menu-container {
    height: 100vh !important;
    width: 100vw !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    overflow: hidden !important;
    /* Previene scroll en el contenedor principal */
}

.mobile-menu-container>div:last-child {
    overflow-y: auto !important;
    /* Permite scroll solo en el contenido */
    flex: 1 !important;
}
</style>