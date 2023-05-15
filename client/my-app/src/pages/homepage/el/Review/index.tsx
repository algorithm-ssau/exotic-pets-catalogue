import * as React from 'react';
import './index.css';

const Review = () => {
    return (
        <div className="review">
            <div className="user-review">
                <img className="userimage-review" src={require("../../../../assets/froge.png")} alt=""></img>
                <h2 className="username-review">Легушка</h2>
                <h3 className="usertext-review">Отличный сервис. Крутой очень. Лорем ипсум даже я бы сказал</h3>
            </div>          
        </div>
    );
}

export default Review;