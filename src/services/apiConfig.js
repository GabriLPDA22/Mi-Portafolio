// src/services/apiConfig.js
import axios from 'axios';

// Crear instancia de Axios con la URL base de la API
const api = axios.create({
    baseURL: 'https://api.gabrielcodes.dev',
    timeout: 20000, // 20 segundos de timeout
    headers: {
        'Content-Type': 'application/json'
    }
});

// Registrar la URL base en el desarrollo
if (import.meta.env.DEV) {
    console.info('API base URL:', api.defaults.baseURL);
}

// Interceptor para peticiones
api.interceptors.request.use(
    (config) => {
        // Log de peticiones en desarrollo
        if (import.meta.env.DEV) {
            console.info(`Realizando petición ${config.method.toUpperCase()} a ${config.url}`);
        }
        
        return config;
    },
    (error) => {
        if (import.meta.env.DEV) {
            console.error('Error en la configuración de la petición:', error);
        }
        return Promise.reject(error);
    }
);

// Interceptor para respuestas
api.interceptors.response.use(
    (response) => {
        // Log de respuestas exitosas en desarrollo
        if (import.meta.env.DEV) {
            console.info(`Respuesta exitosa de ${response.config.url} - Status: ${response.status}`);
        }
        return response;
    },
    (error) => {
        // Manejo detallado de errores
        if (error.response) {
            // La solicitud fue hecha y el servidor respondió con un código de estado
            // que cae fuera del rango 2xx
            console.error('Error de respuesta:', error.response.status, error.response.data);
            
            // Mensajes más descriptivos según el código de estado
            switch (error.response.status) {
                case 401:
                    console.error('Error de autenticación: No autorizado');
                    break;
                case 403:
                    console.error('Error de autorización: Acceso prohibido');
                    break;
                case 404:
                    console.error('Recurso no encontrado:', error.config.url);
                    break;
                case 500:
                    console.error('Error interno del servidor');
                    break;
                default:
                    console.error(`Error HTTP: ${error.response.status}`);
            }
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor:', error.request);
            console.error('URL solicitada:', error.config.url);
            
            // Intentar proporcionar más contexto
            if (error.code === 'ECONNABORTED') {
                console.error('La petición excedió el tiempo de espera configurado');
            } else if (error.code === 'ERR_NETWORK') {
                console.error('Error de red: Comprueba tu conexión a internet o si el servidor está disponible');
            }
        } else {
            // Algo sucedió en la configuración de la solicitud que desencadenó un error
            console.error('Error de configuración de la petición:', error.message);
        }

        return Promise.reject(error);
    }
);

export default api;