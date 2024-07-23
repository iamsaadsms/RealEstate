import React, { useState, useEffect } from 'react';
import './BuySell.css';
import BuySellJSON from '../JSON/BuySell.json';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg|webp)$/));

const BuySell = () => {
    const [items, setItems] = useState([]);
    const [activeType, setActiveType] = useState("BUY"); // Default to "BUY"

    useEffect(() => {
        const itemsArray = Object.values(BuySellJSON);
        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            img: images[item.img],
            hoverImg: images[`${item.tab.toLowerCase()}.webp`] || images[item.img] // Fallback to default if hover image is missing
        }));
        setItems(itemsWithImages);
    }, []);

    const handleMouseEnter = (tab) => {
        setActiveType(tab);
    };

    const handleMouseLeave = () => {
        setActiveType("BUY"); // Reset to default image on mouse leave
    };

    return (
        <div className="BuySell">
            {items.map((item, index) => (
                <div 
                    className="BuyRent" 
                    key={index}
                    onMouseEnter={() => handleMouseEnter(item.tab)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div>
                        <div className='buy-rent'>
                            <span className='br'>{item.tab}</span>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                        <div className='det'>
                            <span className={`br-det ${activeType !== item.tab ? 'hidden' : ''}`}>
                                With a comprehensive portfolio of properties and countless offers, we cover all your real estate needs.
                            </span>
                        </div>
                    </div>
                    <div className='br-imgs'>
                        <img 
                            className={`br-pics ${activeType === item.tab ? 'active' : ''}`} 
                            src={item.hoverImg} 
                            alt={item.tab} 
                        />
                        <img 
                            className={`br-pics ${activeType !== item.tab ? 'active' : 'hidden'}`} 
                            src={item.img} 
                            alt={item.tab} 
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BuySell;
