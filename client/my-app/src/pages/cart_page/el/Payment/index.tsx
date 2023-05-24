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
                <span className="address">Адрес</span>
                <Input
                    holder=""
                />
                <span className="email">E-mail</span>
                <Input
                    holder=""
                />
            </div>
        </form>
    )
}

export default Payment;