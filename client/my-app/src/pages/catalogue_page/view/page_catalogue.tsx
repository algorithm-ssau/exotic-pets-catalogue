import React from 'react';
import { observer } from "mobx-react";

import "../styles/page_catalogue.css";
import "../../homepage/styles/swiper_custom.css"


// components
import Products from '../el/Products';
import productStore from '../../../store/productStore';
import CatalogueFilter from '../el/Filter';

//styles
import "../styles/page_catalogue.css";
import { kingdomFilterT } from './ifc_catalogue';

const kingdomOptions = [
    {label: "Все", value: kingdomFilterT.all},
    {label: "Млекопитающие", value: kingdomFilterT.mammals},
    {label: "Птицы", value: kingdomFilterT.birds},
    {label: "Рептилии", value: kingdomFilterT.reptiles},
    {label: "Земноводные", value: kingdomFilterT.frogs},
    {label: "Рыбы", value: kingdomFilterT.fish},
    {label: "Насекомые", value: kingdomFilterT.insects},
    {label: "Паукообразные", value: kingdomFilterT.spiders},
  ]

const PageCatalogue = () => {

    return (
        <div className="catalogue-page-container">
            <div className="filter-container">
                <CatalogueFilter></CatalogueFilter>
            </div>

            {
                productStore.selectedKingdom === 0
                    ? <h2 className="products-header">Весь каталог</h2>
                    : <h2 className="products-header">{kingdomOptions.find(option => productStore.selectedKingdom === option.value)?.label}</h2>
            }
            
            <Products />
        </div>
    );
}

export default observer(PageCatalogue);