import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import MainHome from "./MainHome";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <MainHome />
        </div>
    );
}

export default Home;
