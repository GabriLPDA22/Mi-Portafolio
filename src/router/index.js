import { createRouter, createWebHistory } from 'vue-router'
import { projects } from '@/data/projects'

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
            description: 'Desarrollador Web (DAW). Proyectos, experiencia, habilidades y contacto.',
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
            description: 'Detalles, tecnologías y galería del proyecto.',
            robots: 'index, follow',
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
            description: 'Carta de recomendación oficial emitida por GOLIVE Services S.L.',
            robots: 'index, follow',
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
            description: 'Información sobre privacidad, tratamiento de datos y cookies.',
            robots: 'noindex, follow',
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
            description: 'Panel de métricas y estadísticas del sitio.',
            robots: 'noindex, nofollow',
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
            description: 'La página que buscas no existe o ha sido movida.',
            robots: 'noindex, nofollow',
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

function setHeadTags({ title, description, url, image, robots }) {
    if (title) document.title = title

    const ensureMeta = (name, attr, value) => {
        if (!value) return
        let el = document.querySelector(`${name}[${attr}]`)
        if (!el) {
            el = document.createElement('meta')
            el.setAttribute(attr, attr.startsWith('property') ? attr.split('=')[1] : el.getAttribute(attr))
        }
        if (name === 'meta') {
            el.setAttribute(attr, attr.includes(':') ? attr : attr)
        }
        return el
    }

    // Description
    let descTag = document.querySelector('meta[name="description"]')
    if (!descTag) {
        descTag = document.createElement('meta')
        descTag.setAttribute('name', 'description')
        document.head.appendChild(descTag)
    }
    if (description) descTag.setAttribute('content', description)

    const setOrCreate = (selector, create) => {
        let el = document.querySelector(selector)
        if (!el) {
            el = create()
            document.head.appendChild(el)
        }
        return el
    }

    // Canonical
    const canonical = setOrCreate('link[rel="canonical"]', () => {
        const l = document.createElement('link')
        l.setAttribute('rel', 'canonical')
        return l
    })
    canonical.setAttribute('href', url || window.location.origin + window.location.pathname)

    // Robots
    const robotsMeta = setOrCreate('meta[name="robots"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'robots')
        return m
    })
    robotsMeta.setAttribute('content', robots || 'index, follow')

    // Open Graph
    const og = (prop, content) => {
        if (!content) return
        let el = document.querySelector(`meta[property="og:${prop}"]`)
        if (!el) {
            el = document.createElement('meta')
            el.setAttribute('property', `og:${prop}`)
            document.head.appendChild(el)
        }
        el.setAttribute('content', content)
    }
    og('title', title)
    og('description', description)
    og('type', 'website')
    og('url', url || window.location.href)
    og('image', image || 'https://gabrielcodes.dev/img/portfolio.webp')

    // Twitter
    const tw = (name, content) => {
        if (!content) return
        let el = document.querySelector(`meta[name="twitter:${name}"]`)
        if (!el) {
            el = document.createElement('meta')
            el.setAttribute('name', `twitter:${name}`)
            document.head.appendChild(el)
        }
        el.setAttribute('content', content)
    }
    tw('card', 'summary_large_image')
    tw('title', title)
    tw('description', description)
    tw('image', image || 'https://gabrielcodes.dev/img/portfolio.webp')
}

function injectJsonLd(id, data) {
    let script = document.getElementById(id)
    if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = id
        document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
}

// Actualizar título y metadatos dinámicamente y registrar navegación
router.beforeEach((to, from, next) => {
    // Construir metadatos
    let title = to.meta.title || 'Portafolio - Gabriel Saiz'
    let description = to.meta.description || 'Portafolio y proyectos de Gabriel Saiz.'
    const robots = to.meta.robots

    // SEO específico para proyectos
    if (to.name === 'ProjectDetail' && to.params.id) {
        const projectId = parseInt(to.params.id)
        const project = projects.find(p => p.id === projectId)
        if (project) {
            title = `${project.title} - Proyecto de Gabriel Saiz`
            description = project.description?.slice(0, 160)
            const absoluteUrl = `${window.location.origin}/proyecto/${project.id}`
            setHeadTags({ title, description, url: absoluteUrl, image: window.location.origin + (project.image || '/img/portfolio.webp'), robots })

            // JSON-LD específico del proyecto
            injectJsonLd('ld-project', {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: absoluteUrl,
                image: window.location.origin + (project.image || '/img/portfolio.webp'),
                author: {
                    "@type": "Person",
                    name: 'Gabriel Saiz',
                    url: window.location.origin
                }
            })

            injectJsonLd('ld-breadcrumb', {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: 'Inicio',
                        item: window.location.origin + '/'
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: 'Proyectos',
                        item: window.location.origin + '/#proyectos'
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: project.title,
                        item: absoluteUrl
                    }
                ]
            })
        }
    } else {
        setHeadTags({
            title,
            description,
            url: window.location.origin + to.fullPath,
            robots
        })

        // Eliminar JSON-LD específicos de proyecto si existen
        const ids = ['ld-project', 'ld-breadcrumb']
        ids.forEach(id => {
            const n = document.getElementById(id)
            if (n) n.remove()
        })
    }

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
