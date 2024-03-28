import React from "react";
import { NavLink } from "react-router-dom";
import loadingClient from '../../components/card resources/client.gif';
import loadingProposal from '../../components/card resources/proposal.gif';
import loadingInvoice from '../../components/card resources/invoice.gif';

export const ClientCard = () => {
    return(
        <div className="cardContainer">
            <img src={loadingClient} alt="Client" />
            <div className="action-label">  
                <h3>Clients</h3>
                <NavLink to="/clients">View/Create Client</NavLink>
            </div>
        </div>
    ) 
}

export const ProposalCard = () => {
    return(
        <div className="cardContainer">
            <img src={loadingProposal} alt="Proposal" />
            <div className="action-label">
                <h3>Proposals</h3>
                <NavLink to="/proposals">View/Create Proposals</NavLink>
            </div>
        </div>
    ) 
}

export const InvoiceCard = () => {
    return(
        <div className="cardContainer">
            <img src={loadingInvoice} alt="Invoice" />
            <div className="action-label">
                <h3>Invoices</h3>
                <NavLink to="/invoices">View/Create Invoices</NavLink>
            </div>
        </div>
    )
}