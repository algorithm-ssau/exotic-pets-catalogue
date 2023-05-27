import * as React from 'react';

import CardForm from '../CardForm';
import IPayment from '../../../../common/interfaces/IPayment';

import './index.css';
import productStore from '../../../../store/productStore';


const Payment = ({countProducts, discount, deliveryPrice = 0, summaryPrice = 0}: IPayment) => {
    return (
        <form className="payment-container" action="">
            <div className="left-payment">
                <CardForm
                />
            </div>

            <div className="right-payment">
                <div className="address-container">
                    <span className="address">Адрес</span>
                    <input className="address-email-input" type="text"/>
                </div>
               
                <div className="email-container">
                    <span className="email">E-mail</span>
                    <input className="address-email-input" type="text" />
                </div>

                <div className="calculations-container">
                    <div className="left-summary">
                        <span className="light-text">Количество</span>
                        <span className="light-text">Скидка</span>
                        <span className="light-text">Доставка</span>
                        <span className="heavy-text">Итого</span>
                    </div>
                    <div className="right-summary">
                        <span className="light-text">{productStore.cartProducts.length}</span>
                        <span className="light-text">{discount}%</span>
                        <span className="light-text">{deliveryPrice} ₽</span>
                        <span className="heavy-text">{productStore.setSummaryPrice()} ₽</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Payment;