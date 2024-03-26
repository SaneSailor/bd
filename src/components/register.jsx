import { useNavigate } from "react-router-dom";
import { AuthData } from "./auth/authWrapper";
import FormInput from "./formInput"
import { useState } from "react";

function Register(props){
    const navigate = useNavigate;

    const { register } = AuthData();
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const [errMessage, setErrorMessage] = useState(null);

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder: "Create username",
            errorMessage: "Between 3-7 characters, no special characters & spaces",
            label: "Create your userame",
            autoComplete:"off",
            pattern: `^[A-Za-z0-9]{3,7}$`,
            required: true,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder: "name@mail.com",
            errorMessage:"Please enter a valid email",
            label: "Email",
            autoComplete:"off",
            required: true,
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder: "********",
            errorMessage:"Password should be 3-9 characters",
            label: "Password",
            autoComplete:"off",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z0-9!@#$%^&*]{3,9}$`,
            required: true,
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder: "********",
            errorMessage:"Passwords do not match",
            label: "Confirm Password",
            autoComplete:"off",
            pattern: values.password,
            required: true,
        },
    ]
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            register(values.username, values.email, values.password);

        } catch (error) {
            setErrorMessage(errMessage);
        }
    }
    
    
    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                {inputs.map((input) => (
                    <FormInput key={input.id}  
                    {...input} value={values[input.name]} 
                    onChange={onChange}/>
                ))}
                {errMessage ? <span className="error">{errMessage}</span>
                : null}
                <button>Register</button>
                <button className="link-btn" onClick={() => 
                        props.onFormSwitch('login')}>
                        Already have an account? Login here.
                </button>
            </form>
        </div>
    )

}
export default Register;