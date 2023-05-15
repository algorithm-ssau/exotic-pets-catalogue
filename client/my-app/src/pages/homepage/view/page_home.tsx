import React from 'react';

// components
import Slider from '../el/Slider';
import Button from '../el/Button';
import SpeciesCard from '../el/SpeciesCard';
import Advantage from '../el/Advantage';
import Feedback from '../el/Feedback';

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

            <div className="advantages-section-container">
                <div className="advantages-wrapper">
                    <h2>
                        <div className="our-advantages">Наши преимущества</div>
                    </h2>

                    <div className="advantages-container">
                        <Advantage
                            number={1}
                            advantage="Команда опытных специалистов с многолетним опытом"
                        />

                        <Advantage
                            number={2}
                            advantage="Тщательный уход за животными, не попавшими в добрые руки"
                        />

                        <Advantage
                            number={3}
                            advantage="Обратная связь с нашими покупателями"
                        />
                    </div>
                </div>
            </div>

            <div className="feedback-container">
                <Feedback
                />
            </div>
        </div>
    );
}

export default PageHome;