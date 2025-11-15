<template>
  <transition name="slide-up">
    <div v-if="showConsent" class="cookie-consent">
      <div class="consent-content">
        <div class="consent-icon">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div class="consent-text">
          <h3 class="consent-title">Cookies</h3>
          <p class="consent-description">
            Usamos cookies para mejorar tu experiencia. Al continuar navegando,
            aceptas nuestra
            <router-link to="/privacy-policy" class="consent-link"
              >política de privacidad</router-link
            >.
          </p>
        </div>

        <div class="consent-actions">
          <button @click="acceptCookies" class="consent-button primary">
            Aceptar
          </button>
          <button @click="rejectCookies" class="consent-button secondary">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CookieConsent",

  data() {
    return {
      showConsent: false,
    };
  },

  mounted() {
    this.checkConsent();
  },

  methods: {
    checkConsent() {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setTimeout(() => {
          this.showConsent = true;
        }, 1000);
      }
    },

    acceptCookies() {
      localStorage.setItem("cookieConsent", "accepted");
      this.showConsent = false;
    },

    rejectCookies() {
      localStorage.setItem("cookieConsent", "rejected");
      this.showConsent = false;
    },
  },
};
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  max-width: 600px;
  width: calc(100% - 3rem);
}

.consent-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  background: rgba(39, 39, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.consent-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.15);
  border-radius: 0.5rem;
  color: #ff6b35;
}

.consent-icon svg {
  width: 24px;
  height: 24px;
}

.consent-text {
  flex: 1;
}

.consent-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem;
}

.consent-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.consent-link {
  color: #ff6b35;
  text-decoration: underline;

  &:hover {
    color: #ec5b25;
  }
}

.consent-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.consent-button {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &.primary {
    background: linear-gradient(135deg, #ff6b35, #ec4899);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 53, 0.5);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

/* Responsive */
@media (max-width: 767px) {
  .cookie-consent {
    bottom: 1rem;
    width: calc(100% - 2rem);
  }

  .consent-content {
    flex-direction: column;
    align-items: stretch;
    padding: 1.25rem;
  }

  .consent-actions {
    width: 100%;

    .consent-button {
      flex: 1;
    }
  }
}
</style>
