<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="{ 'py-3 bg-black/30 backdrop-blur-lg border-b border-white/5 shadow-lg': scrolled, 'py-5': !scrolled }">
    <div class="container mx-auto px-4 md:px-6">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a @click.prevent="scrollToSection('inicio')" href="#inicio" class="flex items-center group cursor-pointer">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg shadow-orange-500/20">
              <span class="text-xl font-bold text-white">GS</span>
            </div>
            <span class="ml-3 flex flex-col">
              <span class="text-white font-semibold text-base">Gabriel</span>
              <span class="text-xs text-emerald-400 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Disponible para proyectos
              </span>
            </span>
          </a>
        </div>

        <!-- Links de navegación - Versión escritorio -->
        <div class="hidden md:flex items-center space-x-1">
          <div class="rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/5 px-2 py-1">
            <nav class="flex space-x-1">
              <a v-for="item in navigationItems" :key="item.label" :href="'#' + item.section"
                @click.prevent="scrollToSection(item.section)"
                class="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-orange-500/20 hover:text-white cursor-pointer"
                :class="{
                  'text-white bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30': activeSection === item.section,
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
            class="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer group">
            <span
              class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#a855f7_50%,#f97316_100%)]"></span>
            <span
              class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-zinc-900 transition-colors">
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
            :class="{ 'text-orange-400': activeSection === item.section }">
            {{ item.label }}
          </a>

          <!-- Contacto móvil -->
          <a href="mailto:tu@email.com"
            class="mt-4 text-center py-4 text-lg font-medium text-orange-400 border border-orange-500/30 rounded-xl bg-orange-500/10 cursor-pointer">
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
      // ✅ LINKS ACTUALIZADOS - Solo secciones que existen
      navigationItems: [
        { label: 'Inicio', section: 'inicio' },
        { label: 'Proyectos', section: 'proyectos' },
        { label: 'Skills', section: 'skills' },
        { label: 'Experiencia', section: 'experiencia' },
        { label: 'Sobre mí', section: 'sobre-mi' }
      ]
    }
  },
  watch: {
    isMobileMenuOpen(isOpen) {
      if (isOpen) {
        this.lastScrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${this.lastScrollPosition}px`;
      } else {
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
        if (this.activeSection === sectionId && !this.isMobileMenuOpen) {
          return;
        }

        setTimeout(() => {
          const headerHeight = this.$el.offsetHeight;
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = sectionPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: smooth ? 'smooth' : 'auto'
          });

          if (history.pushState) {
            history.pushState(null, null, `#${sectionId}`);
          } else {
            location.hash = `#${sectionId}`;
          }

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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

button {
  -webkit-tap-highlight-color: transparent;
}

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