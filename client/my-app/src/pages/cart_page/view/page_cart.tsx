import React from 'react';

import Payment from '../el/Payment';

import "../styles/cart_page.css"

const PageCart = () => {
    return (
        // <h1>Cart</h1>
        
        <div className="cartpage-container">
             <div className="payment-container">
                 <Payment
                 />
        </div>
        </div>
       
    );
}

export default PageCart;