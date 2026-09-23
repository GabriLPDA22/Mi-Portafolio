// src/plugins/analytics.js - Con funciones mejoradas para seguimiento detallado

export default {
    install: (app, options) => {
        // Asegúrate de que gtag esté disponible
        if (typeof window !== 'undefined' && typeof window.gtag !== 'function') {
            console.warn('Google Analytics no está cargado correctamente');
            return;
        }

        // Obtener el router de las opciones
        const { router } = options;

        if (router) {
            // Seguimiento mejorado de cambios de página
            router.afterEach((to, from) => {
                if (window.gtag) {
                    // Capturar la navegación con datos mejorados
                    window.gtag('config', 'G-CEDV9NP2WJ', {
                        page_path: to.fullPath,
                        page_title: to.meta.title || document.title,
                        page_referrer: from.fullPath
                    });

                    // Registrar evento de vista de página para tener más detalle
                    window.gtag('event', 'page_view', {
                        page_title: to.meta.title || document.title,
                        page_location: window.location.href,
                        page_path: to.fullPath,
                        send_to: 'G-CEDV9NP2WJ'
                    });

                    // Registrar también evento personalizado para distintos tipos de página
                    if (to.name === 'ProjectDetail') {
                        window.gtag('event', 'project_view', {
                            project_id: to.params.id,
                            user_type: localStorage.getItem('cookieConsent') === 'true' ? 'consented' : 'anonymous'
                        });
                    }

                    if (process.env.NODE_ENV !== 'production') {
                        console.log(`Analytics: Página vista - ${to.fullPath}`);
                    }
                }
            });
        }

        // Métodos globales mejorados para eventos
        app.config.globalProperties.$track = (eventName, eventParams = {}) => {
            if (window.gtag) {
                // Añadir timestamp e información del dispositivo automáticamente
                const enhancedParams = {
                    ...eventParams,
                    timestamp: new Date().toISOString(),
                    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
                    user_type: localStorage.getItem('cookieConsent') === 'true' ? 'consented' : 'anonymous'
                };

                window.gtag('event', eventName, enhancedParams);

                if (process.env.NODE_ENV !== 'production') {
                    console.log(`Analytics: Evento registrado - ${eventName}`, enhancedParams);
                }
            }
        };

        // Añadir métodos específicos para seguimiento de acciones comunes
        app.config.globalProperties.$trackProject = (projectId, projectName, action) => {
            if (window.gtag) {
                window.gtag('event', 'project_interaction', {
                    project_id: projectId,
                    project_name: projectName,
                    action: action, // 'view', 'click_link', 'view_gallery', etc.
                    timestamp: new Date().toISOString()
                });
            }
        };

        app.config.globalProperties.$trackDownload = (fileType, fileName, section) => {
            if (window.gtag) {
                window.gtag('event', 'file_download', {
                    file_type: fileType, // 'cv', 'project_resource', etc.
                    file_name: fileName,
                    section: section,
                    timestamp: new Date().toISOString()
                });
            }
        };
    }
};