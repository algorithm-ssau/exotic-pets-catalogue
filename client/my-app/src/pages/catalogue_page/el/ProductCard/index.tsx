import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as HeartSvg } from "../../../../assets/heart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../../../assets/heart-icon-filled.svg";
import { ReactComponent as CartSvg } from "../../../../assets/cart-icon.svg";
import IProduct from '../../../../common/interfaces/IProduct';

import "./index.css";
import productStore from '../../../../store/productStore';

const ProductCard = ({id, image, name, price, description, isFavourite = false, isInCart = false}: IProduct) => {
    const [isFav, setIsFav] = useState<boolean>(isFavourite);

    const [isCart, setIsCart] = useState<boolean>(isInCart);

    function handleSetIsFav() {
        if (isFav === false) {
            setIsFav(true);
        } else {
            setIsFav(false);
        }
    }

    function handleAddToCart() {
        const productToAdd: IProduct = {
            id: id,
            name: name,
            image: image,
            price: price,
            description: description
        };

        productStore.addToCart(productToAdd);
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
                        onClick={handleAddToCart}
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