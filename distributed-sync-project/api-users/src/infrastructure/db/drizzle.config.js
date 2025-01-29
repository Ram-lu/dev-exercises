module.exports = {
  schema: "./schema.js", // Ruta correcta al esquema
  out: "./migrations",    // Carpeta para migraciones
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