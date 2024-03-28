import "./style.css"
import { ViewProposal } from "./card";
import { CreateProposal } from "./card";
import loadingProposal from '../../components/card resources/proposal.gif';

export const Proposals = () => {
    return (
        <>
        <div className='proposal'>
            <div className='topC'>
            <img src={loadingProposal} alt="Proposal" />
                <h2 className="pageTitle">Proposals</h2>        
            </div>
            <div className='view'>
                <ViewProposal />
                <CreateProposal />
        </div> 
        </div>
        </>
    )
}

export default Proposals;