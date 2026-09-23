// src/services/apiConfig.js
import axios from 'axios';

// Crear instancia de Axios con la URL base de la API
const api = axios.create({
    baseURL: 'https://api.gabrielcodes.dev',
    timeout: 30000, // 30 segundos de timeout
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para peticiones
api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para respuestas
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Manejo de errores
        if (error.response) {
            // La solicitud fue hecha y el servidor respondió con un código de estado
            // que cae fuera del rango 2xx
            console.error('Error de respuesta:', error.response.status, error.response.data);
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('Error de conexión:', error.request);
        } else {
            // Algo sucedió en la configuración de la solicitud que desencadenó un error
            console.error('Error de configuración:', error.message);
        }

        return Promise.reject(error);
    }
);

export default api;