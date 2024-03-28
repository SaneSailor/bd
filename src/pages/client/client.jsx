import "./style.css"
import { useState } from "react";
import View from "./view";
import Create from "./create";
import { ViewClient } from "./card";
import { CreateClient } from "./card";
import loadingClient from '../../components/card resources/client.gif';

export const Clients = () => {
    return (
        <>
        <div className='title'>
            <div className='topC'>
                <img src={loadingClient} alt="Client" />
                <h2 className="pageTitle">Clients</h2>        
            </div>
            <div className='sectionNav'>
                <ViewClient />
                <CreateClient />
            </div>
            <div className='main'>
                <clientLanding />
            </div>
        </div>
        </>
    )
}

export const ClientLanding = () => {
    const [currentView, setCurrentView] = useState('view');

    const tooglePage = (pageName) => {
        setCurrentView(pageName);
    }

    return (
        <main className='Landing'>
            <div>
                {
                    currentView === "view" ? <View onPageSwitch={tooglePage} /> : <Create onPageSwitch={tooglePage}  />
                }
            </div>
        </main>
    );
}

export default Clients;