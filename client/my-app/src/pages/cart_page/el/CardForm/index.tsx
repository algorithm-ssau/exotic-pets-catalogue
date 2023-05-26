import * as React from 'react';

import Button from '../Button';

import './index.css';

const CardForm = () => {
    return (
        <div className="card-form">

            <div className="card-number-container">
                <span className="card-number">Номер карты</span>
                <input className="number-name-input" type="text" placeholder="Номер карты" />
            </div>

            <div className="cardholder-container">
                <span className="cardholder">Имя</span>
                <input className="number-name-input" type="text" placeholder="Имя Фамилия" />
            </div>
        
            <div className="date-and-cvc-container">
                <div className="date">
                    <span className="validaty-period">Срок действия</span>
                    <input className="date-cvc-input" type="text" placeholder="MM/DD" />
                </div>

                <div className="cvc">
                     <span className="cvc-span">CVC/CVV</span>
                    <input className="date-cvc-input" type="text" placeholder="CVC/CVV" />
                </div>
            </div>
       
            <div className="order-button">
                <Button
                    className="cart-button"
                    isLink={true}
                    act={"Заказать"}
                    type="submit"
                 />
            </div>
       </div>
    )
}

export default CardForm;