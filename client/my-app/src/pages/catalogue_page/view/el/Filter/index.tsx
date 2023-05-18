import * as React from 'react';

import './index.css';

const CatalogueFilter = () => {
    return (
        <div className='catalogue-filter'>
                <select className='filter-list' name='kingdom'>
                    <option disabled selected>Класс животного</option>
                    <option>Все</option>
                    <option value ='1'>Млекопитающие</option>
                    <option value ='2'>Птицы</option>
                    <option value ='3'>Рептилии</option>
                    <option value ='4'>Земноводные</option>
                    <option value ='5'>Рыбы</option>
                    <option value ='6'>Насекомые</option>
                    <option value ='7'>Паукообразные</option>
                </select>
                <input className='search-bar' type="text" placeholder="Поиск по каталогу" />
        </div>
    );
}

export default CatalogueFilter;