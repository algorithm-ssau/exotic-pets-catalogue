import React from 'react';

// components
import Slider from '../el/Slider';
import Button from '../el/Button';
import SpeciesCard from '../el/SpeciesCard';

// data / interfaces / temporary files
import speciesData from '../el/SpeciesCard/data';

//styles
import "../styles/page_home.css"
import "../styles/swiper_custom.css"

const PageHome = () => {
    return (
        <div className="homepage-container">
            <Slider />

            <div className="company-intro-container">
                <span className="company-intro">
                    Exotic Pets - крупнейший магазин экзотических питомцев
                </span>
            </div>

            <div className="species-info-container">
                <div className="species-info-header">
                    <h2>
                        <span className="text-accent">Огромный</span> выбор видов животных
                    </h2>

                    <p className="find-your-specie">
                        Найдите питомца по душе
                    </p>

                    <Button
                        className={"catalogue-button"}
                        isLink={true}
                        act={"Каталог"}
                    />
                </div>

                {speciesData.map(specie => {
                    return (
                        <li key={specie.id}>
                            <SpeciesCard
                                species={specie.species}
                                image={specie.image}
                            />
                        </li>
                    );
                })}
            </div>
            <div className="advantages-container">
                <div className="advantages-wrapper">
                    <h2>
                        <span className='our-advantages'>Наши преимущества</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default PageHome;