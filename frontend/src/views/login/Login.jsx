import React from "react"
import '../../styles/login.css'

function Login() {
    return (
        <div className="login">
            <div>
                <div>
                    <img src="avatar.png" alt="Perfil" className="avatar"/>
                </div>
                <form action="">
                    <input type="email" id="email" name="email" placeholder="Email" className="input-login" />
                    <input type="password" id="contrasena" name="password" placeholder="Password" className="input-login" />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Login;