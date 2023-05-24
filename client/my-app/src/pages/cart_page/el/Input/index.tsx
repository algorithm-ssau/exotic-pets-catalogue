import * as React from 'react';
import './index.css';

interface IInput {
    holder: string;
}
const Input = ({ holder }: IInput) => {
    return (
        <div className="input-component">
            <input className="input-component-text" type="text" placeholder={holder} />
        </div>
    );
}

export default Input;