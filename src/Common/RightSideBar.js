import React from "react";
import './RightSideBar.css';
import ragent from '../Media/ragent.jpg';
import Button from "./Button";

const RightSideBar = () => {
    let agent = [
        {
            name: "Azeeza Al-Sham",
            position: "Property Consultant",
            img: ragent
        }
    ];

    let conBtn = {
        width: "15vw",
        fontSize:"2.5vh"
    }

    return (
        <div className="RightSideBar">
            <div className="con-data">
                <div className="con-img">
                    <img src={agent[0].img} className="agent-img" alt="Agent" />
                </div>
                <div className="con-details">
                    <span className="con-name">{agent[0].name}</span>
                    <span className="con-post">{agent[0].position}</span>
                </div>
            </div>
            <div className="con-btns">
                <Button data={"CALL US"} style={conBtn}/>
                <Button data={"INQUIRY"} style={conBtn}/>
            </div>
            <div className="con-contact">
                <span>Or Contact Us via </span>
                <i className="bi bi-whatsapp what-con"></i>
                <span className="what-con"> Whatsapp</span>
            </div>
        </div>
    );
}

export default RightSideBar;
