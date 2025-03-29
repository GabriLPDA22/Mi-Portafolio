// src/services/chartService.js

/**
 * Carga la librería Google Charts
 * @returns {Promise<void>}
 */
export function loadCharts() {
    return new Promise((resolve, reject) => {
        // Si ya está cargado, resolver inmediatamente
        if (window.google && window.google.charts) {
            resolve();
            return;
        }

        // Cargar el script
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;

        script.onload = () => {
            // Cargar los paquetes necesarios
            window.google.charts.load('current', { 'packages': ['corechart'] });
            window.google.charts.setOnLoadCallback(() => {
                resolve();
            });
        };

        script.onerror = (error) => {
            reject(new Error('No se pudo cargar Google Charts: ' + error));
        };

        document.head.appendChild(script);
    });
}

/**
 * Crea un gráfico de columnas
 * @param {string} elementId - ID del elemento DOM donde se renderizará el gráfico
 * @param {Array} data - Datos para el gráfico
 * @param {Object} options - Opciones de configuración del gráfico
 * @returns {Object} Instancia del gráfico
 */
export function createColumnChart(elementId, data, options = {}) {
    if (!window.google || !window.google.visualization) {
        throw new Error('Google Charts no está cargado');
    }

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`No se encontró el elemento con ID: ${elementId}`);
    }

    const chart = new window.google.visualization.ColumnChart(element);
    chart.draw(data, options);

    return chart;
}

/**
 * Crea un gráfico de líneas
 * @param {string} elementId - ID del elemento DOM donde se renderizará el gráfico
 * @param {Array} data - Datos para el gráfico
 * @param {Object} options - Opciones de configuración del gráfico
 * @returns {Object} Instancia del gráfico
 */
export function createLineChart(elementId, data, options = {}) {
    if (!window.google || !window.google.visualization) {
        throw new Error('Google Charts no está cargado');
    }

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`No se encontró el elemento con ID: ${elementId}`);
    }

    const chart = new window.google.visualization.LineChart(element);
    chart.draw(data, options);

    return chart;
}

/**
 * Crea un gráfico de pastel
 * @param {string} elementId - ID del elemento DOM donde se renderizará el gráfico
 * @param {Array} data - Datos para el gráfico
 * @param {Object} options - Opciones de configuración del gráfico
 * @returns {Object} Instancia del gráfico
 */
export function createPieChart(elementId, data, options = {}) {
    if (!window.google || !window.google.visualization) {
        throw new Error('Google Charts no está cargado');
    }

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`No se encontró el elemento con ID: ${elementId}`);
    }

    const chart = new window.google.visualization.PieChart(element);
    chart.draw(data, options);

    return chart;
}