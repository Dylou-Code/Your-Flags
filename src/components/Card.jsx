import React from 'react';

const Card = ({country}) => {
    return (
        <div className="countries__card-item">
            <img className="countries__card-img" src={country.flags.svg} alt={"drapeau" + country.translations.fra.common}/>

            <h3 className="countries__card-name">{country.translations.fra.common}</h3>
          {/*  <p className="countries__card-capital">{country.capital}</p>*/}
            <p className="countries__card-capital">{country.population.toLocaleString()} Hab.</p>
        </div>
    );
};

export default Card;