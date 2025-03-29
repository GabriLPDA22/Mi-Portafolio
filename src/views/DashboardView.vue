<template>
  <div class="min-h-screen pt-20 pb-16">
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Encabezado -->
        <div class="glass-card p-6 sm:p-8 mb-8">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
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
            </div>
          </div>
        </div>
        
        <!-- Resumen -->
        <StatsCards 
          :stats="stats" 
          :isLoading="isLoading" 
        />
        
        <!-- Gráficos y tablas -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Gráfico de visitas por página -->
          <ChartCard 
            title="Páginas más visitadas" 
            :isLoading="isLoading"
            chartId="pageViewsChart" 
            @render="renderPageViewsChart" 
          />
          
          <!-- Gráfico de interacciones por proyecto -->
          <ChartCard 
            title="Interacciones por proyecto" 
            :isLoading="isLoading"
            chartId="projectInteractionsChart" 
            @render="renderProjectInteractionsChart" 
          />
        </div>
        
        <!-- Eventos y descargas -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Eventos recientes -->
          <EventsTable 
            title="Eventos recientes" 
            :events="stats.recentEvents" 
            :isLoading="isLoading" 
          />
          
          <!-- Descargas de CV -->
          <CvDownloadsCard 
            title="Descargas de CV" 
            :cvDownloads="stats.cvDownloads" 
            :isLoading="isLoading" 
          />
        </div>
        
        <!-- Información de conexión -->
        <div class="mt-8 glass-card p-6">
          <h3 class="text-lg font-medium text-white mb-4">Conexión con Google Analytics</h3>
          <div class="flex flex-wrap items-start gap-4">
            <div class="flex-1">
              <p class="text-zinc-400 mb-2">
                Este dashboard se conecta directamente con Google Analytics 4 para mostrar estadísticas en tiempo real.
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
import { defineComponent, onMounted, ref } from 'vue';
import { useTitle } from '@vueuse/core';
import { loadCharts } from '@/services/chartService';
import { getAnalyticsData } from '@/services/analyticsService';
import StatsCards from '../components/dashboard/StatsCards.vue';
import ChartCard from '../components/dashboard/ChartCard.vue';
import EventsTable from '../components/dashboard/EventsTable.vue';
import CvDownloadsCard from '../components/dashboard/CvDownloadsCard.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    StatsCards,
    ChartCard,
    EventsTable,
    CvDownloadsCard
  },
  setup() {
    // Título de la página
    useTitle('Dashboard - Portafolio');
    
    // Estado reactivo
    const isLoading = ref(true);
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
      } catch (error) {
        console.error('Error loading Google Charts:', error);
      }
    };

    // Método para obtener datos de Analytics
    const fetchAnalyticsData = async () => {
      isLoading.value = true;
      
      try {
        const analyticsData = await getAnalyticsData();
        stats.value = analyticsData;
        
        if (googleChartsLoaded.value) {
          renderCharts();
        }
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
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
      if (!window.google || isLoading.value) return;
      
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
    };

    // Método para renderizar el gráfico de interacciones de proyectos
    const renderProjectInteractionsChart = () => {
      if (!window.google || isLoading.value) return;
      
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
    };

    // Método para refrescar datos
    const refreshData = () => {
      fetchAnalyticsData();
    };

    // Ciclo de vida del componente
    onMounted(() => {
      loadGoogleCharts();
      fetchAnalyticsData();
    });

    // Exportar variables y métodos
    return {
      isLoading,
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