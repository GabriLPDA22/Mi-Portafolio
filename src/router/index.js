import { createRouter, createWebHistory } from 'vue-router'
import { projects } from '@/data/projects'

// Importaciones con lazy loading para mejorar el rendimiento inicial
const HomeView = () => import('../views/HomeView.vue')
const ProjectDetailView = () => import('../views/ProjectDetailView.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Gabriel Saiz - Desarrollador Full Stack | Vue.js, React Native & Symfony',
            description: 'Desarrollador Full Stack especializado en Vue.js, TypeScript, React Native y Symfony. Creo experiencias digitales excepcionales con diseño UI/UX impecable.',
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
            title: 'Caso de Éxito - Gabriel Saiz',
            description: 'Detalles del proyecto, tecnologías utilizadas y resultados obtenidos.',
            robots: 'index, follow',
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
            title: 'Política de Privacidad - Gabriel Saiz',
            description: 'Información sobre privacidad, tratamiento de datos y cookies.',
            robots: 'noindex, follow',
            analytics: {
                pageType: 'privacy_policy'
            }
        }
    },
    // Página 404 personalizada
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
        meta: {
            title: '404 - Página no encontrada | Gabriel Saiz',
            description: 'La página que buscas no existe o ha sido movida.',
            robots: 'noindex, nofollow',
            analytics: {
                pageType: '404'
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80 // Offset para el header fijo
            }
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

// Guard de navegación para meta tags dinámicos
router.beforeEach((to, from, next) => {
    // Actualizar el título de la página
    document.title = to.meta.title || 'Gabriel Saiz - Desarrollador Full Stack'

    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute('content', to.meta.description || '')
    }

    // Actualizar meta robots
    const metaRobots = document.querySelector('meta[name="robots"]')
    if (metaRobots) {
        metaRobots.setAttribute('content', to.meta.robots || 'index, follow')
    }

    // Analytics tracking (si está configurado)
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
            page_path: to.path,
            page_title: to.meta.title,
        })
    }

    next()
})

// Validación de rutas de proyectos
router.beforeResolve((to, from, next) => {
    if (to.name === 'ProjectDetail') {
        const projectId = parseInt(to.params.id)
        const projectExists = projects.some(p => p.id === projectId)
        
        if (!projectExists) {
            next({ name: 'NotFound' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router