import * as React from 'react';
import "./index.css"

interface ISpecies {
    id?: number;
    species: string;
    image: string; // contains url to the image
}

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