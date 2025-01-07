function validarCorreo(correo) {
    // Expresión regular para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
}

module.exports = {
    validarCorreo
};