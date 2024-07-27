import React from "react";
import './Visual.css';
import video from '../Media/video.webp';
import photo from '../Media/photo.webp';

const Visual = () => {
    let visuals = [
        {
            head: "VIDEO",
            detail: "We shoot and edit impressive videos to capture the mood and atmosphere of your property. Our professional videographers will highlight all its advantages, ensuring full immersion for potential buyers.",
            img: video,
            link: "View AX CAPITAL Videos"
        },
        {
            head: "PHOTO",
            detail: "The right camera angle, shot size, and lighting will create the perfect image, answering the question, 'Why should I buy this apartment?' We will showcase both the interior and exterior of your real estate in the best possible way.",
            img: photo,
            link: "View AX CAPITAL Photos"
        }
    ]
    return (
        <div className="Visual">
            <span className="vis-head">CREATE A COMPELLING VISUAL</span>
            <div className="visual-cat">
                {visuals.map((cat, index) => (
                    <div className="vis-categories" key={index}>
                        <img src={cat.img} className="vis-img" alt="Visual" />
                        <div className="img-vis-details">
                            <span className="vis-img-h">{cat.head}</span>
                            <p className="vis-img-p">{cat.detail}</p>
                            <a className="vis-link" href="#">{cat.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Visual;
