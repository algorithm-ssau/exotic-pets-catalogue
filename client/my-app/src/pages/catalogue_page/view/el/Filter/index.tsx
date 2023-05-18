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

                
                <select className='filter-list' name='species'>
                    <option disabled selected>Вид животного</option>
                    <option>Все</option>
                    <option value ='1'>Приматы</option>
                    <option value ='2'>Лисицы</option>
                    <option value ='3'>Попугаи</option>
                    <option value ='4'>Совы</option>
                    <option value ='5'>Лягушки</option>
                    <option value ='6'>Ящерицы</option>
                    <option value ='7'>Крокодилы</option>
                    <option value ='8'>Черепахи</option>
                    <option value ='9'>Кошки</option>
                    <option value ='10'>Скорпионы</option>
                    <option value ='11'>Пауки</option>
                    <option value ='12'>Муравьи</option>
                    <option value ='13'>Жуки</option>
                    <option value ='14'>Хрящевые рыбы</option>
                    <option value ='15'>Костные рыбы</option>
                    <option value ='16'>Жабы</option>
                </select>    


                <input className='search-bar' type="text" placeholder="Поиск по каталогу" />
        </div>
    );
}

export default CatalogueFilter;