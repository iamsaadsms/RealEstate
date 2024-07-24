import React, { useState, useEffect } from 'react';
import './Articles.css';
import '@splidejs/splide/dist/css/splide.min.css';
import ImageSlider from '../Common/ImageSlider';
import typesData from '../JSON/Buy.json';
import { BiBath } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Articles = ({ head, imagesList }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('Types data loaded:', typesData);
        if (typesData[0]) {
            setData(typesData);
        }
    }, []);

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const classStyle = {
        height: '40vh',
        width: '45vw',
        objectFit: 'cover',
        margin: 0,
        padding: 0
    }

    return (
        <div className="Types-article">
            <div className='tab-head-article'>
                <span>{head}</span>
            </div>
            <div className="type-category-article">
                {data.map((item, index) => {
                    const imagesArray = [item.img1, item.img2, item.img3, item.img4].map(img => imagesList[img]);
                    return (
                        <div key={index} className="prop-data-article">
                            <ImageSlider imagesList={imagesArray} style={classStyle} />
                            <div className='data-slide-article'>
                                <span className='slide-head-article'>{item.name}</span>
                                <p className='slide-p-article'><i className="bi bi-geo-alt-article"></i>{item.loc}</p>
                                <p>
                                    <BiBath className='bath-article' /> {item.baths} <FaBed className='bed-article' /> {item.bed} | {item.area} sq.ft
                                </p>
                                <hr />
                                <span className='cost-article'>AED {formatNumberWithCommas(item.cost)}</span>
                            </div>
                            <div className='contact-slide-article'>
                                <i className="bi bi-telephone"></i>
                                <i className="bi bi-envelope"></i>
                                <i className="bi bi-whatsapp"></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Articles;
