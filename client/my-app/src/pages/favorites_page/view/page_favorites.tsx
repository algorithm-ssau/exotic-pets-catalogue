import React from 'react';
import { observer } from 'mobx-react';
import productStore from '../../../store/productStore';
import ProductCard from '../../catalogue_page/el/ProductCard';

import "../styles/page_favorites.css"


const PageFavorites = () => {
    return (
        <div className="page-favorites-container">
            <h2 className="favorites-header" >Избранное</h2>
            {
                productStore.favProducts.length === 0
                    ? <h3 className="cart-empty-message">Вы еще не добавили ни одного питомца в избранное</h3>
                    : <ul className="favorite-products">
                        {
                            productStore.favProducts.map(product => {
                                return <li key={product.id}>
                                    <ProductCard
                                        id={product.id}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        description={product.description}
                                    />
                                </li>
                            })
                        }
                    </ul>
            }
        </div>
    );
}

export default observer(PageFavorites);