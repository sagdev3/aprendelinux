# Linux Quest

Aplicación educativa de comandos Linux con inicio de sesión y progreso guardado en MySQL.

## Requisitos

- Node.js con `npm`
- MySQL o MariaDB

## Configuración

1. Crea la base de datos y tablas:

```bash
mysql -u root -p < schema.sql
```

2. Crea el archivo `.env` desde el ejemplo:

```bash
cp .env.example .env
```

3. Edita `.env` con tus credenciales de MySQL.

4. Instala dependencias:

```bash
npm install
```

5. Inicia Next.js en desarrollo:

```bash
npm run dev
```

Para compilar producción:

```bash
npm run build
```

Para iniciar producción después de compilar:

```bash
npm start
```

Para probar las rutas del servidor sin depender de una base real:

```bash
npm test
```

6. Abre:

```text
http://localhost:3000
```

## Progreso

Sin sesión, el avance se guarda en `localStorage`.
Con sesión iniciada, se sincroniza en la tabla `user_progress`.
