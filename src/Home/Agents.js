import React from "react";
import './Agents.css';
import agent from '../Media/agent.webp'
import Button from "../Common/Button";
const Agents = () => {
    return(
        <div className="Agents">
            <div className="ag-img">
                <img src={agent} className="agent-pic" alt="Agents" />
            </div>
            <div className="ag-data">
                <div className="ag-top">
                    <span className="ag-head">REAL ESTATE EXPERTS</span>
                    <span className="ag-body">We understand the fact that modern people strive for maximum comfort.</span>
                    <span className="ag-body">A harmonious environment, communication with professionals, accurate and timely information, commitment, reliable and convenient technological solutions that save the resources that are important to them.</span>
                    <span className="ag-body">We have implemented all these in AX CAPITAL</span>
                </div>
                <div className="ag-btn">
                    <Button data={"Enquire Now"} />
                </div>
                <div className="ag-stats">
                    <div className="stats-div">
                        <span className="stats">5000+</span>
                        <span className="stats-com">OFFERS IN THE DATABASE</span>
                    </div>
                    <div className="stats-div">
                        <span className="stats">30+</span>
                        <span className="stats-com">LANGUAGES</span>
                    </div>
                    <div className="stats-div">
                        <span className="stats">500+</span>
                        <span className="stats-com">SPECIALISTS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agents;