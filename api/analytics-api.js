// backend/analytics-api.js
const express = require('express');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const router = express.Router();

// Configuración del cliente de Google Analytics
const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    }
});

// ID de propiedad GA4
const propertyId = 'G-CEDV9NP2WJ';

/**
 * Obtener todos los datos del dashboard
 */
router.get('/dashboard-data', async (req, res) => {
    try {
        // Obtener datos de visitantes
        const visitorStats = await getVisitorStats();

        // Obtener datos de páginas vistas
        const pageViewStats = await getPageViewStats();

        // Obtener datos de proyectos
        const projectStats = await getProjectStats();

        // Obtener datos de descargas de CV
        const cvDownloadStats = await getCvDownloadStats();

        // Obtener eventos recientes
        const recentEvents = await getRecentEvents();

        // Obtener estadísticas de páginas
        const pageStats = await getPageStats();

        // Combinar todos los datos
        const data = {
            visitors: visitorStats,
            pageViews: pageViewStats,
            projects: projectStats,
            cvDownloads: cvDownloadStats,
            recentEvents,
            pageStats,
            projectStats: await getProjectInteractionStats()
        };

        res.json(data);
    } catch (error) {
        console.error('Error al obtener datos del dashboard:', error);
        res.status(500).json({ error: 'Error al obtener datos de analytics' });
    }
});

/**
 * Obtener estadísticas de visitantes
 */
async function getVisitorStats() {
    try {
        // Período actual (últimos 30 días)
        const [currentPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            metrics: [
                {
                    name: 'activeUsers',
                },
            ],
        });

        // Período anterior (30 días antes del período actual)
        const [previousPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '60daysAgo',
                    endDate: '31daysAgo',
                },
            ],
            metrics: [
                {
                    name: 'activeUsers',
                },
            ],
        });

        // Obtener valores
        const currentValue = parseInt(currentPeriodResponse.rows[0].metricValues[0].value);
        const previousValue = parseInt(previousPeriodResponse.rows[0].metricValues[0].value);

        // Calcular cambio porcentual
        const change = previousValue > 0
            ? ((currentValue - previousValue) / previousValue) * 100
            : 0;

        return {
            total: currentValue,
            change: parseFloat(change.toFixed(1))
        };
    } catch (error) {
        console.error('Error al obtener estadísticas de visitantes:', error);
        return {
            total: 0,
            change: 0
        };
    }
}

/**
 * Obtener estadísticas de páginas vistas
 */
async function getPageViewStats() {
    try {
        // Período actual (últimos 30 días)
        const [currentPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
        });

        // Período anterior (30 días antes del período actual)
        const [previousPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '60daysAgo',
                    endDate: '31daysAgo',
                },
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
        });

        // Obtener valores
        const currentValue = parseInt(currentPeriodResponse.rows[0].metricValues[0].value);
        const previousValue = parseInt(previousPeriodResponse.rows[0].metricValues[0].value);

        // Calcular cambio porcentual
        const change = previousValue > 0
            ? ((currentValue - previousValue) / previousValue) * 100
            : 0;

        return {
            total: currentValue,
            change: parseFloat(change.toFixed(1))
        };
    } catch (error) {
        console.error('Error al obtener estadísticas de páginas vistas:', error);
        return {
            total: 0,
            change: 0
        };
    }
}

/**
 * Obtener estadísticas de proyectos vistos
 */
async function getProjectStats() {
    try {
        // Período actual (últimos 30 días)
        const [currentPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'pagePath',
                    stringFilter: {
                        matchType: 'BEGINS_WITH',
                        value: '/proyecto/'
                    }
                }
            },
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
        });

        // Período anterior (30 días antes del período actual)
        const [previousPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '60daysAgo',
                    endDate: '31daysAgo',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'pagePath',
                    stringFilter: {
                        matchType: 'BEGINS_WITH',
                        value: '/proyecto/'
                    }
                }
            },
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
        });

        // Obtener valores
        const currentValue = parseInt(currentPeriodResponse.rows[0]?.metricValues[0]?.value || 0);
        const previousValue = parseInt(previousPeriodResponse.rows[0]?.metricValues[0]?.value || 0);

        // Calcular cambio porcentual
        const change = previousValue > 0
            ? ((currentValue - previousValue) / previousValue) * 100
            : 0;

        return {
            total: currentValue,
            change: parseFloat(change.toFixed(1))
        };
    } catch (error) {
        console.error('Error al obtener estadísticas de proyectos:', error);
        return {
            total: 0,
            change: 0
        };
    }
}

/**
 * Obtener estadísticas de descargas de CV
 */
async function getCvDownloadStats() {
    try {
        // Período actual (últimos 30 días)
        const [currentPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'eventName',
                    stringFilter: {
                        value: 'cv_download'
                    }
                }
            },
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
        });

        // Período anterior (30 días antes del período actual)
        const [previousPeriodResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '60daysAgo',
                    endDate: '31daysAgo',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'eventName',
                    stringFilter: {
                        value: 'cv_download'
                    }
                }
            },
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
        });

        // Obtener valores
        const currentValue = parseInt(currentPeriodResponse.rows[0]?.metricValues[0]?.value || 0);
        const previousValue = parseInt(previousPeriodResponse.rows[0]?.metricValues[0]?.value || 0);

        // Calcular cambio porcentual
        const change = previousValue > 0
            ? ((currentValue - previousValue) / previousValue) * 100
            : 0;

        // Meta de descargas: 100
        const goal = 100;
        const percentage = Math.min((currentValue / goal) * 100, 100);

        return {
            total: currentValue,
            change: parseFloat(change.toFixed(1)),
            goal,
            percentage: Math.round(percentage)
        };
    } catch (error) {
        console.error('Error al obtener estadísticas de descargas de CV:', error);
        return {
            total: 0,
            change: 0,
            goal: 100,
            percentage: 0
        };
    }
}

/**
 * Obtener eventos recientes
 */
async function getRecentEvents() {
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '7daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'eventName',
                },
                {
                    name: 'dateHour',
                }
            ],
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
            orderBys: [
                {
                    dimension: {
                        dimensionName: 'dateHour',
                    },
                    desc: true
                }
            ],
            limit: 20
        });

        // Formatear eventos
        const events = [];
        if (response.rows) {
            for (const row of response.rows) {
                const eventName = row.dimensionValues[0].value;
                const dateHour = row.dimensionValues[1].value;

                // Parsear fecha y hora
                const year = dateHour.substring(0, 4);
                const month = dateHour.substring(4, 6);
                const day = dateHour.substring(6, 8);
                const hour = dateHour.substring(8, 10);

                const eventDate = new Date(
                    parseInt(year),
                    parseInt(month) - 1,
                    parseInt(day),
                    parseInt(hour)
                );

                // Calcular tiempo relativo
                const now = new Date();
                const diffMs = now - eventDate;
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

                let timeString;
                if (diffMinutes < 60) {
                    timeString = `Hace ${diffMinutes} minutos`;
                } else if (diffHours < 24) {
                    timeString = `Hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
                } else {
                    timeString = `Hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
                }

                // Formatear nombre del evento para mostrar
                let displayName;
                switch (eventName) {
                    case 'cv_download':
                        displayName = 'Descarga de CV';
                        break;
                    case 'project_view':
                        displayName = 'Vista de proyecto';
                        break;
                    case 'contact_click':
                        displayName = 'Clic en contacto';
                        break;
                    default:
                        displayName = eventName.replace(/_/g, ' ');
                        // Capitalize first letter of each word
                        displayName = displayName
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');
                }

                events.push({
                    name: displayName,
                    time: timeString
                });
            }
        }

        return events;
    } catch (error) {
        console.error('Error al obtener eventos recientes:', error);
        return [];
    }
}

/**
 * Obtener estadísticas de páginas
 */
async function getPageStats() {
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'pagePath',
                },
                {
                    name: 'pageTitle',
                }
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
            orderBys: [
                {
                    metric: {
                        metricName: 'screenPageViews',
                    },
                    desc: true
                }
            ],
            limit: 10
        });

        // Formatear estadísticas de páginas
        const pageStats = [];
        if (response.rows) {
            for (const row of response.rows) {
                const path = row.dimensionValues[0].value;
                const title = row.dimensionValues[1].value;
                const visits = parseInt(row.metricValues[0].value);

                pageStats.push({
                    path,
                    title,
                    visits
                });
            }
        }

        return pageStats;
    } catch (error) {
        console.error('Error al obtener estadísticas de páginas:', error);
        return [];
    }
}

/**
 * Obtener estadísticas de interacciones de proyectos
 */
async function getProjectInteractionStats() {
    try {
        // Obtener vistas de proyectos
        const [viewsResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'customEvent:project_id',
                },
                {
                    name: 'customEvent:project_name',
                }
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'pagePath',
                    stringFilter: {
                        matchType: 'BEGINS_WITH',
                        value: '/proyecto/'
                    }
                }
            },
            orderBys: [
                {
                    metric: {
                        metricName: 'screenPageViews',
                    },
                    desc: true
                }
            ],
            limit: 5
        });

        // Obtener interacciones de proyectos
        const [interactionsResponse] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'customEvent:project_id',
                }
            ],
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
            dimensionFilter: {
                filter: {
                    fieldName: 'eventName',
                    stringFilter: {
                        value: 'project_interaction'
                    }
                }
            },
            orderBys: [
                {
                    dimension: {
                        dimensionName: 'customEvent:project_id',
                    }
                }
            ]
        });

        // Crear mapa de interacciones por ID de proyecto
        const interactionMap = {};
        if (interactionsResponse.rows) {
            for (const row of interactionsResponse.rows) {
                const projectId = row.dimensionValues[0].value;
                const interactions = parseInt(row.metricValues[0].value);
                interactionMap[projectId] = interactions;
            }
        }

        // Combinar datos
        const projectStats = [];
        if (viewsResponse.rows) {
            for (const row of viewsResponse.rows) {
                const id = row.dimensionValues[0].value;
                const title = row.dimensionValues[1].value;
                const views = parseInt(row.metricValues[0].value);
                const interactions = interactionMap[id] || 0;

                projectStats.push({
                    id,
                    title,
                    views,
                    interactions
                });
            }
        }

        return projectStats;
    } catch (error) {
        console.error('Error al obtener estadísticas de interacciones de proyectos:', error);
        return [];
    }
}

/**
 * Endpoint para obtener visitantes
 */
router.get('/visitors', async (req, res) => {
    try {
        const visitorStats = await getVisitorStats();
        res.json(visitorStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de visitantes:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de visitantes' });
    }
});

/**
 * Endpoint para obtener páginas vistas
 */
router.get('/page-views', async (req, res) => {
    try {
        const pageViewStats = await getPageViewStats();
        res.json(pageViewStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de páginas vistas:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de páginas vistas' });
    }
});

/**
 * Endpoint para obtener proyectos
 */
router.get('/projects', async (req, res) => {
    try {
        const projectStats = await getProjectStats();
        res.json(projectStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de proyectos:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de proyectos' });
    }
});

/**
 * Endpoint para obtener descargas de CV
 */
router.get('/cv-downloads', async (req, res) => {
    try {
        const cvDownloadStats = await getCvDownloadStats();
        res.json(cvDownloadStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de descargas de CV:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de descargas de CV' });
    }
});

/**
 * Endpoint para obtener eventos recientes
 */
router.get('/recent-events', async (req, res) => {
    try {
        const recentEvents = await getRecentEvents();
        res.json(recentEvents);
    } catch (error) {
        console.error('Error al obtener eventos recientes:', error);
        res.status(500).json({ error: 'Error al obtener eventos recientes' });
    }
});

/**
 * Endpoint para obtener estadísticas de páginas
 */
router.get('/page-stats', async (req, res) => {
    try {
        const pageStats = await getPageStats();
        res.json(pageStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de páginas:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de páginas' });
    }
});

/**
 * Endpoint para obtener estadísticas de interacciones de proyectos
 */
router.get('/project-interactions', async (req, res) => {
    try {
        const projectStats = await getProjectInteractionStats();
        res.json(projectStats);
    } catch (error) {
        console.error('Error al obtener estadísticas de interacciones de proyectos:', error);
        res.status(500).json({ error: 'Error al obtener estadísticas de interacciones de proyectos' });
    }
});

module.exports = router;