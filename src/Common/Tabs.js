// Tabs.jsx
import React from 'react';
import './Tabs.css';

const Tabs = ({ types, activeType, setActiveType }) => {
  return (
    <div className="tabs">
      {types.map((type, index) => (
        <button
          key={index}
          className={activeType === type ? 'active' : ''}
          onClick={() => setActiveType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
