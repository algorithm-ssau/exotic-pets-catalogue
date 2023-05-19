import * as React from 'react';
import './index.css';
import IReview from '../../../../common/interfaces/IReview';

const ReviewCard = ({image, user_name, com_body}: IReview) => {
    return (
        <div className="user-review">
            <img className="userimage-review" src={image} alt="avatar" />
            <p className="username-review">{user_name}</p>
            <p className="usertext-review">{com_body}</p>
        </div>
    );
}

export default ReviewCard;