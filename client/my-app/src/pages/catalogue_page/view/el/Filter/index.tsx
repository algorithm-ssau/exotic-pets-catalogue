import * as React from 'react';

import './index.css';

const CatalogueFilter = () => {
    return (
        <div className='catalogue-filter'>
                <div>
                    <input className='search-bar' type="text" placeholder="Поиск по каталогу" />
                </div>          
        </div>
    );
}

export default CatalogueFilter;