<template>
    <div class="min-h-screen pt-20 pb-16">
        <div class="container mx-auto px-4 sm:px-6 relative z-10">
            <div class="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10">
                <!-- Encabezado -->
                <div class="mb-8 pb-4 border-b border-zinc-800">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Política de Privacidad y
                        Cookies</h1>
                    <p class="text-zinc-400">Última actualización: {{ lastUpdated }}</p>
                </div>

                <!-- Contenido -->
                <div class="space-y-8 text-zinc-300">
                    <!-- Introducción -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">1. Introducción</h2>
                        <p>
                            Bienvenido a gabrielcodes.dev. Respeto tu privacidad y me comprometo a proteger tus datos
                            personales.
                            Esta política de privacidad te informará sobre cómo trato tus datos personales cuando
                            visitas mi sitio web
                            y te informará sobre tus derechos de privacidad.
                        </p>
                    </section>

                    <!-- Qué información recopilo -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">2. Información que recopilo</h2>
                        <p>
                            Cuando visitas mi sitio web, recopilo automáticamente cierta información sobre tu
                            dispositivo,
                            incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las
                            cookies
                            que están instaladas en tu dispositivo.
                        </p>
                        <p class="mt-2">
                            Además, a medida que navegas por el sitio, recopilo información sobre las páginas web
                            individuales
                            que visitas, qué sitios web o términos de búsqueda te remitieron a mi sitio y cómo navegas e
                            interactúas con él.
                            Me refiero a esta información recopilada automáticamente como "Información del dispositivo".
                        </p>
                    </section>

                    <!-- Cómo recopilo la información -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">3. Cómo recopilo la información</h2>
                        <p>
                            Recopilo información del dispositivo utilizando las siguientes tecnologías:
                        </p>
                        <ul class="list-disc list-inside mt-2 ml-4 space-y-2">
                            <li>
                                <strong>Cookies</strong>: son archivos de datos que se colocan en tu dispositivo o
                                computadora
                                y que a menudo incluyen un identificador único anónimo.
                            </li>
                            <li>
                                <strong>Google Analytics</strong>: utilizo Google Analytics para recopilar información
                                sobre
                                cómo interactúas con mi sitio web. Esto me ayuda a mejorar la experiencia del usuario.
                            </li>
                        </ul>
                    </section>

                    <!-- Cómo uso la información -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">4. Cómo uso la información</h2>
                        <p>
                            Uso la Información del Dispositivo que recopilo para ayudarme a detectar posibles riesgos y
                            fraudes
                            (en particular, tu dirección IP) y, de manera más general, para mejorar y optimizar mi sitio
                            (por ejemplo, generando análisis sobre cómo navegas e interactúas con el sitio).
                        </p>
                    </section>

                    <!-- Cookies utilizadas -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">5. Cookies utilizadas</h2>
                        <p>
                            Mi sitio utiliza los siguientes tipos de cookies:
                        </p>
                        <ul class="list-disc list-inside mt-2 ml-4 space-y-2">
                            <li>
                                <strong>Cookies analíticas</strong>: utilizo Google Analytics para recopilar datos sobre
                                el uso de mi sitio con el fin de mejorar su rendimiento. Estas cookies recopilan
                                información
                                como el número de visitantes al sitio, de dónde provienen los visitantes y las páginas
                                que visitan.
                            </li>
                        </ul>
                    </section>

                    <!-- Tus derechos -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">6. Tus derechos</h2>
                        <p>
                            Si eres residente europeo, tienes derecho a acceder a la información personal que tengo
                            sobre ti y
                            a solicitar que tu información personal sea corregida, actualizada o eliminada. Si deseas
                            ejercer este
                            derecho, ponte en contacto conmigo a través de los datos de contacto que aparecen más abajo.
                        </p>
                        <p class="mt-2">
                            Además, si eres residente europeo, tomo nota de que estoy procesando tu información para
                            cumplir con
                            contratos que podríamos tener contigo o para perseguir nuestros intereses comerciales
                            legítimos
                            listados anteriormente. Además, ten en cuenta que tu información puede ser transferida fuera
                            de Europa,
                            incluyendo Canadá y Estados Unidos.
                        </p>
                    </section>

                    <!-- Retención de datos -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">7. Retención de datos</h2>
                        <p>
                            Cuando visitas el sitio, mantendré tu Información del Dispositivo durante un período de
                            tiempo
                            según sea necesario para los fines establecidos en esta política de privacidad a menos que
                            se requiera
                            un período de retención más largo por ley.
                        </p>
                    </section>

                    <!-- Cambios en la política -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">8. Cambios</h2>
                        <p>
                            Puedo actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo,
                            cambios en
                            mis prácticas o por otras razones operativas, legales o regulatorias.
                        </p>
                    </section>

                    <!-- Contacto -->
                    <section>
                        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">9. Contacto</h2>
                        <p>
                            Para más información sobre mis prácticas de privacidad, si tienes preguntas o si quieres
                            hacer una
                            reclamación, ponte en contacto conmigo por correo electrónico a gsaiz.bajo@gmail.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy',
    data() {
        return {
            lastUpdated: '29 de marzo de 2025'
        }
    },
    mounted() {
        // Cambiar el título de la página
        document.title = 'Política de Privacidad - Portfolio de Gabriel Saiz';

        // Registrar vista de página de privacidad para analytics
        if (typeof this.$track === 'function') {
            this.$track('view_privacy_policy');
        }
    }
}
</script>

<style scoped>
/* Estilos adicionales específicos para la página de privacidad */
section h2 {
    position: relative;
    padding-left: 0.5rem;
}

section h2::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 3px;
    background: linear-gradient(to bottom, #6366f1, #a855f7);
    border-radius: 3px;
}
</style>