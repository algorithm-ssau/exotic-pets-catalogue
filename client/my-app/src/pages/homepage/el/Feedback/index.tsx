import * as React from 'react';
import { useState } from 'react';
import Button from "../Button"

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
        console.log(username);
        console.log(feedback);

        fetch('http://25.13.222.253:3000/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                attribute1: username,
                attribute2: feedback
            })
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
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
                        className="feedback-input"
                        name="text"
                        placeholder="Ваш отзыв"
                        onChange={e => { handlerSetFeedback(e) }}
                    />
                </div>

                <div className="right-feedback-down">
                    <input
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
                    />
                </div>
            </div>
        </div>
    );
}

export default Feedback;