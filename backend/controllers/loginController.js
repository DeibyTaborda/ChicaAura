const db = require('../db/conexion');
const jwt = require('jsonwebtoken');
const jwt_password = process.env.JWT_PASSWORD;

exports.loguearUser = async (req, res) => {
    const { correo_usuario, contrasena_usuario } = req.body;
    const sql = 'SELECT id_usuario, nombre_usuario, correo_usuario, contrasena_usuario, id_rol FROM usuario WHERE correo_usuario = ?';

    if (!correo_usuario && !contrasena_usuario) return res.status(400).json({ message: 'El correo y la contraseña son obligatorios' });
    if (!correo_usuario) return res.status(400).json({ message: 'El correo es electrónico obligatorio' });
    if (!contrasena_usuario) return res.status(400).json({ message: 'La contraseña es obligatoria' });

    try {
        const [resultado] = await db.query(sql, [correo_usuario]);

        if (resultado.length > 0) {
            const user = resultado[0];

            if (contrasena_usuario.trim() === user.contrasena_usuario.trim()) {
                const token = jwt.sign(
                    { id_usuario: user.id_usuario, id_rol: user.id_rol, correo: user.correo_usuario },
                    jwt_password,
                    { expiresIn: '1h' }
                );

                res.status(201).json({ token: token, rol: user.id_rol, id_user: user.id_usuario });
            } else {
                res.status(401).json({ message: 'La contraseña es incorrecta' });
            }

        } else {
            res.status(500).json({ message: 'El usuario no existe' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de base de datos', error });
    }
};

exports.verificarToken = (req, res, next) => {
    const header = req.header('Authorization') || "";
    const token = header.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    } 

    try {
        const payload = jwt.verify(token, secret_key);
        req.id_user = payload.id_usuario;
        req.id_rol = payload.nombre_usuario;
        req.email = payload.correo_usuario
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

exports.verificarRol = (rolesPermitidos) => (req, res, next) => {
    const { rol } = req;

    if (rolesPermitidos.includes(rol)) {
        next();
    } else {
        return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' });
    }
};