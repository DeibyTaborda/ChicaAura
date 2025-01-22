import React from "react";
import '../styles/formLogin.css';
import { usePost } from '../services/usePost';

function FormLogin() {
    const [datos, setDatos] = useState({
        correo_usuario: '',
        contrasena_usuario: ''
    });

    const {loading, error, data, sendPostRequest} = usePost('http://localhost:3000/login');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name] : value });
    }

    return (
        <div className="login-container">
            <div className="login">
                <div>
                    <img src="avatar.png" alt="Perfil" className="avatar"/>
                </div>
                <form action="">
                    <input type="email" id="correo_usuario" name="correo_usuario" placeholder="Email" className="input-login" onChange={handleChange} />
                    <input type="password" id="contrasena_usuario" name="contrasena_usuario" placeholder="Password" className="input-login" onChange={handleChange} />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;