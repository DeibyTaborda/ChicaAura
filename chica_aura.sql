DROP DATABASE IF EXISTS chica_aura;

CREATE DATABASE chica_aura;

USE chica_aura;

CREATE TABLE rol(
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(10) NOT NULL,
    status_rol ENUM('ACTIVO', 'INACTIVO') DEFAULT 'ACTIVO',
    creted_at_rol TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(30) NOT NULL,
    apellido_usuario VARCHAR(30) NULL,
    correo_usuario VARCHAR(30) NOT NULL,
    telefono_usuario VARCHAR(10) NULL,
    id_rol INT NOT NULL,
    status_usuario ENUM('ACTIVO', 'INACTIVO') DEFAULT 'ACTIVO',
    created_at_usuario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

CREATE TABLE contacto(
    id_contacto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(60) NOT NULL,
    correo_contacto VARCHAR(60) NULL,
    telefono_contacto VARCHAR(10) NULL,
    descripcion_contacto TEXT,
    id_usuario INT NOT NULL,
    created_at_contacto TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE imagen(
    id_imagen INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(100) NOT NULL,
    id_contacto INT NOT NULL,
    created_at_img TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_contacto) REFERENCES contacto(id_contacto)
);