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
            <Navigation />
              {/* <DetailCard country={countryDetails} />*/}

            {countryDetails
                ?.map((country, index) => (
                        <div className="detail" key={index}>
                            <div className="detail__left">
                                <img className="detail-flags" src={country.flags.svg} alt={"drapeau" + country.translations.fra.common}/>
                            </div>
                            <div className="detail__right">
                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <h3>{country.translations.fra.common }</h3>
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <h3>{country.capital }</h3>
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    {Object.keys(country.languages).map((langCode) => (
                                        <li key={langCode}>{country.languages[langCode]}</li>
                                    ))}
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <h3>Hab. : {country.population }</h3>
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <h3>Continents : {country.continents}</h3>
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <h3>Region : {country.region}</h3>
                                </div>

                                <div className="detail__group">
                                    <img src="" alt=""/>
                                    <p>conduite : {country.car.side}</p>
                                </div>

                            </div>
                        </div>
                ))
            }
        </div>
    );
};

export default CountryDetails;