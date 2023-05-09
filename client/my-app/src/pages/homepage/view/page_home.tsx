import React from 'react';
import Slider from '../el/Slider';
import "../styles/page_home.css"
import "../styles/swiper_custom.css"

const PageHome = () => {
    return (
        <div className="homepage-container">
            <Slider />

            <div className="company-intro-container">
                <span className="company-intro">
                    Exotic Pets - крупнейший магазин экзотических питомцев
                </span>
            </div>
        </div>
    );
}

export default PageHome;