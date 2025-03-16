<template>
    <div class="min-h-screen pt-20 pb-20">
        <!-- Efectos de fondo se heredan del layout principal -->
        <!-- Efectos adicionales para la página de detalle -->
        <div class="fixed top-[30%] left-[30%] w-72 h-72 rounded-full bg-indigo-600/10 blur-[120px] z-0 animate-pulse">
        </div>
        <div class="fixed bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-purple-600/10 blur-[100px] z-0 animate-pulse"
            style="animation-delay: 1s;"></div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Botón de volver -->
            <router-link to="/#proyectos"
                class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group">
                <div
                    class="relative h-8 w-8 rounded-full bg-zinc-800/80 flex items-center justify-center overflow-hidden group-hover:bg-indigo-600/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 transform transition-transform group-hover:-translate-x-1" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <div class="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    </div>
                </div>
                <span class="font-medium">Volver a proyectos</span>
            </router-link>

            <!-- Contenido del proyecto -->
            <div v-if="project" class="fade-in-element visible">
                <!-- Header con imagen de fondo parallax -->
                <div class="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-8 reveal-element revealed">
                    <div class="absolute inset-0 bg-cover bg-center"
                        :style="`background-image: url(${project.image}); transform: translateY(${scrollY * 0.2}px)`">
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent"></div>

                    <!-- Contenido del encabezado -->
                    <div class="absolute inset-0 flex flex-col justify-end p-8">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            {{ project.title }}
                        </h1>

                        <div class="flex flex-wrap gap-3 mb-6">
                            <span v-for="tech in project.technologies" :key="tech.name"
                                :class="`${tech.color} py-1.5 px-3 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-md`">
                                <font-awesome-icon v-if="tech.icon" :icon="tech.icon" />
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Columna izquierda con información del proyecto -->
                    <div class="lg:col-span-1">
                        <div class="glass-card p-8 h-full reveal-element revealed">
                            <h2 class="text-2xl font-bold mb-6 gradient-text">Sobre el proyecto</h2>

                            <p class="text-zinc-300 mb-8">
                                {{ project.description }}
                            </p>

                            <!-- Enlaces -->
                            <div class="flex flex-col gap-4">
                                <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
                                    class="px-5 py-3 glass hover:bg-indigo-600/20 border border-zinc-800 hover:border-indigo-500/50 rounded-lg text-white flex items-center gap-2 transition-all duration-300 group">
                                    <div
                                        class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-600/30 transition-all duration-300">
                                        <font-awesome-icon v-if="link.icon" :icon="link.icon"
                                            class="text-indigo-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="font-medium">{{ link.label }}</span>
                                        <span class="text-sm text-zinc-500 group-hover:text-zinc-300">Ver código
                                            fuente</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Columna derecha con galería avanzada -->
                    <div class="lg:col-span-2">
                        <div class="glass-card p-6 reveal-element revealed">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-2xl font-bold gradient-text">Galería del proyecto</h2>

                                <!-- Contador y controles -->
                                <div class="flex items-center gap-3">
                                    <div class="px-3 py-1 rounded-full glass text-sm text-zinc-300">
                                        <span class="font-medium text-white">{{ currentIndex + 1 }}</span> / {{
                                        allImages.length }}
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <button @click="prevImage"
                                            class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600/30 transition-colors">
                                            <font-awesome-icon :icon="['fas', 'chevron-left']"
                                                class="text-zinc-400 hover:text-white" />
                                        </button>
                                        <button @click="nextImage"
                                            class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600/30 transition-colors">
                                            <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                class="text-zinc-400 hover:text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Imagen principal con efectos de transición -->
                            <div class="relative overflow-hidden rounded-lg mb-6">
                                <div class="relative h-[400px] md:h-[500px] bg-zinc-900/50 overflow-hidden">
                                    <transition name="fade" mode="out-in">
                                        <img :key="currentImage" :src="currentImage"
                                            :alt="`${project.title} - Imagen ${currentIndex + 1}`"
                                            class="w-full h-full object-contain transition-all duration-300" />
                                    </transition>

                                    <!-- Controles laterales para navegación -->
                                    <div class="absolute inset-y-0 left-0 flex items-center">
                                        <button @click="prevImage"
                                            class="flex items-center justify-center p-2 pl-1 pr-3 bg-black/30 backdrop-blur-sm text-white rounded-r-full hover:bg-black/50 transition-colors duration-300">
                                            <font-awesome-icon :icon="['fas', 'chevron-left']" />
                                        </button>
                                    </div>

                                    <div class="absolute inset-y-0 right-0 flex items-center">
                                        <button @click="nextImage"
                                            class="flex items-center justify-center p-2 pr-1 pl-3 bg-black/30 backdrop-blur-sm text-white rounded-l-full hover:bg-black/50 transition-colors duration-300">
                                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                        </button>
                                    </div>

                                    <!-- Indicador de carga de imagen -->
                                    <div v-if="loading"
                                        class="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                        <div
                                            class="w-16 h-16 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin">
                                        </div>
                                    </div>
                                </div>

                                <!-- Título de la imagen actual con animación -->
                                <div
                                    class="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm">
                                    <transition name="slide-up" mode="out-in">
                                        <p :key="currentImage" class="text-white text-sm md:text-base">
                                            {{ imageTitle(currentIndex) }}
                                        </p>
                                    </transition>
                                </div>
                            </div>

                            <!-- Miniaturas con efecto de carrusel -->
                            <div class="relative">
                                <!-- Controles de navegación para carrusel -->
                                <button v-if="canScrollLeft" @click="scrollThumbnails('left')"
                                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                                </button>

                                <button v-if="canScrollRight" @click="scrollThumbnails('right')"
                                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                </button>

                                <!-- Carrusel de miniaturas -->
                                <div class="overflow-hidden">
                                    <div ref="thumbnailsContainer"
                                        class="flex gap-4 transition-transform duration-300 pb-2 px-2">
                                        <div v-for="(img, index) in allImages" :key="index" @click="setImage(index)"
                                            class="w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300 transform hover:scale-105"
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
            <div v-else class="glass-card p-8 text-center py-20">
                <div v-if="loading" class="text-xl text-zinc-400">
                    <div
                        class="inline-block w-16 h-16 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin mb-4">
                    </div>
                    <div class="animate-pulse mt-4">Cargando proyecto...</div>
                </div>
                <div v-else class="text-xl text-zinc-400">
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
            const scrollAmount = container.clientWidth * 0.7;

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

        onMounted(() => {
            loading.value = false;

            if (project.value) {
                // Precargar la primera imagen
                preloadImage(currentImage.value);

                // Actualizar título de la página
                document.title = `${project.value.title} - Portafolio de Gabriel Saiz`;

                // Configurar listeners
                window.addEventListener('scroll', handleScroll);
                window.addEventListener('keydown', handleKeyDown);

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
</style>