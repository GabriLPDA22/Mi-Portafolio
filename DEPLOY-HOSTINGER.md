# 🚀 Guía de Despliegue en Hostinger

Guía completa para desplegar tu portfolio Next.js en Hostinger.

---

## 📋 Prerrequisitos

- ✅ Cuenta de Hostinger activa
- ✅ Dominio configurado (`gabrielcodes.dev`)
- ✅ Acceso SSH o panel de control de Hostinger
- ✅ Node.js instalado localmente (para el build)

---

## 🔧 Opción 1: Hosting Compartido con Node.js (Recomendado)

### Paso 1: Preparar el Build

```bash
# En tu máquina local
cd mi-portafolio

# Instalar dependencias (si no lo has hecho)
npm install

# Crear build de producción
npm run build

# Esto creará la carpeta .next/ con los archivos optimizados
```

### Paso 2: Subir Archivos a Hostinger

1. **Accede al File Manager de Hostinger**
   - Ve a tu panel de control de Hostinger
   - Abre "File Manager" o "Administrador de archivos"

2. **Navega a la carpeta de tu dominio**
   - Ve a `public_html` o `domains/gabrielcodes.dev/public_html`

3. **Sube los siguientes archivos y carpetas:**
   ```
   📁 .next/          (carpeta completa del build)
   📁 public/         (carpeta completa con imágenes)
   📁 node_modules/   (carpeta completa - OPCIONAL, ver nota abajo)
   📄 package.json
   📄 package-lock.json
   📄 next.config.js
   📄 tsconfig.json
   📄 .env.local      (si tienes variables de entorno)
   ```

   **⚠️ Nota sobre node_modules:**
   - Opción A: Subir `node_modules` (más rápido, pero ocupa mucho espacio)
   - Opción B: Subir solo `package.json` y ejecutar `npm install` en el servidor (recomendado)

### Paso 3: Configurar Node.js en Hostinger

1. **Accede a Node.js en el panel de Hostinger**
   - Ve a "Node.js" en el panel de control
   - Si no lo ves, puede que necesites activarlo o usar un plan superior

2. **Configura la aplicación:**
   - **Node.js Version**: Selecciona la versión más reciente (18.x o 20.x)
   - **Application Root**: `/public_html` o `/domains/gabrielcodes.dev/public_html`
   - **Application URL**: `gabrielcodes.dev` o `www.gabrielcodes.dev`
   - **Application Startup File**: `server.js` (necesitarás crearlo, ver abajo)

### Paso 4: Crear server.js

Crea un archivo `server.js` en la raíz de tu proyecto (junto a `package.json`):

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

**Sube este archivo a Hostinger también.**

### Paso 5: Instalar Dependencias en el Servidor

**Opción A: Por SSH (si tienes acceso)**
```bash
ssh tu-usuario@tu-servidor-hostinger.com
cd public_html  # o la ruta de tu dominio
npm install --production
```

**Opción B: Por Terminal en el Panel de Hostinger**
- Ve a "Terminal" o "SSH" en el panel
- Ejecuta los mismos comandos

**Opción C: Si no tienes SSH**
- Sube la carpeta `node_modules` completa desde tu máquina local

### Paso 6: Configurar Variables de Entorno

1. Crea un archivo `.env.local` en la raíz:
```env
NODE_ENV=production
PORT=3000
```

2. Si usas variables de entorno para Formspree u otros servicios, añádelas aquí.

### Paso 7: Iniciar la Aplicación

En el panel de Node.js de Hostinger:
- Haz clic en "Start" o "Restart" en tu aplicación Node.js
- Verifica que el estado sea "Running"

---

## 🌐 Opción 2: VPS Hostinger (Más Control)

Si tienes un VPS en Hostinger, el proceso es más flexible:

### Paso 1: Conectar por SSH

```bash
ssh root@tu-ip-hostinger
```

### Paso 2: Instalar Node.js (si no está instalado)

```bash
# Instalar Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

### Paso 3: Instalar PM2 (Process Manager)

```bash
npm install -g pm2
```

### Paso 4: Clonar o Subir tu Proyecto

```bash
cd /var/www
git clone tu-repo.git mi-portafolio
# O sube los archivos por SFTP
```

### Paso 5: Instalar y Build

```bash
cd mi-portafolio
npm install
npm run build
```

### Paso 6: Iniciar con PM2

```bash
# Crear ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/mi-portafolio',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Iniciar aplicación
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Paso 7: Configurar Nginx (Proxy Reverso)

```bash
sudo nano /etc/nginx/sites-available/gabrielcodes.dev
```

Añade esta configuración:

```nginx
server {
    listen 80;
    server_name gabrielcodes.dev www.gabrielcodes.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/gabrielcodes.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Paso 8: Configurar SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d gabrielcodes.dev -d www.gabrielcodes.dev
```

---

## 🔄 Opción 3: Static Export (Alternativa Simple)

Si Hostinger no soporta Node.js bien, puedes hacer un static export:

### Paso 1: Modificar next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necesario para static export
  },
};

module.exports = nextConfig;
```

### Paso 2: Build Static

```bash
npm run build
```

Esto creará una carpeta `out/` con archivos HTML estáticos.

### Paso 3: Subir a Hostinger

1. Sube todo el contenido de la carpeta `out/` a `public_html`
2. ¡Listo! Funciona como un sitio estático normal.

**⚠️ Limitaciones del static export:**
- No funciona `getServerSideProps`
- No funciona API routes
- El formulario de contacto seguirá funcionando (usa Formspree que es externo)

---

## ✅ Verificación Post-Despliegue

### 1. Verificar que el sitio carga
- Visita `https://gabrielcodes.dev`
- Verifica que todas las secciones se muestran correctamente

### 2. Verificar Sitemap y Robots
- `https://gabrielcodes.dev/sitemap.xml` ✅
- `https://gabrielcodes.dev/robots.txt` ✅

### 3. Verificar Formulario
- Prueba enviar un mensaje desde el formulario de contacto
- Verifica que llega a tu email de Formspree

### 4. Verificar Performance
- Usa [PageSpeed Insights](https://pagespeed.web.dev/)
- Verifica Core Web Vitals

---

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module 'next'"
**Solución:** Ejecuta `npm install` en el servidor

### Error: "Port 3000 already in use"
**Solución:** Cambia el puerto en `.env.local` o en la configuración de Node.js

### El sitio carga pero las imágenes no aparecen
**Solución:** Verifica que la carpeta `public/` esté en la raíz y que las rutas sean correctas

### Error 500 Internal Server Error
**Solución:** 
- Revisa los logs en el panel de Hostinger
- Verifica que `node_modules` esté completo
- Asegúrate de que `NODE_ENV=production`

### El sitio es muy lento
**Solución:**
- Considera usar un CDN (Cloudflare)
- Habilita compresión gzip en el servidor
- Optimiza las imágenes antes de subirlas

---

## 📝 Checklist Final

- [ ] Build de producción creado (`npm run build`)
- [ ] Archivos subidos a Hostinger (`.next/`, `public/`, `package.json`, `server.js`)
- [ ] Node.js configurado en el panel de Hostinger
- [ ] `server.js` subido a la raíz del proyecto
- [ ] Dependencias instaladas en el servidor (`npm install --production`)
- [ ] Variables de entorno configuradas (`.env.local` o en el panel)
- [ ] Aplicación iniciada en el panel de Node.js
- [ ] Dominio apuntando correctamente (DNS configurado)
- [ ] SSL/HTTPS configurado (Let's Encrypt o Cloudflare)
- [ ] Sitemap accesible (`/sitemap.xml`)
- [ ] Robots.txt accesible (`/robots.txt`)
- [ ] Formulario funcionando (prueba de envío)
- [ ] Sitio cargando correctamente en todos los dispositivos

---

## 🚀 Recomendaciones Adicionales

### 1. Configurar Cloudflare (Opcional pero Recomendado)
- Mejora el rendimiento
- Protección DDoS gratuita
- SSL automático
- CDN global

### 2. Monitoreo
- Configura Google Analytics
- Usa Google Search Console
- Monitorea uptime (UptimeRobot, Pingdom)

### 3. Backups
- Haz backups regulares de tu código
- Hostinger suele hacer backups automáticos, pero verifica

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en el panel de Hostinger
2. Contacta con el soporte de Hostinger
3. Verifica la documentación de Next.js para deployment

---

## 🎯 Resultado Esperado

Una vez completado, tu portfolio estará disponible en:
- **Producción**: `https://gabrielcodes.dev`
- **Sitemap**: `https://gabrielcodes.dev/sitemap.xml`
- **Robots**: `https://gabrielcodes.dev/robots.txt`

¡Tu portfolio estará en vivo! 🎉

