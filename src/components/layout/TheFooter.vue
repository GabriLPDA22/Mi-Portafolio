<template>
  <footer class="footer">
    <!-- Background effects -->
    <div class="footer-bg"></div>
    <div class="footer-line"></div>

    <div class="footer-container">
      <!-- Main Content -->
      <div class="footer-grid">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="logo-icon">
              <span>GS</span>
            </div>
            <span class="logo-text">Gabriel Saiz</span>
          </div>

          <p class="brand-description">
            {{ t("footer.description") }}
          </p>

          <!-- Social Links -->
          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/gabriel-saiz-de-la-maza-bajo-140370184/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/GabriLPDA22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="mailto:gsaiz.bajo@gmail.com"
              aria-label="Email"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">{{ t("footer.links.title") }}</h3>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.key">
              <a :href="link.path" class="footer-link">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {{ t(`nav.${link.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3 class="footer-title">{{ t("footer.contact.title") }}</h3>
          <ul class="footer-contact">
            <li class="contact-item">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:gsaiz.bajo@gmail.com">gsaiz.bajo@gmail.com</a>
            </li>
            <li class="contact-item">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+34663941885">+34 663 941 885</a>
            </li>
            <li class="contact-item">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{{ t("footer.contact.location") }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} Gabriel Saiz.
          {{ t("footer.copyright") }}.
        </p>

        <div class="footer-meta">
          <router-link to="/privacy-policy" class="meta-link">
            {{ t("footer.privacy") }}
          </router-link>
          <span class="meta-separator">|</span>
          <div class="made-with">
            <span>{{ t("footer.madeWith") }}</span>
            <svg class="heart-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ t("footer.using") }} Vue.js</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useI18n } from "@/composables/useI18n";

export default {
  name: "TheFooter",

  setup() {
    const { t } = useI18n();
    return { t };
  },

  data() {
    return {
      quickLinks: [
        { key: "home", path: "/#inicio" },
        { key: "services", path: "/#servicios" },
        { key: "projects", path: "/#proyectos" },
        { key: "skills", path: "/#skills" },
        { key: "experience", path: "/#experiencia" },
        { key: "about", path: "/#sobre-mi" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: 5rem;
  background: #0a0a0b;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(255, 107, 53, 0.03));
  pointer-events: none;
}

.footer-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 107, 53, 0.5),
    transparent
  );
}

.footer-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
}

/* Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
  }
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff6b35, #ec4899);
  border-radius: 0.75rem;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);

  span {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
  }
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.brand-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 400px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(255, 107, 53, 0.15);
    border-color: rgba(255, 107, 53, 0.4);
    color: #ff6b35;
    transform: translateY(-2px);
  }
}

/* Footer Section */
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #ff6b35;

    svg {
      transform: translateX(3px);
    }
  }
}

/* Contact */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: #ff6b35;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b35;
    }
  }
}

/* Divider */
.footer-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  margin: 3rem 0;
}

/* Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.meta-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b35;
  }
}

.meta-separator {
  color: rgba(255, 255, 255, 0.3);
}

.made-with {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.heart-icon {
  width: 14px;
  height: 14px;
  color: #ef4444;
}
</style>
