import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'img/icons/*.png'],
            manifest: {
                name: 'Gabriel Saiz - Desarrollador Web',
                short_name: 'Gabriel Saiz',
                description: 'Portfolio profesional de Gabriel Saiz, desarrollador web especializado en aplicaciones modernas',
                theme_color: '#6366f1',
                icons: [
                    {
                        src: 'img/icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'img/icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'img/icons/android-chrome-maskable-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: 'img/icons/android-chrome-maskable-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ],
                start_url: '/',
                display: 'standalone',
                background_color: '#09090b'
            },
            workbox: {
                // Opciones para la caché de Workbox
                globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff2}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        hmr: {
            overlay: false, // Desactivar el overlay de errores
        },
        port: 3000,
        open: true
    },
    build: {
        // Optimización para producción
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        rollupOptions: {
            output: {
                // Estrategia de división de chunks para mejorar caching
                manualChunks: {
                    'vendor': [
                        '@fortawesome/fontawesome-svg-core',
                        '@fortawesome/free-solid-svg-icons',
                        '@fortawesome/free-brands-svg-icons',
                        '@fortawesome/vue-fontawesome'
                    ],
                    'vue-core': ['vue', 'vue-router', 'pinia']
                }
            }
        },
        // Precarga de módulos importantes
        modulePreload: {
            polyfill: true
        },
        // Comprimir archivos grandes
        assetsInlineLimit: 4096, // 4kb - imágenes menores a este tamaño se convierten a base64
        // Generar sourcemaps solo en desarrollo
        sourcemap: process.env.NODE_ENV !== 'production'
    },
    optimizeDeps: {
        include: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome'
        ]
    }
})