import React from 'react';
import { ReactComponent as CrossSvg } from "../../../../assets/cross-icon.svg";
import ICart from '../../../../common/interfaces/ICart';

import "./index.css";

const CartProductCard = ({ id, image, name, price, description }: ICart) => {
    return (
        <div className='cart-product-card-container'>
            <div className='cart-product-card'>
                
                <div className="cart-product-card-image">
                    <img src={require("../../../../assets/image_30.png")} alt='product_image' />
                </div>

                <div className="cart-product-card-info">
                    <div className='cart-product-card-info-left'>
                        <div className="cart-product-name">
                            {name}
                        </div>
        
        
                        <div className="cart-product-description">
                            {description}
                        </div>
                    </div>
        
                    <div className='cart-product-card-info-right'>
                        <button className="cart-product-card-remove-button">
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

export default CartProductCard;