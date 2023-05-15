import * as React from 'react';
import Button from "../Button"

import './index.css';

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="left-feedback">
                <h2 className="header-feedback">Оставьте отзыв</h2>

                <span className="paragraph-feedback">Нам очень важно ваше мнение о нашем сервисе</span>
            </div>

            <div className="right-feedback">
                <div className="right-feedback-up">
                    <textarea className="feedback-input" name="text" placeholder="Ваш отзыв" />
                </div>

                <div className="right-feedback-down">
                    <input className="feedback-name" type="text" placeholder="Ваше имя" />

                    <Button
                        className={"feedback-button"}
                        isLink={false}
                        act={"Отправить"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Feedback;