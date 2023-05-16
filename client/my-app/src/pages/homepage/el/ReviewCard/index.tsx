import * as React from 'react';
import './index.css';
import IReview from '../../../../common/interfaces/IReview';

const ReviewCard = ({image, name, review}: IReview) => {
    return (
        <div className="user-review">
            <img className="userimage-review" src={image} alt="avatar" />
            <p className="username-review">{name}</p>
            <p className="usertext-review">{review}</p>
        </div>
    );
}

export default ReviewCard;