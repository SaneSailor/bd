import React from "react";
import create from '../../components/card resources/add.png';
import view from '../../components/card resources/view.png';

export const ViewClient = () => {
    return(
        <div className="cardContainer">
            <img src={view} alt="view user" />
            {/*  ToDo  Show all clients */}
            <p className="title">Client Lists</p>
        </div>
    ) 
}

export const CreateClient = () => {
    return(
        <div className="cardContainer">
            <img src={create} alt="create user" />
            {/*  ToDo  Add more clients  */}
            <p className="title">add new client</p>
        </div>
    ) 
}
