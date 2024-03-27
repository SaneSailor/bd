import { ClientCard, ProposalCard, InvoiceCard } from './card';
import { NavLink } from 'react-router-dom';

export const Dash =()=> {
    return (
        <>
        <section className='DashList'>
                <div className='dash'>
                    <li>
                    <NavLink to="/clients"><ClientCard /></NavLink>
                    </li>    
                </div>
                <div className='dash'>
                    <li>
                    <NavLink to="/proposals"><ProposalCard /></NavLink>
                    </li>
                </div>
                <div className='dash'>
                    <li>
                    <NavLink to="/invoices"><InvoiceCard /></NavLink>
                    </li>
                </div>
            </section>
        </>
    )
}

export default Dash;
