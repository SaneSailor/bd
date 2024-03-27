import Login from '../components/login';
import React, { useState } from "react"
import Register  from "../components/register"

export const Landing = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toogleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <main className='Landing'>
            <div>
                {
                    currentForm === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm}  />
                }
            </div>
        </main>
    );
}

export default Landing;