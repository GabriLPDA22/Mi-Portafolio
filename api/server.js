// api/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const analyticsRouter = require('./analytics-api.js');

// Crear aplicación Express
const app = express();

// Habilitar CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://gabrielcodes.dev',
  credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/analytics', analyticsRouter);

// Ruta de verificación
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error de servidor:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Puerto
const PORT = process.env.PORT || 3001;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en el puerto ${PORT}`);
});