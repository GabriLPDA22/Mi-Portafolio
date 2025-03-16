<template>
    <div class="min-h-screen pt-14 pb-10 sm:pt-20 sm:pb-20">
        <!-- Efectos de fondo se heredan del layout principal -->
        <!-- Efectos adicionales para la página de detalle - Reducidos en móvil -->
        <div
            class="fixed top-[40%] left-[30%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-indigo-600/10 blur-[80px] sm:blur-[120px] z-0 animate-pulse">
        </div>
        <div class="fixed bottom-[25%] right-[20%] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-purple-600/10 blur-[80px] sm:blur-[100px] z-0 animate-pulse"
            style="animation-delay: 1s;"></div>

        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <!-- Botón de volver - Más pequeño en móvil -->
            <router-link to="/#proyectos"
                class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4 sm:mb-8 group">
                <div
                    class="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-zinc-800/80 flex items-center justify-center overflow-hidden group-hover:bg-indigo-600/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 sm:h-5 sm:w-5 transform transition-transform group-hover:-translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <span class="font-medium text-sm sm:text-base">Volver a proyectos</span>
            </router-link>

            <!-- Contenido del proyecto -->
            <div v-if="project" class="fade-in-element visible">
                <!-- Header con imagen de fondo parallax - Altura reducida en móvil -->
                <div
                    class="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-6 sm:mb-8 reveal-element revealed">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="`background-image: url(${project.image}); transform: translateY(${scrollY * 0.15}px)`">
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent"></div>

                    <!-- Contenido del encabezado -->
                    <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                        <h1
                            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                            {{ project.title }}
                        </h1>

                        <!-- Tecnologías - Scrollable en móvil -->
                        <div class="flex overflow-x-auto pb-2 -mx-2 px-2 sm:flex-wrap sm:overflow-visible">
                            <span v-for="tech in project.technologies" :key="tech.name"
                                :class="`${tech.color} py-1 px-2 sm:py-1.5 sm:px-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 backdrop-blur-md flex-shrink-0 mr-2 sm:mr-0 sm:mb-2 sm:mr-2`">
                                <font-awesome-icon v-if="tech.icon" :icon="tech.icon" />
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Estructura flexible para móviles (apilado) y desktop (columnas) -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
                    <!-- Columna con información del proyecto - Primero en móvil -->
                    <div class="lg:col-span-1 order-2 lg:order-1">
                        <div class="glass-card p-4 sm:p-6 md:p-8 h-full reveal-element revealed">
                            <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Sobre el proyecto</h2>

                            <p class="text-zinc-300 mb-6 sm:mb-8 text-sm sm:text-base">
                                {{ project.description }}
                            </p>

                            <!-- Enlaces - Más pequeños en móvil -->
                            <div class="flex flex-col gap-3 sm:gap-4">
                                <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
                                    class="px-4 sm:px-5 py-2 sm:py-3 glass hover:bg-indigo-600/20 border border-zinc-800 hover:border-indigo-500/50 rounded-lg text-white flex items-center gap-2 transition-all duration-300 group">
                                    <div
                                        class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-600/30 transition-all duration-300">
                                        <font-awesome-icon v-if="link.icon" :icon="link.icon"
                                            class="text-indigo-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="font-medium text-sm sm:text-base">{{ link.label }}</span>
                                        <span class="text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-300">Ver
                                            código fuente</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Columna con galería - Primero en desktop -->
                    <div class="lg:col-span-2 order-1 lg:order-2 mb-4 lg:mb-0">
                        <div class="glass-card p-4 sm:p-6 reveal-element revealed">
                            <!-- Header de galería adaptable -->
                            <div class="flex flex-wrap items-center justify-between mb-4 sm:mb-6 gap-2">
                                <h2 class="text-xl sm:text-2xl font-bold gradient-text">Galería del proyecto</h2>

                                <!-- Controles agrupados para móvil -->
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div
                                        class="px-2 py-1 sm:px-3 sm:py-1 rounded-full glass text-xs sm:text-sm text-zinc-300">
                                        <span class="font-medium text-white">{{ currentIndex + 1 }}</span> / {{
                                        allImages.length }}
                                    </div>

                                    <div class="flex items-center gap-1 sm:gap-2">
                                        <button @click="prevImage"
                                            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600/30 transition-colors">
                                            <font-awesome-icon :icon="['fas', 'chevron-left']"
                                                class="text-xs sm:text-sm text-zinc-400 hover:text-white" />
                                        </button>
                                        <button @click="nextImage"
                                            class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600/30 transition-colors">
                                            <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                class="text-xs sm:text-sm text-zinc-400 hover:text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Visor de imagen principal optimizado para móvil -->
                            <div class="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                                <div
                                    class="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-zinc-900/50 overflow-hidden">
                                    <transition name="fade" mode="out-in">
                                        <img :key="currentImage" :src="currentImage"
                                            :alt="`${project.title} - Imagen ${currentIndex + 1}`"
                                            class="w-full h-full object-contain transition-all duration-300" />
                                    </transition>

                                    <!-- Controles adaptados para toques en móvil - Más grandes -->
                                    <div class="absolute inset-y-0 left-0 flex items-center">
                                        <button @click="prevImage"
                                            class="flex items-center justify-center p-2 pl-1 pr-2 sm:pl-1 sm:pr-3 bg-black/30 backdrop-blur-sm text-white rounded-r-full hover:bg-black/50 transition-colors duration-300">
                                            <font-awesome-icon :icon="['fas', 'chevron-left']"
                                                class="text-sm sm:text-base" />
                                        </button>
                                    </div>

                                    <div class="absolute inset-y-0 right-0 flex items-center">
                                        <button @click="nextImage"
                                            class="flex items-center justify-center p-2 pr-1 pl-2 sm:pr-1 sm:pl-3 bg-black/30 backdrop-blur-sm text-white rounded-l-full hover:bg-black/50 transition-colors duration-300">
                                            <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                class="text-sm sm:text-base" />
                                        </button>
                                    </div>

                                    <!-- Indicador de carga de imagen -->
                                    <div v-if="loading"
                                        class="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                        <div
                                            class="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin">
                                        </div>
                                    </div>
                                </div>

                                <!-- Título de la imagen actual con animación - Ajustado para móvil -->
                                <div
                                    class="absolute left-0 right-0 bottom-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm">
                                    <transition name="slide-up" mode="out-in">
                                        <p :key="currentImage" class="text-white text-xs sm:text-sm md:text-base">
                                            {{ imageTitle(currentIndex) }}
                                        </p>
                                    </transition>
                                </div>
                            </div>

                            <!-- Miniaturas optimizadas para móvil -->
                            <div class="relative">
                                <!-- Controles de navegación para carrusel - Más grandes en móvil para facilitar toques -->
                                <button v-if="canScrollLeft" @click="scrollThumbnails('left')"
                                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                                    <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xs sm:text-sm" />
                                </button>

                                <button v-if="canScrollRight" @click="scrollThumbnails('right')"
                                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-xs sm:text-sm" />
                                </button>

                                <!-- Carrusel de miniaturas - Tamaño reducido en móvil -->
                                <div class="overflow-hidden">
                                    <div ref="thumbnailsContainer"
                                        class="flex gap-2 sm:gap-4 transition-transform duration-300 pb-2 px-2">
                                        <div v-for="(img, index) in allImages" :key="index" @click="setImage(index)"
                                            class="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300 transform hover:scale-105"
                                            :class="{ 'ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20': currentIndex === index, 'opacity-60 hover:opacity-100': currentIndex !== index }">
                                            <img :src="img" :alt="`Miniatura ${index + 1}`"
                                                class="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Estado de carga o proyecto no encontrado -->
            <div v-else class="glass-card p-4 sm:p-8 text-center py-10 sm:py-20">
                <div v-if="loading" class="text-base sm:text-xl text-zinc-400">
                    <div
                        class="inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin mb-4">
                    </div>
                    <div class="animate-pulse mt-4">Cargando proyecto...</div>
                </div>
                <div v-else class="text-base sm:text-xl text-zinc-400">
                    Proyecto no encontrado.
                    <router-link to="/#proyectos" class="text-indigo-400 hover:text-indigo-300 ml-2">Volver a
                        proyectos</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/projects';

export default {
    name: 'ProjectDetailView',
    setup() {
        const route = useRoute();
        const loading = ref(true);
        const imageLoading = ref(true);
        const currentIndex = ref(0);
        const scrollY = ref(0);
        const thumbnailsContainer = ref(null);
        const canScrollLeft = ref(false);
        const canScrollRight = ref(true);

        const project = computed(() => {
            const projectId = parseInt(route.params.id);
            return projects.find(p => p.id === projectId);
        });

        const allImages = computed(() => {
            if (!project.value) return [];

            const images = [project.value.image];
            if (project.value.gallery) {
                project.value.gallery.forEach(img => {
                    images.push(img.src);
                });
            }
            return images;
        });

        const currentImage = computed(() => {
            if (allImages.value.length === 0) return '';
            return allImages.value[currentIndex.value];
        });

        // Método para obtener el título de la imagen actual
        const imageTitle = (index) => {
            if (index === 0) {
                return `Vista principal de ${project.value.title}`;
            } else {
                const galleryImg = project.value.gallery[index - 1];
                return galleryImg.alt || `Imagen ${index} de ${project.value.title}`;
            }
        };

        // Métodos para la navegación de imágenes
        const setImage = (index) => {
            imageLoading.value = true;
            currentIndex.value = index;
            preloadImage(currentImage.value);
        };

        const nextImage = () => {
            imageLoading.value = true;
            currentIndex.value = (currentIndex.value + 1) % allImages.value.length;
            preloadImage(currentImage.value);
        };

        const prevImage = () => {
            imageLoading.value = true;
            currentIndex.value = (currentIndex.value - 1 + allImages.value.length) % allImages.value.length;
            preloadImage(currentImage.value);
        };

        // Precargar imagen para evitar parpadeo
        const preloadImage = (src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imageLoading.value = false;
            };
        };

        // Métodos para el scroll de miniaturas
        const updateScrollButtons = () => {
            if (!thumbnailsContainer.value) return;

            const container = thumbnailsContainer.value;
            canScrollLeft.value = container.scrollLeft > 0;
            canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
        };

        const scrollThumbnails = (direction) => {
            if (!thumbnailsContainer.value) return;

            const container = thumbnailsContainer.value;
            // Scroll más pequeño en móvil para mejor control
            const isMobile = window.innerWidth < 640;
            const scrollAmount = container.clientWidth * (isMobile ? 0.5 : 0.7);

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }

            // Actualizar botones después del scroll
            setTimeout(updateScrollButtons, 500);
        };

        // Efectos de parallax
        const handleScroll = () => {
            scrollY.value = window.scrollY;
        };

        // Navegación con teclado
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        };

        // Detectar si es un dispositivo táctil
        const isTouchDevice = () => {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };

        onMounted(() => {
            loading.value = false;

            if (project.value) {
                // Precargar la primera imagen
                preloadImage(currentImage.value);

                // Actualizar título de la página
                document.title = `${project.value.title} - Portafolio de Gabriel Saiz`;

                // Configurar listeners
                window.addEventListener('scroll', handleScroll);

                // Solo agregar navegación por teclado en dispositivos no táctiles
                if (!isTouchDevice()) {
                    window.addEventListener('keydown', handleKeyDown);
                }

                // Inicializar controles de scroll
                setTimeout(updateScrollButtons, 500);

                // Configurar observer para el contenedor de miniaturas
                if (thumbnailsContainer.value) {
                    thumbnailsContainer.value.addEventListener('scroll', updateScrollButtons);
                }
            }
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);

            if (thumbnailsContainer.value) {
                thumbnailsContainer.value.removeEventListener('scroll', updateScrollButtons);
            }
        });

        return {
            project,
            loading,
            imageLoading: computed(() => loading.value || imageLoading.value),
            currentIndex,
            currentImage,
            allImages,
            scrollY,
            thumbnailsContainer,
            canScrollLeft,
            canScrollRight,
            setImage,
            nextImage,
            prevImage,
            imageTitle,
            scrollThumbnails
        };
    }
};
</script>

<style scoped>
/* Transiciones para las imágenes */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Transición para el título */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from {
    transform: translateY(20px);
    opacity: 0;
}

.slide-up-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

/* Ajustes específicos para móvil */
@media (max-width: 640px) {

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: transform 0.2s ease, opacity 0.2s ease;
    }
}
</style>