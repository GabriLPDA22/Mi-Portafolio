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

/**
 * Configura un tema oscuro para los gráficos de Google Charts
 * @returns {Object} Opciones base para tema oscuro
 */
export function getDarkThemeOptions() {
    return {
        backgroundColor: 'transparent',
        colors: ['#6366f1', '#8b5cf6', '#ec4899', '#0ea5e9', '#10b981'],
        titleTextStyle: { 
            color: '#ffffff',
            fontName: 'Inter',
            fontSize: 16
        },
        legend: { 
            textStyle: { 
                color: '#d4d4d8',
                fontName: 'Inter'
            }
        },
        hAxis: { 
            textStyle: { color: '#d4d4d8' },
            gridlines: { color: '#27272a' }
        },
        vAxis: { 
            textStyle: { color: '#d4d4d8' },
            gridlines: { color: '#27272a' }
        },
        chartArea: { 
            width: '80%', 
            height: '70%' 
        }
    };
}

/**
 * Formatea los datos para renderizar un gráfico de páginas vistas
 * @param {Array} pageStats - Estadísticas de páginas
 * @returns {Object} DataTable para Google Charts
 */
export function formatPageViewsData(pageStats) {
    const dataTable = new window.google.visualization.DataTable();
    dataTable.addColumn('string', 'Página');
    dataTable.addColumn('number', 'Visitas');
    
    pageStats.forEach(page => {
        // Extraer solo el nombre de la página para simplificar las etiquetas
        const pageName = page.title.replace(' - Portafolio de Gabriel Saiz', '')
                            .replace('Portafolio - ', '');
        dataTable.addRow([pageName, page.visits]);
    });
    
    return dataTable;
}

/**
 * Formatea los datos para renderizar un gráfico de interacciones de proyectos
 * @param {Array} projectStats - Estadísticas de proyectos
 * @returns {Object} DataTable para Google Charts
 */
export function formatProjectInteractionsData(projectStats) {
    const dataTable = new window.google.visualization.DataTable();
    dataTable.addColumn('string', 'Proyecto');
    dataTable.addColumn('number', 'Vistas');
    dataTable.addColumn('number', 'Interacciones');
    
    projectStats.forEach(project => {
        dataTable.addRow([project.title, project.views, project.interactions]);
    });
    
    return dataTable;
}