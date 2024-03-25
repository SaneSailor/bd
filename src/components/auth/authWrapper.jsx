import { createContext, useState, useContext } from "react";
import RenderRoutes, { RenderMenu } from "../renderNavigation"
import { useNavigate } from "react-router-dom";
import RenderHeader from "../header";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const navigate = useNavigate();

    // Set Authentication to UseState
    const [ user, setUser ] = useState({name:"", isAuhenticated: false}); 

    // Create empty storage for Users with username as key
    sessionStorage.setItem("email", ["username", "password"]);

    // User registration function
    const register = (username, email, password) => {
        
        return new Promise((resolve, reject) => {
            var x,y,i,j=sessionStorage.length;

            // Loop through session storage
            for (i=0; i<j; i++){

                // Pass current key to "x"
                // x=JSON.stringify(sessionStorage.key(i));
                x=sessionStorage.key(i);
                console.log("Current User Email:");
                console.log(x);
                
                // Check if used parsed email and stored email match
                if (email !== x){ 

                    // ToDo if user email does not match stored email
                    // Add new User with unique email to session storage
                    sessionStorage.setItem(email, [username, password]);
                    i=j; // stop for loop to get added user data
                    
                    // Pass new key to "x" and view entered email in Console Log
                    x=sessionStorage.key(i);
                    console.log("Entered User Email:");
                    console.log(x);
                    
                    // Test Get new user values from storage to console 
                    y=sessionStorage.getItem(x);
                    console.log("New User values:");
                    console.log(y);
                    
                    // Set User to useState and Authenticate user
                    setUser({name: username, isAuhenticated: true});
                    resolve("success");

                } else {
                    reject("Email already exists");
                    i=j; // to end for loop
                    navigate("/");
                    
                } 
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
                <RenderHeader />
                <RenderMenu />
                <RenderRoutes />
            </>
        </AuthContext.Provider>  
    )
}