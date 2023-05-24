import * as React from 'react';
import "./index.css"
import ISpecies from '../../../../common/interfaces/ISpecies';

const SpeciesCard = ({name, image}: ISpecies) => {
    return (
        <div className="species-card-container">
            <img src={image} alt="" />
            <span className="species-name-popup">
                {name}
            </span>
        </div>
    );
}

export default SpeciesCard;