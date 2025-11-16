// utils/gtm-loader.js
export const loadGTM = () => {
  if (window.gtmLoaded) return;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");

  window.gtmLoaded = true;
};

// En App.vue o main.js
import { loadGTM } from "./utils/gtm-loader";

// Carga GTM después de 3 segundos o al primer scroll
setTimeout(loadGTM, 3000);
window.addEventListener("scroll", loadGTM, { once: true });
