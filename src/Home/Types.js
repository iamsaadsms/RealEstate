import React, { useState, useEffect } from 'react';
import './Types.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import ImageSlider from '../Common/ImageSlider';
import typesData from '../JSON/Types.json';
import { BiBath } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';

const Types = ({ head }) => {
    const [data, setData] = useState({});
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        console.log('Types data loaded:', typesData);
        setData(typesData[0]);
        if (typesData[0]) {
            setActiveTab(Object.keys(typesData[0])[0]); // Set the first key as the active tab initially
        }
    }, []);

    if (!data || Object.keys(data).length === 0 || !activeTab) {
        return <div>Loading...</div>;
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="Types">
            <div className='tab-head'>
                <span>{head}</span>
            </div>
            <div className="tabs-types">
                {Object.keys(data).map((type) => (
                    <a key={type} onClick={() => handleTabClick(type)} className={activeTab === type ? 'active' : ''}>
                        {type}
                    </a>
                ))}
            </div>
            <div className="type-category">
                <Splide options={{ perPage: 3, pagination: false, arrows: true }} >
                    {data[activeTab] && data[activeTab].map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="prop-data">
                                <ImageSlider imagesList={[item.img1, item.img2, item.img3, item.img4]} />
                                <div className='data-slide'>
                                    <span className='slide-head'>{item.name}</span>
                                    <p className='slide-p'><i className="bi bi-geo-alt"></i>{item.loc}</p>
                                    <p>
                                        <BiBath className='bath' /> {item.baths} <FaBed className='bed' /> {item.bed} | {item.area} sq.ft
                                    </p>
                                    <hr />
                                    <span className='cost'>AED {formatNumberWithCommas(item.cost)}</span>
                                </div>
                                <div className='contact-slide'>
                                    <i className="bi bi-telephone"></i>
                                    <i className="bi bi-envelope"></i>
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Types;
