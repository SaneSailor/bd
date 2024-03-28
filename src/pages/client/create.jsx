import { useNavigate } from "react-router-dom";
import FormInput from "../../components/formInput"
import { useState } from "react";
import { ManageData } from "../../components/data/manageData";

function Create(props){
    const navigate = useNavigate;

    const { create } = ManageData();
    const [values, setValues] = useState({
        fname:"",
        lname:"",
        address:"",
        email:"",
        phone:"",
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const inputs = [
        {
            id:1,
            name:"fname",
            type:"name",
            placeholder: "Firstname",
            errorMessage: "No special characters or spaces",
            label: "Firstname",
            autoComplete:"off",
            pattern: `^[A-Za-z0-9]{7,30}$`,
            required: true,
        },
        {
            id:2,
            name:"lname",
            type:"name",
            placeholder: "Lastname",
            errorMessage: "No special characters or spaces",
            label: "Lastname",
            autoComplete:"off",
            pattern: `^[A-Za-z0-9]{7,30}$`,
            required: true,
        },
        {
            id:3,
            name:"address",
            type:"address",
            placeholder: "Address",
            label: "Address",
            autoComplete:"off",
            required: true,
        },
        {
            id:4,
            name:"email",
            type:"email",
            placeholder: "name@mail.com",
            errorMessage:"Use a valid email",
            label: "Email",
            autoComplete:"off",
            required: true,
        },
        {
            id:5,
            name:"phone",
            type:"phone",
            placeholder: "(000) 000-0000",
            errorMessage:"Use a valid phone number",
            label: "Phone",
            autoComplete:"off",
            required: true,
        },
    ]
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            create(values.fname, values.lname, values.address, values.email, values.phone);
            navigate("/clients")

        } catch (error) {
            setErrorMessage(error);
        }
    }
    
    
    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div className="create-client">
            <form onSubmit={handleSubmit}>
                {/* <RenderHeader /> */}
                <h2>Add Client</h2>
                {inputs.map((input) => (
                    <FormInput key={input.id}  
                    {...input} value={values[input.name]} 
                    onChange={onChange}/>
                ))}
                {errorMessage ? <span className="error">{errorMessage}</span>
                : null}
                <button type="submit">add client</button>
            
            </form>
        </div>
    )

}
export default Create;