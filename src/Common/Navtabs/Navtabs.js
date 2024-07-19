import React from "react";
import './Navtabs.css';

const Navtabs = () => {
    let tabs = [
        { name: "Buy" },
        { name: "Rent" },
        { name: "Sell" },
        { name: "Agents" },
        { name: "THE AX WAY" }
    ];
    return (
        <div className="Navtabs">
            {tabs.map((part, index) => (
                <div className="tabs" key={index}>
                    <span className="l-tabs">{part.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Navtabs;
