import React from "react";
import create from '../../components/card resources/add.png';
import view from '../../components/card resources/view.png';

export const ViewProposal = () => {
    return(
        <div className="cardContainer">
            <img src={view} alt="view user" />
            {/*  ToDo  Show all invoices */}
            <p className="title">Proposal Lists</p>
        </div>
    ) 
}

export const CreateProposal = () => {
    return(
        <div className="cardContainer">
            <img src={create} alt="create proposal" />
            {/*  ToDo  Add more Proposals  */}
            <p className="title">add new proposal</p>
        </div>
    ) 
}
