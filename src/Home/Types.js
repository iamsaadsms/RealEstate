import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Types.css";
import ImageSlider from "../Common/ImageSlider";
import typesData from "../JSON/Types.json";
import { BiBath } from "react-icons/bi";
import { FaBed } from "react-icons/fa";

const Types = ({ head, imagesList }) => {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const sliderRef = useRef(null); // Create a ref for the slider

  useEffect(() => {
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

  const handleNext = () => {
    sliderRef.current.slickNext(); // Navigate to the next slide
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev(); // Navigate to the previous slide
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows (we'll use custom controls)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const classStyle = {
    height: "40vh",
    width: "30vw",
    objectFit: "cover",
    margin: 0,
    padding: 0,
  };

  return (
    <div className="Types">
      <div className="tab-head">
        <span>{head}</span>
      </div>
      <div className="tabs-types">
        {Object.keys(data).map((type) => (
          <a
            key={type}
            onClick={() => handleTabClick(type)}
            className={activeTab === type ? "active" : ""}
          >
            {type}
          </a>
        ))}
      </div>
      <div className="type-category">
        <Slider {...settings} ref={sliderRef} style={{overflowY:'hidden'}}>
          {data[activeTab] && data[activeTab].length > 0 ? (
            data[activeTab].map((item, index) => {
              const imagesArray = [
                item.img1,
                item.img2,
                item.img3,
                item.img4,
              ].map((img) => imagesList[img]);

              return (
                <div key={index} className="slick-slide">
                  <div className="prop-data">
                    <ImageSlider imagesList={imagesArray} style={classStyle} />
                    <div className="data-slide">
                      <span className="slide-head">{item.name}</span>
                      <p className="slide-p">
                        <i className="bi bi-geo-alt"></i>
                        {item.loc}
                      </p>
                      <p>
                        <BiBath className="bath" /> {item.baths}{" "}
                        <FaBed className="bed" /> {item.bed} | {item.area} sq.ft
                      </p>
                      <hr />
                      <span className="cost">
                        AED {formatNumberWithCommas(item.cost)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No items to display.</div>
          )}
        </Slider>
      </div>
      <div className="type-controls">
        <span className="prev-type" onClick={handlePrevious}>
          PREVIOUS
        </span>
        <span className="next-type" onClick={handleNext}>
          NEXT
        </span>
      </div>
    </div>
  );
};

export default Types;
