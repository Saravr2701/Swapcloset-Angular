# SwapCloset — Frontend

**SwapCloset** es una aplicación pensada para dar una segunda vida a la ropa mediante el **intercambio y el préstamo de prendas** entre usuarios. Su objetivo es facilitar una forma más accesible y sostenible de renovar el armario.

Este repositorio contiene el **frontend** de la aplicación, desarrollado con Ionic y Angular.

## 🛠️ Tecnologías utilizadas

- **Ionic 9:** componentes e interfaz adaptada a dispositivos móviles.
- **Angular 22:** estructura, componentes y navegación de la aplicación.
- **TypeScript:** lógica del frontend.
- **HTML y SCSS:** estructura y estilos de las pantallas.
- **Ionicons:** iconografía.
- **Capacitor:** configuración para una futura integración móvil.

## Funcionalidades y pantallas

- **Inicio y catálogo:** visualización de prendas organizadas por categorías y estilos.
- **Detalle de prendas:** información e imágenes de cada artículo.
- **Intercambios y préstamos:** pantallas para solicitar prendas y seleccionar el tipo de operación.
- **Chats:** interfaz de conversaciones entre usuarios.
- **Perfil:** información del usuario y listado de sus prendas.
- **Añadir y editar prendas:** formularios para gestionar artículos (algunas acciones son todavía visuales).
- **Recordatorios:** apartado destinado al seguimiento de préstamos e intercambios.
- **Ajustes:** preferencias, incluida la posibilidad de cambiar entre modo claro y oscuro.
- **Acceso:** pantallas de bienvenida, inicio de sesión y registro.

## Estado del proyecto

**En desarrollo.** Actualmente se está trabajando en la interfaz y en la navegación de SwapCloset. Parte de los datos son de ejemplo y algunas acciones, como guardar prendas, seleccionar fotografías o enviar mensajes, aún no están conectadas a un servicio real.

La integración con el backend y la base de datos se realizará en una fase posterior.

## Instalación y ejecución

### Requisitos

- Node.js y npm compatibles con las dependencias del proyecto.
- Git.

### Pasos

1. Clona el repositorio:

   `git clone https://github.com/Saravr2701/Swapcloset-Angular.git`

2. Entra en la carpeta:

   `cd Swapcloset-Angular`

3. Instala las dependencias:

   `npm install`

4. Inicia el servidor de desarrollo:

   `npm start`

5. Abre en el navegador la dirección local que indique la terminal (habitualmente `http://localhost:4200/`).

Si tienes Ionic CLI instalado, también puedes ejecutar `ionic serve`.

## Organización del código

- **src/app/componentes/** — Componentes reutilizables y pantallas auxiliares.
- **src/app/datos/** — Datos de ejemplo para el catálogo y otras vistas.
- **src/app/paginas/** — Pantallas principales de la aplicación.
- **src/app/app.routes.ts** — Rutas y navegación.
- **src/assets/** — Imágenes y recursos.
- **src/theme/** — Variables y estilos del tema.

## Próximos pasos

- Conectar la interfaz con el backend y la base de datos.
- Implementar la autenticación real de usuarios.
- Guardar, modificar y eliminar prendas de forma persistente.
- Habilitar la subida de fotografías.
- Hacer funcionales los chats, las solicitudes y las notificaciones.

---

**SwapCloset** · Dale otra oportunidad a tu ropa.
