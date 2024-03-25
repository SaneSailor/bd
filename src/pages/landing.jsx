import Login from '../components/login';
import React, { useState } from "react"
import Register  from "../components/register"

export const Landing = () => {
    const [currentForm, setCurrentForm] = useState('register');

    const toogleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <main className='Landing'>
            {/* <Login /> */}
            <div>
                {
                    currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}  />
                }
            </div>
        </main>
    );
}

export default Landing;