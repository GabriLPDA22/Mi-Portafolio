<template>
  <section id="sobre-mi" class="about-section">
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

    <div class="about-container">
      <!-- Sticky Header -->
      <div class="sticky-header" ref="stickyHeader">
        <div class="header-content" :class="{ 'is-scrolled': isScrolled }">
          <!-- Texto gigante de fondo -->
          <div class="background-text">
            {{ t("about.title").toUpperCase() }}
            {{ t("about.titleHighlight").toUpperCase() }}
          </div>

          <h2 class="section-title">
            {{ t("about.title") }}
            <span class="gradient-text">{{ t("about.titleHighlight") }}</span>
          </h2>
          <p class="section-subtitle">
            {{ t("about.subtitle") }}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="about-content">
        <!-- Main Card -->
        <div class="main-card" ref="mainCard">
          <div class="card-glow"></div>

          <div class="card-header">
            <div class="pulse-dot"></div>
            <h3 class="card-title">{{ t("about.whoAmI") }}</h3>
          </div>

          <div class="card-body">
            <p v-html="t('about.paragraphs.intro')"></p>
            <p v-html="t('about.paragraphs.passion')"></p>
            <p v-html="t('about.paragraphs.mindset')"></p>
            <p v-html="t('about.paragraphs.extra')"></p>
          </div>

          <!-- Quote -->
          <div class="quote-box">
            <p>{{ t("about.quote") }}</p>
          </div>
        </div>

        <!-- Values Grid -->
        <div class="values-grid">
          <div class="value-card" ref="value1">
            <div class="value-icon icon-1">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 class="value-title">{{ t("about.values.passion.title") }}</h4>
            <p class="value-description">
              {{ t("about.values.passion.description") }}
            </p>
          </div>

          <div class="value-card" ref="value2">
            <div class="value-icon icon-2">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 class="value-title">{{ t("about.values.growth.title") }}</h4>
            <p class="value-description">
              {{ t("about.values.growth.description") }}
            </p>
          </div>

          <div class="value-card" ref="value3">
            <div class="value-icon icon-3">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 class="value-title">{{ t("about.values.solutions.title") }}</h4>
            <p class="value-description">
              {{ t("about.values.solutions.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from "@/composables/useI18n";

export default {
  name: "AboutMeSection",

  setup() {
    const { t } = useI18n();
    return { t };
  },

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

      this.animateOnScroll();
    },

    animateOnScroll() {
      const elements = [
        this.$refs.mainCard,
        this.$refs.value1,
        this.$refs.value2,
        this.$refs.value3,
      ];

      elements.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - rect.top / windowHeight;

        if (progress > 0 && progress < 1.2) {
          const opacity = Math.min(progress * 2, 1);
          const translateY = (1 - Math.min(progress, 1)) * 30;

          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        }
      });
    },

    initScrollAnimations() {
      setTimeout(() => {
        this.animateOnScroll();
      }, 100);
    },
  },
};
</script>

<style scoped>
/* ================================
   BASE
   ================================ */
.about-section {
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
  top: 10%;
  left: 5%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #06b6d4, #a855f7);
}

.layer-2 {
  top: 55%;
  right: 10%;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #ff6b35, #ec4899);
}

.layer-3 {
  bottom: 15%;
  left: 30%;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #a855f7, #06b6d4);
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
  top: 20%;
  right: 12%;
  width: 70px;
  height: 70px;
  border-color: #06b6d4;
}

.deco-2 {
  bottom: 25%;
  left: 10%;
  width: 60px;
  height: 60px;
  border-color: #ec4899;
  animation-delay: -4s;
}

.deco-square {
  top: 50%;
  left: 15%;
  width: 55px;
  height: 55px;
  border-color: #a855f7;
  border-radius: 0.5rem;
  transform: rotate(45deg);
  animation-delay: -7s;
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
.about-container {
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
   CONTENT
   ================================ */
.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.main-card {
  position: relative;
  background: rgba(39, 39, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 107, 53, 0.4);
    box-shadow: 0 12px 30px rgba(255, 107, 53, 0.2);
  }

  @media (max-width: 767px) {
    padding: 2rem;
  }
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

.main-card:hover .card-glow {
  opacity: 0.3;
}

.card-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background: #ff6b35;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
}

.card-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;

  p {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }
}

.highlight-orange {
  color: #ff6b35;
  font-weight: 600;
}

.highlight-purple {
  color: #a855f7;
  font-weight: 600;
}

.highlight-cyan {
  color: #06b6d4;
  font-weight: 600;
}

.highlight-pink {
  color: #ec4899;
  font-weight: 600;
}

.quote-box {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  background: rgba(255, 107, 53, 0.05);
  border-left: 4px solid #ff6b35;
  border-radius: 0 0.75rem 0.75rem 0;

  p {
    font-size: 1rem;
    font-style: italic;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1.0625rem;
    }
  }
}

/* ================================
   VALUES GRID
   ================================ */
.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.value-card {
  background: rgba(39, 39, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 107, 53, 0.3);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.15);
  }
}

.value-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &.icon-1 {
    background: rgba(59, 130, 246, 0.15);
    color: rgb(59, 130, 246);
  }

  &.icon-2 {
    background: rgba(16, 185, 129, 0.15);
    color: rgb(16, 185, 129);
  }

  &.icon-3 {
    background: rgba(168, 85, 247, 0.15);
    color: rgb(168, 85, 247);
  }
}

.value-card:hover .value-icon {
  transform: scale(1.1) rotate(5deg);
}

.value-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.value-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 767px) {
  .about-section {
    padding: 4rem 0 2rem;
  }

  .sticky-header {
    position: relative;
    top: 0;
  }
}
</style>
