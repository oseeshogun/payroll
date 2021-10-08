import React from "react";
import Form from "./Form/Form";
import Illustration from "./Illustration/Illustration";
import './Login.css';

function Login() {

    return (
        <div className="login">
            <Form />
            <Illustration/>
        </div>
    );  
}

export default Login;