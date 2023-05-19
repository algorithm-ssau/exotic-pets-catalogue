import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import ReviewCard from '../ReviewCard';
import { getAllReviews } from '../../../../common/service/reviewS';
import IReview from "../../../../common/interfaces/IReview"

import 'swiper/css';
import 'swiper/css/navigation';

async function getReview(f: () => Promise<IReview[]>): Promise<IReview[]> {
    const reviews = await f();

    return reviews;
}

const ReviewSlider = () => {
    const [reviews, setReviews] = useState<IReview[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getReview(getAllReviews);
            setReviews(data);
        }

        fetchData();
    }, []);

    return (
        <div className="review-container slider-container">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={3}
                navigation
            >
                {reviews.reverse().map(review => {
                    console.log(review.user_name)
                    return (
                        <SwiperSlide>
                            <ReviewCard
                                image={review.image}
                                user_name={review.user_name}
                                com_body={review.com_body}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default ReviewSlider;