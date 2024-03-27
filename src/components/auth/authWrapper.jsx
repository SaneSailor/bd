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

    // Modified to stored current user in session storage for authentication
    sessionStorage.setItem("username", "password");
    
    // Create empty storage for Users with username as key
    localStorage.setItem("email", ["username", "password"]);

    // User registration function
    const register = (username, email, password) => {
        
        return new Promise((resolve, reject) => {
            // var x,y,i,j=localStorage.length;
            var x,i,j=localStorage.length;

            // Loop through local storage
            for (i=0; i<j; i++){

                // Pass current key to "x"
                x=localStorage.key(i);
                // x=JSON.stringify(localStorage.key(i));
                console.log("Stored User Email:");
                console.log(x);
                
                // Check if parsed email and stored email match
                if (email !== x){ 
                    
                    // If user email does not match stored email
                    // Create new User item with unique key to local storage
                    localStorage.setItem(email, [username, password]);
                    
                    // Pass new key to "x" and view entered email in Console Log
                    // x=localStorage.key(i);
                    // console.log("New User Email/Key:");
                    // console.log(email);
                    
                    // Test Get new user values from storage to console 
                    // y=localStorage.getItem(x);
                    // console.log("New User values:");
                    // console.log(username, password);
                    
                    // Save Username to useState & Authenticate user
                    sessionStorage.setItem(username, password);
                    let currentUser=sessionStorage.key(i);
                    setUser({name: currentUser, isAuhenticated: true});
                    // setUser({name: username, isAuhenticated: true});
                    resolve("success");
                    i=j; // close loop
                    navigate("/dashboard");
                    
                } else {
                    reject("Email already exists");
                    i=j; // close loop
                    navigate("/"); // Try again with iput values ready to be modified
                    
                }
            }
        })
    }
            
    const login = ( username, password) => {
        currentUser = 
                
        return new Promise((resolve, reject) => {
            if (username === username.user) {
                if (password === password.user){
                    // setUser({user: username, isAuhenticated: true});
                    resolve("success");
                } else {
                reject("incorrect password")}
            } else {
            reject("User does not exist")}
        })

    }
    const logout = () => {
        // setUser({...user, isAuhenticated: false})
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