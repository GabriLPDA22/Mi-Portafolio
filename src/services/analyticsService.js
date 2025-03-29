// src/services/analyticsService.js
import api from './apiConfig';

// ID de propiedad GA4
const propertyId = import.meta.env.VITE_GA4_PROPERTY_ID || 'G-CEDV9NP2WJ';

/**
 * Obtiene todos los datos de analytics para el dashboard
 * @returns {Promise<Object>} Datos de analytics
 */
export async function getAnalyticsData() {
  try {
    // Obtener datos del backend
    const response = await api.get('/analytics/dashboard-data');
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de analytics:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de visitantes
 * @returns {Promise<Object>} Datos de visitantes
 */
export async function getVisitorStats() {
  try {
    const response = await api.get('/analytics/visitors');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de visitantes:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de páginas vistas
 * @returns {Promise<Object>} Datos de páginas vistas
 */
export async function getPageViewStats() {
  try {
    const response = await api.get('/analytics/page-views');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de páginas vistas:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de proyectos
 * @returns {Promise<Object>} Datos de proyectos
 */
export async function getProjectStats() {
  try {
    const response = await api.get('/analytics/projects');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de proyectos:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de descargas de CV
 * @returns {Promise<Object>} Datos de descargas de CV
 */
export async function getCvDownloadStats() {
  try {
    const response = await api.get('/analytics/cv-downloads');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de descargas de CV:', error);
    throw error;
  }
}

/**
 * Obtiene eventos recientes
 * @returns {Promise<Array>} Lista de eventos recientes
 */
export async function getRecentEvents() {
  try {
    const response = await api.get('/analytics/recent-events');
    return response.data;
  } catch (error) {
    console.error('Error al obtener eventos recientes:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de páginas
 * @returns {Promise<Array>} Lista de estadísticas de páginas
 */
export async function getPageStats() {
  try {
    const response = await api.get('/analytics/page-stats');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de páginas:', error);
    throw error;
  }
}

/**
 * Obtiene estadísticas de interacciones de proyectos
 * @returns {Promise<Array>} Lista de estadísticas de interacciones de proyectos
 */
export async function getProjectInteractionStats() {
  try {
    const response = await api.get('/analytics/project-interactions');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas de interacciones de proyectos:', error);
    throw error;
  }
}