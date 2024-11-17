import React from "react";
import './Navtabs.css';
import { Link } from 'react-router-dom';

const Navtabs = () => {
    let tabs = [
        { name: "Buy", link: "/buy" },
        { name: "Rent", link: "/rent" },
        { name: "Sell", link: "/sell" },
        { name: "Agents", link: "/agents" }
        // { name: "THE AX WAY", link: "/ax-way" }
    ];
    return (
        <div className="Navtabs">
            {tabs.map((part, index) => (
                <div className="tabs" key={index}>
                    <Link to={part.link} className="link-tabs">
                        <span className="l-tabs">{part.name}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Navtabs;
