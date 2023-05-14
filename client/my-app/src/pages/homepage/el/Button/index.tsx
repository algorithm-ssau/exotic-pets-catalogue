import * as React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

interface IButton {
    className: string;
    isLink?: boolean;
    act: string;
}

const Button = ({className, isLink, act}: IButton) => {
    return (
        <div className="button-container">
            {
                isLink 
                ? <Link to="/catalogue"> <button className={className}> {act} </button> </Link>
                : <button className={className}> {act} </button>
            }
        </div>       
    );
}
    
export default Button;