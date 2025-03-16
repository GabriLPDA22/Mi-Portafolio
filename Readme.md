# Gabriel Codes - Portfolio Personal

Este es mi portfolio personal creado con Vue.js y TailwindCSS. La página muestra información sobre mí, mis proyectos, experiencia, formación y habilidades.

## Características

- Diseño moderno y profesional
- Modo oscuro por defecto con temas de colores atractivos
- Interfaz totalmente responsive
- Animaciones suaves y transiciones elegantes
- Secciones organizadas para presentar contenido de manera clara

## Tecnologías utilizadas

- Vue.js 3 (Composition API)
- TailwindCSS
- FontAwesome
- Intersection Observer API para animaciones de scroll
- Vue Router para navegación fluida

## Estructura del proyecto

```
src/
├── assets/           # Recursos estáticos (imágenes, estilos)
├── components/       # Componentes Vue
│   ├── home/         # Componentes de secciones principales
│   ├── layout/       # Componentes de estructura (header, footer)
│   └── ui/           # Componentes reutilizables
├── data/             # Datos en formato JSON/JS
├── router/           # Configuración de rutas
├── views/            # Vistas principales
├── App.vue           # Componente raíz
└── main.js           # Punto de entrada
```

## Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Clonar este repositorio
```bash
git clone https://github.com/GabriLPDA22/portfolio.git
cd portfolio
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```

3. Iniciar servidor de desarrollo
```bash
npm run serve
# o
yarn serve
```

4. Compilar para producción
```bash
npm run build
# o
yarn build
```

## Personalización

Para personalizar este portfolio con tu información:

1. Modifica los archivos en la carpeta `src/data/` para actualizar:
   - Proyectos
   - Experiencia
   - Educación
   - Habilidades

2. Reemplaza las imágenes en `public/img/`

3. Actualiza los enlaces de contacto en los componentes correspondientes

## Despliegue

Este proyecto está configurado para ser desplegado en cualquier servicio de hosting estático como:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Licencia

Este proyecto está bajo la licencia MIT.

---

Creado por Gabriel Saiz - [gabrielcodes.dev](https://gabrielcodes.dev)