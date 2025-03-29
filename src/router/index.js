import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80 // Offset para el header fijo
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Actualizar título dinámicamente y registrar navegación
router.beforeEach((to, from, next) => {
    // Actualizar título de página
    document.title = to.meta.title || 'Portafolio - Gabriel Saiz'
    
    // Si estamos en producción, registrar inicio de navegación para analytics (opcional)
    if (process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('set', {
            'page_path': to.path,
            'page_title': to.meta.title || document.title
        });
    }
    
    next()
})

export default router