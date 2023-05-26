import * as React from 'react';

import Card from '../Card';
import Input from '../Input';

import './index.css';

const Payment = () => {
    return (
        <form className="payment" action="">
            <div className="left-payment">
                <Card
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
                
            </div>
        </form>
    )
}

export default Payment;