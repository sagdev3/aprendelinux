# Linux Quest

Linux Quest es una aplicacion educativa para aprender comandos de Linux de forma guiada, practica y progresiva.

El proyecto combina lecciones, ejercicios, una terminal simulada, recursos de consulta y seguimiento de progreso para que el usuario pueda practicar sin depender de una terminal real desde el primer momento.

## Que ofrece

- Lecciones organizadas por modulos y dificultad.
- Practica de comandos frecuentes de Linux.
- Terminal simulada para experimentar con instrucciones basicas.
- Quizzes y evaluaciones rapidas para reforzar conceptos.
- Perfil de usuario con progreso, logros y estadisticas.
- Recursos de apoyo como chuletas, rutas de aprendizaje y glosario.

## Como funciona

La aplicacion presenta una experiencia de aprendizaje por secciones. El usuario puede navegar entre modulos, revisar explicaciones, practicar comandos y marcar avances completados.

El progreso se guarda localmente cuando el usuario no ha iniciado sesion. Si crea una cuenta o inicia sesion, el avance se sincroniza con la base de datos para conservarlo entre dispositivos o sesiones.

## Secciones principales

### Aprendizaje

Contiene los modulos principales de Linux Quest. Cada modulo introduce comandos y conceptos con explicaciones cortas, ejercicios y preguntas de practica.

### Laboratorio

Incluye una terminal simulada donde el usuario puede probar comandos dentro de un entorno controlado. Esta pensada para practicar sin riesgo y entender el resultado esperado de cada instruccion.

### Perfil

Muestra el avance del usuario, sus datos de perfil, logros desbloqueados y resumen de actividad.

### Recursos

Reune material de consulta rapida, rutas sugeridas y referencias utiles para repasar comandos o continuar aprendiendo.

### Mapa

Organiza conceptos y comandos en una vista de referencia para entender como se relacionan las distintas partes del ecosistema Linux.

## Seguridad y sesiones

Linux Quest usa sesiones con cookies seguras, proteccion CSRF, limites de intentos para login y registro, y validaciones en las rutas de API.

Las sesiones y los limites de acceso se guardan de forma persistente en base de datos. En produccion, la aplicacion requiere un secreto de sesion configurado para evitar usar valores de desarrollo.

## Estado del proyecto

La aplicacion esta orientada a aprendizaje inicial e intermedio de Linux. La base actual ya incluye autenticacion, progreso persistente, protecciones basicas de seguridad y una interfaz principal funcional.

Como mejora futura, queda migrar gradualmente la logica legacy del navegador hacia componentes React mas separados y agregar pruebas end-to-end para validar flujos completos desde el navegador.
