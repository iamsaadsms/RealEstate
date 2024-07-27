import React from "react";
import './Works.css';
import back from '../Media/back.webp';
import PromptForm from "../Common/PromptForm";

const Works = () => {
    let work = [
        {
            num: "01",
            head:"preparation",
            sub:"We meet either online or in our Dubai office, evaluate the property, and conclude an agreement."
        },
        {
            num: "02",
            head:"promotion",
            sub:"We capture photos and videos, launch contextual advertising and personalized email newsletters, and publish advertisements on public platforms."
        },
        {
            num: "03",
            head:"agreement",
            sub:"We find a buyer and prepare documents, including the purchase and sale agreement, while resolving tax and registration issues."
        },
        {
            num: "04",
            head:"payment",
            sub:"Upon the successful completion of the transaction, you will receive the payment with the agency commission deducted."
        }
    ];

    let workForm ={
        width:"90vw",
        margin: "0vh 4vw",
    } 
    return(
        <div className="Works">
            <img src={back} className="back-works" alt="Background"/>
            <div className="works-content">
                <span className="works-h">HOW IT WORKS</span>
                <div className="works-elements">
                    {work.map((box, index) => (
                        <div className="works-blocks" key={index}>
                            <span className="works-num">{box.num}</span>
                            <span className="works-head">{box.head.toUpperCase()}</span>
                            <p className="works-sub">{box.sub}</p>
                        </div>
                    ))}
                </div>
                <div className="prompt-works">
                        <PromptForm style={workForm}/>
                </div>
            </div>
        </div>
    );
}

export default Works;
