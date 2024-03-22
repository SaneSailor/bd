import { Link } from 'react-router-dom';
import loadingLogo from "../resources/logo.png"



export default function RenderHeader() {

    return (
        <div className="head-container">    
            <Link to="/" className="logo">
                <img src={loadingLogo} alt="Logo" />
            </Link>
        </ div>

    )
}