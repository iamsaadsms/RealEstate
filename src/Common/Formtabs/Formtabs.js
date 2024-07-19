import React, { useState } from "react";
import './Formtabs.css';
import Button from "../Button";

const Formtabs = () => {
    const [activeTab, setActiveTab] = useState("Primary");

    const tabs = [
        {
            name: "Primary"
        },
        {
            name: "Secondary"
        }
    ];

    const propertyTypes = [
        'Apartments', 
        'Villas', 
        'Penthouses', 
        'Townhouses', 
        'Duplexes', 
        'Hotel Apartments', 
        'Whole Buildings', 
        'Short-terms', 
        'Full floor Properties', 
        'Half floor Properties', 
        'Commercial Properties', 
        'Showrooms', 
        'Plots'
    ];

    const bedrooms = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    const currency = [
        'GBP',
        'CNY',
        'EUR',
        'AED',
        'USD'
    ];

    const formBtn = {
        marginLeft: '3vw',
        width: '25vw',
        marginTop: '3vh'
    }

    return (
        <div className="Formtabs">
            <div className="tab-headers">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-header ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`form-data ${activeTab === tab.name ? 'active' : 'hidden'}`}
                >
                    <div className="prop-type">
                        <label className="p-type">Property Type</label>
                        <select>
                            {propertyTypes.map((type, index) => (
                                <option className="prop" key={index} value={type} aria-placeholder="Property Type">{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="bed-num">
                        <label className="b-num">Bedrooms</label>
                        <select>
                            {bedrooms.map((num, index) => (
                                <option key={index} value={num} aria-placeholder="Bedrooms">{num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="currency">
                        <label className="c-num">Currency</label>
                        <div className="curr-country">
                            {currency.map((cur, index) => (
                                <a key={index} href="#" value={cur}>{cur}</a>
                            ))}
                        </div>
                    </div>
                    <div className="min-max">
                        <span className="Min">Min</span>
                        <span className="Min-num"></span>
                        <span className="Max">Max</span>
                        <span className="Min-num"></span>
                    </div>
                    <Button data={"Show Projects"} style={formBtn} />
                </div>
            ))}
        </div>
    );
}

export default Formtabs;
