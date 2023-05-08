import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={require("../../../assets/slider-image-1.png")} alt="" width={1110}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../assets/slider-image-2.png")} alt="" width={1110}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../assets/slider-image-3.png")} alt="" width={1110}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;