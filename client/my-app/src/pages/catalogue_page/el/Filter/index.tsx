import * as React from 'react';

import './index.css';

import Filter from './Filter';
import productStore from '../../../../store/productStore';

const CatalogueFilter = () => {

    function handleSendSearch(event: React.KeyboardEvent<HTMLInputElement>) {
        const target = event.target as HTMLTextAreaElement;

        if (event.key === "Enter") {
            productStore.setSearchingProducts(target.value);
        }
    }

    return (
        <div className='catalogue-filter-container'>

                <Filter></Filter>

                <input 
                    className='search-bar' 
                    onKeyDown={(e) => handleSendSearch(e)}
                    type="text" 
                    placeholder="Поиск по каталогу"
                />
                
        </div>
    );
}

export default CatalogueFilter;