import * as React from 'react';
import './index.css';

interface IAdvantage {
    number: number;
    advantage: string;
}

const Advantage = ({ number, advantage }: IAdvantage) => {
    return (
        <div className="advantage">
            <span className="advantage-number">{number}</span>
            <span className="advantage-text"> {advantage}</span>
        </div>
    );
}

export default Advantage;