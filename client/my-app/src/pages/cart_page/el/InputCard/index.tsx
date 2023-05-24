import * as React from 'react';
import './index.css';

interface ICardInput {
    holder: string;
}
const InputCard = ({ holder }: ICardInput) => {
    return (
        <div className="input-card">
            <input className="input-card-text" type="text" placeholder={holder} />
        </div>
    );
}

export default InputCard;