import React from "react";
import './Prompt.css';
import Button from "../Common/Button";
import dubai from "../Media/dub.svg"
const Prompt = () => {
    return(
        <div className="Prompt">
            <div className="consult">
                <span className="prompt-head">PROMPT CONSULTAION</span>
                <span className="prompt-sub">Fill in the form and our agent will contact you shortly.</span>
                <Button data={"Enquire Now"}/>
            </div>
            <div className="prompt-img">
                <img src={dubai} className="prompt-pic" alt="dubai" />
            </div>
        </div>
    )
}

export default Prompt;