import * as React from 'react';
import { observer } from 'mobx-react';
import IProduct from '../../../../common/interfaces/IProduct';
import { ReactComponent as CrossSvg } from "../../../../assets/cross-icon.svg";
import Button from '../../../homepage/el/Button';
import productStore from '../../../../store/productStore';

import "./index.css"

const Modal = ({ id, image, name, price, description }: IProduct) => {
    function handleClose() {
        const modal: any = document.querySelector(`#modal-${id}`);
        modal.close();
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
    
            productStore.addToCart(productToAdd);
        } else {
            alert("Нельзя добавить в корзину более 5 животных");
        }
    }

    return (
        <dialog id={`modal-${id}`}>
            <div className="product-modal">
                <div className="modal-left">
                    <img src={image} alt="" width={255} height={255} />

                    <p className="modal-price">Цена: {price} ₽</p>

                    {
                        productStore.cartProducts.some(item => item.id === id)
                            ? <Button
                                className="modal-cart-button"
                                isLink={false}
                                act="Добавлено"
                                onClick={handleAddToCart}
                                isDisabled={true}
                            />
                            : <Button
                                className="modal-cart-button"
                                isLink={false}
                                act="В корзину"
                                onClick={handleAddToCart}
                                isDisabled={false}
                            />
                    }
                </div>

                <div className="modal-right">
                    <div className="modal-header">
                        <h2 className="modal-header-title">{name}</h2>

                        <button
                            className="modal-close-button"
                            onClick={handleClose}
                        >
                            <CrossSvg
                                className="cross-icon"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>

                    <p className="modal-description">{description}</p>
                </div>
            </div>
        </dialog>
    );
}

export default observer(Modal);