import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

import Navigation from "./Navigation.jsx";

const CountryDetails = () => {

    const { name } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                setCountryDetails(res.data)
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des détails du pays :", error);
            });
    }, [name]);

    return (
        <div className="container">
            <Navigation/>
              {/* <DetailCard country={countryDetails} />*/}
            {countryDetails
                ?.map((country, index) => (
                    <div className="detail" key={index}>
                        <img className="countries__card-img" src={country.flags.svg} alt={"drapeau" + country.translations.fra.common}/>
                        <h3>{country.translations.fra.common }</h3>
                        <h3>{country.capital }</h3>
                        {Object.keys(country.languages).map((langCode) => (
                            <li key={langCode}>{country.languages[langCode]}</li>
                        ))}
                        <h3>Hab. : {country.population }</h3>
                        <h3>Continents : {country.continents}</h3>
                        <h3>Region : {country.region}</h3>
                        <p>conduite : {country.car.side}</p>
                        <p>Décalage horaire (TimeZone): {country.timezones}</p>
                    </div>
                ))
            }

            <Link to={'/'}>
              <button>Retour</button>
            </Link>
        </div>
    );
};

export default CountryDetails;