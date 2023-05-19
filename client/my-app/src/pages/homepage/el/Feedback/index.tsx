import * as React from 'react';
import { useState } from 'react';
import Button from "../Button"

import { randomInteger, postReview } from '../../../../common/service/reviewS';

import './index.css';

const Feedback = () => {
    const [username, setUsername] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("");

    function handlerSetUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    function handlerSetFeedback(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setFeedback(e.target.value);
    }

    function handleSendFeedback() {
        if (username.trim().length !== 0 && feedback.trim().length !== 0) {
            setUsername("");
            setFeedback("");
            postReview(
                {
                    name: username,
                    commBody: feedback,
                    img_id: randomInteger(33, 44)
                }
            );
            alert("Ваш отзыв был успешно добавлен!");
        }
    }

    return (
        <div className="feedback">
            <div className="left-feedback">
                <h2 className="header-feedback">Оставьте отзыв</h2>

                <span className="paragraph-feedback">Нам очень важно ваше мнение о нашем сервисе</span>
            </div>

            <div className="right-feedback">
                <div className="right-feedback-up">
                    <textarea
                        value={feedback}
                        className="feedback-input"
                        name="text"
                        placeholder="Ваш отзыв"
                        onChange={e => { handlerSetFeedback(e) }}
                    />
                </div>

                <div className="right-feedback-down">
                    <input
                        value={username}
                        className="feedback-name"
                        type="text"
                        placeholder="Ваше имя"
                        onChange={e => { handlerSetUsername(e) }}
                    />

                    <Button
                        className={"feedback-button"}
                        isLink={false}
                        act={"Отправить"}
                        onClick={handleSendFeedback}
                        isDisabled={username.trim().length === 0 || feedback.trim().length === 0}
                    />
                </div>
            </div>
        </div>
    );
}

export default Feedback;