import React from "react";
import Header from "../../components/Header";
import FormSignup from '../../components/FormSignup';
import '../../styles/signup.css';

function Signup() {

    return (
        <>
            <Header />
            <div className="container-flex">
                <FormSignup />
            </div>
        </>
    );
}

export default Signup;