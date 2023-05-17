import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as HeartSvg } from "../../../../assets/heart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../../../assets/heart-icon-filled.svg";
import { ReactComponent as CartSvg } from "../../../../assets/cart-icon.svg";
import IProduct from '../../../../common/interfaces/IProduct';

import "./index.css";

const ProductCard = ({id, name, price, isFavourite = false, isInCart = false}: IProduct) => {
    const [isFav, setIsFav] = useState<boolean>(isFavourite);

    function handleSetIsFav() {
        if (isFav === false) {
            setIsFav(true);
        } else {
            setIsFav(false);
        }
    }

    return (
        <div className="product-card-container" style={{backgroundImage: `url(${"https://i.pinimg.com/originals/23/d3/63/23d363aa71b1e9b8498fa49b2f357e6d.jpg"}`}}>
            <div 
                className="product-card-favourite"
                onClick={handleSetIsFav}
            >
                {isFav ? <HeartFilledSvg /> : <HeartSvg />}
            </div>

            <div className="product-card-info">
                <div className="product-card-name">
                    Эублефар крутейший
                </div>

                <div className="product-card-info-left">
                    <div className="product-card-price">
                        250000 ₽
                    </div>

                    <button className="product-card-button">
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