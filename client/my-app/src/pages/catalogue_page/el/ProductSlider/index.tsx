import * as React from 'react';
import { useEffect, useState } from 'react';
import { observer } from "mobx-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// interfaces, components
import IProduct from '../../../../common/interfaces/IProduct';
import ProductCard from '../ProductCard';
import productStore from '../../../../store/productStore';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./index.css";

// services 
import { getSpeciesAnimals, getKingdomAnimals, getAllAnimals } from '../../../../common/service/getAnimalS';

// function to get animals data, that takes function that decides which group of animals would be taken
async function getAnimals(f: (param?: string) => Promise<IProduct[]>, param: string = ""): Promise<IProduct[]> {
    const animals = await f(param);

    return animals;
}

const ProductSlider = () => {
    const [, setAnimals] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            await productStore.fetchProducts();
            setAnimals(productStore.products);
        }

        fetchData();
    }, []);

    return (
        <div className="catalogue-slider-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
            >
                {productStore.products.map(animal => {
                    return (
                        <SwiperSlide key={animal.id}>
                            <ProductCard
                                id={animal.id}
                                image={animal.image}
                                name={animal.name}
                                price={animal.price}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default observer(ProductSlider);