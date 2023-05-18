import * as React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// interfaces, components
import IProduct from '../../../../common/interfaces/IProduct';
import ProductCard from '../ProductCard';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./index.css"

// services 
import { getSpeciesAnimals, getKingdomAnimals, getAllAnimals } from '../../../../common/service/getAnimalS';

// function to get animals data, that takes function that decides which group of animals would be taken
async function getAnimals(f: (param?: string) => Promise<IProduct[]>, param: string = ""): Promise<IProduct[]> {
    const animals = await f(param);

    return animals;
}

const ProductSlider = () => {
    const [animals, setAnimals] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAnimals(getAllAnimals, "Совы");
            setAnimals(data);
        }

        fetchData();
    }, []);

    return (
        <div className="product-slider-container">
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                navigation
            >
                {animals.map(animal => {
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

export default ProductSlider;