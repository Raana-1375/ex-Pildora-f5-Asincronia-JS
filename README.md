# Formative Píldora: JavaScript Asynchrony 

Este repositorio contiene el código práctico utilizado para la sesión de la píldora formativa sobre **Asincronía en JavaScript**. El objetivo principal es demostrar visualmente cómo operan los flujos de trabajo asíncronos y mostrar la evolución desde los Callbacks tradicionales hasta las Promises y Async/Await modernos.

---

## 📝 Descripción del Tema

La asincronía permite que JavaScript realice operaciones de larga duración (como peticiones HTTP o temporizadores) en segundo plano. Esto evita que se bloquee el hilo de ejecución principal y mantiene la interfaz de usuario fluida.

En este proyecto, utilizamos la **Analogía de un Restaurante**:
1. **Callbacks (El enfoque antiguo):** El camarero deja el pedido en la cocina y sigue trabajando, pero el orden de ejecución puede volverse caótico en la consola (`1 -> 3 -> 2`).
2. **Promoción a Promises con Async/Await (El enfoque moderno):** Optimizamos el código para mantener un flujo ordenado y secuencial (`1 -> 2 -> 3`) utilizando la sintaxis moderna, sin congelar el navegador.

---

##  Estructura del Proyecto

```text
├── index.html   # Estructura HTML básica para ejecutar el script en el navegador
└── main.js      # Código fuente de la demostración en vivo (Callbacks y Async/Await)

Pasos para Ejecutar el Proyecto
Siga estos sencillos pasos para descargar y ejecutar este proyecto en su entorno local:

Clonar el repositorio:git clone <tu-url-del-repositorio>
brir el proyecto:

Abra la carpeta del proyecto en su editor de código (por ejemplo, Visual Studio Code).

Ejecutar en el navegador:

Abra el archivo index.html directamente en su navegador web.

Abra la consola de desarrollador (F12 o clic derecho -> Inspeccionar -> Consola) para ver el flujo de ejecución.

📚 Recursos Adicionales
Para profundizar más en el funcionamiento de la asincronía en JavaScript, puede consultar:

MDN Web Docs - JavaScript Asíncrono
JavaScript.info - Promises, async/await
Simulación visual del Event Loop en JavaScript.