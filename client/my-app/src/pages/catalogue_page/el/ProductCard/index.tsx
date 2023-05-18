import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as HeartSvg } from "../../../../assets/heart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../../../assets/heart-icon-filled.svg";
import { ReactComponent as CartSvg } from "../../../../assets/cart-icon.svg";
import IProduct from '../../../../common/interfaces/IProduct';

import "./index.css";

const ProductCard = ({id, image, name, price, isFavourite = false, isInCart = false}: IProduct) => {
    const [isFav, setIsFav] = useState<boolean>(isFavourite);

    const [isCart, setIsCart] = useState<boolean>(isInCart);

    function handleSetIsFav() {
        if (isFav === false) {
            setIsFav(true);
        } else {
            setIsFav(false);
        }
    }

    function handleSetIsCart() {
        if (isCart === false) {
            setIsCart(true);
        } else {
            setIsCart(false);
        }
    }

    return (
        <div className="product-card-container" style={{backgroundImage: `url(${image}`}} key={id}>
            <div 
                className="product-card-favourite"
                onClick={handleSetIsFav}
            >
                {isFav ? <HeartFilledSvg /> : <HeartSvg />}
            </div>

            <div className="product-card-info">
                <div className="product-card-name">
                    {name}
                </div>

                <div className="product-card-info-left">
                    <div className="product-card-price">
                        {price} ₽
                    </div>

                    <button 
                        className="product-card-button"
                        onClick={handleSetIsCart}
                    >
                        <CartSvg 
                            width={15} 
                            height={15}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;