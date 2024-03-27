import {  NavLink } from 'react-router-dom';
import loadingLogo from "../resources/logo.png"
import { RenderMenu } from './renderNavigation';



export default function RenderHeader() {

    return (
        <div className="head-container">    
            <NavLink to="/" className="logo">
                <img src={loadingLogo} alt="Logo" />
            </NavLink>
            <RenderMenu />
        </ div>

    )
}