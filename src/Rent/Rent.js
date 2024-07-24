import React from "react";
import './Rent.css';
import Articles from "../Common/Articles";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Media/Types', false, /\.(png|jpe?g|svg)$/));

const Rent = () => {
    return (
        <div className="Rent">
            <Navbar />
            <Articles head={"PROPERTIES FOR RENT IN DUBAI"} type="Penthouse" imagesList={images} />
            <Footer />
        </div>
    );
}

export default Rent;
