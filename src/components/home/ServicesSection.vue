<template>
  <section id="servicios" class="services-section">
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
      <div class="deco-line deco-4"></div>
    </div>

    <div class="services-container">
      
      <!-- Sticky Header Section con Texto de Fondo -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          
          <!-- Texto gigante de fondo -->
          <div class="background-text">SERVICIOS</div>
          
          <h2 class="section-title">
            <span class="gradient-text">Servicios</span>
          </h2>
          <p class="section-subtitle">
            Desarrollo completo desde el diseño hasta el deploy. Especializado en experiencias que tus usuarios amarán.
          </p>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="services-grid" ref="servicesGrid">
        
        <!-- Service Card 1: Frontend -->
        <div 
          class="service-card" 
          ref="card1"
          @mouseenter="handleCardHover(0)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 7H15M9 11H15M9 15H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            
            <h3 class="card-title">Desarrollo Web Frontend</h3>
            <p class="card-description">
              Interfaces modernas y responsivas con Vue.js y React. Desde landing pages hasta aplicaciones web complejas.
            </p>
            
            <ul class="card-features">
              <li>Vue.js 3 & Composition API</li>
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS + SCSS</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">Desde 800€</div>
              <div class="card-badge">Popular</div>
            </div>
          </div>
        </div>

        <!-- Service Card 2: Mobile -->
        <div 
          class="service-card" 
          ref="card2"
          @mouseenter="handleCardHover(1)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M9 18H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            
            <h3 class="card-title">Apps Mobile Nativas</h3>
            <p class="card-description">
              Aplicaciones iOS y Android con React Native. Experiencia nativa con código compartido y rendimiento óptimo.
            </p>
            
            <ul class="card-features">
              <li>React Native</li>
              <li>iOS & Android</li>
              <li>Expo & Bare Workflow</li>
              <li>Push Notifications</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">Desde 1.500€</div>
              <div class="card-badge">Demandado</div>
            </div>
          </div>
        </div>

        <!-- Service Card 3: Backend -->
        <div 
          class="service-card" 
          ref="card3"
          @mouseenter="handleCardHover(2)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="7" cy="7" r="1" fill="currentColor"/>
                <circle cx="7" cy="12" r="1" fill="currentColor"/>
                <circle cx="7" cy="17" r="1" fill="currentColor"/>
              </svg>
            </div>
            
            <h3 class="card-title">Backend & APIs REST</h3>
            <p class="card-description">
              Arquitecturas escalables y seguras con Symfony y .NET. Integración con bases de datos y servicios externos.
            </p>
            
            <ul class="card-features">
              <li>Symfony & PHP</li>
              <li>.NET & C#</li>
              <li>PostgreSQL & MySQL</li>
              <li>API RESTful</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">Desde 1.200€</div>
              <div class="card-badge">Full Stack</div>
            </div>
          </div>
        </div>

        <!-- Service Card 4: UI/UX -->
        <div 
          class="service-card" 
          ref="card4"
          @mouseenter="handleCardHover(3)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <h3 class="card-title">UI/UX & Animaciones</h3>
            <p class="card-description">
              Diseños pixel-perfect con atención al detalle. Animaciones fluidas y microinteracciones que enamoran.
            </p>
            
            <ul class="card-features">
              <li>Diseño Mobile-First</li>
              <li>Scroll Animations</li>
              <li>Parallax Effects</li>
              <li>Prototipos Figma</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">Desde 600€</div>
              <div class="card-badge">Premium</div>
            </div>
          </div>
        </div>

        <!-- Service Card 5: Performance -->
        <div 
          class="service-card" 
          ref="card5"
          @mouseenter="handleCardHover(4)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <h3 class="card-title">Web Performance</h3>
            <p class="card-description">
              Optimización de velocidad y SEO. Auditorías Lighthouse y mejoras técnicas para mejor posicionamiento.
            </p>
            
            <ul class="card-features">
              <li>Core Web Vitals</li>
              <li>SEO Técnico</li>
              <li>Lazy Loading</li>
              <li>Code Splitting</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">Desde 400€</div>
              <div class="card-badge">Técnico</div>
            </div>
          </div>
        </div>

        <!-- Service Card 6: Mantenimiento -->
        <div 
          class="service-card" 
          ref="card6"
          @mouseenter="handleCardHover(5)"
          @mouseleave="handleCardLeave"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            
            <h3 class="card-title">Soporte & Mantenimiento</h3>
            <p class="card-description">
              Actualizaciones, mejoras continuas y resolución de bugs. Mantén tu aplicación siempre al día y funcionando.
            </p>
            
            <ul class="card-features">
              <li>Bug Fixing</li>
              <li>Actualizaciones</li>
              <li>Nuevas Features</li>
              <li>Soporte Mensual</li>
            </ul>
            
            <div class="card-footer">
              <div class="card-price">300€/mes</div>
              <div class="card-badge">Recurrente</div>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA Final -->
      <div class="services-cta" ref="ctaSection">
        <h3 class="cta-title">¿Tienes un proyecto en mente?</h3>
        <p class="cta-description">Hablemos y transformemos tu idea en realidad</p>
        <a href="mailto:gsaiz.bajo@gmail.com" class="cta-button">
          <span>Empecemos a trabajar</span>
          <svg class="cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <p class="cta-note">
          * Los precios son orientativos y varían según la complejidad del proyecto
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  
  data() {
    return {
      isScrolled: false,
      hoveredCard: null,
      scrollProgress: 0,
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
      const windowHeight = window.innerHeight;
      
      // Parallax en las capas de fondo (diferentes velocidades)
      if (this.$refs.layer1) {
        this.$refs.layer1.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (this.$refs.layer2) {
        this.$refs.layer2.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (this.$refs.layer3) {
        this.$refs.layer3.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      // Detectar si el header sticky está en viewport
      if (this.$refs.stickyHeader) {
        const headerTop = this.$refs.stickyHeader.getBoundingClientRect().top;
        this.isScrolled = headerTop <= 100;
      }

      // Animaciones de cards al hacer scroll
      this.animateCardsOnScroll();
    },

    animateCardsOnScroll() {
      const cards = [
        this.$refs.card1,
        this.$refs.card2,
        this.$refs.card3,
        this.$refs.card4,
        this.$refs.card5,
        this.$refs.card6,
      ];

      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calcular progreso de entrada (0 a 1)
        const progress = 1 - (rect.top / windowHeight);
        
        if (progress > 0 && progress < 1.5) {
          // Fade in + Scale + TranslateY
          const opacity = Math.min(progress * 2, 1);
          const scale = 0.9 + (Math.min(progress, 1) * 0.1);
          const translateY = (1 - Math.min(progress, 1)) * 50;
          
          card.style.opacity = opacity;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        } else if (progress >= 1.5) {
          // Fade out gradual cuando sale del viewport por arriba
          const fadeOut = Math.max(0, 2 - progress);
          card.style.opacity = fadeOut;
        }
      });

      // Animar CTA final
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
      // Trigger inicial para cards visibles
      setTimeout(() => {
        this.animateCardsOnScroll();
      }, 100);
    },

    handleCardHover(index) {
      this.hoveredCard = index;
    },

    handleCardLeave() {
      this.hoveredCard = null;
    },
  }
}
</script>

<style scoped>
/* ================================
   SERVICES SECTION - BASE
   ================================ */
.services-section {
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
  top: 0%;
  left: 0%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
}

.layer-2 {
  top: 50%;
  right: 0%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--secondary, #A855F7), var(--accent, #06B6D4));
}

.layer-3 {
  bottom: 0%;
  left: 30%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--accent, #06B6D4), var(--primary, #F97316));
}

/* ================================
   ELEMENTOS DECORATIVOS
   ================================ */
.decorative-elements {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle,
.deco-square,
.deco-line {
  position: absolute;
  opacity: 0.4;
}

.deco-circle {
  border: 2px solid;
  border-radius: 50%;
}

.deco-1 {
  top: 15%;
  right: 5%;
  width: 80px;
  height: 80px;
  border-color: var(--primary, #F97316);
  animation: float-slow 8s ease-in-out infinite;
}

.deco-2 {
  bottom: 20%;
  left: 5%;
  width: 60px;
  height: 60px;
  border-color: var(--secondary, #A855F7);
  animation: float-slow 10s ease-in-out infinite;
  animation-delay: -3s;
}

.deco-square {
  border: 2px solid;
  border-radius: 0.5rem;
}

.deco-3 {
  top: 40%;
  right: 8%;
  width: 50px;
  height: 50px;
  border-color: var(--accent, #06B6D4);
  transform: rotate(45deg);
  animation: float-slow 12s ease-in-out infinite;
  animation-delay: -5s;
}

.deco-line {
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--primary, #F97316), transparent);
}

.deco-4 {
  top: 25%;
  left: 8%;
  animation: float-slow 9s ease-in-out infinite;
  animation-delay: -2s;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}

/* Ocultar elementos decorativos en mobile */
@media (max-width: 1023px) {
  .decorative-elements {
    display: none;
  }
}

/* ================================
   CONTAINER
   ================================ */
.services-container {
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

/* Texto gigante de fondo */
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
}

/* ================================
   SERVICES GRID
   ================================ */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 6rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ================================
   SERVICE CARD - Efectos Apple
   ================================ */
.service-card {
  position: relative;
  opacity: 0;
  transform: scale(0.9) translateY(50px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.service-card:hover {
  transform: scale(1.02) translateY(-8px) !important;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  border-radius: 1.5rem;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.3s ease;
  z-index: 0;
}

.service-card:hover .card-glow {
  opacity: 0.6;
}

.card-content {
  position: relative;
  z-index: 1;
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .card-content {
  background: rgba(39, 39, 42, 0.95);
  border-color: rgba(249, 115, 22, 0.4);
  transform: translateZ(20px);
}

/* Card Icon - Solo arriba */
.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(168, 85, 247, 0.15));
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 1rem;
  color: var(--primary, #F97316);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.service-card:hover .card-icon {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(168, 85, 247, 0.25));
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
}

.card-icon svg {
  width: 2rem;
  height: 2rem;
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
  flex-grow: 1;
}

/* Card Features con mejor contraste */
.card-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex-grow: 1;
}

.card-features li {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.85);
  padding-left: 1.75rem;
  position: relative;
  line-height: 1.5;
  font-weight: 500;
}

.card-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 0.375rem;
}

/* Card Footer - Precio y Badge */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* Card Price - ABAJO Y MUY VISIBLE */
.card-price {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary, #F97316), var(--secondary, #A855F7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.service-card:hover .card-price {
  transform: scale(1.05);
}

/* Card Badge - Ahora en el footer */
.card-badge {
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(249, 115, 22, 0.15);
  border: 1px solid rgba(249, 115, 22, 0.3);
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

/* ================================
   CTA SECTION
   ================================ */
.services-cta {
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

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(90deg, var(--primary, #F97316), var(--primary-dark, #EA580C));
  border-radius: 1rem;
  text-decoration: none;
  box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 40px rgba(249, 115, 22, 0.6);
  background: linear-gradient(90deg, var(--primary-light, #FB923C), var(--primary, #F97316));
}

.cta-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(4px);
}

.cta-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 1.5rem 0 0;
  font-style: italic;
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 767px) {
  .services-section {
    padding: 4rem 0 2rem;
  }

  .sticky-header {
    position: relative;
    top: 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .card-content {
    padding: 1.5rem;
  }
  
  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .card-price {
    font-size: 1.25rem;
  }
  
  .card-badge {
    align-self: flex-end;
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