import React from 'react';
import { observer } from 'mobx-react';

import productStore from '../../../store/productStore';
import CartProductCard from '../el/CartProductCard';
import Payment from '../el/Payment';

import "../styles/page_cart.css"

const PageCart = () => {
    return (
        <div className="cartpage-container">
            <h2 className="cart-header">Корзина</h2>

            <ul className="cart-products">
                {
                    productStore.cartProducts.length === 0 
                        ? <h3 className="cart-empty-message">Ваша корзина пуста</h3>
                        : productStore.cartProducts.map(product => {
                            return <li key={product.id}>
                                <CartProductCard
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

            <h2 className="cart-header">Оплата</h2>

            <Payment
                discount={0}
                deliveryPrice={2000}
            />
        </div>
    );
}

export default observer(PageCart);