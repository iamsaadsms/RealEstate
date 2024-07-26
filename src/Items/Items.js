import React from "react";
import './Items.css';
import ImageCarousel from "../Common/ImageCarousel";
import { useLocation } from 'react-router-dom';
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { BiBath } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Features from "./Features";
import Description from "./Description";
import ListingDetails from "./ListingDetails";
import Types from "../Home/Types";
import Lifestyle from "../Home/Lifestyle";
const Items = () => {
    const location = useLocation();
    const { images = [], name, loc, baths, bed, area, cost, id } = location.state || {};

    console.log('Item details:', { images, name, loc, baths, bed, area, cost });
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

      const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const image = importAll(require.context('../Media/Types', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className="Items">
        <Navbar />
        <ImageCarousel images={images} />
        <div className="item-data">
            <span className="it-nm">{name}</span>
            <div className="cost-items">
                <p className="it-price">AED {formatNumberWithCommas(cost)}</p>
                <span className="book right"><i className="bi bi-bookmark mark"></i></span>
            </div>
            <hr />
            <div className="it-extra">
                <p><i className="bi bi-geo-alt-article"></i> {loc}</p>
                <div className="b-items">
                    <BiBath className='bath-it' />
                    <p className="b-it">
                        {baths}  
                    </p>
                </div>
                <div className="b-items">
                <FaBed className='bed-it' />
                <p className="b-it"> 
                    {bed}  
                </p>
                </div>
                <p>
                    <i className="bi bi-geo-alt-it"></i> {area} sq.ft
                </p>
            </div>
            <hr />
        </div>
        <Features itemId={id} />
        <hr />
        <Description itemId={id} />
        <ListingDetails itemId={id} />
        <Types head={"SIMILAR PROPERTIES"} imagesList={image}/>
        <Lifestyle />
        <Footer />
      </div>
    );
}

export default Items;
