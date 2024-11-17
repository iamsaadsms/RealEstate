import React from "react";
import './MainHome.css';
import bg from '../Media/bg.webp';
import Button from "../Common/Button";
import Form from "../Common/Form";

const MainHome = () => {
    return (
        <div className="MainHome">
            <div className="bg-img">
                <img className="bg" src={bg} alt="Bg" />
            </div>
            <div className="main-text">
                <span className="bg-txt">INVEST IN DUBAI REAL ESTATE</span>
                <span className="bg-small">We Bring Due Diligence at Your Service</span>
                <Button data={"Leave a Request"}/>
            </div>
            <Form />
        </div>
    );
}

export default MainHome;
