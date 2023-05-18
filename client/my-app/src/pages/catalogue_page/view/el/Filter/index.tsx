import * as React from 'react';

import './index.css';

import Filter from './Filter';

const CatalogueFilter = () => {
    return (
        <div className='catalogue-filter'>

                <Filter></Filter>

                <input className='search-bar' type="text" placeholder="Поиск по каталогу" />
                
        </div>
    );
}

export default CatalogueFilter;