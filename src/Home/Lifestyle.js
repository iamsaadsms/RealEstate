import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Lifestyle.css'; // Ensure this CSS file includes necessary styles
import dl from '../Media/Lifestyle/downtown-living.webp';
import rc from '../Media/Lifestyle/residential-community.webp';
import ml from '../Media/Lifestyle/life-style-marina.webp';
import wp from '../Media/Lifestyle/life-style-waterfront.webp';
import bp from '../Media/Lifestyle/beachfront-property.webp';
import lp from '../Media/Lifestyle/life-style-luxury-penthouses.webp';
import ge from '../Media/Lifestyle/life-style-golf.webp';
import lux from '../Media/Lifestyle/luxury.webp';
import Prompt from './Prompt';

const Lifestyle = () => {
    const sliderRef = useRef(null); // Reference for the slider instance

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Disable default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const life = [
        { name: "Downtown Living", img: dl },
        { name: "Residential Community", img: rc },
        { name: "Marina Living", img: ml },
        { name: "Waterfront Property", img: wp },
        { name: "Beachfront Property", img: bp },
        { name: "Luxury Penthouses", img: lp },
        { name: "Golf Estate", img: ge },
        { name: "Luxury Properties", img: lux }
    ];

    // Handle Next and Previous actions
    const handleNext = () => {
        sliderRef.current.slickNext(); // Use slickNext() for custom next button
    };

    const handlePrevious = () => {
        sliderRef.current.slickPrev(); // Use slickPrev() for custom previous button
    };

    return (
        <div className="Lifestyle">
            <Prompt />
            <div className="lifestyle-contents">
                <div className="l-head">
                    <span className="life-h">LIFESTYLE</span>
                    <span className="life-sub">Wide range options for any lifestyle. Make your choice with us.</span>
                </div>
                <Slider {...settings} className="slider" ref={sliderRef}>
                    {life.map((sub, index) => (
                        <div key={index} className='slide-content'>
                            <div className="slide-item">
                                <img className="img-life" src={sub.img} alt={sub.name} />
                            </div>
                            <div className='img-name'>
                                <div className='img-data-slide'>
                                    <span className='loc-name'>{sub.name}</span>
                                </div>
                                <hr />
                                <div className='img-data-slide ex'>
                                    <span className='explore'>EXPLORE</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="slide-controls">
                    <span className="prev" onClick={handlePrevious}>PREVIOUS</span>
                    <span className="next" onClick={handleNext}>NEXT</span>
                </div>
            </div>
        </div>
    );
}

export default Lifestyle;
