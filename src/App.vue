<template>
  <div class="app-wrapper antialiased">
    <!-- Fondo global con efecto de gradiente y malla -->
    <div class="fixed inset-0 z-[-2] bg-gradient-to-b from-zinc-950 via-zinc-900 to-indigo-950/30"></div>
    <div class="fixed inset-0 z-[-1] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMilcIi8+PC9zdmc+')] opacity-40"></div>
    
    <!-- Efectos de luz decorativos -->
    <div class="fixed top-[10%] right-[15%] w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] z-0"></div>
    <div class="fixed top-[40%] left-[10%] w-72 h-72 rounded-full bg-purple-600/15 blur-[100px] z-0"></div>
    <div class="fixed bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-fuchsia-700/10 blur-[100px] z-0"></div>
    
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

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import CookieConsent from '@/components/ui/CookieConsent.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    BackToTop,
    CookieConsent
  },
  mounted() {
    // Inicializar animaciones
    this.setupScrollRevealAnimations();
    // Añadir clase para animación inicial del body
    document.body.classList.add('loaded');
    
    // Registrar vista inicial para analytics
    if (typeof window !== 'undefined' && window.gtag) {
      this.$track('app_loaded', {
        timestamp: new Date().toISOString(),
        viewport: `${window.innerWidth}x${window.innerHeight}`
      });
    }
  },
  methods: {
    setupScrollRevealAnimations() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Añadir clases para revelar elementos cuando sean visibles
            if (entry.target.classList.contains('reveal-card')) {
              entry.target.classList.add('revealed');
              
              // Registrar visualización de sección para analytics
              const sectionId = entry.target.closest('section')?.id;
              if (sectionId && typeof this.$track === 'function') {
                this.$track('section_view', { section_id: sectionId });
              }
            } else if (entry.target.classList.contains('reveal-element')) {
              entry.target.classList.add('revealed');
            } else if (entry.target.classList.contains('reveal-award')) {
              entry.target.classList.add('revealed');
            } else if (entry.target.classList.contains('fade-in-element')) {
              entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('fade-right')) {
              entry.target.classList.add('animated-right');
            } else if (entry.target.classList.contains('fade-left')) {
              entry.target.classList.add('animated-left');
            }
            
            // Dejar de observar después de animar
            observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observar todos los elementos con clases de animación
      document.querySelectorAll('.reveal-card, .reveal-element, .reveal-award, .fade-in-element, .fade-right, .fade-left').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
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

body {
  font-family: 'Inter', 'Poppins', system-ui, sans-serif;
  background-color: #09090b;
  color: var(--text-primary);
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
}

body.loaded {
  opacity: 1;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Glassmorphism */
.glass {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes borderGlow {
  0%, 100% {
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  }
  50% {
    border-color: rgba(168, 85, 247, 0.5);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
  }
}

/* Utility classes for reusable animations */
.animated-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

.animated-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

.animated-scaleIn {
  animation: scaleIn 0.6s ease forwards;
}

.animated-borderGlow {
  animation: borderGlow 4s infinite;
}

/* Improved glass card styles */
.glass-card {
  @apply glass rounded-xl border border-zinc-800/40 hover:border-indigo-500/30 transition-all duration-300;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Transition styles for components */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Gradient text */
.gradient-text {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500;
}

/* Gradient border utilities */
.gradient-border {
  position: relative;
  z-index: 0;
  border-radius: 0.75rem;
  overflow: hidden;
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.75rem;
  padding: 1px;
  background: var(--primary-gradient);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(24, 24, 27, 0.6);
}

::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.8);
}
</style>