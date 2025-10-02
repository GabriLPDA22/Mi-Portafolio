<template>
  <section id="inicio" class="hero-section">
    <!-- Background Effects -->
    <div class="hero-bg">
      <div class="gradient-orb gradient-orb-1"></div>
      <div class="gradient-orb gradient-orb-2"></div>
      <div class="gradient-grid"></div>
    </div>

    <!-- Main Content -->
    <div class="hero-container">
      <div class="hero-content">
        
        <!-- Status Badge -->
        <div class="status-badge" data-aos="fade-down" data-aos-delay="100">
          <span class="status-dot"></span>
          <span class="status-text">Disponible para proyectos</span>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
          Desarrollo <span class="gradient-text">aplicaciones web y mobile</span> que convierten visitantes en clientes
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Desarrollador Full Stack especializado en Vue.js, React Native y experiencias digitales que generan resultados. 
          Transformo ideas en productos que tus usuarios amarán.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-ctas" data-aos="fade-up" data-aos-delay="400">
          <a href="mailto:gsaiz.bajo@gmail.com" class="btn-primary">
            <span>Hablemos de tu proyecto</span>
            <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          
          <a href="#proyectos" class="btn-secondary">
            <span>Ver casos de éxito</span>
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="500">
          <div class="stat-item">
            <div class="stat-number gradient-text">8+</div>
            <div class="stat-label">Proyectos completados</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number gradient-text">1+</div>
            <div class="stat-label">Años de experiencia</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number gradient-text">15+</div>
            <div class="stat-label">Tecnologías dominadas</div>
          </div>
        </div>

      </div>

      <!-- Avatar Column -->
      <div class="hero-visual" data-aos="fade-left" data-aos-delay="300">
        
        <!-- Simple Professional Photo -->
        <div class="avatar-container">
          <div class="avatar-wrapper">
            <img 
              src="/img/Yo.webp" 
              alt="Gabriel Saiz - Desarrollador Full Stack"
              class="avatar-image"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="900">
      <div class="scroll-line"></div>
      <svg class="scroll-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  
  mounted() {
    // Track section view
    if (typeof this.$track === 'function') {
      this.$track('section_view', { section_id: 'hero' });
    }
  }
}
</script>

<style scoped>
/* ================================
   HERO SECTION - BASE
   ================================ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  overflow: hidden;
  background: var(--dark, #18181B);
}

/* Background Effects */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  animation: float 8s ease-in-out infinite;
}

.gradient-orb-1 {
  top: 10%;
  left: 10%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
}

.gradient-orb-2 {
  bottom: 10%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--secondary, #A855F7), var(--accent, #06B6D4));
  animation-delay: -4s;
}

.gradient-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* ================================
   CONTAINER & LAYOUT
   ================================ */
.hero-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* Desktop: Two columns */
@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
  }
}

/* ================================
   CONTENT COLUMN
   ================================ */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(39, 39, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 9999px;
  width: fit-content;
  transition: all 0.3s ease;
}

.status-badge:hover {
  border-color: rgba(249, 115, 22, 0.4);
  transform: translateY(-2px);
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.status-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.025em;
}

/* Main Title */
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  margin: 0;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary, #F97316) 0%, var(--secondary, #A855F7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Subtitle */
.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0;
}

@media (min-width: 1024px) {
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

/* ================================
   CTA BUTTONS
   ================================ */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(90deg, var(--primary, #F97316) 0%, var(--primary-dark, #EA580C) 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 30px rgba(249, 115, 22, 0.5);
  background: linear-gradient(90deg, var(--primary-light, #FB923C) 0%, var(--primary, #F97316) 100%);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}

.btn-secondary {
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.btn-secondary:hover {
  background: rgba(39, 39, 42, 1);
  border-color: var(--primary, #F97316);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.2);
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

/* ================================
   STATS
   ================================ */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hero-stats {
    gap: 1.5rem;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

@media (min-width: 640px) {
  .stat-number {
    font-size: 2.5rem;
  }
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.025em;
}

.stat-divider {
  width: 1px;
  height: 2rem;
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .stat-divider {
    display: none;
  }
}

/* ================================
   AVATAR COLUMN
   ================================ */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

@media (max-width: 1023px) {
  .hero-visual {
    order: -1; /* Avatar primero en mobile */
  }
}

.avatar-container {
  position: relative;
  width: 100%;
  max-width: 450px;
}

/* Simple Avatar Wrapper */
.avatar-wrapper {
  position: relative;
  width: 100%;
  padding: 4px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  border-radius: 2rem;
  box-shadow: 
    0 20px 60px rgba(249, 115, 22, 0.2),
    0 0 0 1px rgba(168, 85, 247, 0.1);
}

.avatar-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: calc(2rem - 4px);
  background: var(--dark, #18181B);
}

/* Mobile: bordes más pequeños */
@media (max-width: 640px) {
  .avatar-wrapper {
    border-radius: 1.5rem;
  }
  
  .avatar-image {
    border-radius: calc(1.5rem - 4px);
  }
}

/* ================================
   SCROLL INDICATOR
   ================================ */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s infinite;
}

.scroll-line {
  width: 1px;
  height: 2rem;
  background: linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.5));
}

.scroll-arrow {
  width: 1.5rem;
  height: 1.5rem;
  color: rgba(249, 115, 22, 0.7);
}

/* ================================
   ANIMATIONS
   ================================ */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

/* Reduced Motion */
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