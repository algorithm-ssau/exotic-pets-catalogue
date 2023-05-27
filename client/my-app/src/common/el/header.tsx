import React from 'react';
import "../styles/header.css"
import { ReactComponent as CartSvg } from "../../assets/cart-icon.svg";
import { ReactComponent as HeartFilledSvg } from "../../assets/heart-icon-filled.svg";
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

import productStore from '../../store/productStore';

const Header = () => {
    return (
        <div className="Header">
            <div className="header-wrapper">
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={require("../../assets/logo.png")} alt="logo" />
                    </NavLink>
                </div>

                <div className="pages-navigation">
                    <div className="home-link">
                        <NavLink to="/">главная</NavLink>
                    </div>

                    <div className="catalogue-link">
                        <NavLink to="/catalogue">каталог</NavLink>
                    </div>
                </div>

                <div className="catalogue-navigation">
                    <div className="search-container">
                        <input type="text" placeholder="Введите запрос" />
                    </div>

                    <div className="heart-icon-container">
                        <NavLink to="/favorites">
                            <HeartFilledSvg />
                        </NavLink>
                    </div>

                    <div className="cart-icon-container">
                        <NavLink to="/cart">
                            <CartSvg />
                        </NavLink>

                        {
                            productStore.cartProducts.length === 0
                            ? <div className="hidden product-counter">
                                {productStore.cartProducts.length}
                            </div>
                            : <div className="product-counter">
                                {productStore.cartProducts.length}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Header);