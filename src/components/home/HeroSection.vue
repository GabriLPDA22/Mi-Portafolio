<template>
  <section id="inicio" class="hero-section">
    <!-- Animated Background -->
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- Main Content Container -->
    <div class="hero-container">
      <!-- Left Column: Content -->
      <div class="hero-content">
        <!-- Status Badge -->
        <div class="status-badge" ref="badge">
          <span class="pulse-dot"></span>
          <span>Disponible para proyectos</span>
        </div>

        <!-- Main Title with Word Animation -->
        <h1 class="hero-title">
          <span class="title-line" ref="line1">Desarrollo</span>
          <span class="title-line gradient-line" ref="line2">
            aplicaciones web y mobile
          </span>
          <span class="title-line" ref="line3">que convierten visitantes</span>
          <span class="title-line" ref="line4">en clientes</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle" ref="subtitle">
          Desarrollador Full Stack especializado en Vue.js, React Native y
          experiencias digitales que generan resultados. Transformo ideas en
          productos que tus usuarios amarán.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-ctas" ref="ctas">
          <a href="mailto:gsaiz.bajo@gmail.com" class="btn-primary">
            <span>Hablemos de tu proyecto</span>
            <svg
              class="arrow-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a href="#proyectos" class="btn-secondary"> Ver casos de éxito </a>
        </div>

        <!-- Stats Counter -->
        <div class="hero-stats" ref="stats">
          <div class="stat-item">
            <div class="stat-number" ref="stat1">0</div>
            <div class="stat-label">Proyectos completados</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number" ref="stat2">0</div>
            <div class="stat-label">Años de experiencia</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number" ref="stat3">0</div>
            <div class="stat-label">Tecnologías dominadas</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Professional Photo -->
      <div class="hero-visual" ref="visual">
        <div class="photo-container">
          <!-- Animated Border Gradient -->
          <div class="photo-border"></div>

          <!-- Photo -->
          <div class="photo-wrapper">
            <img
              src="/img/Yo.webp"
              alt="Gabriel Saiz - Desarrollador Full Stack"
              class="photo"
              loading="eager"
            />
          </div>

          <!-- Floating Tech Icons (usando DevIcons CDN) -->
          <div class="tech-icon tech-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
            />
          </div>
          <div class="tech-icon tech-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Native"
            />
          </div>
          <div class="tech-icon tech-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              alt="C#"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" ref="scroll">
      <div class="scroll-line"></div>
      <svg
        class="scroll-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "HeroSection",

  mounted() {
    this.initAnimations();
  },

  methods: {
    initAnimations() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge entrance
      tl.from(this.$refs.badge, {
        y: -30,
        opacity: 0,
        duration: 0.6,
      });

      // Title lines stagger
      tl.from(
        [
          this.$refs.line1,
          this.$refs.line2,
          this.$refs.line3,
          this.$refs.line4,
        ],
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.3"
      );

      // Subtitle
      tl.from(
        this.$refs.subtitle,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      // CTAs
      tl.from(
        this.$refs.ctas.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.5"
      );

      // Stats with counter animation
      tl.from(
        this.$refs.stats,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          onComplete: () => this.animateStats(),
        },
        "-=0.4"
      );

      // Visual (photo)
      tl.from(
        this.$refs.visual,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1.2"
      );

      // Scroll indicator
      tl.from(
        this.$refs.scroll,
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=0.5"
      );

      // Animate photo border rotation
      gsap.to(".photo-border", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Float tech icons
      gsap.to(".tech-icon", {
        y: -15,
        duration: 2.5,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Rotate tech icons
      gsap.to(".tech-icon", {
        rotation: 360,
        duration: 20,
        stagger: 5,
        repeat: -1,
        ease: "none",
      });
    },

    animateStats() {
      // Animate stat1: 8+
      gsap.to(this.$refs.stat1, {
        innerText: 8,
        duration: 2,
        snap: { innerText: 1 },
        onUpdate: function () {
          this.targets()[0].innerText =
            Math.ceil(this.targets()[0].innerText) + "+";
        },
      });

      // Animate stat2: 1+
      gsap.to(this.$refs.stat2, {
        innerText: 1,
        duration: 2,
        snap: { innerText: 1 },
        onUpdate: function () {
          this.targets()[0].innerText =
            Math.ceil(this.targets()[0].innerText) + "+";
        },
      });

      // Animate stat3: 15+
      gsap.to(this.$refs.stat3, {
        innerText: 15,
        duration: 2,
        snap: { innerText: 1 },
        onUpdate: function () {
          this.targets()[0].innerText =
            Math.ceil(this.targets()[0].innerText) + "+";
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* ================================
   VARIABLES DE COLOR
   ================================ */
$bg-dark: #0a0a0b;
$bg-card: #18181b;
$primary-orange: #ff6b35;
$primary-purple: #a855f7;
$primary-pink: #ec4899;
$accent-cyan: #06b6d4;

/* ================================
   SECTION BASE
   ================================ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
  overflow: hidden;
  background: $bg-dark;

  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
}

/* ================================
   ANIMATED BACKGROUND
   ================================ */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;

  &.orb-1 {
    top: 10%;
    left: 5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, $primary-orange, transparent 70%);
    animation: float 12s ease-in-out infinite;
  }

  &.orb-2 {
    bottom: 20%;
    right: 10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, $primary-purple, transparent 70%);
    animation: float 15s ease-in-out infinite;
    animation-delay: -5s;
  }

  &.orb-3 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, $primary-pink, transparent 70%);
    animation: float 18s ease-in-out infinite;
    animation-delay: -10s;
  }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 107, 53, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* ================================
   CONTAINER & LAYOUT
   ================================ */
.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 5rem;
  }
}

/* ================================
   CONTENT COLUMN
   ================================ */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1023px) {
    order: 2;
    text-align: center;
    align-items: center;
  }
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 107, 53, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.025em;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 53, 0.15);
    border-color: rgba(255, 107, 53, 0.5);
    transform: translateY(-2px);
  }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, $primary-orange, $primary-pink);
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Main Title */
.hero-title {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin: 0;

  .title-line {
    display: block;
  }

  .gradient-line {
    background: linear-gradient(
      135deg,
      $primary-orange 0%,
      $primary-purple 50%,
      $primary-pink 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  max-width: 600px;
  margin: 0;
}

/* ================================
   CTA BUTTONS
   ================================ */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    width: 100%;

    a {
      flex: 1;
      justify-content: center;
    }
  }
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.125rem 2.25rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 1rem 1.75rem;
    font-size: 0.9375rem;
  }
}

.btn-primary {
  background: linear-gradient(135deg, $primary-orange 0%, $primary-pink 100%);
  color: #ffffff;
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 40px rgba(255, 107, 53, 0.6);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(168, 85, 247, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: $primary-purple;
    transform: translateY(-2px);
  }
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;

  .btn-primary:hover & {
    transform: translateX(4px);
  }
}

/* ================================
   STATS
   ================================ */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: center;
    gap: 2rem;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.stat-number {
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, $primary-orange, $primary-purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.025em;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.08);

  @media (max-width: 640px) {
    display: none;
  }
}

/* ================================
   VISUAL COLUMN (PHOTO)
   ================================ */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    order: 1;
  }
}

.photo-container {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.photo-border {
  position: absolute;
  inset: -8px;
  background: linear-gradient(
    135deg,
    $primary-orange,
    $primary-purple,
    $primary-pink,
    $accent-cyan
  );
  border-radius: 2rem;
  z-index: -1;
  filter: blur(20px);
  opacity: 0.6;
}

.photo-wrapper {
  position: relative;
  width: 100%;
  padding: 6px;
  background: linear-gradient(
    135deg,
    $primary-orange,
    $primary-purple,
    $primary-pink
  );
  border-radius: 2rem;
  box-shadow: 0 25px 70px rgba(255, 107, 53, 0.3);
}

.photo {
  width: 100%;
  height: auto;
  display: block;
  border-radius: calc(2rem - 6px);
  background: $bg-dark;
}

/* Floating Tech Icons */
.tech-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &.tech-1 {
    top: 8%;
    right: -8%;
    background: rgba(255, 107, 53, 0.12);
    border-color: rgba(255, 107, 53, 0.35);
  }

  &.tech-2 {
    bottom: 22%;
    left: -6%;
    background: rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.35);
  }

  &.tech-3 {
    bottom: 8%;
    right: -4%;
    background: rgba(6, 182, 212, 0.12);
    border-color: rgba(6, 182, 212, 0.35);
  }

  @media (max-width: 768px) {
    display: none;
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
  animation: bounce 2.5s infinite;

  @media (max-width: 768px) {
    display: none;
  }
}

.scroll-line {
  width: 1px;
  height: 2.5rem;
  background: linear-gradient(to bottom, transparent, rgba(255, 107, 53, 0.6));
}

.scroll-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: rgba(255, 107, 53, 0.8);
}

/* ================================
   ANIMATIONS
   ================================ */
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -30px);
  }
  66% {
    transform: translate(-20px, 20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.95);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-15px);
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
