import React, { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
      <i className="bi bi-chevron-left left-arrow"></i>
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button className="next" onClick={nextSlide}>
      <i className="bi bi-chevron-right right-arrow"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;
