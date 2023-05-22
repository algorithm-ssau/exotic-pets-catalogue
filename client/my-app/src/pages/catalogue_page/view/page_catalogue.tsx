import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";

import "../styles/page_catalogue.css";
import "../../homepage/styles/swiper_custom.css"


// components
import ProductCard from '../el/ProductCard';
import ProductSlider from '../el/ProductSlider';
import Filter from '../el/Filter';
import productStore from '../../../store/productStore';

//styles
import "../styles/page_catalogue.css";
import CatalogueFilter from '../el/Filter';

const PageCatalogue = () => {

    return (
        <div className="catalogue-page-container">
            <div className='filter-container'>
                <CatalogueFilter></CatalogueFilter>
            </div>

            {
                productStore.selectedKingdom === "all" ?
                <div className="popular-products-container">
                    <h2 className="products-header">Популярное</h2>
                </div> :
                <div className="popular-products-container">
                    <h2 className="products-header">{productStore.getKingdomLabel(productStore.selectedKingdom)}</h2>
                </div>
            }
            
            <ProductSlider />
        </div>
    );
}

export default observer(PageCatalogue);