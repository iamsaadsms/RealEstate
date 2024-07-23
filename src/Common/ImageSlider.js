import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './ImageSlider.css';

const ImageSlider = ({ imagesList }) => {
    // Function to dynamically import image
    const importImage = (imageName) => {
        try {
            console.log(`Loading image: ../Media/Types/${imageName}`);
            return require(`../Media/Types/${imageName}`);
        } catch (error) {
            console.error(`Error loading image: ${imageName}`, error);
            return null; // Return null if image not found
        }
    };

    return (
        <Splide options={{ type: 'loop', perPage: 1, pagination: true, arrows: true }}>
            {imagesList.map((image, index) => {
                const imgSrc = importImage(image);
                return (
                    <SplideSlide key={index}>
                        {imgSrc ? (
                            <img src={imgSrc} alt={`Image ${index}`} className="imgs-slide" />
                        ) : (
                            <p>Image not available</p>
                        )}
                    </SplideSlide>
                );
            })}
        </Splide>
    );
};

export default ImageSlider;
