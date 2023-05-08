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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={require("../../../temp/image 30.png")} alt="" width={1110}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../temp/image 31.png")} alt="" width={1110}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={require("../../../temp/image 32.png")} alt="" width={1110}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;