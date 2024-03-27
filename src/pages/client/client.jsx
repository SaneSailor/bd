import "./style.css"
import { ViewClient } from "./card";
import { CreateClient } from "./card";
import loadingClient from '../../components/card resources/client.gif';

export const Clients = () => {
    return (
        <>
        <div className='client'>
            <div className='topC'>
                <img src={loadingClient} alt="Client" />
                <h2 className="pageTitle">Client</h2>        
            </div>
            <div className='view'>
                <ViewClient />
                <CreateClient />
        </div> 
        </div>
        </>
    )
}

export default Clients;