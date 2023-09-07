// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({country}) => {


    return (
        <div className="countries__card-item">
            <Link to={`/country/${country.name.common}`} className="countries__card-link">
                <img className="countries__card-img" src={country.flags.svg || <Skeleton />} alt={"drapeau" + country.translations.fra.common}/>
                <div className="countries__card-text">
                    <h3 className="countries__card-name">{country.translations.fra.common || <Skeleton />}</h3>
                    {/*  <p className="countries__card-capital">{country.capital}</p>*/}
                    <p className="countries__card-pop">{country.population.toLocaleString() || <Skeleton />} Hab.</p>
                </div>
            </Link>


        </div>
    );
};

export default Card;