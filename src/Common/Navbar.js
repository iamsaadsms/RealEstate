import React from "react";
import './Navbar.css';
import logo from '../Media/logo.jpg';
import Navtabs from "./Navtabs/Navtabs";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="left-side">
                <img className="logo" src={logo} alt="logo" />
                <div className="left-tabs">
                    <Navtabs />
                </div>
            </div>
            <div className="right-side">
                <div>
                    <i className="bi bi-whatsapp what right"></i>
                    <span className="call right">CALL US</span>
                </div>
                <div>
                    <span className="line right">|</span>
                    <span className="book right"><i className="bi bi-bookmark"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
