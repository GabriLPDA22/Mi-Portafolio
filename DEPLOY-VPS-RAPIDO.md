# 🚀 Despliegue Rápido en VPS (Ya tienes VPS)

Guía rápida para reemplazar tu sitio Vue por Next.js en tu VPS existente.

---

## ✅ Opción 1: Subir Archivos Directamente (MÁS FÁCIL)

### Paso 1: Preparar el Build Localmente

```bash
# En tu máquina local
cd mi-portafolio

# Build de producción
npm run build

# Esto crea la carpeta .next/ optimizada
```

### Paso 2: Conectar por SFTP/FTP

**Usa un cliente SFTP como:**
- **FileZilla** (gratis, fácil)
- **WinSCP** (Windows)
- **Cyberduck** (Mac/Windows)
- **VS Code** con extensión SFTP

**Datos de conexión:**
- **Host**: IP de tu VPS o dominio
- **Usuario**: `root` o tu usuario
- **Puerto**: `22` (SFTP) o `21` (FTP)
- **Contraseña**: Tu contraseña del VPS

### Paso 3: Subir Archivos

**Navega a la carpeta donde estaba tu sitio Vue** (probablemente `/var/www/html` o `/var/www/tu-dominio`)

**Sube estos archivos/carpetas:**
```
📁 .next/              (carpeta completa del build)
📁 public/             (carpeta completa con imágenes)
📁 node_modules/       (OPCIONAL - mejor instalar en servidor)
📄 package.json
📄 package-lock.json
📄 next.config.js
📄 server.js           (nuevo archivo para Next.js)
📄 tsconfig.json
```

**⚠️ IMPORTANTE:** 
- Si ya tienes archivos de Vue ahí, **haz backup primero** o súbelos a otra carpeta
- O mejor: crea una nueva carpeta como `/var/www/gabrielcodes-dev` y prueba ahí primero

### Paso 4: Conectarte por SSH (Solo para instalar dependencias)

```bash
ssh root@tu-ip-vps
# o
ssh tu-usuario@tu-ip-vps
```

### Paso 5: Instalar Dependencias en el VPS

```bash
# Ir a la carpeta donde subiste los archivos
cd /var/www/html  # o donde esté tu sitio

# Instalar dependencias de producción
npm install --production

# Verificar que Node.js esté instalado
node --version
npm --version
```

### Paso 6: Configurar PM2 (Si no lo tienes)

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar la aplicación
pm2 start server.js --name portfolio

# Guardar configuración para que se inicie automáticamente
pm2 save
pm2 startup
```

### Paso 7: Configurar Nginx (Actualizar configuración)

```bash
# Editar configuración de Nginx
sudo nano /etc/nginx/sites-available/gabrielcodes.dev
```

**Reemplaza la configuración de Vue por esta:**

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
# Verificar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx
```

### Paso 8: Verificar que Funciona

```bash
# Ver logs de PM2
pm2 logs portfolio

# Ver estado
pm2 status
```

Visita `http://gabrielcodes.dev` y debería funcionar.

---

## 🔄 Opción 2: Usar Git (Más Profesional)

Si prefieres usar Git (recomendado para actualizaciones futuras):

### Paso 1: Subir Código a GitHub/GitLab

```bash
# En tu máquina local
git init
git add .
git commit -m "Initial commit"
git remote add origin tu-repo-url
git push -u origin main
```

### Paso 2: En el VPS

```bash
# Conectarte por SSH
ssh root@tu-ip-vps

# Ir a la carpeta del sitio
cd /var/www

# Clonar el repositorio
git clone tu-repo-url gabrielcodes-dev

# Entrar a la carpeta
cd gabrielcodes-dev

# Instalar dependencias
npm install --production

# Build en el servidor (o hacerlo local y subir .next/)
npm run build

# Iniciar con PM2
pm2 start server.js --name portfolio
pm2 save
```

**Ventaja:** Para actualizar, solo haces `git pull` y `pm2 restart portfolio`

---

## 📋 Checklist Rápido

- [ ] Build hecho localmente (`npm run build`)
- [ ] Archivos subidos por SFTP/FTP
- [ ] Dependencias instaladas en VPS (`npm install --production`)
- [ ] PM2 configurado (`pm2 start server.js`)
- [ ] Nginx actualizado (proxy a puerto 3000)
- [ ] Nginx recargado (`sudo systemctl reload nginx`)
- [ ] Sitio funcionando en el navegador

---

## 🔧 Comandos Útiles PM2

```bash
# Ver logs en tiempo real
pm2 logs portfolio

# Reiniciar aplicación
pm2 restart portfolio

# Detener aplicación
pm2 stop portfolio

# Ver estado
pm2 status

# Eliminar aplicación
pm2 delete portfolio
```

---

## 🐛 Si Algo No Funciona

### El sitio no carga
```bash
# Verificar que PM2 está corriendo
pm2 status

# Ver logs de errores
pm2 logs portfolio --err

# Verificar que el puerto 3000 está en uso
netstat -tulpn | grep 3000
```

### Error "Cannot find module"
```bash
# Reinstalar dependencias
cd /var/www/tu-carpeta
rm -rf node_modules
npm install --production
pm2 restart portfolio
```

### Nginx da error 502
- Verifica que PM2 está corriendo: `pm2 status`
- Verifica que el puerto en Nginx coincide con el de PM2 (3000)
- Revisa logs de Nginx: `sudo tail -f /var/log/nginx/error.log`

---

## 🚀 Actualizaciones Futuras

**Método rápido (subir archivos):**
1. Hacer build local: `npm run build`
2. Subir carpeta `.next/` nueva por SFTP
3. En VPS: `pm2 restart portfolio`

**Método con Git:**
1. Hacer cambios y commit
2. Push a GitHub
3. En VPS: `git pull && npm run build && pm2 restart portfolio`

---

## ✅ Resultado

Tu portfolio Next.js estará funcionando en:
- `https://gabrielcodes.dev`
- Reemplazando tu sitio Vue anterior

¡Listo! 🎉

