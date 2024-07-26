import React from "react";
import './Description.css';
import FJSON from '../JSON/Features.json';

const Description = ({ itemId }) => {
    const itemFeatures = FJSON.find(item => item.id === itemId);

    // If no features are found, return null or some placeholder
    if (!itemFeatures) {
        return <div>No description available for this item.</div>;
    }

    const { desc } = itemFeatures;

    return (
        <div className="Description">
            <div className="desc-head">
                <span>DESCRIPTION</span>
            </div>
            <div className="desc-body">
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Description;
