// src/services/analyticsService.js
import api from './apiConfig';

// Datos de respaldo para usar en caso de error
const fallbackData = {
  visitors: {
    total: 0,
    change: 0
  },
  pageViews: {
    total: 0,
    change: 0
  },
  projects: {
    total: 0,
    change: 0
  },
  cvDownloads: {
    total: 0,
    change: 0,
    goal: 100,
    percentage: 0
  },
  pageStats: [],
  projectStats: [],
  recentEvents: []
};

/**
 * Obtiene todos los datos de analytics para el dashboard
 * @returns {Promise<Object>} Datos de analytics
 */
export async function getAnalyticsData() {
  try {
    // Establecer un tiempo límite para la petición
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('La petición ha excedido el tiempo de espera')), 25000)
    );
    
    // Petición a la API
    const dataPromise = api.get('/api/analytics/dashboard-data');
    
    // Usar la respuesta que llegue primero (datos o timeout)
    const response = await Promise.race([dataPromise, timeoutPromise]);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de analytics:', error);
    
    // En caso de error, retornar datos de respaldo
    return fallbackData;
  }
}

/**
 * Obtiene estadísticas de visitantes
 * @returns {Promise<Object>} Datos de visitantes
 */
export async function getVisitorStats() {
  try {
    const response = await api.get('/api/analytics/visitors');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de visitantes:', error);
    return fallbackData.visitors;
  }
}

/**
 * Obtiene estadísticas de páginas vistas
 * @returns {Promise<Object>} Datos de páginas vistas
 */
export async function getPageViewStats() {
  try {
    const response = await api.get('/api/analytics/page-views');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de páginas vistas:', error);
    return fallbackData.pageViews;
  }
}

/**
 * Obtiene estadísticas de proyectos
 * @returns {Promise<Object>} Datos de proyectos
 */
export async function getProjectStats() {
  try {
    const response = await api.get('/api/analytics/projects');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de proyectos:', error);
    return fallbackData.projects;
  }
}

/**
 * Obtiene estadísticas de descargas de CV
 * @returns {Promise<Object>} Datos de descargas de CV
 */
export async function getCvDownloadStats() {
  try {
    const response = await api.get('/api/analytics/cv-downloads');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de descargas de CV:', error);
    return fallbackData.cvDownloads;
  }
}

/**
 * Obtiene eventos recientes
 * @returns {Promise<Array>} Lista de eventos recientes
 */
export async function getRecentEvents() {
  try {
    const response = await api.get('/api/analytics/recent-events');
    return response.data;
  } catch (error) {
    console.error('Error al obtener eventos recientes:', error);
    return fallbackData.recentEvents;
  }
}

/**
 * Obtiene estadísticas de páginas
 * @returns {Promise<Array>} Lista de estadísticas de páginas
 */
export async function getPageStats() {
  try {
    const response = await api.get('/api/analytics/page-stats');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de páginas:', error);
    return fallbackData.pageStats;
  }
}

/**
 * Obtiene estadísticas de interacciones de proyectos
 * @returns {Promise<Array>} Lista de estadísticas de interacciones de proyectos
 */
export async function getProjectInteractionStats() {
  try {
    const response = await api.get('/api/analytics/project-interactions');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de interacciones de proyectos:', error);
    return fallbackData.projectStats;
  }
}

/**
 * Registra un evento de analytics
 * @param {string} eventName - Nombre del evento
 * @param {Object} params - Parámetros adicionales del evento
 * @returns {Promise<void>}
 */
export async function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString()
    });
  }
}