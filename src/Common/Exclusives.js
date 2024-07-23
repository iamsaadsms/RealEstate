import React, { useState, useEffect, useRef } from "react";
import './Exclusives.css';
import ExclusivesJSON from "../JSON/Exclusives.json";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Button from './Button';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Exclusives = () => {
    const [items, setItems] = useState([]);
    const splideRef = useRef(null); // Reference to Splide component

    useEffect(() => {
        const itemsArray = ExclusivesJSON;
        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            img: images[item.img],
            sliderImages: item.images ? item.images.map(img => images[img]) : []
        }));

        setItems(itemsWithImages);
    }, []);

    const exBTn = {
        width: '18vw',
    }

    // Handle Next and Previous actions
    const handleNext = () => {
        splideRef.current.splide.go('>');
    };

    const handlePrevious = () => {
        splideRef.current.splide.go('<');
    };

    return (
        <div className="exclusive-container">
            <div className="ex-top">
                <span className="ex-head">EXCLUSIVES</span>
                <span className="head-com">Discover the outstanding range of Dubai properties only with AX CAPITAL</span>
            </div>
            <Splide
                ref={splideRef} // Attach the reference
                options={{
                    type: 'fade',
                    height: '80vh',
                    rewind: true,
                    autoplay: true,
                    pagination: false,
                    arrows: false,
                    heightRatio: 0.5,
                    speed: 1000, // Duration of the transition in milliseconds
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing function
                }}
            >
                {items.map((item, index) => (
                    <SplideSlide key={index} className="splide-head">
                        <div className="slide-content">
                            <img src={item.img} alt={item.name} className="img-item" />
                            <div className="exclusive-data">
                                <div className="ex-item">
                                    <div className="ex-data">
                                        <div className="ex-data-details">
                                            <div className="ex-data-left">
                                                <div className="ex-data-h">
                                                    <span className="ex-heading">{item.h1}</span>
                                                </div>
                                                <div className="ex-data-p">
                                                    <p className="ex-p">{item.d1}</p>
                                                </div>
                                                <div className="ex-data-h">
                                                    <span className="ex-heading">{item.h2}</span>
                                                </div>
                                                <div className="ex-data-p">
                                                    <p className="ex-p">{item.d2}</p>
                                                </div>
                                            </div>
                                            <div className="ex-data-right">
                                                <div className="ex-data-h">
                                                    <span className="ex-heading">{item.h3}</span>
                                                </div>
                                                <div className="ex-data-p">
                                                    <p className="ex-p">{item.d3}</p>
                                                </div>
                                                <div className="ex-data-h">
                                                    <span className="ex-heading">{item.h4}</span>
                                                </div>
                                                <div className="ex-data-p">
                                                    <p className="ex-p">{item.d4}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ex-data-loc">
                                            <p className="loc-p">{item.loc}</p>
                                            <span className="date">{item.date}</span>
                                        </div>
                                        <div className="ex-btns">
                                            <Button data={"Enquire Now"} style={exBTn}/>
                                            <Button data={"Learn More"} style={exBTn}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            <div className="slide-controls">
                <span className="prev" onClick={handlePrevious}>PREVIOUS</span>

                <span className="next" onClick={handleNext}>NEXT</span>
            </div>
        </div>
    );
};

export default Exclusives;
