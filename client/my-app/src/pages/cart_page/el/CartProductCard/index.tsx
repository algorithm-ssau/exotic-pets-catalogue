import React from 'react';
import { ReactComponent as CrossSvg } from "../../../../assets/cross-icon.svg";
import { observer } from 'mobx-react';
import IProduct from '../../../../common/interfaces/IProduct';
import productStore from '../../../../store/productStore';

import "./index.css";

const CartProductCard = ({ id, image, name, price, description }: IProduct) => {
    function handleRemoveFromCart() {
        const productToRemove: IProduct = {
            id: id,
            name: name,
            image: image,
            price: price,
            description: description,
            isInCart: false
        };

        productStore.removeFromCart(productToRemove);
    }

    function fixDescription() {
        let descriptionArr = description.split(".");
        return descriptionArr[0] + ". " + descriptionArr[1];
    }

    return (
        <div className='cart-product-card-container'>
            <div className='cart-product-card'>
                
                <div className="cart-product-card-image">
                    <img src={image} alt='product_image' width={255} height={255} />
                </div>

                <div className="cart-product-card-info">
                    <div className='cart-product-card-info-left'>
                        <div className="cart-product-name">
                            {name}
                        </div>
        
        
                        <div className="cart-product-description">
                            {fixDescription()}
                        </div>
                    </div>
        
                    <div className='cart-product-card-info-right'>
                        <button 
                            className="cart-product-card-remove-button"
                            onClick={handleRemoveFromCart}
                        >
                            <CrossSvg
                                className="cross-icon"
                                width={30}
                                height={30}
                            />
                        </button>
        
                        <div className="cart-product-price">
                            {price} ₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(CartProductCard);