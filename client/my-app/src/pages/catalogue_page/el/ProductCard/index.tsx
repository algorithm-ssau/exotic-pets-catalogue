import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as HeartSvg } from "../../../../assets/heart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../../../assets/heart-icon-filled.svg";
import { ReactComponent as CartSvg } from "../../../../assets/cart-icon.svg";
import { ReactComponent as CheckmarkSvg } from "../../../../assets/checkmark-icon.svg"
import IProduct from '../../../../common/interfaces/IProduct';
import Modal from '../Modal';

import "./index.css";
import productStore from '../../../../store/productStore';
import { observer } from 'mobx-react';

const ProductCard = ({ id, image, name, price, description, isFavourite = false, isInCart = false }: IProduct) => {
    const [isFav, setIsFav] = useState<boolean>(isFavourite);

    const [isCart, setIsCart] = useState<boolean>(isInCart);

    function handleAddToFav() {
        const productToAdd: IProduct = {
            id: id,
            name: name,
            image: image,
            price: price,
            description: description,
            isInCart: true
        };

        if (productStore.favProducts.some(item => item.id === id) === false) {
            productStore.addToFav(productToAdd);
        } else {
            productStore.removeFromFav(productToAdd);
        }
    }

    function handleAddToCart() {
        if (productStore.cartProducts.length < 5) {
            const productToAdd: IProduct = {
                id: id,
                name: name,
                image: image,
                price: price,
                description: description,
                isInCart: true
            };

            setIsCart(true);

            productStore.addToCart(productToAdd);
        } else {
            alert("Нельзя добавить в корзину более 5 животных")
        }
    }

    // activates by clicking on the image of the card
    function handleClickCard(event) {
        if (event.target.className === "product-card-container") {
            const modal: any = document.querySelector(`#modal-${id}`); // getting exact id to show animal with this id
            modal.showModal();
        }
    }

    return (
        <div
            className="product-card-container"
            style={{ backgroundImage: `url(${image}` }}
            key={id}
            onClick={(e) => handleClickCard(e)}
        >
            <Modal
                id={id}
                image={image}
                name={name}
                price={price}
                description={description}
            />

            {
                productStore.favProducts.some(item => item.id === id)
                    ? <div
                        className="product-card-favourite"
                        onClick={handleAddToFav}
                    >
                        <HeartFilledSvg className="heart-icon" />
                    </div>

                    : <div
                        className="product-card-favourite"
                        onClick={handleAddToFav}
                    >
                        <HeartSvg className="heart-icon"/>
                    </div>
            }

            <div className="product-card-info">
                <div className="product-card-name">
                    {name}
                </div>

                <div className="product-card-info-left">
                    <div className="product-card-price">
                        {price} ₽
                    </div>

                    {
                        productStore.cartProducts.some(item => item.id === id)
                            ? <button
                                className="product-card-button product-in-cart"
                                onClick={handleAddToCart}
                                disabled={true}
                            >
                                <CheckmarkSvg
                                />
                            </button>

                            : <button
                                className="product-card-button"
                                onClick={handleAddToCart}
                            >
                                <CartSvg
                                    width={15}
                                    height={15}
                                />
                            </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default observer(ProductCard);