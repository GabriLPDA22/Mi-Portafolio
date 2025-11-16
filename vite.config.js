import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Gabriel Saiz - Desarrollador Web",
        short_name: "Gabriel Saiz",
        description:
          "Portfolio profesional de Gabriel Saiz, desarrollador web especializado en aplicaciones modernas",
        theme_color: "#6366f1",
        start_url: "/",
        display: "standalone",
        background_color: "#09090b",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  // ⬇️ AÑADE ESTA SECCIÓN
  css: {
    postcss: "./postcss.config.js",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      three: path.resolve(__dirname, "node_modules/three"),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
    port: 3000,
    open: true,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/vue-fontawesome",
            "three",
          ],
          "vue-core": ["vue", "vue-router", "pinia"],
        },
      },
    },
    modulePreload: {
      polyfill: true,
    },
    assetsInlineLimit: 4096,
    sourcemap: process.env.NODE_ENV !== "production",
  },
  optimizeDeps: {
    include: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
      "three",
      "three/examples/jsm/controls/OrbitControls",
      "three/examples/jsm/loaders/GLTFLoader",
      "three/examples/jsm/loaders/DRACOLoader",
    ],
  },
});
