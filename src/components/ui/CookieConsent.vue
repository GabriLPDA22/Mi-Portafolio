<template>
    <Transition name="slide-up">
        <div v-if="!consentGiven"
            class="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50">
            <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-white text-sm sm:text-base">
                    Este sitio utiliza cookies para analizar el tráfico y mejorar tu experiencia.
                    <router-link to="/privacy-policy" class="text-indigo-400 hover:text-indigo-300 ml-1">
                        Más información
                    </router-link>
                </div>
                <div class="flex gap-2 sm:gap-4">
                    <button @click="rejectCookies"
                        class="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                        Rechazar
                    </button>
                    <button @click="acceptCookies"
                        class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'CookieConsent',
    data() {
        return {
            consentGiven: false
        }
    },
    mounted() {
        // Comprobar si ya se ha dado consentimiento
        this.consentGiven = localStorage.getItem('cookieConsent') === 'true';

        // Si no hay consentimiento, desactivar temporalmente el seguimiento
        if (!this.consentGiven && window.gtag) {
            window.gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
        }
    },
    methods: {
        acceptCookies() {
            // Guardar preferencia
            localStorage.setItem('cookieConsent', 'true');
            this.consentGiven = true;

            // Activar el seguimiento
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });

                // Registrar evento de aceptación
                this.$track('cookie_consent', {
                    action: 'accept'
                });
            }
        },
        rejectCookies() {
            // Guardar preferencia
            localStorage.setItem('cookieConsent', 'false');
            this.consentGiven = true;

            // Mantener el seguimiento desactivado
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                });

                // Registrar evento de rechazo (anónimo)
                this.$track('cookie_consent', {
                    action: 'reject'
                });
            }
        }
    }
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>