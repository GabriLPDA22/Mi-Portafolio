<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="{ 'py-3 bg-black/30 backdrop-blur-lg border-b border-white/5 shadow-lg': scrolled, 'py-5': !scrolled }">
    <div class="container mx-auto px-4 md:px-6">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a @click.prevent="scrollToSection('inicio')" href="#inicio" class="flex items-center group cursor-pointer">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
              <span class="text-xl font-bold text-white">GS</span>
            </div>
            <span class="ml-2 text-white font-semibold text-xl relative overflow-hidden">
              <span class="block transition-transform duration-300 group-hover:-translate-y-full">Gabriel</span>
              <span
                class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-indigo-400">Saiz</span>
            </span>
          </a>
        </div>

        <!-- Links de navegación - Versión escritorio -->
        <div class="hidden md:flex items-center space-x-1">
          <div class="rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/5 px-2 py-1">
            <nav class="flex space-x-1">
              <a v-for="item in navigationItems" :key="item.label" :href="'#' + item.section"
                @click.prevent="scrollToSection(item.section)"
                class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-indigo-500/20 hover:text-white cursor-pointer"
                :class="{
                  'text-white bg-indigo-500/20 border-indigo-500/30': activeSection === item.section,
                  'text-zinc-400': activeSection !== item.section
                }">
                {{ item.label }}
              </a>
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
        <button @click="toggleMobileMenu" class="block md:hidden text-white p-2 rounded-lg hover:bg-zinc-800/50">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
          <a v-for="item in navigationItems" :key="item.label" :href="'#' + item.section"
            @click.prevent="scrollToSection(item.section); closeMobileMenu()"
            class="text-center py-4 text-lg font-medium text-white border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
            :class="{ 'text-indigo-400': activeSection === item.section }">
            {{ item.label }}
          </a>

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
      lastScrollPosition: 0,
      navigationItems: [
        { label: 'Inicio', section: 'inicio' },
        { label: 'Proyectos', section: 'proyectos' },
        { label: 'Habilidades', section: 'skills' },
        { label: 'Reconocimientos', section: 'reconocimientos' },
        { label: 'Experiencia', section: 'experiencia' },
        { label: 'Hackathones', section: 'hackathones' },
        { label: 'Educación', section: 'estudios' }
      ]
    }
  },
  watch: {
    isMobileMenuOpen(isOpen) {
      if (isOpen) {
        // Guardar la posición actual de scroll
        this.lastScrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${this.lastScrollPosition}px`;
      } else {
        // Restaurar la posición de scroll anterior
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        if (this.lastScrollPosition > 0) {
          window.scrollTo(0, this.lastScrollPosition);
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeydown);
    this.setupIntersectionObserver();

    // Verificar la URL inicial
    const hash = window.location.hash.substring(1);
    if (hash) {
      this.activeSection = hash;
      this.$nextTick(() => {
        this.scrollToSection(hash, false);
      });
    } else {
      this.activeSection = 'inicio';
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
    handleResize() {
      if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    scrollToSection(sectionId, smooth = true) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Si estamos en la misma sección, no hacer nada
        if (this.activeSection === sectionId && !this.isMobileMenuOpen) {
          return;
        }

        // Añadir un pequeño retraso para el cierre del menú móvil
        setTimeout(() => {
          const headerHeight = this.$el.offsetHeight;
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

          // Calcular posición con ajuste para el header
          const offsetPosition = sectionPosition - headerHeight;

          // Scroll suave a la sección
          window.scrollTo({
            top: offsetPosition,
            behavior: smooth ? 'smooth' : 'auto'
          });

          // Actualizar URL sin recargar
          if (history.pushState) {
            history.pushState(null, null, `#${sectionId}`);
          } else {
            location.hash = `#${sectionId}`;
          }

          // Actualizar sección activa
          this.activeSection = sectionId;
        }, this.isMobileMenuOpen ? 300 : 0);
      }
    },
    setupIntersectionObserver() {
      const sections = document.querySelectorAll('section[id]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;

              // Actualizar URL silenciosamente si estamos haciendo scroll natural
              if (history.replaceState) {
                history.replaceState(null, null, `#${entry.target.id}`);
              }
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: `-${this.$el ? this.$el.offsetHeight : 80}px 0px 0px 0px`
        }
      );

      sections.forEach(section => {
        observer.observe(section);
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
}

.mobile-menu-container>div:last-child {
  overflow-y: auto !important;
  flex: 1 !important;
}
</style>