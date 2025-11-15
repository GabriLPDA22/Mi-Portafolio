<template>
  <section id="proyectos" class="projects-section">
    <!-- Background with Parallax Layers -->
    <div class="parallax-bg">
      <div class="bg-layer layer-1" ref="layer1"></div>
      <div class="bg-layer layer-2" ref="layer2"></div>
      <div class="bg-layer layer-3" ref="layer3"></div>
    </div>

    <!-- Elementos decorativos -->
    <div class="decorative-elements">
      <div class="deco-circle deco-1"></div>
      <div class="deco-circle deco-2"></div>
      <div class="deco-square deco-3"></div>
    </div>

    <div class="projects-container">
      <!-- Sticky Header Section -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          <div class="background-text">PROYECTOS</div>
          <h2 class="section-title">
            Casos de <span class="gradient-text">Éxito</span>
          </h2>
          <p class="section-subtitle">
            Proyectos reales en producción que demuestran mi experiencia en
            desarrollo full stack, desde apps mobile hasta plataformas web
            complejas.
          </p>
        </div>
      </div>

      <!-- Projects Grid Desktop / Carousel Mobile -->
      <div class="projects-wrapper">
        <!-- Desktop Grid -->
        <div class="projects-grid desktop-only" ref="projectsGrid">
          <div class="project-card" ref="card1">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-image gradient-bg">
                <div class="project-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="card-overlay"></div>
              </div>
              <div class="card-info">
                <div class="card-badges">
                  <span class="badge badge-featured">TFG</span>
                  <span class="badge badge-fullstack">Full Stack</span>
                </div>
                <h3 class="card-title">ELIXIUM FOODS Delivery</h3>
                <p class="card-description">
                  Plataforma completa de entrega de comida estilo UberEats
                  desarrollada como TFG. Sistema de pedidos en tiempo real,
                  panel de administración y arquitectura cloud-native.
                </p>
                <div class="card-tech">
                  <span class="tech-tag">.NET 9</span>
                  <span class="tech-tag">Vue.js 3</span>
                  <span class="tech-tag">PostgreSQL</span>
                  <span class="tech-tag">AWS</span>
                </div>
                <div class="card-result">
                  <svg
                    class="result-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span
                    >Arquitectura profesional cloud-native con deploy en
                    AWS</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="project-card" ref="card2" @click="openHuvegrym">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-image">
                <img
                  src="/img/huvegrym_preview.png"
                  alt="Huvegrym"
                  loading="lazy"
                />
                <div class="card-overlay"></div>
              </div>
              <div class="card-info">
                <div class="card-badges">
                  <span class="badge badge-production">En Producción ⭐</span>
                  <span class="badge badge-web">Cliente Real</span>
                </div>
                <h3 class="card-title">Huvegrym - Danza Contemporánea</h3>
                <p class="card-description">
                  Portfolio digital profesional para grupo de danza. Galería de
                  espectáculos, sistema de contacto directo y diseño
                  completamente responsive.
                </p>
                <div class="card-tech">
                  <span class="tech-tag">HTML5</span>
                  <span class="tech-tag">CSS3</span>
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">Bootstrap</span>
                </div>
                <div class="card-result">
                  <svg
                    class="result-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span>Sitio live en huvegrym.es - Cliente satisfecho</span>
                </div>
                <div class="card-link-hint">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Visitar sitio web</span>
                </div>
              </div>
            </div>
          </div>

          <div class="project-card" ref="card3" @click="openMVPApp">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-image gradient-bg upcoming-bg">
                <div class="project-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="card-overlay"></div>
              </div>
              <div class="card-info">
                <div class="card-badges">
                  <span class="badge badge-upcoming"
                    >v1.1.3 - En Desarrollo</span
                  >
                  <span class="badge badge-fullstack">Full Stack MVP</span>
                </div>
                <h3 class="card-title">MVP Profesional Multiplatform</h3>
                <p class="card-description">
                  Desarrollo actual de un MVP completo con aplicación web
                  Vue.js, mobile iOS con React Native y arquitectura cloud.
                  Sistema completo con backend .NET y AWS.
                </p>
                <div class="card-tech">
                  <span class="tech-tag">Vue.js 3</span>
                  <span class="tech-tag">React Native</span>
                  <span class="tech-tag">.NET</span>
                  <span class="tech-tag">PostgreSQL</span>
                  <span class="tech-tag">AWS S3</span>
                </div>
                <div class="card-result">
                  <svg
                    class="result-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span
                    >Primer gran proyecto freelance - Lanzamiento ~3 meses</span
                  >
                </div>
                <div class="card-link-hint">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Ver en App Store (Beta)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Carousel -->
        <div class="carousel-container mobile-only">
          <div
            class="carousel-track"
            ref="carouselTrack"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @mousedown="handleMouseDown"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseUp"
            @mouseleave="handleMouseUp"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="carousel-slide">
              <div class="project-card mobile-card">
                <div class="card-glow"></div>
                <div class="card-content">
                  <div class="card-image gradient-bg">
                    <div class="project-icon">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="card-overlay"></div>
                  </div>
                  <div class="card-info">
                    <div class="card-badges">
                      <span class="badge badge-featured">TFG</span>
                      <span class="badge badge-fullstack">Full Stack</span>
                    </div>
                    <h3 class="card-title">ELIXIUM FOODS Delivery</h3>
                    <p class="card-description">
                      Plataforma completa de entrega de comida estilo UberEats.
                      Sistema de pedidos en tiempo real y arquitectura cloud.
                    </p>
                    <div class="card-tech">
                      <span class="tech-tag">.NET 9</span>
                      <span class="tech-tag">Vue.js 3</span>
                      <span class="tech-tag">PostgreSQL</span>
                      <span class="tech-tag">AWS</span>
                    </div>
                    <div class="card-result">
                      <svg
                        class="result-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Cloud-native con deploy en AWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-slide">
              <div class="project-card mobile-card" @click="openHuvegrym">
                <div class="card-glow"></div>
                <div class="card-content">
                  <div class="card-image">
                    <img
                      src="/img/huvegrym_preview.png"
                      alt="Huvegrym"
                      loading="lazy"
                    />
                    <div class="card-overlay"></div>
                  </div>
                  <div class="card-info">
                    <div class="card-badges">
                      <span class="badge badge-production"
                        >En Producción ⭐</span
                      >
                      <span class="badge badge-web">Cliente Real</span>
                    </div>
                    <h3 class="card-title">Huvegrym - Danza</h3>
                    <p class="card-description">
                      Portfolio digital profesional para grupo de danza. Galería
                      de espectáculos y diseño responsive.
                    </p>
                    <div class="card-tech">
                      <span class="tech-tag">HTML5</span>
                      <span class="tech-tag">CSS3</span>
                      <span class="tech-tag">JavaScript</span>
                      <span class="tech-tag">Bootstrap</span>
                    </div>
                    <div class="card-result">
                      <svg
                        class="result-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span>Live en huvegrym.es</span>
                    </div>
                    <div class="card-link-hint">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Visitar sitio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="carousel-slide">
              <div class="project-card mobile-card" @click="openMVPApp">
                <div class="card-glow"></div>
                <div class="card-content">
                  <div class="card-image gradient-bg upcoming-bg">
                    <div class="project-icon">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="card-overlay"></div>
                  </div>
                  <div class="card-info">
                    <div class="card-badges">
                      <span class="badge badge-upcoming"
                        >v1.1.3 - En Desarrollo</span
                      >
                      <span class="badge badge-fullstack">Full Stack MVP</span>
                    </div>
                    <h3 class="card-title">MVP Multiplatform</h3>
                    <p class="card-description">
                      MVP completo con Vue.js, React Native iOS y arquitectura
                      cloud. Backend .NET y AWS.
                    </p>
                    <div class="card-tech">
                      <span class="tech-tag">Vue.js 3</span>
                      <span class="tech-tag">React Native</span>
                      <span class="tech-tag">.NET</span>
                      <span class="tech-tag">PostgreSQL</span>
                    </div>
                    <div class="card-result">
                      <svg
                        class="result-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Lanzamiento ~3 meses</span>
                    </div>
                    <div class="card-link-hint">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span>App Store (Beta)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dots Indicators - MÁS VISIBLES -->
          <div class="carousel-dots">
            <button
              v-for="(dot, index) in 3"
              :key="index"
              class="carousel-dot"
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
              :aria-label="`Ir a proyecto ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      isScrolled: false,
      currentSlide: 0,
      touchStartX: 0,
      touchEndX: 0,
      isDragging: false,
      startX: 0,
      currentX: 0,
    };
  },
  mounted() {
    this.initParallax();
    this.initScrollAnimations();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Parallax
    initParallax() {
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      const scrollY = window.scrollY;
      if (this.$refs.layer1)
        this.$refs.layer1.style.transform = `translateY(${scrollY * 0.1}px)`;
      if (this.$refs.layer2)
        this.$refs.layer2.style.transform = `translateY(${scrollY * 0.2}px)`;
      if (this.$refs.layer3)
        this.$refs.layer3.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (this.$refs.stickyHeader) {
        const headerTop = this.$refs.stickyHeader.getBoundingClientRect().top;
        this.isScrolled = headerTop <= 100;
      }
      this.animateCardsOnScroll();
    },
    animateCardsOnScroll() {
      const cards = [this.$refs.card1, this.$refs.card2, this.$refs.card3];
      cards.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = 1 - rect.top / windowHeight;
        if (progress > 0 && progress < 1.5) {
          const opacity = Math.min(progress * 2, 1);
          const scale = 0.9 + Math.min(progress, 1) * 0.1;
          const translateY = (1 - Math.min(progress, 1)) * 50;
          card.style.opacity = opacity;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        } else if (progress >= 1.5) {
          const fadeOut = Math.max(0, 2 - progress);
          card.style.opacity = fadeOut;
        }
      });
    },
    initScrollAnimations() {
      setTimeout(() => this.animateCardsOnScroll(), 100);
    },

    // Carousel Navigation
    goToSlide(index) {
      this.currentSlide = index;
    },

    // Touch Gestures - SWIPE
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
    },
    handleTouchEnd() {
      const diff = this.touchStartX - this.touchEndX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && this.currentSlide < 2) {
          // Swipe left - next
          this.currentSlide++;
        } else if (diff < 0 && this.currentSlide > 0) {
          // Swipe right - prev
          this.currentSlide--;
        }
      }

      this.touchStartX = 0;
      this.touchEndX = 0;
    },

    // Mouse Drag
    handleMouseDown(e) {
      this.isDragging = true;
      this.startX = e.clientX;
      e.preventDefault();
    },
    handleMouseMove(e) {
      if (!this.isDragging) return;
      this.currentX = e.clientX;
    },
    handleMouseUp() {
      if (!this.isDragging) return;

      const diff = this.startX - this.currentX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && this.currentSlide < 2) {
          // Drag left - next
          this.currentSlide++;
        } else if (diff < 0 && this.currentSlide > 0) {
          // Drag right - prev
          this.currentSlide--;
        }
      }

      this.isDragging = false;
      this.startX = 0;
      this.currentX = 0;
    },

    // Links
    openHuvegrym() {
      window.open("https://huvegrym.es", "_blank");
    },
    openMVPApp() {
      window.open("https://apps.apple.com/app/id6753820007", "_blank");
    },
  },
};
</script>

<style scoped>
/* Base styles... keeping all the existing base, parallax, decorative styles */
.projects-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: #0a0a0b;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-layer {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
  will-change: transform;
}

.layer-1 {
  top: 10%;
  left: 10%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
}

.layer-2 {
  top: 60%;
  right: 5%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ec4899, #06b6d4);
}

.layer-3 {
  bottom: 10%;
  left: 40%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #a855f7, #ff6b35);
}

.decorative-elements {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle,
.deco-square {
  position: absolute;
  opacity: 0.3;
  border: 2px solid;
  animation: float-slow 10s ease-in-out infinite;
}

.deco-circle {
  border-radius: 50%;
}

.deco-1 {
  top: 20%;
  right: 10%;
  width: 70px;
  height: 70px;
  border-color: #ff6b35;
}

.deco-2 {
  bottom: 30%;
  left: 8%;
  width: 50px;
  height: 50px;
  border-color: #a855f7;
  animation-delay: -3s;
}

.deco-square {
  top: 50%;
  right: 15%;
  width: 60px;
  height: 60px;
  border-color: #06b6d4;
  border-radius: 0.5rem;
  transform: rotate(45deg);
  animation-delay: -6s;
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(10px);
  }
  50% {
    transform: translateY(-5px) translateX(-10px);
  }
  75% {
    transform: translateY(-20px) translateX(5px);
  }
}

.projects-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.sticky-header {
  position: sticky;
  top: 100px;
  z-index: 20;
  margin-bottom: 4rem;
  padding: 2rem 0;
  transition: all 0.6s ease;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  transition: all 0.6s ease;
}

.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(6rem, 12vw, 10rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  letter-spacing: 0.1em;
}

.header-content.is-scrolled {
  transform: scale(0.95);
  opacity: 0.8;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #ff6b35 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  max-width: 600px;
}

/* Desktop / Mobile Toggle */
.desktop-only {
  display: grid;
}

.mobile-only {
  display: none;
}

@media (max-width: 767px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
  .decorative-elements {
    display: none;
  }
}

/* Desktop Grid */
.projects-grid {
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

/* CAROUSEL MOBILE - SOLO SWIPE + DOTS 🐱 */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 4rem;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: grab;
  touch-action: pan-y;
}

.carousel-track:active {
  cursor: grabbing;
}

.carousel-slide {
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* Carousel Dots - GRANDES Y VISIBLES */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 2.5rem;
  padding: 1rem 0;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.carousel-dot.active {
  background: #ff6b35;
  width: 32px;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(255, 107, 53, 0.5);
}

/* Project Cards */
.project-card {
  position: relative;
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.mobile-card {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.project-card:hover {
  transform: scale(1.02) translateY(-8px) !important;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  border-radius: 1.5rem;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.3s ease;
  z-index: 0;
}

.project-card:hover .card-glow {
  opacity: 0.6;
}

.card-content {
  position: relative;
  z-index: 1;
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.project-card:hover .card-content {
  background: rgba(39, 39, 42, 0.95);
  border-color: rgba(255, 107, 53, 0.4);
}

.card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-image.gradient-bg {
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.2),
    rgba(168, 85, 247, 0.2)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image.upcoming-bg {
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.2),
    rgba(236, 72, 153, 0.2)
  );
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.project-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.project-icon svg {
  width: 35px;
  height: 35px;
  color: #ff6b35;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  opacity: 0.5;
}

.card-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex: 1;
}

.card-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  padding: 0.25rem 0.625rem;
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.badge-featured {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  color: #ffffff;
}

.badge-production {
  background: rgba(34, 197, 94, 0.2);
  color: rgb(34, 197, 94);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge-fullstack {
  background: rgba(168, 85, 247, 0.2);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.badge-web {
  background: rgba(6, 182, 212, 0.2);
  color: #06b6d4;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

.badge-upcoming {
  background: rgba(251, 146, 60, 0.2);
  color: rgb(251, 146, 60);
  border: 1px solid rgba(251, 146, 60, 0.3);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.card-description {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  flex: 1;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.25rem 0.625rem;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  color: rgba(255, 255, 255, 0.8);
}

.card-result {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 107, 53, 0.05);
  border-left: 3px solid #ff6b35;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
}

.result-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: #ff6b35;
  margin-top: 2px;
}

.card-link-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #06b6d4;
}

.card-link-hint svg {
  width: 14px;
  height: 14px;
}

/* Responsive ajustes */
@media (max-width: 767px) {
  .projects-section {
    padding: 4rem 0 2rem;
  }
  .sticky-header {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
  }
}
</style>
