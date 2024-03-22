import React, { useReducer } from "react";
// import React, { useState, useReducer } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthData } from "./auth/authWrapper";
import RenderHeader from "./header"

export const Register = (props) => {
    // const navigate = useNavigate();
    // const { register } = AuthData();


    const [ formData, setFormData ] = useReducer((formData, newItem) => { 
        return ( {...formData, ...newItem} )}, {username:"", pwd:"", email:""});
    // const [errMsg, setErrMsg] = useState("");

    const doRegister = async () => {
        console.log(formData)
        // try {
        //     await register(formData.username, formData.email, formData.pwd)
        //     navigate("/dashboard", {state: formData.username})
        // } 
        // catch (error) {
        //         setErrMsg(error)
        // }
    }

    return (
        <>
        <section>
        <RenderHeader />
        <div className="auth-form-container">
            <h1>Register</h1>
            <form className="register-form">
                <label htmlFor="username">Username</label>
                <input 
                    value={formData.username}
                    type="text" 
                    autoComplete="off"
                    onChange={(e) => setFormData({username: e.target.value}) }
                    placeholder="Username" 
                    required
                    id="username" />
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    autoComplete="off"
                    type="email" 
                    onChange={(e) => setFormData({email: e.target.value}) }
                    placeholder="Email" 
                    required
                    value={formData.email}
                    />
                <label htmlFor="pwd">Password</label>
                <input 
                    id="pwd" 
                    autoComplete="off"
                    type="password" 
                    onChange={(e) => setFormData({pwd: e.target.value}) }
                    placeholder="***" 
                    required
                    value={formData.pwd}
                    />
                <button onClick={doRegister}>Signup</button>
                {/* <div>
                    {errMsg ? <div className="error">{errMsg}</div> : null }
                </div> */}
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </ div>
        </section>
        </>
    )
}