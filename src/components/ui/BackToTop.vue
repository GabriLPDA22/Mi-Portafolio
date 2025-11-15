<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="back-to-top"
      aria-label="Volver arriba"
    >
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",

  data() {
    return {
      isVisible: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 500;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(255, 107, 53, 0.6);
}

.back-to-top svg {
  width: 24px;
  height: 24px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

@media (max-width: 767px) {
  .back-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
}
</style>
