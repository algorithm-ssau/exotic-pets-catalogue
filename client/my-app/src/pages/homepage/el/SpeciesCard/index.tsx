import * as React from 'react';
import "./index.css"
import ISpecies from '../../../../common/interfaces/ISpecies';

const SpeciesCard = ({species, image}: ISpecies) => {
    return (
        <div className="species-card-container">
            <img src={image} alt="" />
            <span className="species-name-popup">
                {species}
            </span>
        </div>
    );
}

export default SpeciesCard;