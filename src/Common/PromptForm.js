import React from "react";
import './PromptForm.css';
import Button from "./Button";

const PromptForm = () => {
    return(
        <div className="PromptForm">
            <div className="pf-head">
                <span className="pf-h">PROMPT CONSULTATION</span>
                <span className="pf-sub">Fill in the form and our agent will contact you shortly.</span>
            </div>
            <div className="pf-inputs">
                <input type="text" className="pf-bio" placeholder="Your Name" />
                <input type="text" className="pf-bio" placeholder="Your Phone" />
                <input type="text" className="pf-bio" placeholder="Your Email" />
                <Button data={"Send"} />
            </div>
            <div className="pf-foot">
                <span className="pf-f">Or contact us now via </span>
                <i class="bi bi-whatsapp what"> Whatsapp</i>
            </div>
        </div>
    )
}

export default PromptForm;