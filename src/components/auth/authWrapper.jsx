import { createContext, useState, useContext } from "react";
import RenderRoutes from "../renderNavigation"
import { useNavigate } from "react-router-dom";
import RenderHeader from "../header";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const navigate = useNavigate();
    let currentUsername=sessionStorage.key(0);

    // Set Authentication to UseState
    const [ user, setUser ] = useState({name:currentUsername, isAuhenticated: false}); 
    // Empty storage for Users registration
    localStorage.setItem("email", ["username", "password"]);
    // Register User
    const register = (username, email, password) => {
        
        return new Promise((resolve, reject) => {
            var x,i,j=localStorage.length;

            // Loop through local storage
            for (i=0; i<j; i++){

                // Pass current key to "x"
                x=localStorage.key(i);
                
                // Check if parsed email and stored email match
                if (email !== x){ 
                    
                    // If user email does not exist, create new User 
                    // item with unique key & send to local storage
                    localStorage.setItem(email, [username, password]);
                  
                    // Save Username to useState & Authenticate user
                    sessionStorage.setItem(username, password);
                    
                    // Check current User in Session
                    currentUsername=sessionStorage.key(i);

                    // let sessionUsrPwd=sessionStorage.getItem(currentUsername);
                    // console.log('Current Username: ', currentUsername)
                    // console.log('Current Password: ', sessionUsrPwd)

                    setUser({name: currentUsername, isAuhenticated: true});
                    i=j; // close loop
                    resolve("success");
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
        
        return new Promise((resolve, reject) => {
        var x,y,i,j=localStorage.length;

        // Search through local storage
        for (i=0; i<j; i++){
            
            // Pass username and password from key to "y"
            x=localStorage.key(i);
            y=localStorage.getItem(x);
            
            let authUser = username+","+password;
            let credentials = y;
            console.log('Credentials: ', credentials)
            console.log('Login User: ', authUser)
            
            if (credentials !== authUser){
                // i=j; // close loop
                reject("Username or Password do not match");
                // navigate("/");
                
            } else {
                // Save Username to useState & Authenticate user
                sessionStorage.setItem(username, password);
                
                // Check current User in Session
                currentUsername=sessionStorage.key(i);
                let sessionUsrPwd=sessionStorage.getItem(currentUsername);
                setUser({name: currentUsername, isAuhenticated: true});

                console.log('Current Username: ', currentUsername)
                console.log('Current Password: ', sessionUsrPwd)

                resolve("success");
                i=j; // close loop
                window.location.reload();
                navigate("/dashboard");
            }}
        })
    }
    
    const logout = () => {
        sessionStorage.clear();
        setUser({...user, isAuhenticated: false})
        navigate("/");
        window.location.reload();
        
        // ToDo... Unseat session storage vars
    }

    return (

        <AuthContext.Provider value={{user, register, login, logout}}>
            <>
                <RenderHeader />
                <RenderRoutes />
            </>
        </AuthContext.Provider>  
    )
}