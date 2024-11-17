import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import MainHome from "./MainHome";
import Exclusives from "../Common/Exclusives";
// import BuySell from "./BuySell";
import Agents from "./Agents";
import Types from "./Types";
import Lifestyle from "./Lifestyle";
import PromptForm from "../Common/PromptForm";
import Footer from "../Common/Footer";

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Media/Types', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <MainHome />
            <Exclusives />
            // <BuySell />
            <Agents />
            <Types head={"LUXURY PROPERTIES"} imagesList={images} />
            <Lifestyle />
            <PromptForm />
            <Footer />
        </div>
    );
}

export default Home;
