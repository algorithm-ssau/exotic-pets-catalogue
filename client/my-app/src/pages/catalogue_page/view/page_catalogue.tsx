import React, { useEffect, useState } from 'react';
import ProductCard from '../el/ProductCard';
import ProductSlider from '../el/ProductSlider';

import "../styles/page_catalogue.css";
import "../../homepage/styles/swiper_custom.css"


const PageCatalogue = () => {

    return (
        <div className="catalogue-page-container">
            <div className="popular-products-container">
                <h2 className="products-header">Популярное</h2>
                <ProductSlider />
            </div>
        </div>
    );
}

export default PageCatalogue;