import React from 'react';
import "../styles/footer.css"
import { ReactComponent as ArrowSvg } from "../../assets/arrow-icon.svg";

import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-wrapper">
                <div className="address-info-container">
                    <div className="logo-container">
                        <NavLink to="/">
                            <img src={require("../../assets/logo.png")} alt="logo" />
                        </NavLink>
                    </div>

                    <div className="address-info">
                        <span className="info address">Ул. Горького, дом 17</span>
                        <span className="info phone-number">+7 987 654 32-10</span>
                        <span className="info email">exotic-pets@exoticpets.com</span>
                    </div>

                    <div className="social-media-container">
                        <Link to="https://vk.com/">
                            <img src={require("../../assets/vk-icon.png")} alt="VK" />
                        </Link>

                        <Link to="https://web.telegram.org/">
                            <img src={require("../../assets/telegram-icon.png")} alt="VK" />
                        </Link>

                        <Link to="https://www.youtube.com/" target="_blank">
                            <img src={require("../../assets/youtube-icon.png")} alt="youtube" />
                        </Link>
                    </div>
                </div>

                <div className="footer-navigation-container">
                    <span className="footer-navigation-heading">Разделы</span>

                    <div className="link home-link">
                        <NavLink to="/">Главная</NavLink>
                    </div>

                    <div className="link catalogue-link">
                        <NavLink to="/catalogue">Каталог</NavLink>
                    </div>

                    <div className="link favorites-link">
                        <NavLink to="/favorites">Избранное</NavLink>
                    </div>

                    <div className="link cart-link">
                        <NavLink to="/cart">Корзина</NavLink>
                    </div>
                </div>

                <div className="newsletter-container">
                    <span className="footer-navigation-heading">Рассылка новостей</span>

                    <div className="newsletter-input">
                        <input type="text" placeholder="E-mail"/>

                        <button className="newsletter-input-button">
                            <ArrowSvg />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;