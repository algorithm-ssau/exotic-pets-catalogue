import * as React from 'react';
import Button from "../Button"

interface IFeedback {
    feedback: string;
    name: string;
}

const Feedback = ({ feedback, name }: IFeedback) => {
    return (
        <div className="feedback">
            <div className="left-feedback">
                <span id='header-feedback'>Оставьте отзыв</span>
                <span id='paragraph-feedback'>Нам очень важно ваше мнение о нашем сервисе</span>
            </div>
            <div className="right-feedback">
                <div className="feedback-text">{feedback}</div>
                <div className="feedback-name">{name}</div>
                <Button
                    className={"feedback-button"}
                    isLink={false}
                    act={"Отправить"}
                />
            </div>
        </div>
    );
}

export default Feedback;