import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './ImageSlider.css';

const ImageSlider = ({ imagesList, style }) => {
    return (
        <Splide
            options={{
                type: 'fade',
                height: '40vh',
                rewind: true,
                autoplay: true,
                pagination: false,
                arrows: true,
                heightRatio: 0.5,
            }}
        >
            {imagesList.map((imgSrc, index) => (
                <SplideSlide key={index}>
                    {imgSrc ? (
                        <img src={imgSrc} alt={`Image ${index}`} style={style} />
                    ) : (
                        <p>Image not available</p>
                    )}
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default ImageSlider;
