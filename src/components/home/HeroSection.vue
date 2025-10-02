<template>
  <section id="inicio" class="hero-section">
    <!-- Efectos de fondo animados con parallax -->
    <div class="hero-bg" ref="heroBg">
      <div class="glow glow-orange" ref="glowOrange"></div>
      <div class="glow glow-purple" ref="glowPurple"></div>
      <div class="glow glow-cyan" ref="glowCyan"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="hero-container">
      <!-- Badge de disponibilidad -->
      <div class="availability-badge" data-aos="fade-down">
        <span class="pulse-dot"></span>
        <span class="badge-text">Disponible para nuevos proyectos</span>
      </div>

      <!-- Contenido principal -->
      <div class="hero-content">
        <!-- Título principal -->
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Desarrollo aplicaciones
          <span class="gradient-text">web y mobile</span>
          que convierten
        </h1>

        <!-- Subtítulo más honesto -->
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Desarrollador Full Stack con experiencia en <strong>Vue.js</strong>, 
          <strong>React Native</strong> y <strong>Symfony</strong>. 
          Especializado en crear experiencias digitales fluidas con UI/UX cuidado al detalle.
        </p>

        <!-- Stack badges -->
        <div class="tech-stack" data-aos="fade-up" data-aos-delay="300">
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">React Native</span>
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">Symfony</span>
          <span class="tech-badge">Tailwind CSS</span>
        </div>

        <!-- CTAs -->
        <div class="cta-group" data-aos="fade-up" data-aos-delay="400">
          <a href="mailto:tu@email.com" class="btn btn-primary">
            <span>Hablemos de tu proyecto</span>
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#proyectos" class="btn btn-secondary">
            <span>Ver proyectos</span>
          </a>
        </div>

        <!-- Stats más realistas -->
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="500">
          <div class="stat-item">
            <div class="stat-number">{{ stats.projects }}+</div>
            <div class="stat-label">Proyectos realizados</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">{{ stats.experience }}</div>
            <div class="stat-label">Año de experiencia</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">{{ stats.technologies }}+</div>
            <div class="stat-label">Tecnologías</div>
          </div>
        </div>
      </div>

      <!-- Tu foto con efecto parallax sutil -->
      <div class="hero-visual" data-aos="fade-left" data-aos-delay="300" ref="heroVisual">
        <div class="avatar-container">
          <!-- Círculos decorativos con parallax -->
          <div class="decoration-circle circle-1" ref="circle1"></div>
          <div class="decoration-circle circle-2" ref="circle2"></div>
          <div class="decoration-circle circle-3" ref="circle3"></div>
          
          <!-- Tu foto (CAMBIA la ruta por tu imagen) -->
          <div class="avatar-wrapper">
            <img 
              src="/img/Yo.webp" 
              alt="Gabriel Saiz - Desarrollador Full Stack"
              class="avatar-image"
            >
            <!-- Borde gradiente animado -->
            <div class="avatar-border"></div>
          </div>

          <!-- Badges flotantes -->
          <div class="floating-badge badge-1" ref="badge1">
            <span class="badge-icon">⚡</span>
            <span class="badge-label">Vue.js Expert</span>
          </div>
          
          <div class="floating-badge badge-2" ref="badge2">
            <span class="badge-icon">📱</span>
            <span class="badge-label">Mobile Dev</span>
          </div>
          
          <div class="floating-badge badge-3" ref="badge3">
            <span class="badge-icon">🎨</span>
            <span class="badge-label">UI/UX Focus</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator FUERA del container -->
    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span class="scroll-text">Scroll para explorar</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Stats realistas
const stats = ref({
  projects: 8,
  experience: '1+',
  technologies: 15
})

// Referencias para parallax
const heroBg = ref(null)
const glowOrange = ref(null)
const glowPurple = ref(null)
const glowCyan = ref(null)
const heroVisual = ref(null)
const circle1 = ref(null)
const circle2 = ref(null)
const circle3 = ref(null)
const badge1 = ref(null)
const badge2 = ref(null)
const badge3 = ref(null)

// Parallax sutil estilo Apple
const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  
  const moveX = (clientX - centerX) / centerX
  const moveY = (clientY - centerY) / centerY

  // Glows con movimiento muy sutil
  if (glowOrange.value) {
    glowOrange.value.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`
  }
  if (glowPurple.value) {
    glowPurple.value.style.transform = `translate(${moveX * -15}px, ${moveY * -15}px)`
  }
  if (glowCyan.value) {
    glowCyan.value.style.transform = `translate(${moveX * 25}px, ${moveY * 25}px)`
  }

  // Círculos decorativos
  if (circle1.value) {
    circle1.value.style.transform = `translate(${moveX * -30}px, ${moveY * -30}px)`
  }
  if (circle2.value) {
    circle2.value.style.transform = `translate(${moveX * 40}px, ${moveY * 40}px)`
  }
  if (circle3.value) {
    circle3.value.style.transform = `translate(${moveX * -20}px, ${moveY * -20}px)`
  }

  // Badges flotantes
  if (badge1.value) {
    badge1.value.style.transform = `translate(${moveX * 15}px, ${moveY * 15}px)`
  }
  if (badge2.value) {
    badge2.value.style.transform = `translate(${moveX * -10}px, ${moveY * -10}px)`
  }
  if (badge3.value) {
    badge3.value.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`
  }
}

// Parallax en scroll (muy sutil)
const handleScroll = () => {
  const scrolled = window.scrollY
  
  if (heroBg.value) {
    heroBg.value.style.transform = `translateY(${scrolled * 0.3}px)`
  }
  
  if (heroVisual.value) {
    heroVisual.value.style.transform = `translateY(${scrolled * -0.2}px)`
  }
}

onMounted(() => {
  // Inicializar AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  })

  // Event listeners para parallax
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ============================================
   HERO SECTION
   ============================================ */

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--bg-dark);
  padding: 6rem 1rem 4rem;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 8rem 2rem 6rem;
  }
}

/* --------------------------------------------
   FONDO Y EFECTOS CON PARALLAX
   -------------------------------------------- */

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  transition: transform 0.1s ease-out;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.glow-orange {
  top: 10%;
  right: 15%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%);
}

.glow-purple {
  top: 40%;
  left: -10%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
}

.glow-cyan {
  bottom: 10%;
  right: 20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

/* --------------------------------------------
   CONTAINER
   -------------------------------------------- */

.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6rem;
}

@media (min-width: 1024px) {
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
    padding-bottom: 0;
  }
}

/* --------------------------------------------
   BADGE DE DISPONIBILIDAD
   -------------------------------------------- */

.availability-badge {
  position: absolute;
  top: -3rem;
  left: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  z-index: 20;
}

@media (min-width: 768px) {
  .availability-badge {
    top: -4rem;
  }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.badge-text {
  font-size: 0.875rem;
  color: var(--accent-light);
  font-weight: 500;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* --------------------------------------------
   CONTENIDO PRINCIPAL
   -------------------------------------------- */

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .hero-content {
    gap: 2rem;
  }
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin: 0;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.25rem;
  }
}

.hero-subtitle strong {
  color: var(--text-secondary);
  font-weight: 600;
}

/* --------------------------------------------
   TECH STACK
   -------------------------------------------- */

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(249, 115, 22, 0.1);
  border-color: rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
  color: var(--primary-light);
}

/* --------------------------------------------
   CTAs
   -------------------------------------------- */

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .btn {
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
  }
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.btn-primary {
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  box-shadow: 0 10px 40px -10px rgba(249, 115, 22, 0.4);
}

.btn-primary:hover {
  box-shadow: 0 15px 50px -10px rgba(249, 115, 22, 0.6);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* --------------------------------------------
   STATS
   -------------------------------------------- */

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 768px) {
  .stat-number {
    font-size: 2.5rem;
  }
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

/* --------------------------------------------
   AVATAR CON PARALLAX
   -------------------------------------------- */

.hero-visual {
  display: none;
  transition: transform 0.1s ease-out;
  will-change: transform;
}

@media (min-width: 1024px) {
  .hero-visual {
    display: block;
  }
}

.avatar-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 60px;
}

@media (min-width: 1280px) {
  .avatar-container {
    padding: 0 100px;
  }
}

/* Círculos decorativos con parallax */
.decoration-circle {
  position: absolute;
  border-radius: 50%;
  transition: transform 0.3s ease-out;
  will-change: transform;
  pointer-events: none;
}

.circle-1 {
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%);
  animation: float-slow 8s ease-in-out infinite;
}

.circle-2 {
  bottom: -80px;
  left: -80px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
  animation: float-slow 10s ease-in-out infinite reverse;
}

.circle-3 {
  top: 50%;
  right: -100px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
  animation: float-slow 12s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

/* Tu foto */
.avatar-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;
}

@media (min-width: 1280px) {
  .avatar-wrapper {
    width: 400px;
    height: 400px;
  }
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Borde gradiente animado */
.avatar-border {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  z-index: 1;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Badges flotantes */
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(39, 39, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-out;
  will-change: transform;
  animation: float-badge 6s ease-in-out infinite;
}

.badge-1 {
  top: 20%;
  right: -50px;
  animation-delay: 0s;
}

.badge-2 {
  bottom: 30%;
  left: -60px;
  animation-delay: 2s;
}

.badge-3 {
  top: 60%;
  right: -40px;
  animation-delay: 4s;
}

@keyframes float-badge {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.badge-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.badge-label {
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
}

/* --------------------------------------------
   SCROLL INDICATOR - CENTRADO
   -------------------------------------------- */

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  z-index: 20;
  animation: bounce 2s infinite;
}

.scroll-indicator:hover {
  opacity: 1;
}

/* En desktop, mover a la esquina */
@media (min-width: 1024px) {
  .scroll-indicator {
    left: 3rem;
    transform: translateX(0);
  }
}

.scroll-mouse {
  width: 28px;
  height: 45px;
  border: 2px solid rgba(249, 115, 22, 0.5);
  border-radius: 14px;
  position: relative;
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.2);
  background: rgba(249, 115, 22, 0.05);
  animation: scroll-glow 2s ease-in-out infinite;
}

@keyframes scroll-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.2);
    border-color: rgba(249, 115, 22, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
    border-color: rgba(249, 115, 22, 0.8);
  }
}

.scroll-wheel {
  width: 4px;
  height: 10px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s ease-in-out infinite;
}

.scroll-text {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  animation: fade-pulse 2s ease-in-out infinite;
}

@keyframes fade-pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

/* En desktop el bounce es diferente */
@media (min-width: 1024px) {
  @keyframes bounce {
    0%, 100% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(0) translateY(10px);
    }
  }
}

@keyframes scroll-wheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(16px);
  }
}
</style>