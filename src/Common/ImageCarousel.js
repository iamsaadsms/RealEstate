import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css"; // Import the CSS file

const ImageCarousel = ({ images }) => {
  return (
    <div className="ImageCarousel">
      <Carousel  className="carousel-div">
        {images.map((image, index) => (
          <div key={index} className="car-imgs">
            <img alt={`Item ${index}`} src={image} className="car-pics" />
          </div>

        ))}
      </Carousel>
      <hr />
    </div>
  );
};

export default ImageCarousel;
