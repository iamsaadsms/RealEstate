// src/components/Formtabs.js
import React, { useState } from "react";
import './Formtabs.css';
import Button from "../Button";
import Dropdown from "../Dropdown";
import CurrencyConverter from "../../Home/CurrencyConverter";

const Formtabs = () => {
  const [activeTab, setActiveTab] = useState("Primary");
  const [selectedCurrency, setSelectedCurrency] = useState('AED'); // Set default currency to AED

  const tabs = [
    { name: "Primary" },
    { name: "Secondary" }
  ];

  const propertyTypes = [
    { text: 'Apartments', value: 'Apartments' },
    { text: 'Villas', value: 'Villas' },
    { text: 'Penthouses', value: 'Penthouses' },
    { text: 'Townhouses', value: 'Townhouses' },
    { text: 'Duplexes', value: 'Duplexes' },
    { text: 'Hotel Apartments', value: 'Hotel Apartments' },
    { text: 'Whole Buildings', value: 'Whole Buildings' },
    { text: 'Short-terms', value: 'Short-terms' },
    { text: 'Full floor Properties', value: 'Full floor Properties' },
    { text: 'Half floor Properties', value: 'Half floor Properties' },
    { text: 'Commercial Properties', value: 'Commercial Properties' },
    { text: 'Showrooms', value: 'Showrooms' },
    { text: 'Plots', value: 'Plots' }
  ];

  const bedrooms = [
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '4', value: 4 },
    { text: '5', value: 5 },
    { text: '6', value: 6 },
    { text: '7', value: 7 },
    { text: '8', value: 8 },
    { text: '9', value: 9 },
    { text: '10', value: 10 }
  ];

  const currencies = [
    'GBP', 'CNY', 'EUR', 'AED', 'USD'
  ];

  const formBtn = {
    marginLeft: '3vw',
    width: '25vw',
    marginTop: '3vh'
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

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
            <Dropdown label="Property Type" options={propertyTypes} />
          </div>
          <div className="bed-num">
            <Dropdown label="Bedrooms" options={bedrooms} />
          </div>
          <div className="currency">
            <label className="c-num">Currency</label>
            <div className="curr-country">
              {currencies.map((cur, index) => (
                <a
                  key={index}
                  className={`currency-link ${cur === selectedCurrency ? 'active' : ''}`}
                  onClick={() => handleCurrencyChange(cur)}
                >
                  {cur}
                </a>
              ))}
            </div>
          </div>
          <div className="min-max">
            <CurrencyConverter selectedCurrency={selectedCurrency} />
          </div>
          <Button data={"Show Projects"} style={formBtn} />
        </div>
      ))}
    </div>
  );
};

export default Formtabs;
