import { ViewProposal } from './card';
import { NavLink } from 'react-router-dom';

function clientList() {
    return (
        <>
        <section className='clientList'>
                <div className='dash'>
                    <li>
                    <NavLink to="/clients"><ViewProposal /></NavLink>
                    </li> 
                </div>
            </section>
        </>
    )
}

export default clientList;
