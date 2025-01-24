import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../services/usePost";
import '../styles/formSignup.css';

function FormSignup() {
    const [datos, setDatos] = useState({
        nombre_usuario: '',
        apellido_usuario: '',
        correo_usuario: '',
        contrasena_usuario: ''
    });

    const navigate = useNavigate();
    const {loading, error, data, sendPostRequest} = usePost('http://localhost:3000/register');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatos({ ...datos, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await sendPostRequest(datos);
    }

    useEffect(()=> {
        if (data) {
            navigate('../home');
        }
    }, [data]);

    return(
        <>
            <form 
                onSubmit={handleSubmit}
                id="form-signup"
            >
                <h2>Registro</h2>
                <input 
                    type="text" 
                    name="nombre_usuario" 
                    id="nombre_usuario" 
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="apellido_usuario" 
                    id="apellido_usuario" 
                    placeholder="Lastname"
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    name="correo_usuario" 
                    id="correo_usuario" 
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input  
                    type="password" 
                    name="contrasena_usuario" 
                    id="contrasena_usuario"
                    placeholder="Password" 
                    onChange={handleChange}
                />
                {error && (<p>{error.message}</p>)}
                {data && (<p>{data.message}</p>)}
                <input type="submit" />
            </form>
        </>
    );
}

export default FormSignup;