import * as React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import IButton from '../../../../common/interfaces/IButton';

const Button = ({className, isLink, act, onClick}: IButton) => {
    return (
        <div className="button-container">
            {
                isLink 
                ? <Link to="/catalogue"> <button className={className}> {act} </button> </Link>
                : <button className={className} onClick={onClick}> {act} </button>
            }
        </div>       
    );
}
    
export default Button;