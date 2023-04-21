import React from 'react';
import "../styles/header.css"
import { ReactComponent as CartSvg } from "../../assets/cart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../assets/heart-icon-filled.svg";

const Header = () => {
    return(
        <div className="Header">
            <div className="logo-container">
                <a href="/home">
                    <img src={require("../../assets/logo.png")} alt="logo" />
                </a>
            </div>

            <div className="pages-navigation">
                <div className="home-link">
                    <a href="/home">Главная</a>
                </div>

                <div className="catalogue-link">
                    <a href="/catalogue">Каталог</a>
                </div>
            </div>

            <div className="catalogue-navigation">
                <input type="text" placeholder="Введите запрос"/>

                <div className="heart-icon-container">
                    <a href="/favorites">
                        <HeartFilledSvg />
                    </a>
                </div>

                <div className="cart-icon-container">
                    <a href="/cart">
                        <CartSvg />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;