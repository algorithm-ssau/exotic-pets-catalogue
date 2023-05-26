import * as React from 'react';

import CardForm from '../CardForm';

import './index.css';

const Payment = () => {
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
                        <span className="light-text">1</span>
                        <span className="light-text">0%</span>
                        <span className="light-text">2000 ₽</span>
                        <span className="heavy-text">12000 ₽</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Payment;