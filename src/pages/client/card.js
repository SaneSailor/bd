import React from "react";
import create from '../../components/card resources/add.png';
import view from '../../components/card resources/view.png';

export const ViewClient = (props) => {
    return(
        <div className="cardContainer" onClick={() => 
            props.onPage('view')}>
            <img src={view} alt="view user" />
            {/*  ToDo  Show all clients */}
            <p className="title">Client Lists</p>
        </div>
    ) 
}

export const CreateClient = (props) => {
    return(
        <div className="cardContainer" onClick={() => 
            props.onPage('create')}>
            <img src={create} alt="create user" />
            {/*  ToDo  Add more clients  */}
            <p className="title">add new client</p>
        </div>
    ) 
}
