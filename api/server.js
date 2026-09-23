// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const analyticsRouter = require('./analytics-api.js');

// Crear aplicación Express
const app = express();

// Habilitar CORS - Configuración para producción
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://gabrielcodes.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // Caché de preflight por 24 horas
}));

// Middleware para parsear JSON
app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Rutas
app.use('/api/analytics', analyticsRouter);

// Ruta de verificación
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'production',
    ga4PropertyId: process.env.VITE_GA4_PROPERTY_ID || 'no-set'
  });
});

// Manejo de rutas no encontradas
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error de servidor:', err);
  res.status(500).json({ 
    error: 'Error interno del servidor', 
    message: err.message
  });
});

// Puerto
const PORT = process.env.PORT || 3001;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en el puerto ${PORT}`);
});