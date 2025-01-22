import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/formLogin.css';
import { usePost } from '../services/usePost';
import { useAuth } from '../context/AuthContext';

function FormLogin() {
    const [datos, setDatos] = useState({
        correo_usuario: '',
        contrasena_usuario: ''
    });

    const {loading, error, data, sendPostRequest} = usePost('http://localhost:3000/login');
    const { token, login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name] : value });
    }

    useEffect(() => {
        if (data) {
            login(data.token);
            navigate('../home');
        }
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await sendPostRequest(datos);
    }

    return (
        <div className="login-container">
            <div className="login">
                <div>
                    <img src="avatar.png" alt="Perfil" className="avatar"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="email" id="correo_usuario" name="correo_usuario" placeholder="Email" className="input-login" onChange={handleChange} />
                    <input type="password" id="contrasena_usuario" name="contrasena_usuario" placeholder="Password" className="input-login" onChange={handleChange} />
                    {error && (<p>{error.message}</p>)}
                    <input type="submit" id="submit-login"/>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;