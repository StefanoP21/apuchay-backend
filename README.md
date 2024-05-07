# Apuchay Backend

Esta API proporciona un conjunto de endpoints para el manejo de usuarios, incluyendo registro, inicio de sesión, renovación de tokens y operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

### Instalación

Clona el repositorio y navega hasta el directorio:

```bash
git clone https://github.com/StefanoP21/apuchay-backend.git
```

### Instala las dependencias:

```bash
npm install
```

### Variables de Entorno

Cree un archivo .env en la carpeta raíz de su proyecto y añada sus variables. Consulte .env.template para obtener ayuda.

### Ejecución en modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

## API Endpoints

| HTTP Verbs | Endpoints          | Action                                 |
| ---------- | ------------------ | -------------------------------------- |
| POST       | /api/auth/register | Para crear una nueva cuenta de usuario |
| POST       | /api/auth/login    | Para acceder a una cuenta existente    |
| GET        | /api/auth/renew    | Para generar un nuevo token de usuario |
| POST       | /api/projects/new  | Para crear un nuevo proyecto de obra   |
| GET        | /api/projects      | Para obtener todos los proyectos       |
| GET        | /api/projects/:id  | Para obteber un proyecto por su código |
| POST       | /api/courses/new   | Para crear un nuevo curso              |
| GET        | /api/courses       | Para obtener todos los cursos          |
| GET        | /api/courses/:id   | Para obteber un curso por su código    |

### Tecnologías

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

### Autor

- [Stefano Palomino](https://github.com/StefanoP21)

### Licencia

Este proyecto está disponible para su uso bajo la Licencia MIT.
