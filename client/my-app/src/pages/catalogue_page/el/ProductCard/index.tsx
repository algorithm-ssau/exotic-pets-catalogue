import * as React from 'react';
import { ReactComponent as HeartSvg } from "../../../../assets/heart-icon.svg";
import { ReactComponent as CartSvg } from "../../../../assets/cart-icon.svg";

import "./index.css";

const ProductCard = () => {
    return (
        <div className="product-card-container" style={{backgroundImage: `url(${"https://i.pinimg.com/originals/23/d3/63/23d363aa71b1e9b8498fa49b2f357e6d.jpg"}`}}>
            <div className="product-card-favourite">
                <HeartSvg />
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