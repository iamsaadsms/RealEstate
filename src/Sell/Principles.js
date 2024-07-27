import React from "react";
import './Principles.css';
import PJSON from '../JSON/Principles.json';

const Principles = () => {
    return (
        <div className="Principles">
            <span className="prin-head">OUR WORK PRINCIPLES</span>
            <div className="prin-blocks">
                {PJSON.map((rule, index) => (
                    <div className="prin-details" key={index}>
                        <span className="prin-h">{rule.principle.toUpperCase()}</span>
                        <p className="prin-p">{rule.explanation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Principles;
