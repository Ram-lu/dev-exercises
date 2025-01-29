-- Habilitar la extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear la tabla de usuarios con UUID
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);