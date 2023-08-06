import React from 'react';

const Card = ({country}) => {
    return (
        <div className="countries__card-item">
            <img className="countries__card-img" src={country.flags.svg} alt={"drapeau" + country.translations.fra.common}/>
            <div className="countries__card-text">
                <h3 className="countries__card-name">{country.translations.fra.common}</h3>
                {/*  <p className="countries__card-capital">{country.capital}</p>*/}
                <p className="countries__card-pop">{country.population.toLocaleString()} Hab.</p>
            </div>

        </div>
    );
};

export default Card;