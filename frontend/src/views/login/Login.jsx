import React, { useState } from "react"
import Header from "../../components/Header";
import FormLogin from "../../components/FormLogin";

function Login() {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 70px)'
    };

    return (
        <>
            <Header />
            <div style={styles}>
                <FormLogin />
            </div>
        </>
    );
}

export default Login;