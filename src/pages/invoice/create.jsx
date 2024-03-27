import { useNavigate } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import FormInput from "./formInput"
import { useState } from "react";

function Login(props){
    const navigate = useNavigate;

    const { login } = AuthData();
    const [values, setValues] = useState({
        username:"",
        password:"",
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder: "Username",
            errorMessage: "Between 3-7 characters, no special characters & spaces",
            label: "Username",
            autoComplete:"off",
            pattern: `^[A-Za-z0-9]{3,7}$`,
            required: true,
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholder: "********",
            errorMessage:"Password should be 3-9 characters",
            label: "Password",
            autoComplete:"off",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z0-9!@#$%^&*]{3,9}$`,
            required: true,
        },
    ]
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            login(values.username, values.password);
            navigate("/dashboard")

        } catch (error) {
            setErrorMessage(error);
        }
    }
    
    
    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                {/* <RenderHeader /> */}
                <h2>Login</h2>
                {inputs.map((input) => (
                    <FormInput key={input.id}  
                    {...input} value={values[input.name]} 
                    onChange={onChange}/>
                ))}
                {errorMessage ? <span className="error">{errorMessage}</span>
                : null}
                <button type="submit">Login</button>
            <button className="link-btn" onClick={() => 
                    props.onFormSwitch('register')}>
                    Need an account? Register here.
            </button>
            </form>
        </div>
    )

}
export default Login;