import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../services/usePost";
import StatusMessage from "./StatusMessage";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import '../styles/formSignup.css';

function FormSignup() {
    const [existData, setExistData] = useState(false);
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
            setDatos({
                nombre_usuario: '',
                apellido_usuario: '',
                correo_usuario: '',
                contrasena_usuario: ''
            });
            setExistData(true);
            setTimeout(() => {
                setExistData(false);
                navigate('../home');
            }, 3000);
        }
    }, [data]);

    return(
        <>  
            {existData && (
                <div className="status-message">
                    <StatusMessage
                        Icon={IoCheckmarkCircleOutline}
                        message={data ? data.message : ''}
                    />
                </div>
            )}
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
                    value={datos.nombre_usuario}
                />
                <input 
                    type="text" 
                    name="apellido_usuario" 
                    id="apellido_usuario" 
                    placeholder="Lastname"
                    onChange={handleChange}
                    value={datos.apellido_usuario}
                />
                <input 
                    type="email" 
                    name="correo_usuario" 
                    id="correo_usuario" 
                    placeholder="Email"
                    onChange={handleChange}
                    value={datos.correo_usuario}
                />
                <input  
                    type="password" 
                    name="contrasena_usuario" 
                    id="contrasena_usuario"
                    placeholder="Password" 
                    onChange={handleChange}
                    value={datos.contrasena_usuario}
                />
                {error && (<p>{error.message}</p>)}
                {data && (<p>{data.message}</p>)}
                <input type="submit" />
            </form>
        </>
    );
}

export default FormSignup;