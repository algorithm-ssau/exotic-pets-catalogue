import * as React from 'react';

import './index.css';

const Card = () => {
    return (
       <div className="card">
        <span className="card-number"></span>
        {/* место для компонента */}
        <span className="cardholder"></span>
        {/* место для компонента */}
        <div className="date-and-cvc">
            <span className="validaty-period"></span>
            {/* место для компонента */}
            <span className="cvc"></span>
            {/* место для компонента */}
        </div>
       </div>
    )
}

export default Card;