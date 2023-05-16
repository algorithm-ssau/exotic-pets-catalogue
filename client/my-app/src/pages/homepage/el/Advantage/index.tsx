import * as React from 'react';
import './index.css';
import IAdvantage from '../../../../common/interfaces/IAdvantage';

const Advantage = ({ number, advantage }: IAdvantage) => {
    return (
        <div className="advantage">
            <div className="advantage-number">{number}</div>
            <div className="advantage-text"> {advantage}</div>
        </div>

    );
}

export default Advantage;