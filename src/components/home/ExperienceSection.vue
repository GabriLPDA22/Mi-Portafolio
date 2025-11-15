<template>
  <section id="experiencia" class="experience-section">
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

    <div class="experience-container">
      <!-- Sticky Header -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          <!-- Texto gigante de fondo -->
          <div class="background-text">EXPERIENCIA</div>

          <h2 class="section-title">
            Mi <span class="gradient-text">Trayectoria</span>
          </h2>
          <p class="section-subtitle">
            Desde formación dual hasta freelance profesional, construyendo
            productos digitales de calidad.
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline">
        <!-- Línea vertical -->
        <div class="timeline-line"></div>

        <!-- 1. Freelance ACTUAL -->
        <div class="timeline-item" ref="item1">
          <div class="timeline-dot active">
            <div class="dot-pulse"></div>
          </div>

          <div class="timeline-content">
            <div class="timeline-date">
              <span class="date-badge active">Jun 2025 - Actualidad</span>
              <span class="status-badge">Freelance Activo 🚀</span>
            </div>

            <div class="experience-card featured">
              <div class="card-glow"></div>

              <h3 class="card-title">Desarrollador Full Stack Freelance</h3>
              <p class="card-company">Trabajo Autónomo</p>

              <p class="card-description">
                Desarrollo de soluciones web y mobile completas para clientes.
                Especializado en arquitecturas modernas con Vue.js, React
                Native, .NET y AWS.
              </p>

              <div class="card-achievements">
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                  <span>Primer MVP completo (Web + iOS + Backend + AWS)</span>
                </div>
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                    >Portfolio web para cliente (Huvegrym - En producción)</span
                  >
                </div>
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                    >Gestión completa de proyectos desde diseño hasta
                    deploy</span
                  >
                </div>
              </div>

              <div class="card-tech">
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">React Native</span>
                <span class="tech-badge">.NET</span>
                <span class="tech-badge">PostgreSQL</span>
                <span class="tech-badge">AWS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. GOLIVE Services -->
        <div class="timeline-item" ref="item2">
          <div class="timeline-dot completed"></div>

          <div class="timeline-content">
            <div class="timeline-date">
              <span class="date-badge">Sep 2024 - Jun 2025</span>
              <span class="status-badge completed">Completado ✓</span>
            </div>

            <div class="experience-card">
              <div class="card-glow"></div>

              <h3 class="card-title">Desarrollador Full Stack</h3>
              <p class="card-company">GOLIVE Services - Formación Dual</p>

              <p class="card-description">
                Formación dual en consultora tecnológica especializada en
                desarrollo web y mobile. Participación en proyectos reales con
                clientes de diversos sectores.
              </p>

              <div class="card-achievements">
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                    >Desarrollo de soluciones personalizadas para clientes</span
                  >
                </div>
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                    >Implementación de funcionalidades con tecnologías
                    modernas</span
                  >
                </div>
                <div class="achievement-item">
                  <svg
                    class="achievement-icon"
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
                  <span>Optimización del rendimiento de plataformas</span>
                </div>
              </div>

              <div class="card-tech">
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">Symfony</span>
                <span class="tech-badge">PostgreSQL</span>
              </div>

              <div class="card-links">
                <a
                  href="https://www.onegolive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                >
                  <span>Visitar sitio web</span>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="/documents/carta-recomendacion-golive.pdf"
                  download="Carta-Recomendacion-Gabriel-Saiz-GOLIVE.pdf"
                  class="card-link primary"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Descargar Carta de Recomendación</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",

  data() {
    return {
      isScrolled: false,
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
    initParallax() {
      window.addEventListener("scroll", this.handleScroll);
    },

    handleScroll() {
      const scrollY = window.scrollY;

      if (this.$refs.layer1) {
        this.$refs.layer1.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (this.$refs.layer2) {
        this.$refs.layer2.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (this.$refs.layer3) {
        this.$refs.layer3.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      if (this.$refs.stickyHeader) {
        const headerTop = this.$refs.stickyHeader.getBoundingClientRect().top;
        this.isScrolled = headerTop <= 100;
      }

      this.animateTimelineOnScroll();
    },

    animateTimelineOnScroll() {
      const items = [this.$refs.item1, this.$refs.item2];

      items.forEach((item) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - rect.top / windowHeight;

        if (progress > 0 && progress < 1.2) {
          const opacity = Math.min(progress * 2, 1);
          const translateY = (1 - Math.min(progress, 1)) * 30;

          item.style.opacity = opacity;
          item.style.transform = `translateY(${translateY}px)`;
        }
      });
    },

    initScrollAnimations() {
      setTimeout(() => {
        this.animateTimelineOnScroll();
      }, 100);
    },
  },
};
</script>

<style scoped>
/* ================================
   BASE
   ================================ */
.experience-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: #0a0a0b;
  overflow: hidden;
}

/* Parallax Background */
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
  top: 5%;
  right: 15%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
}

.layer-2 {
  top: 50%;
  left: 5%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ec4899, #06b6d4);
}

.layer-3 {
  bottom: 10%;
  right: 25%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #a855f7, #ff6b35);
}

/* Decorative Elements */
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
  top: 18%;
  left: 12%;
  width: 65px;
  height: 65px;
  border-color: #ff6b35;
}

.deco-2 {
  bottom: 22%;
  right: 8%;
  width: 55px;
  height: 55px;
  border-color: #ec4899;
  animation-delay: -5s;
}

.deco-square {
  top: 55%;
  right: 18%;
  width: 60px;
  height: 60px;
  border-color: #a855f7;
  border-radius: 0.5rem;
  transform: rotate(45deg);
  animation-delay: -8s;
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

@media (max-width: 1023px) {
  .decorative-elements {
    display: none;
  }
}

/* ================================
   CONTAINER
   ================================ */
.experience-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ================================
   STICKY HEADER
   ================================ */
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

/* ================================
   TIMELINE - TODO A LA DERECHA
   ================================ */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(255, 107, 53, 0.5) 0%,
    rgba(168, 85, 247, 0.5) 50%,
    transparent 100%
  );
}

/* ================================
   TIMELINE ITEM
   ================================ */
.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: 20px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.timeline-dot.active {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  border: 3px solid #0a0a0b;
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.3);
}

.timeline-dot.completed {
  background: rgba(34, 197, 94, 0.9);
  border: 3px solid #0a0a0b;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
}

.dot-pulse {
  position: absolute;
  inset: -8px;
  border: 2px solid #ff6b35;
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* ================================
   TIMELINE CONTENT
   ================================ */
.timeline-content {
  padding-left: 60px;
}

.timeline-date {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.date-badge {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.8);
}

.date-badge.active {
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.2),
    rgba(236, 72, 153, 0.2)
  );
  border-color: rgba(255, 107, 53, 0.4);
  color: #ff6b35;
}

.status-badge {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
}

.status-badge:not(.completed) {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.status-badge.completed {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: rgb(34, 197, 94);
}

/* ================================
   EXPERIENCE CARD
   ================================ */
.experience-card {
  position: relative;
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.experience-card.featured {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(39, 39, 42, 0.95);
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 12px 30px rgba(255, 107, 53, 0.2);
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  border-radius: 1.5rem;
  opacity: 0;
  filter: blur(15px);
  transition: opacity 0.3s ease;
  z-index: 0;
  pointer-events: none;
}

.experience-card:hover .card-glow {
  opacity: 0.4;
}

.card-title {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.card-company {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #ff6b35;
  margin: 0 0 1rem;
}

.card-description {
  position: relative;
  z-index: 1;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1.5rem;
}

.card-achievements {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
}

.achievement-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #ff6b35;
  margin-top: 2px;
}

.card-tech {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.card-links {
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.card-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-link svg {
  width: 16px;
  height: 16px;
}

.card-link:not(.primary) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}

.card-link:not(.primary):hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ff6b35;
  transform: translateX(4px);
}

.card-link.primary {
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.card-link.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.5);
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 767px) {
  .experience-section {
    padding: 4rem 0 2rem;
  }

  .sticky-header {
    position: relative;
    top: 0;
  }

  .timeline-item {
    margin-bottom: 3rem;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-links {
    flex-direction: column;
  }

  .card-link {
    justify-content: center;
  }
}
</style>
