Práctica 4 - Clon funcional de Twitter

Este proyecto consiste en el desarrollo de un clon funcional de Twitter utilizando Next.js, consumiendo una API REST externa para la gestión de posts, usuarios, likes y retweets.

Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en local:

1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd twitter_nebrija
2. Instalar dependencias
npm install
3. Arrancar el proyecto
npm run dev

El proyecto estará disponible en:

http://localhost:3000
Estructura de navegación

La aplicación sigue una estructura basada en rutas de Next.js:

Página principal (/)
Muestra el feed de posts.
Incluye:
Listado paginado de publicaciones.
Botones de interacción (like y retweet).
Formulario para crear nuevos posts.
Cada post es clicable y redirige al detalle.
Detalle del post (/post/[id])
Muestra la información completa de un post:
Contenido
Usuario
Interacciones
Permite ver más contexto del post seleccionado.
Perfil (/profile)
Muestra la información del usuario.
Incluye sus publicaciones.
Layout global
Todas las páginas comparten una cabecera común:
Navegación principal
Acceso al perfil
Se utiliza un layout reutilizable para mantener consistencia visual.
Gestión de datos y API

La aplicación llama a a la API proporcionada:

https://backend-p4-klvc.onrender.com



Optimización del rendimiento (SSR / caching).
Mejor gestión de estado global (Context o Zustand).
Diseño responsive más avanzado.
