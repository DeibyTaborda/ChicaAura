const db = require('../db/conexion');
const jwt = require('jsonwebtoken');
const jwt_password = process.env.JWT_PASSWORD;

exports.loguearUser = async (req, res) => {
    const { correo_usuario, contrasena_usuario } = req.body;
    const sql = 'SELECT id_usuario, nombre_usuario, correo_usuario, contrasena_usuario, id_rol FROM usuario WHERE correo_usuario = ?';

    if (!correo_usuario && !contrasena_usuario) return res.status(400).json({ message: 'Los campos de correo y contraseña son obligatorios' });
    if (!correo_usuario) return res.status(400).json({ message: 'El campo de correo electrónico es obligatorio' });
    if (!contrasena_usuario) return res.status(400).json({ message: 'Por favor, ingresa la contraseña' });

    try {
        const [resultado] = await db.query(sql, [correo_usuario]);

        if (resultado.length > 0) {
            const user = resultado[0];

            if (contrasena_usuario.trim() === user.contrasena_usuario.trim()) {
                const token = jwt.sign(
                    { id_usuario: user.id_usuario, name: user.nombre_usuario },
                    jwt_password,
                    { expiresIn: '1h' }
                );

                res.status(201).json(token);
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