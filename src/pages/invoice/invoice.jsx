import "./style.css"
import { ViewInvoice } from "./card";
import { CreateInvoice } from "./card";
import loadingInvoice from '../../components/card resources/invoice.gif';

export const Invoices = () => {
    return (
        <>
        <div className='invoice'>
            <div className='topC'>
                <img src={loadingInvoice} alt="Invoice" />
                <h2 className="pageTitle">Invoice</h2>        
            </div>
            <div className='view'>
                <ViewInvoice />
                <CreateInvoice />
        </div> 
        </div>
        </>
    )
}

export default Invoices;