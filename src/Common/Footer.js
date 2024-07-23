import React from "react";
import './Footer.css';
import logo from '../Media/logo.jpg';
import Button from "./Button";

const Footer = () => {
    let foot = [
        {
            c1:"Apartments",
            c2:"Off-Plan",
            c3:"Rent",
            c4:"Careers"
        },
        {
            c1:"Penthouses",
            c2:"Catalogs",
            c3:"Developers",
            c4:"Contact Us"
        },
        {
            c1:"Villas",
            c2:"Area Guides",
            c3:"AX Corporate"
        },
        {
            c1:"Townhouses",
            c2:"Sell",
            c3:"Reviews"
        }
    ]

    const footBtn = {
        width: '26vw'
    }
    return(
        <div className="Footer">
            <div className="top-foot">
                <div className="logo-foot">
                    <img className="logo-f" alt="Logo" src={logo} />
                </div>
                <div className="foot-contact">
                        <span className="f-con">CONTACTS</span>
                </div>
            </div>
            <hr />
            <div className="main-foot">
                <div className="left-foot">
                        {foot.map((sub, index) => (
                            <div className="lf-content">
                                <div className="left-foot-div">
                                    <span className="lf-sp">{sub.c1}</span>
                                </div>
                                <div className="left-foot-div">
                                    <span className="lf-sp">{sub.c2}</span>
                                </div>
                                <div className="left-foot-div">
                                    <span className="lf-sp">{sub.c3}</span>
                                </div>
                                <div className="left-foot-div">
                                    <span className="lf-sp">{sub.c4}</span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="right-foot">
                    <div className="r-content">
                        <span className="f-city">DUBAI, UAE</span>
                        <span className="f-address">14th Floor, Westburry Office, Business Bay</span>
                    </div>
                    <div className="s-content">
                        <i class="bi bi-envelope"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <div className="r-btn">
                        <Button data={"CALL US"} style={footBtn} />
                    </div>
                </div>
            </div>
            <div className="credit-foot">
                <span className="cr-ft">AX CAPITAL 2024. All Rights Reserved.</span>
                <span className="cr-ft">Terms of Use</span>
                <span className="cr-ft">Privacy Policy</span>
                <span className="cr-ft">Created By BluePexel.</span>
            </div>
        </div>
    )
}

export default Footer;