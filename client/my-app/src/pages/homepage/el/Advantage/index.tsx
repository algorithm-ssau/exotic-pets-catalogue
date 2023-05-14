import * as React from 'react';
import './index.css';

interface IAdvantage {
    number: number;
    advantage: string;
}

const Advantage = ({ number, advantage }: IAdvantage) => {
    return (
        <div className="advantage">
            <div className="advantage-number">{number}</div>
            <div className="advantage-text"> {advantage}</div>
        </div>

    );
}

export default Advantage;