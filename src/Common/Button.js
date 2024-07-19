import React from "react";
import './Button.css';

const Button = ({data, style}) => {
    return(
        <div className="Button">
            <div className="btn" style={style}>{data}</div>
        </div>
    )
}

export default Button;