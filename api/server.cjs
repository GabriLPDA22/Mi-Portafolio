// api/server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import analyticsRouter from './analytics-api.js';

// Crear aplicación Express
const app = express();

// Habilitar CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
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
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en el puerto ${PORT}`);
});