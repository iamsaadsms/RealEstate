import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CurrencyConverter.css';

const CurrencyConverter = ({ selectedCurrency }) => {
  const [rates, setRates] = useState({});
  const [userMinValue, setUserMinValue] = useState(40000); // Initial value in AED
  const [userMaxValue, setUserMaxValue] = useState(150000000); // Initial value in AED
  const [currencySymbol, setCurrencySymbol] = useState('د.إ'); // Default to AED symbol

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/AED')
      .then(response => setRates(response.data.rates))
      .catch(error => console.error('Error fetching exchange rates:', error));
  }, []);

  const convertAmount = useCallback((amount, toCurrency) => {
    const rate = rates[toCurrency];
    return rate ? (amount * rate) : amount; // Default to original amount if rate not found
  }, [rates]);

  useEffect(() => {
    if (selectedCurrency) {
      setCurrencySymbol(getCurrencySymbol(selectedCurrency));
      // Update min and max values when the currency changes
      // Convert min and max values to the selected currency
      setUserMinValue(prevMin => convertAmount(prevMin, selectedCurrency));
      setUserMaxValue(prevMax => convertAmount(prevMax, selectedCurrency));
    }
  }, [selectedCurrency, convertAmount]);

  const getCurrencySymbol = (currency) => {
    const symbols = {
      AED: 'د.إ',
      USD: '$',
      EUR: '€',
      GBP: '£',
      CNY: '¥'
    };
    return symbols[currency] || '';
  };

  const handleUserMinChange = (event) => {
    const value = Number(event.target.value);
    setUserMinValue(value);
    // Convert the value to the selected currency
    setUserMinValue(convertAmount(value, selectedCurrency));
  };

  const handleUserMaxChange = (event) => {
    const value = Number(event.target.value);
    setUserMaxValue(value);
    // Convert the value to the selected currency
    setUserMaxValue(convertAmount(value, selectedCurrency));
  };

  return (
    <div className="currency-converter">
      <div className="converter-inputs">
        <label className="Min-num">
          Min
          <span className="currency-symbol">{currencySymbol}</span>
          <input
            value={userMinValue}
            onChange={handleUserMinChange}
            className="Min-num-input"
          />
        </label>
        <label className="Min-num">
          Max
          <span className="currency-symbol">{currencySymbol}</span>
          <input
            value={userMaxValue}
            onChange={handleUserMaxChange}
            className="Min-num-input"
          />
        </label>
      </div>
    </div>
  );
};

export default CurrencyConverter;
