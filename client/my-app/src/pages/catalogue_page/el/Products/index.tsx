import * as React from 'react';
import { useEffect, useState } from 'react';
import { observer } from "mobx-react";

// interfaces, components
import IProduct from '../../../../common/interfaces/IProduct';
import ProductCard from '../ProductCard';
import productStore from '../../../../store/productStore';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./index.css";

const Products = () => {
    const [, setAnimals] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            await productStore.fetchProducts();
            setAnimals(productStore.products);
        }

        fetchData();
    }, []);

    return (
        <div className="catalogue-products-container">
            {
                productStore.products.length === 0 
                ? <span>По вашему запросу ничего не найдено</span>
                : productStore.products.map(animal => {
                        return (
                            <li key={animal.id}>
                                <ProductCard
                                    id={animal.id}
                                    image={animal.image}
                                    name={animal.name}
                                    price={animal.price}
                                />
                            </li>
                        )
                    })
            }
        </div>
    );
}

export default observer(Products);