<template>
  <div class="min-h-screen pt-6 pb-16">
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-7xl mx-auto">
        <!-- Encabezado con navegación -->
        <div class="glass-card p-6 sm:p-8 mb-8">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center mb-2">
                <router-link to="/" class="flex items-center group">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20">
                    <span class="text-xl font-bold text-white">GS</span>
                  </div>
                  <span class="ml-2 text-white font-semibold text-xl">Gabriel Saiz</span>
                </router-link>
              </div>
              <h1 class="text-2xl sm:text-3xl font-bold text-white">Panel de Estadísticas</h1>
              <p class="text-zinc-400 mt-2">Estadísticas en tiempo real de tu portafolio</p>
            </div>
            <div class="flex items-center gap-3">
              <div :class="`px-3 py-1 rounded-full ${isLoading ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'} flex items-center gap-2`">
                <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                <span>{{ isLoading ? 'Cargando datos...' : 'Conectado a GA4' }}</span>
              </div>
              <button @click="refreshData" class="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <router-link to="/" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Volver al Inicio
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Estado de error -->
        <div v-if="error" class="glass-card p-6 sm:p-8 mb-8 text-center">
          <div class="text-red-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 class="text-xl font-semibold">No se pudieron cargar los datos</h2>
          </div>
          <p class="text-zinc-400 mb-6">{{ errorMessage }}</p>
          <button @click="refreshData" 
            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            Intentar de nuevo
          </button>
        </div>
        
        <!-- Resumen de estadísticas -->
        <StatsCards 
          v-if="!error"
          :stats="stats" 
          :is-loading="isLoading" 
        />
        
        <!-- Gráficos y tablas -->
        <div v-if="!error" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Gráfico de visitas por página -->
          <ChartCard 
            title="Páginas más visitadas" 
            :is-loading="isLoading"
            chart-id="pageViewsChart" 
            @render="renderPageViewsChart" 
          />
          
          <!-- Gráfico de interacciones por proyecto -->
          <ChartCard 
            title="Interacciones por proyecto" 
            :is-loading="isLoading"
            chart-id="projectInteractionsChart" 
            @render="renderProjectInteractionsChart" 
          />
        </div>
        
        <!-- Eventos y descargas -->
        <div v-if="!error" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Eventos recientes -->
          <EventsTable 
            title="Eventos recientes" 
            :events="stats.recentEvents" 
            :is-loading="isLoading" 
          />
          
          <!-- Descargas de CV -->
          <CvDownloadsCard 
            title="Descargas de CV" 
            :cv-downloads="stats.cvDownloads" 
            :is-loading="isLoading" 
          />
        </div>
        
        <!-- Información de conexión -->
        <div v-if="!error" class="mt-8 glass-card p-6">
          <h3 class="text-lg font-medium text-white mb-4">Conexión con Google Analytics</h3>
          <div class="flex flex-wrap items-start gap-4">
            <div class="flex-1">
              <p class="text-zinc-400 mb-2">
                Este dashboard se conecta directamente con Google Analytics 4 para mostrar estadísticas en tiempo real.
              </p>
              <p class="text-zinc-500 text-sm">
                Última actualización: {{ new Date().toLocaleString() }}
              </p>
            </div>
            <a 
              :href="`https://analytics.google.com/analytics/web/#/p${propertyId.replace('G-', '')}/reports/intelligenthome`" 
              target="_blank"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              Abrir Analytics
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { loadCharts } from '@/services/chartService';
import { getAnalyticsData } from '@/services/analyticsService';
import StatsCards from '@/components/dashboard/StatsCards.vue';
import ChartCard from '@/components/dashboard/ChartCard.vue';
import EventsTable from '@/components/dashboard/EventsTable.vue';
import CvDownloadsCard from '@/components/dashboard/CvDownloadsCard.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    StatsCards,
    ChartCard,
    EventsTable,
    CvDownloadsCard
  },
  setup() {
    // Estado reactivo
    const isLoading = ref(true);
    const error = ref(false);
    const errorMessage = ref('');
    const propertyId = ref('G-CEDV9NP2WJ');
    const googleChartsLoaded = ref(false);
    const stats = ref({
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
    });

    // Método para cargar Google Charts
    const loadGoogleCharts = async () => {
      try {
        await loadCharts();
        googleChartsLoaded.value = true;
        return true;
      } catch (err) {
        console.error('Error loading Google Charts:', err);
        error.value = true;
        errorMessage.value = 'No se pudo cargar Google Charts. Por favor, verifica tu conexión a internet.';
        return false;
      }
    };

    // Método para obtener datos de Analytics
    const fetchAnalyticsData = async () => {
      isLoading.value = true;
      error.value = false;
      
      try {
        // Simular datos si estamos en desarrollo y no hay API
        if (process.env.NODE_ENV === 'development' && !window.location.hostname.includes('api')) {
          await new Promise(resolve => setTimeout(resolve, 1500)); // Simular latencia
          
          stats.value = {
            visitors: {
              total: 152,
              change: 12.5
            },
            pageViews: {
              total: 478,
              change: 8.3
            },
            projects: {
              total: 89,
              change: 15.2
            },
            cvDownloads: {
              total: 37,
              change: 22.0,
              goal: 100,
              percentage: 37
            },
            pageStats: [
              { path: '/', title: 'Inicio', visits: 254 },
              { path: '/proyecto/2', title: 'Elixium Foods', visits: 86 },
              { path: '/proyecto/1', title: 'Sistema Cine', visits: 64 },
              { path: '/proyecto/3', title: 'BurgerVibes', visits: 45 },
              { path: '/sobre-mi', title: 'Sobre Mí', visits: 29 }
            ],
            projectStats: [
              { id: '2', title: 'Elixium Foods', views: 86, interactions: 42 },
              { id: '1', title: 'Sistema Cine', views: 64, interactions: 28 },
              { id: '3', title: 'BurgerVibes', views: 45, interactions: 19 },
              { id: '5', title: 'Portfolio Personal', views: 23, interactions: 11 },
              { id: '4', title: 'CoreEvo Gym', views: 18, interactions: 7 }
            ],
            recentEvents: [
              { name: 'Vista de proyecto', time: 'Hace 10 minutos' },
              { name: 'Descarga de CV', time: 'Hace 2 horas' },
              { name: 'Clic en contacto', time: 'Hace 3 horas' },
              { name: 'Vista de proyecto', time: 'Hace 5 horas' },
              { name: 'Descarga de CV', time: 'Hace 1 día' }
            ]
          };
        } else {
          // Obtener datos reales de la API
          const analyticsData = await getAnalyticsData();
          stats.value = analyticsData;
        }
        
        if (googleChartsLoaded.value) {
          renderCharts();
        }
        
        isLoading.value = false;
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        error.value = true;
        errorMessage.value = 'No se pudieron cargar los datos de Analytics. Por favor, intenta de nuevo más tarde.';
        isLoading.value = false;
      }
    };

    // Método para renderizar los gráficos
    const renderCharts = () => {
      if (!googleChartsLoaded.value || isLoading.value) return;
      renderPageViewsChart();
      renderProjectInteractionsChart();
    };

    // Método para renderizar el gráfico de páginas vistas
    const renderPageViewsChart = () => {
      if (!window.google || !window.google.visualization || isLoading.value) return;
      
      try {
        const pageData = new window.google.visualization.DataTable();
        pageData.addColumn('string', 'Página');
        pageData.addColumn('number', 'Visitas');
        
        stats.value.pageStats.forEach(page => {
          pageData.addRow([page.title, page.visits]);
        });
        
        const options = {
          backgroundColor: 'transparent',
          colors: ['#6366f1', '#8b5cf6', '#ec4899'],
          fontSize: 12,
          fontName: 'Inter',
          legend: { position: 'bottom', textStyle: { color: '#d4d4d8' } },
          titleTextStyle: { color: '#ffffff' },
          hAxis: { textStyle: { color: '#d4d4d8' } },
          vAxis: { textStyle: { color: '#d4d4d8' }, gridlines: { color: '#27272a' } },
          chartArea: { width: '80%', height: '70%' }
        };
        
        const chartElement = document.getElementById('pageViewsChart');
        if (chartElement) {
          const chart = new window.google.visualization.ColumnChart(chartElement);
          chart.draw(pageData, options);
        }
      } catch (err) {
        console.error('Error rendering page views chart:', err);
      }
    };

    // Método para renderizar el gráfico de interacciones de proyectos
    const renderProjectInteractionsChart = () => {
      if (!window.google || !window.google.visualization || isLoading.value) return;
      
      try {
        const projectData = new window.google.visualization.DataTable();
        projectData.addColumn('string', 'Proyecto');
        projectData.addColumn('number', 'Vistas');
        projectData.addColumn('number', 'Interacciones');
        
        stats.value.projectStats.forEach(project => {
          projectData.addRow([project.title, project.views, project.interactions]);
        });
        
        const options = {
          backgroundColor: 'transparent',
          colors: ['#6366f1', '#8b5cf6'],
          fontSize: 12,
          fontName: 'Inter',
          legend: { position: 'bottom', textStyle: { color: '#d4d4d8' } },
          titleTextStyle: { color: '#ffffff' },
          hAxis: { textStyle: { color: '#d4d4d8' } },
          vAxis: { textStyle: { color: '#d4d4d8' }, gridlines: { color: '#27272a' } },
          chartArea: { width: '80%', height: '70%' },
          isStacked: false
        };
        
        const chartElement = document.getElementById('projectInteractionsChart');
        if (chartElement) {
          const chart = new window.google.visualization.ColumnChart(chartElement);
          chart.draw(projectData, options);
        }
      } catch (err) {
        console.error('Error rendering project interactions chart:', err);
      }
    };

    // Método para refrescar datos
    const refreshData = async () => {
      if (!googleChartsLoaded.value) {
        const success = await loadGoogleCharts();
        if (!success) return;
      }
      fetchAnalyticsData();
    };

    // Ciclo de vida del componente
    onMounted(async () => {
      // Cambiar título de la página
      document.title = 'Dashboard - Portafolio de Gabriel Saiz';
      
      // Cargar Google Charts y datos
      await loadGoogleCharts();
      fetchAnalyticsData();
    });

    // Exportar variables y métodos
    return {
      isLoading,
      error,
      errorMessage,
      propertyId,
      stats,
      refreshData,
      renderPageViewsChart,
      renderProjectInteractionsChart
    };
  }
});
</script>

<style scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>