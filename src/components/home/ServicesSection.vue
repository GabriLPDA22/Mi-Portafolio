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
          <div class="background-text">{{ t('services.titleHighlight').toUpperCase() }}</div>

          <h2 class="section-title">
            {{ t('services.title') }} <span class="title-highlight">{{ t('services.titleHighlight') }}</span>
          </h2>
          <p class="section-subtitle">
            {{ t('services.subtitle') }}
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M9 7H15M9 11H15M9 15H12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.frontend.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.frontend.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.frontend.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.frontend.price') }}</div>
              <div class="card-badge">{{ t('services.cards.frontend.badge') }}</div>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="2"
                  width="14"
                  height="20"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M9 18H15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.mobile.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.mobile.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.mobile.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.mobile.price') }}</div>
              <div class="card-badge">{{ t('services.cards.mobile.badge') }}</div>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="7" cy="7" r="1" fill="currentColor" />
                <circle cx="7" cy="12" r="1" fill="currentColor" />
                <circle cx="7" cy="17" r="1" fill="currentColor" />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.backend.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.backend.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.backend.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.backend.price') }}</div>
              <div class="card-badge">{{ t('services.cards.backend.badge') }}</div>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.uiux.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.uiux.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.uiux.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.uiux.price') }}</div>
              <div class="card-badge">{{ t('services.cards.uiux.badge') }}</div>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.performance.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.performance.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.performance.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.performance.price') }}</div>
              <div class="card-badge">{{ t('services.cards.performance.badge') }}</div>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>

            <h3 class="card-title">{{ t('services.cards.support.title') }}</h3>
            <p class="card-description">
              {{ t('services.cards.support.description') }}
            </p>

            <ul class="card-features">
              <li v-for="(feature, index) in t('services.cards.support.features')" :key="index">
                {{ feature }}
              </li>
            </ul>

            <div class="card-footer">
              <div class="card-price">{{ t('services.cards.support.price') }}</div>
              <div class="card-badge">{{ t('services.cards.support.badge') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="services-cta" ref="ctaSection">
        <h3 class="cta-title">{{ t('contact.title') }} {{ t('contact.titleHighlight') }}</h3>
        <p class="cta-description">{{ t('contact.subtitle') }}</p>

        <div class="cta-buttons">
          <a href="#contacto" class="cta-button primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t('hero.cta.primary') }}
          </a>

          <a href="#proyectos" class="cta-button secondary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ t('hero.cta.secondary') }}
          </a>
        </div>

        <p class="cta-note">{{ t('contact.note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from '@/composables/useI18n';

gsap.registerPlugin(ScrollTrigger);

// i18n
const { t } = useI18n();

// Refs
const stickyHeader = ref(null);
const servicesGrid = ref(null);
const ctaSection = ref(null);
const layer1 = ref(null);
const layer2 = ref(null);
const layer3 = ref(null);

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);

const isScrolled = ref(false);

// Parallax
let parallaxTween = null;

function initParallax() {
  parallaxTween = gsap.to([layer1.value, layer2.value, layer3.value], {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".services-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Animations
function initAnimations() {
  const cards = [
    card1.value,
    card2.value,
    card3.value,
    card4.value,
    card5.value,
    card6.value,
  ];

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: servicesGrid.value,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ctaSection.value,
    {
      opacity: 0,
      scale: 0.95,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaSection.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}

// Card Hover
function handleCardHover(index) {
  const cards = [
    card1.value,
    card2.value,
    card3.value,
    card4.value,
    card5.value,
    card6.value,
  ];

  cards.forEach((card, i) => {
    if (i !== index && card) {
      gsap.to(card, {
        scale: 0.97,
        opacity: 0.6,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
}

function handleCardLeave() {
  const cards = [
    card1.value,
    card2.value,
    card3.value,
    card4.value,
    card5.value,
    card6.value,
  ];

  cards.forEach((card) => {
    if (card) {
      gsap.to(card, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
}

// Lifecycle
onMounted(() => {
  initParallax();
  initAnimations();

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100;
  };
  window.addEventListener("scroll", handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
    if (parallaxTween) {
      parallaxTween.kill();
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
});
</script>

<style scoped lang="scss">
/* ================================
   VARIABLES
   ================================ */
$primary-gradient: linear-gradient(135deg, #ff6b35, #ec4899);
$dark-bg: rgba(24, 24, 27, 0.95);
$card-bg: rgba(39, 39, 42, 0.8);
$hover-card-bg: rgba(39, 39, 42, 0.95);

/* ================================
   SECTION CONTAINER
   ================================ */
.services-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0 4rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 27, 0.95) 0%,
    rgba(18, 18, 20, 0.98) 100%
  );
}

/* ================================
   PARALLAX BACKGROUND
   ================================ */
.parallax-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-layer {
  position: absolute;
  width: 100%;
  height: 120%;
  top: -10%;
}

.layer-1 {
  background: radial-gradient(
    circle at 20% 50%,
    rgba(255, 107, 53, 0.08) 0%,
    transparent 50%
  );
}

.layer-2 {
  background: radial-gradient(
    circle at 80% 30%,
    rgba(168, 85, 247, 0.06) 0%,
    transparent 50%
  );
}

.layer-3 {
  background: radial-gradient(
    circle at 50% 70%,
    rgba(236, 72, 153, 0.04) 0%,
    transparent 50%
  );
}

/* ================================
   DECORATIVE ELEMENTS
   ================================ */
.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.deco-circle,
.deco-square {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  animation: float 20s infinite ease-in-out;
}

.deco-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  filter: blur(100px);
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.deco-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #ec4899, #a855f7);
  filter: blur(80px);
  bottom: 15%;
  right: -3%;
  animation-delay: -5s;
}

.deco-3 {
  width: 150px;
  height: 150px;
  background: rgba(255, 107, 53, 0.12);
  border-radius: 1rem;
  top: 50%;
  right: 10%;
  animation-delay: -10s;
}

.deco-line {
  position: absolute;
  height: 1px;
  width: 200px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 107, 53, 0.3),
    transparent
  );
  top: 30%;
  left: 5%;
  animation: glow 3s infinite alternate;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes glow {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.7;
  }
}

/* ================================
   SERVICES CONTAINER
   ================================ */
.services-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ================================
   STICKY HEADER
   ================================ */
.sticky-header {
  position: sticky;
  top: 80px;
  z-index: 10;
  margin-bottom: 4rem;
}

.header-content {
  position: relative;
  text-align: center;
  padding: 2rem 0;
  transition: all 0.3s ease;
}

.header-content.is-scrolled {
  transform: scale(0.95);
  opacity: 0.9;
}

.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
  z-index: 0;
}

.section-title {
  position: relative;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 1.5rem;
  z-index: 1;
  color: #ffffff;
}

.title-highlight {
  background: linear-gradient(135deg, #ff6b35, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.gradient-text {
  background: linear-gradient(135deg, #ff6b35, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.section-subtitle {
  position: relative;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  z-index: 1;
}

/* ================================
   SERVICES GRID
   ================================ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ================================
   SERVICE CARDS
   ================================ */
.service-card {
  position: relative;
  perspective: 1000px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.service-card:hover {
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
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateZ(20px);
}

.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.15),
    rgba(168, 85, 247, 0.15)
  );
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 1rem;
  color: #ff6b35;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.service-card:hover .card-icon {
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.25),
    rgba(168, 85, 247, 0.25)
  );
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
}

.card-icon svg {
  width: 2rem;
  height: 2rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.card-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  flex-grow: 1;
}

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
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 0.375rem;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.card-price {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b35, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.service-card:hover .card-price {
  transform: scale(1.05);
}

.card-badge {
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.3);
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
  color: #ffffff;
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
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.875rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 20px;
    height: 20px;
  }

  &.primary {
    background: linear-gradient(135deg, #ff6b35, #ec4899);
    color: #ffffff;
    box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 40px rgba(255, 107, 53, 0.6);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.95);

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: #ff6b35;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
}

.cta-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
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
</style>