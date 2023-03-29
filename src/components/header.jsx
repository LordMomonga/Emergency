import React from "react";
import logo from "../icons/Logo-im.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate()

    return(
        <div className="header-container">
        <div className="logo">
            <div className="logo-image"> <img src={logo} alt=""  className="logo-Im" onClick={ () => nav("/")}/></div>
            <div className="log_name">E_Crypto</div>
             </div>
        <div className="menu">
            <div className="menu-links">
                <a href="/">Accueille</a>
                <a href="/">A propos</a>
                <a href="/">Service</a>
                <a href="/">Contactez nous</a>
                
            </div>
        </div>
        <div className="wallet-btn">
            <button className="primary" onClick={() => nav("/kit")}>get start :) </button>
        </div>

        </div>
    )
}
export default Header;