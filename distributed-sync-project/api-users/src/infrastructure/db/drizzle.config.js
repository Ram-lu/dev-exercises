module.exports = {
  schema: "./src/infrastructure/db/schema.js", // Ruta correcta al esquema
  out: "./src/infrastructure/db/migrations",    // Carpeta para migraciones
  dialect: "postgresql",                                 // Driver de PostgreSQL
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "users_db",
    ssl: false,
  },
};