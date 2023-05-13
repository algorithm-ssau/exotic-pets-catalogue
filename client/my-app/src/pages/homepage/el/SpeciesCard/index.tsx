import * as React from 'react';
import "./index.css"

interface ISpecies {
    species: string;
    image: string; // contains url to the image
}

const SpeciesCard = ({species, image}: ISpecies) => {
    return (
        <div className="species-card-container">
        </div>
    );
}

export default SpeciesCard;