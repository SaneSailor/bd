import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import RenderHeader from "./header";

const Login = (props) => {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [ formData, setFormData ] = useReducer((formData, newItem) => { 
        return ( {...formData, ...newItem} )}, {username:"", pwd:""});
    const [errMsg, setErrMsg] = useState("");

    const doLogin = async () => {
        try {
            await login(formData.username, formData.pwd)
            navigate("/dashboard", {state: formData.username})
        } catch (error) {
            setErrMsg(error)
        }
    }

    return (
        <>
            <section>
            <RenderHeader />
            <div className="auth-form-container">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input 
                    value={formData.user}
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setFormData({username: e.target.value}) }
                    required
                    />
                <label htmlFor="pwd">Password</label>
                <input 
                    value={formData.pwd}
                    type="password"
                    id="pwd"
                    autoComplete="off"
                    onChange={(e) => setFormData({pwd: e.target.value}) }
                    required
                    />
                <button onClick={doLogin}>Login</button>
                <div>
                    {errMsg ? <div className="error">{errMsg}</div> : null }
                </div>
                <button className="link-btn" onClick={() => 
                    props.onFormSwitch('register')}>
                    Need an account? Register here.
                </button>
            </form>
            </div>
            </section>
        
        </>
    )
}

export default Login;