import React from "react";
import './Sell.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import MainSell from "./MainSell";
import Principles from "./Principles";
import Visual from "./Visual";
import Works from "./Works";

const Sell = () => {
    return(
        <div className="Sell">
            <Navbar />
            <MainSell />
            <Principles />
            <Visual />
            <Works />
            <Footer />
        </div>
    )
}

export default Sell;