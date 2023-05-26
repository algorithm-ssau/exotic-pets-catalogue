import * as React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import IButton from '../../../../common/interfaces/IButton';

const Button = ({className, isLink, act, type, onClick, isDisabled}: IButton) => {
    return (
        <div className="button-container">
            {
                isLink 
                ? <Link to=""> <button className={className}> {act} </button> </Link>
                : isDisabled 
                ? <button className={className} onClick={onClick} disabled={true}> {act} </button>
                : <button className={className} onClick={onClick} type={type}> {act} </button>
            }
        </div>       
    );
}
    
export default Button;