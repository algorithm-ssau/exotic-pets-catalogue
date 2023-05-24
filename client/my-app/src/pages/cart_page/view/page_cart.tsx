import React from 'react';

import CartProductCard from '../el/CartProductCard';

//styles
import "../styles/page_cart.css";

let id = 1;
let image = "../../../../assets/image_30.png";
let name = 'Электричекский Синий День Геккон';
let price=  50000;
let description = 'Таинственный обитатель заснеженных альпийских вершин';


const PageCart = () => {
    return (
            <div className='cart-product-card-container'>
                <CartProductCard id = {id} image = {image} name = {name} price = {price} description = {description}></CartProductCard>
            </div>
    );
}

export default PageCart;