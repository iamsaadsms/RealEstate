import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import MainHome from "./MainHome";
import Exclusives from "../Common/Exclusives";
import BuySell from "./BuySell";
import Agents from "./Agents";
import Types from "./Types";
import Prompt from "./Prompt";
import Lifestyle from "./Lifestyle";
import PromptForm from "../Common/PromptForm";
import Footer from "../Common/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <MainHome />
            <Exclusives />
            <BuySell />
            <Agents />
            <Types head={"LUXURY PROPERTIES"} />
            <Lifestyle />
            <PromptForm />
            <Footer />
        </div>
    );
}

export default Home;
