import React from "react";
import './Share.css';

const Share = () => {
    return(
        <div className="Share">
            <span className="sh-span">Share</span>
            <div className="soc-sh-icons">
                <i class="bi bi-envelope"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-whatsapp"></i>
            </div>
        </div>
    )
}

export default Share;