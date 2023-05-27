import * as React from 'react';

import CardForm from '../CardForm';
import IPayment from '../../../../common/interfaces/IPayment';

import './index.css';


const Payment = ({countProducts, discount, deliveryPrice, summaryPrice}: IPayment) => {
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
                        <span className="light-text">{countProducts}</span>
                        <span className="light-text">{discount}%</span>
                        <span className="light-text">{deliveryPrice} ₽</span>
                        <span className="heavy-text">{summaryPrice} ₽</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Payment;