import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreateClient, ViewClient } from "../../pages/client/card";


const DataContext = createContext();
export const ManageData = () => useContext(DataContext);

export const DataWrapper = () => {
    const navigate = useNavigate();
    let currentData=sessionStorage.key(0);

    const d = new Date();
    let dateCreated = d.toDateString();
    let clientname;

    // Pass Data to UseState
    const [ data, setData ] = useState({data:currentData, type:""}); 

    // Manage passed data for storage
    localStorage.setItem("data", ["name", "type", "dateCreated"]);

    // Create Client
    const create = (fname, lname, address, phone, email) => {
        
        return new Promise((resolve) => {
            // var x,i,j=localStorage.length;

            // Loop through local storage
            // for (i=0; i<j; i++){

                // Pass current key to "x"
                // x=localStorage.key(i);
 
                clientname = fname + " " + lname;
                
                localStorage.setItem("client", [clientname, dateCreated]);
                // localStorage.setItem("client", [clientname, type, dateCreated]);
                
                // Save Username to useState & Authenticate user
                sessionStorage.setItem("client", [ fname, lname, address, email, phone,]);
                // sessionStorage.setItem("client", [type, fname, lname, address, email, phone,]);
                

                setData({data: currentData, type: "Residential"});
                resolve("success");
                navigate("/dashboard");

                // } else {
                //     reject("Email already exists");
                //     i=j; // close loop
                //     navigate("/"); // Try again with iput values ready to be modified
                    
                // }}
        })
    }
            
    const view = ( name, type) => {
        
        return new Promise((resolve) => {
        // var x,y,i,j=localStorage.length;

        // Search through local storage
        // for (i=0; i<j; i++){
            
            // Pass client values based on type from storage to page
            // DataName, type, name, dateCreated


            resolve("success");
            // i=j; // close loop
            window.location.reload();
            navigate("/dashboard");
        
    }) }
    
    const remove = () => {
        sessionStorage.clear();
        setData({...data, type: ""})
        navigate("/clients");
        window.location.reload();
        
        // ToDo... Unseat session storage vars
    }

    return (

        <DataContext.Provider value={{data, create, view, remove}}>
            <>
                <ViewClient />
                <CreateClient />
            </>
        </DataContext.Provider>  
    )
}