import { createRouter, createWebHistory } from 'vue-router'

// Importaciones con lazy loading para mejorar el rendimiento inicial
const HomeView = () => import('../views/HomeView.vue')
const ProjectDetailView = () => import('../views/ProjectDetailView.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')
const DashboardView = () => import('../views/DashboardView.vue')
const RecommendationLetterView = () => import('../views/RecommendationLetterView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Portafolio - Gabriel Saiz Estudiante de DAW',
            analytics: {
                pageType: 'home'
            }
        }
    },
    {
        path: '/proyecto/:id',
        name: 'ProjectDetail',
        component: ProjectDetailView,
        props: true,
        meta: {
            title: 'Detalles del Proyecto - Portafolio de Gabriel Saiz',
            analytics: {
                pageType: 'project_detail'
            }
        }
    },
    {
        path: '/carta-recomendacion',
        name: 'RecommendationLetter',
        component: RecommendationLetterView,
        meta: {
            title: 'Carta de Recomendación - Gabriel Saiz',
            analytics: {
                pageType: 'recommendation_letter'
            }
        }
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
            title: 'Política de Privacidad - Portafolio de Gabriel Saiz',
            analytics: {
                pageType: 'privacy_policy'
            }
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        meta: {
            title: 'Dashboard - Portafolio de Gabriel Saiz',
            analytics: {
                pageType: 'dashboard'
            }
        }
    },
    // Página 404 personalizada
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
        meta: {
            title: '404 - Página no encontrada',
            analytics: {
                pageType: '404'
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Si la navegación está utilizando el botón de retroceso, restaurar la posición guardada
        if (savedPosition) {
            return {
                ...savedPosition,
                behavior: 'smooth',
            }
        }

        // Si hay un hash en la URL (ancla), desplazar a ese elemento con un offset para el header fijo
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                        top: 80 // Offset para el header fijo
                    })
                }, 500) // Pequeño retraso para asegurar que los componentes se hayan renderizado
            })
        }

        // De lo contrario, ir al principio de la página
        return { top: 0, behavior: 'smooth' }
    }
})

// Actualizar título dinámicamente y registrar navegación
router.beforeEach((to, from, next) => {
    // Actualizar título de página
    document.title = to.meta.title || 'Portafolio - Gabriel Saiz'

    // Si estamos en producción, registrar inicio de navegación para analytics
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('set', {
            'page_path': to.path,
            'page_title': to.meta.title || document.title
        });

        window.gtag('event', 'page_view', {
            page_path: to.path,
            page_title: to.meta.title || document.title,
            page_location: window.location.href
        });
    }

    next()
})

// Optimización: notificar cuando la navegación está completa
router.afterEach((to, from) => {
    // Marcar navegación como completada
    if (window.performance && window.gtag) {
        // Registrar tiempo de carga de página
        window.gtag('event', 'timing_complete', {
            name: 'page_load',
            value: Math.round(performance.now()),
            event_category: 'Navigation'
        });
    }
})

export default router
