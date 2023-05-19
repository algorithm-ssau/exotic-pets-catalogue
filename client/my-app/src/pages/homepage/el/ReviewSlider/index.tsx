import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import ReviewCard from '../ReviewCard';

import 'swiper/css';
import 'swiper/css/navigation';

const ReviewSlider = () => {
    return (
        <div className="review-container slider-container">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={3}
                navigation
            >
                <SwiperSlide>
                    <ReviewCard
                        image={""}
                        name="Легушка"
                        review="Отличный сервис. Крутой очень. Лорем ипсум даже я бы сказал"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard
                            image={""}
                            name="Легушка"
                            review="Отличный сервис. Крутой очень. Лорем ипсум даже я бы сказал"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard
                        image={""}
                        name="Легушка"
                        review="Отличный сервис. Крутой очень. Лорем ипсум даже я бы сказал"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard
                        image={""}
                        name="Легушка"
                        review="Отличный сервис. Крутой очень. Лорем ипсум даже я бы сказал"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ReviewSlider;