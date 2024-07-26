import React from "react";
import './Features.css';
import FJSON from '../JSON/Features.json';

const Features = ({ itemId }) => {
    // Find the features for the given item id
    const itemFeatures = FJSON.find(item => item.id === itemId);

    // If no features are found, return null or some placeholder
    if (!itemFeatures) {
        return <div>No features available for this item.</div>;
    }

    const { desc, ...features } = itemFeatures;
    const featureValues = Object.values(features);
    const firstFeature = featureValues[0];
    const lastFeature = featureValues[featureValues.length - 1];
    const middleFeatures = featureValues.slice(1, -1);

    // Format features into rows of 3 columns each
    const rows = [];
    for (let i = 0; i < middleFeatures.length; i += 3) {
        rows.push(middleFeatures.slice(i, i + 3));
    }

    return (
        <div className="Features">
            <div className="feat-head">
                <span>FEATURES & AMENITIES</span>
            </div>
            <table className="features-table">
                <tbody className="feat-body">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="t-row">
                            {row.map((feature, colIndex) => (
                                <td key={colIndex} className="t-col">{feature}</td>
                            ))}
                        </tr>
                    ))}
                    <tr className="t-row">
                        <td colSpan={3} className="t-col">{lastFeature}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Features;
