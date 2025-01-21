const db = require('../db/conexion');
const {validarCorreo} = require('../validations/validations');

exports.registerUser = async (req, res) => {
    const { nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario} = req.body;
    const sql = 'INSERT INTO usuario (nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario, id_rol) VALUES (?, ?, ?, ?, ?)';

    try {
        if (!nombre_usuario) return res.status(400).json({ message: 'El nombre es obligatorio' });
        if (!correo_usuario) return res.status(400).json({ message: 'El correo es obligatorio' });
        if (!validarCorreo(correo_usuario)) return res.status(400).json({ message: 'El correo no es válido' });

        await db.query(sql, [nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario, 1]);

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ocurrió un error al registrar el usuario' });
    }
};

exports.createRol = async(req, res) => {
    const {rol} = req.body;
    const sql = 'INSERT rol(rol) VALUES(?)';

    try {
        if (!rol) return res.status(400).json({ message: 'El nombre del rol es obligatorio' });

        await db.query(sql, [rol]);

        res.status(201).json({ message: 'EL rol fue creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'El rol no se creó' });
    }
}

exports.createContact = async (req, res) => {
    const { nombre_contacto, correo_contacto, telefono_contacto, descripcion_contacto, id_usuario } = req.body;
    const longitudTel = 10;
    const sql = 'INSERT INTO contacto(nombre_contacto, correo_contacto, telefono_contacto, descripcion_contacto, id_usuario) VALUES(?, ?, ?, ?, ?)';

    try {
        if (!nombre_contacto) return res.status(400).json({ message: 'El nombre del contacto es obligatorio' });
        if (!validarCorreo(correo_contacto)) return res.status(400).json({ message: 'El correo no es válido' });

        if (telefono_contacto.length !== longitudTel) {
            return res.status(400).json({ message: `El número telefónico debe tener ${longitudTel} dígitos` });
        }

        await db.query(sql, [nombre_contacto, correo_contacto, telefono_contacto, descripcion_contacto, id_usuario]);

        res.status(201).json({ message: 'Contacto creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'El contacto no se creó' });
    }
}

exports.getUsers = async(req, res) => {
    const sql = 'SELECT * FROM usuario';
    
    try {
        const [users] = await db.query(sql);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error })
    }
}

exports.getContacts = async (req, res) => {
    const sql = 'SELECT * FROM contacto';
    
    try {
        const [contacts] = await db.query(sql);
        if (contacts.length > 0) {
            return res.status(200).json(contacts);
        }
        res.status(200).json({ message: 'No existen contactos' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error })
    }
}
