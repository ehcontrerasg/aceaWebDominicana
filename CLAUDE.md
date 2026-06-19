# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción del proyecto

Sitio web estático de **Acea Dominicana** — copiado originalmente con HTTrack desde `aceadominicana.com` en mayo 2020. Es una landing page corporativa sin framework de backend ni sistema de build automatizado.

## Estructura

```
www/          — raíz del sitio web público
  index.html  — página principal
  css/        — estilos (CSS compilado + style.less como fuente)
  js/         — jQuery, plugins y app.js
  images/     — SVGs e imágenes
  font/       — fuentes de Fontello (iconos)
special/      — herramienta de estadísticas Awstats
```

## Desarrollo

Este es un sitio estático. No hay proceso de build, servidor de desarrollo ni gestión de dependencias. Para trabajar:

- **CSS**: editar `www/css/style.less` y compilar manualmente a `www/css/style.css` con un compilador LESS (ej. `lessc www/css/style.less www/css/style.css`)
- **JS**: `www/js/app.js` usa jQuery — incluido localmente en `www/js/jquery.min.js`
- **Vista previa**: abrir `www/index.html` directamente en el navegador o servirlo con cualquier servidor HTTP estático (ej. `python3 -m http.server 8080 --directory www`)

## Tecnologías clave

- HTML5 / CSS3 con **LESS** como preprocesador
- **jQuery** + plugin `cycleText` para la animación de texto en el hero
- **Fontello** para los iconos (fuentes e íconos definidos en `css/fontello*`)
- **Animate.css** para animaciones CSS
- `web.config` presente — el sitio se despliega en **IIS (Windows Server)**
