import * as React from 'react';

import Input from '../Input';

import './index.css';

const Card = () => {
    return (
       <div className="card">
        <span className="card-number">Номер карты</span>
        <Input
           holder="1111 2222 3333 4444"
        />
        <span className="cardholder">Имя</span>
        <Input
           holder="Имя Фамилия"
        />
        <div className="date-and-cvc">
            <span className="validaty-period">Срок действия</span>
            <Input
                holder="MM/DD"
            />
            <span className="cvc">CVC/CVV</span>
            <Input
                holder="111"
            />
        </div>
       </div>
    )
}

export default Card;