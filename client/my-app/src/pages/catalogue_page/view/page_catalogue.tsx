import React from 'react';

// components
import Filter from './el/Filter';

//styles
import "../styles/page_catalogue.css";
import CatalogueFilter from './el/Filter';

const PageCatalogue = () => {
    return (
        <div className='filter-container'>
            <CatalogueFilter></CatalogueFilter>
        </div>
    );
}

export default PageCatalogue;