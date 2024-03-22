import { createContext, useState, useContext } from "react";
import RenderRoutes from "../renderNavigation"

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const currentUsers = JSON.parse(localStorage.getItem('user'))
    const [ user, setUser ] = useState({ currentUsers, isAuhenticated: false })
    const [ newUser, setNewUser ] = useState([{ user, isAuhenticated: false }])
 
    const register = ( username, email, password) => {

        return new Promise((resolve, reject) => {
           if (username === username.user){
                reject("User already exists")
            } else if (email !== email.user){
                reject("Email already exists")
            } else {
                newUser.localStorage.setItem('user', JSON.stringify([ {username, email, 
                        password }]));
                console.log(newUser);
                setNewUser({user: newUser, isAuhenticated: true});
                resolve("success");
            } 
        })
    }
            
    const login = ( username, password) => {
                
        return new Promise((resolve, reject) => {
            if (username === username.user) {
                if (password === password.user){
                    setUser({user: username, isAuhenticated: true});
                    resolve("success");
                } else {
                reject("incorrect password")}
            } else {
            reject("User does not exist")}
        })

    }
    const logout = () => {
        setUser({...user, isAuhenticated: false})
    }

    return (

        <AuthContext.Provider value={{user, register, login, logout}}>
            <>
                <RenderRoutes />
            </>
        </AuthContext.Provider>  
    )
}