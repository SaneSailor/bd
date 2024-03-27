import React from "react";
import create from '../../components/card resources/add.png';
import view from '../../components/card resources/view.png';

export const ViewInvoice = () => {
    return(
        <div className="cardContainer">
            <img src={view} alt="view invoice" />
            {/*  ToDo  Show all clients */}
            <p className="title">Invoice Lists</p>
        </div>
    ) 
}

export const CreateInvoice = () => {
    return(
        <div className="cardContainer">
            <img src={create} alt="create invoice" />
            {/*  ToDo  Add more Invoices  */}
            <p className="title">add new invoice</p>
        </div>
    ) 
}
