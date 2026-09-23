<template>
  <div class="app-wrapper antialiased">
    <!-- Fondo global con efecto de gradiente y malla -->
    <div class="fixed inset-0 z-[-2] bg-gradient-to-b from-zinc-950 via-zinc-900 to-indigo-950/30"></div>
    <div class="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMilcIi8+PC9zdmc+')] opacity-40"></div>
    
    <!-- Efectos de luz decorativos que se cargan de forma perezosa -->
    <div class="fixed top-[10%] right-[15%] w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] z-0 bg-blur-element will-change-opacity"></div>
    <div class="fixed top-[40%] left-[10%] w-72 h-72 rounded-full bg-purple-600/15 blur-[100px] z-0 bg-blur-element will-change-opacity"></div>
    <div class="fixed bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-fuchsia-700/10 blur-[100px] z-0 bg-blur-element will-change-opacity"></div>
    
    <TheHeader />
    
    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <TheFooter />
    <BackToTop />
    <CookieConsent />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

// Importar componentes con lazy loading para mejorar el rendimiento inicial
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
// Componentes de UI cargados de forma diferida
import { defineAsyncComponent } from 'vue';
const BackToTop = defineAsyncComponent(() => import('@/components/ui/BackToTop.vue'));
const CookieConsent = defineAsyncComponent(() => import('@/components/ui/CookieConsent.vue'));

const route = useRoute();

// Inicializar el observador de intersección para animaciones
const { observeAll } = useIntersectionObserver();

// Configuración para mejorar el rendimiento
onMounted(async () => {
  // Optimización para carga inicial
  document.body.classList.add('loaded');
  
  // Aplicar optimizaciones para efectos visuales después de que se renderice el componente
  await nextTick();
  
  // Activar observadores para animaciones al scroll
  observeAll();
  
  // Registrar vista inicial para analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'app_loaded', {
      'timestamp': new Date().toISOString(),
      'viewport': `${window.innerWidth}x${window.innerHeight}`,
      'path': route.path,
      'referrer': document.referrer || 'direct'
    });
  }
  
  // Cargar elementos de fondo con delay para mejorar LCP
  setTimeout(() => {
    document.querySelectorAll('.bg-blur-element').forEach(el => {
      el.style.opacity = '1';
    });
  }, 300);
  
  // Precargar imágenes importantes para mejorar FCP/LCP
  preloadCriticalImages();
});

// Función para precargar imágenes críticas
const preloadCriticalImages = () => {
  // Lista de imágenes críticas que quieres precargar
  const criticalImages = [
    '/img/Yo.webp', // Tu imagen principal de Hero
    // Otras imágenes críticas para el primer viewport
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
</script>

<style>
/* Base styles */
:root {
  --primary-gradient: linear-gradient(90deg, rgba(99, 102, 241, 1) 0%, rgba(168, 85, 247, 1) 100%);
  --secondary-gradient: linear-gradient(90deg, rgba(236, 72, 153, 1) 0%, rgba(168, 85, 247, 1) 100%);
  --bg-card: rgba(24, 24, 27, 0.6);
  --border-card: rgba(63, 63, 70, 0.4);
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.6);
  
  /* Valor de desenfoque para glassmorphism */
  --blur-strength: 12px;
}

/* Estilos de animación optimizados */
.bg-blur-element {
  will-change: opacity;
}

/* Glassmorphism optimizado para rendimiento */
.glass {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
}

/* Animaciones optimizadas con will-change */
.reveal-card, .reveal-element, .reveal-award,
.fade-in-element, .fade-right, .fade-left {
  will-change: opacity, transform;
}

.reveal-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-card.revealed {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-element {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.fade-in-element.visible {
  opacity: 1;
}

.fade-right {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-right.animated-right {
  opacity: 1;
  transform: translateX(0);
}

.fade-left {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-left.animated-left {
  opacity: 1;
  transform: translateX(0);
}

/* Transiciones de página optimizadas */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  will-change: opacity, transform;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Optimización para accesibilidad */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>