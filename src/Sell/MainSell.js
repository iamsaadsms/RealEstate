import React from "react";
import './MainSell.css';
import sell from '../Media/sell.webp';
import Button from "../Common/Button";

const MainSell = () => {
    let sellBtn = {
        width:"24vw",
        fontSize:"2.75vh",
        marginLeft:"30vw",
        marginTop:"4vh"
    }
    return(
        <div className="MainSell">
            <img src={sell} className="sellimg" alt="Sell" />
            <div className="img-content-sell">
                <span className="sell-head">LET’S SELL YOUR PROPERTY PROFITABLY</span>
                <span className="sell-sub">Entire process is on us, from evaluation to a deal</span>
                <Button data={"CONTACT AN AGENT"} style={sellBtn}/>
            </div>
        </div>
    )
}

export default MainSell;