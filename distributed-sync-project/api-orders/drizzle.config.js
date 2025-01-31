module.exports = {
    schema: "./src/infrastructure/db/schema.js", 
    out: "./src/infrastructure/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        host: "localhost",
        port: 5433,
        user: "admin",
        password: "admin123",
        database: "orders_db",
    }
}