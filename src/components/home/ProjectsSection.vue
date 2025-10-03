<template>
  <section id="proyectos" class="projects-section">
    <!-- Background with Parallax Layers -->
    <div class="parallax-bg">
      <div class="bg-layer layer-1" ref="layer1"></div>
      <div class="bg-layer layer-2" ref="layer2"></div>
      <div class="bg-layer layer-3" ref="layer3"></div>
    </div>

    <!-- Elementos decorativos en los márgenes -->
    <div class="decorative-elements">
      <div class="deco-circle deco-1"></div>
      <div class="deco-circle deco-2"></div>
      <div class="deco-square deco-3"></div>
    </div>

    <div class="projects-container">
      
      <!-- Sticky Header Section -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          
          <!-- Texto gigante de fondo -->
          <div class="background-text">PROYECTOS</div>
          
          <h2 class="section-title">
            Mis <span class="gradient-text">Proyectos</span>
          </h2>
          <p class="section-subtitle">
            Aplicaciones reales que demuestran mi experiencia en desarrollo full stack, desde apps mobile hasta plataformas web complejas.
          </p>
        </div>
      </div>

      <!-- Projects Grid - 3 proyectos -->
      <div class="projects-grid" ref="projectsGrid">
        
        <!-- Project Card 1: ELIXIUM FOODS -->
        <div 
          class="project-card project-card-no-link" 
          ref="card1"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            
            <div class="card-image card-image-gradient">
              <div class="project-logo">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="card-overlay"></div>
            </div>
            
            <div class="card-info">
              <div class="card-badges">
                <span class="badge badge-featured">Proyecto Destacado</span>
                <span class="badge badge-fullstack">Full Stack</span>
              </div>
              
              <h3 class="card-title">ELIXIUM FOODS Delivery</h3>
              <p class="card-description">
                Plataforma completa de entrega de comida estilo UberEats. Sistema de pedidos en tiempo real, panel de administración y gestión de restaurantes.
              </p>
              
              <div class="card-tech">
                <span class="tech-tag">.NET 9</span>
                <span class="tech-tag">Vue.js 3</span>
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">AWS</span>
              </div>
              
              <div class="card-result">
                <svg class="result-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Arquitectura profesional cloud-native con deploy en AWS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 2: Huvegrym - CASO DE ÉXITO -->
        <div 
          class="project-card" 
          ref="card2"
          @click="openHuvegrym"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            
            <div class="card-image">
              <img src="/img/huvegrym_preview.png" alt="Huvegrym" />
              <div class="card-overlay"></div>
            </div>
            
            <div class="card-info">
              <div class="card-badges">
                <span class="badge badge-production">Caso de Éxito ⭐</span>
                <span class="badge badge-web">Cliente Real</span>
              </div>
              
              <h3 class="card-title">Huvegrym - Danza Contemporánea</h3>
              <p class="card-description">
                Portfolio digital profesional para grupo de danza. Galería de espectáculos, sistema de contacto directo y diseño completamente responsive.
              </p>
              
              <div class="card-tech">
                <span class="tech-tag">HTML5</span>
                <span class="tech-tag">CSS3</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Bootstrap</span>
              </div>
              
              <div class="card-result">
                <svg class="result-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>Sitio live en huvegrym.es - Cliente satisfecho y en producción</span>
              </div>
              
              <div class="card-link-hint">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span>Visitar sitio web</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 3: MVP en Desarrollo -->
        <div 
          class="project-card project-card-upcoming" 
          ref="card3"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            
            <div class="card-image card-image-blur">
              <div class="upcoming-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="card-overlay"></div>
            </div>
            
            <div class="card-info">
              <div class="card-badges">
                <span class="badge badge-upcoming">En Desarrollo</span>
                <span class="badge badge-fullstack">Full Stack MVP</span>
              </div>
              
              <h3 class="card-title">MVP Profesional Multiplatform</h3>
              <p class="card-description">
                Desarrollo actual de un MVP completo con aplicación web, mobile iOS y arquitectura cloud. Sistema completo con backend escalable y almacenamiento en la nube.
              </p>
              
              <div class="card-tech">
                <span class="tech-tag">Vue.js 3</span>
                <span class="tech-tag">React Native</span>
                <span class="tech-tag">.NET API</span>
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">AWS S3</span>
              </div>
              
              <div class="card-result">
                <svg class="result-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>Stack profesional con arquitectura cloud-native y apps nativas</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA Final -->
      <div class="projects-cta" ref="ctaSection">
        <h3 class="cta-title">¿Tienes un proyecto en mente?</h3>
        <p class="cta-description">Puedo ayudarte a construir tu próxima aplicación web o mobile</p>
        <div class="cta-buttons">
          <a href="mailto:gsaiz.bajo@gmail.com" class="cta-button cta-primary">
            <span>Hablemos de tu idea</span>
            <svg class="cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="https://github.com/GabriLPDA22" target="_blank" class="cta-button cta-secondary">
            <svg class="cta-icon-left" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Ver en GitHub</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  
  data() {
    return {
      isScrolled: false,
    }
  },

  mounted() {
    this.initParallax();
    this.initScrollAnimations();
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    initParallax() {
      window.addEventListener('scroll', this.handleScroll);
    },

    handleScroll() {
      const scrollY = window.scrollY;
      
      // Parallax en las capas de fondo
      if (this.$refs.layer1) {
        this.$refs.layer1.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (this.$refs.layer2) {
        this.$refs.layer2.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
      if (this.$refs.layer3) {
        this.$refs.layer3.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      // Header sticky
      if (this.$refs.stickyHeader) {
        const headerTop = this.$refs.stickyHeader.getBoundingClientRect().top;
        this.isScrolled = headerTop <= 100;
      }

      // Animaciones de cards
      this.animateCardsOnScroll();
    },

    animateCardsOnScroll() {
      const cards = [
        this.$refs.card1,
        this.$refs.card2,
        this.$refs.card3,
      ];

      cards.forEach((card) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = 1 - (rect.top / windowHeight);
        
        if (progress > 0 && progress < 1.5) {
          const opacity = Math.min(progress * 1.5, 1);
          const scale = 0.9 + (Math.min(progress, 1) * 0.1);
          const translateY = (1 - Math.min(progress, 1)) * 60;
          
          card.style.opacity = opacity;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        } else if (progress >= 1.5) {
          const fadeOut = Math.max(0, 2 - progress);
          card.style.opacity = fadeOut;
        }
      });

      // CTA final
      if (this.$refs.ctaSection) {
        const ctaRect = this.$refs.ctaSection.getBoundingClientRect();
        const ctaProgress = 1 - (ctaRect.top / window.innerHeight);
        
        if (ctaProgress > 0 && ctaProgress < 1) {
          const ctaOpacity = Math.min(ctaProgress * 2, 1);
          const ctaScale = 0.95 + (Math.min(ctaProgress, 1) * 0.05);
          
          this.$refs.ctaSection.style.opacity = ctaOpacity;
          this.$refs.ctaSection.style.transform = `scale(${ctaScale})`;
        }
      }
    },

    initScrollAnimations() {
      setTimeout(() => {
        this.animateCardsOnScroll();
      }, 100);
    },

    goToProject(projectId) {
      // Método obsoleto - ya no se usa
    },
    
    openHuvegrym() {
      // Abrir sitio web de Huvegrym en nueva pestaña
      window.open('https://huvegrym.es', '_blank', 'noopener,noreferrer');
    },
  }
}
</script>

<style scoped>
/* ================================
   PROJECTS SECTION - BASE
   ================================ */
.projects-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0 4rem;
  background: var(--dark, #18181B);
  overflow: hidden;
}

/* Parallax Background Layers */
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
  opacity: 0.08;
  will-change: transform;
}

.layer-1 {
  top: 10%;
  left: 10%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
}

.layer-2 {
  top: 50%;
  right: 10%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--secondary, #A855F7), var(--accent, #06B6D4));
}

.layer-3 {
  bottom: 10%;
  left: 30%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--accent, #06B6D4), var(--primary, #F97316));
}

/* Elementos Decorativos */
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
  right: 8%;
  width: 60px;
  height: 60px;
  border-color: var(--primary, #F97316);
}

.deco-2 {
  bottom: 25%;
  left: 8%;
  width: 80px;
  height: 80px;
  border-color: var(--secondary, #A855F7);
  animation-delay: -3s;
}

.deco-square {
  border-radius: 0.5rem;
}

.deco-3 {
  top: 50%;
  right: 10%;
  width: 50px;
  height: 50px;
  border-color: var(--accent, #06B6D4);
  transform: rotate(45deg);
  animation-delay: -5s;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
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
.projects-container {
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
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  white-space: nowrap;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  letter-spacing: 0.1em;
}

@media (min-width: 768px) {
  .background-text {
    font-size: 8rem;
  }
}

@media (min-width: 1024px) {
  .background-text {
    font-size: 10rem;
  }
}

.header-content.is-scrolled {
  transform: scale(0.95);
  opacity: 0.8;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #FFFFFF;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 4.5rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary, #F97316) 0%, var(--secondary, #A855F7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ================================
   PROJECTS GRID - 3 proyectos
   ================================ */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 6rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ================================
   PROJECT CARD
   ================================ */
.project-card {
  position: relative;
  opacity: 0;
  transform: scale(0.9) translateY(60px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  cursor: pointer;
  height: 100%;
  min-height: 600px;
}

.project-card:hover {
  transform: scale(1.02) translateY(-12px) !important;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  border-radius: 1.5rem;
  opacity: 0;
  filter: blur(24px);
  transition: opacity 0.4s ease;
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover .card-content {
  background: rgba(39, 39, 42, 0.95);
  border-color: rgba(249, 115, 22, 0.4);
}

/* Card Image */
.card-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(168, 85, 247, 0.1));
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(24, 24, 27, 0.8) 100%);
}

/* Card Image Gradient (para proyectos sin imagen específica) */
.card-image-gradient {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(168, 85, 247, 0.3));
  position: relative;
}

.card-image-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 40%, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.4) 0%, transparent 50%);
  opacity: 0.6;
}

.project-logo {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  border: 3px solid rgba(249, 115, 22, 0.5);
  box-shadow: 
    0 0 30px rgba(249, 115, 22, 0.4),
    0 0 60px rgba(168, 85, 247, 0.3);
  z-index: 1;
  transition: all 0.3s ease;
}

.project-card:hover .project-logo {
  transform: scale(1.1);
  box-shadow: 
    0 0 40px rgba(249, 115, 22, 0.6),
    0 0 80px rgba(168, 85, 247, 0.5);
}

.project-logo svg {
  width: 50px;
  height: 50px;
  color: var(--primary, #F97316);
  filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.6));
}

/* Card Image Blur (para proyecto upcoming) */
.card-image-blur {
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  background: rgba(39, 39, 42, 0.6);
}

.upcoming-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  border-radius: 50%;
  color: #FFFFFF;
  z-index: 1;
}

.upcoming-icon svg {
  width: 40px;
  height: 40px;
}

/* Card Info */
.card-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}

/* Card Badges */
.card-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.badge {
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.badge-featured {
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
}

.badge-production {
  background: rgba(34, 197, 94, 0.15);
  color: #22C55E;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge-opensource {
  background: rgba(168, 85, 247, 0.15);
  color: var(--secondary, #A855F7);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.badge-upcoming {
  background: rgba(249, 115, 22, 0.15);
  color: var(--primary, #F97316);
  border: 1px solid rgba(249, 115, 22, 0.3);
}

.badge-fullstack,
.badge-web,
.badge-mobile {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Card Title */
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;
}

/* Card Description */
.card-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  min-height: 4.8rem;
  flex-shrink: 0;
}

/* Card Tech Tags */
.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  background: rgba(249, 115, 22, 0.1);
  color: var(--primary, #F97316);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 0.5rem;
}

/* Card Result */
.card-result {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(249, 115, 22, 0.05);
  border-left: 3px solid var(--primary, #F97316);
  border-radius: 0.5rem;
  margin-top: auto;
  flex-shrink: 0;
}

.result-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--primary, #F97316);
  flex-shrink: 0;
}

.card-result span {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

/* Upcoming Card Style */
.project-card-upcoming,
.project-card-no-link {
  cursor: default;
  min-height: 600px;
}

.project-card-upcoming:hover,
.project-card-no-link:hover {
  transform: scale(1) translateY(0) !important;
}

.project-card-upcoming .card-glow,
.project-card-no-link .card-glow {
  opacity: 0.3;
}

/* Card Link Hint - Solo para cards clickeables */
.card-link-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 0.75rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.card-link-hint svg {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--primary, #F97316);
  transition: transform 0.3s ease;
}

.card-link-hint span {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary, #F97316);
}

.project-card:hover .card-link-hint {
  background: rgba(249, 115, 22, 0.2);
  border-color: var(--primary, #F97316);
  transform: translateX(4px);
}

.project-card:hover .card-link-hint svg {
  transform: translateX(4px) translateY(-4px);
}

/* ================================
   CTA SECTION
   ================================ */
.projects-cta {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(39, 39, 42, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 1rem;
}

@media (min-width: 768px) {
  .cta-title {
    font-size: 2.5rem;
  }
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary {
  color: #FFFFFF;
  background: linear-gradient(90deg, var(--primary, #F97316), var(--primary-dark, #EA580C));
  box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
}

.cta-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 40px rgba(249, 115, 22, 0.6);
  background: linear-gradient(90deg, var(--primary-light, #FB923C), var(--primary, #F97316));
}

.cta-secondary {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(39, 39, 42, 0.8);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.cta-secondary:hover {
  background: rgba(39, 39, 42, 1);
  border-color: var(--primary, #F97316);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.3);
}

.cta-icon,
.cta-icon-left {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-primary:hover .cta-icon {
  transform: translateX(4px);
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 767px) {
  .projects-section {
    padding: 4rem 0 2rem;
  }

  .sticky-header {
    position: relative;
    top: 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .card-image {
    height: 200px;
  }

  .card-info {
    padding: 1.5rem;
  }
  
  .project-card {
    min-height: 550px;
  }
  
  .card-description {
    min-height: auto;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}

/* ================================
   REDUCED MOTION
   ================================ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>