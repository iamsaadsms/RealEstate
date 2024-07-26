import React from "react";
import './ListingDetails.css';
import ListingJSON from '../JSON/ListingDetails.json';

const ListingDetails = ({ itemId }) => {
    const itemListings = ListingJSON.find(item => item.id === itemId);

    // If no listings are found, return null or some placeholder
    if (!itemListings) {
        return <div>No listings available for this item.</div>;
    }

    const { id, ...listings } = itemListings; // Destructure to remove id
    const listingValues = Object.values(listings);

    // Format listings into rows of 2 columns each
    const rows = [];
    for (let i = 0; i < listingValues.length; i += 2) {
        rows.push(listingValues.slice(i, i + 2));
    }

    return (
        <div className="ListingDetails">
            <div className="ld-head">
                <span>LISTING DETAILS</span>
            </div>
                <div  className="listing-row">
                    <div className="left-list">
                        <div className="ld-list">
                            <span className="lh">Location:</span>
                            <span className="ld">{listingValues[0]}</span>
                        </div>
                        <div className="ld-list">
                            <span className="lh">Furnishing:</span>
                            <span className="ld">{listingValues[1]}</span>
                        </div>
                    </div>
                    <div className="right-list">
                        <div className="ld-list">
                                <span className="lh">Price Per Sq. Ft:</span>
                                <span className="ld">{listingValues[2]}</span>
                            </div>
                            <div className="ld-list">
                                <span className="lh">Rera Number:</span>
                                <span className="ld">{listingValues[3]}</span>
                            </div>
                    </div>
                </div>
        </div>
    );
}

export default ListingDetails;
