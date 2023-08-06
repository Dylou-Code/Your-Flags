import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card.jsx";

const Countries = () => {

   const [data, setData] = useState([])



    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])


    return (
        <div className="container">
            <div className="countries">
                <h2 className="countries__title">Pays du monde</h2>
               {/* <ul className="countries__filter">
                    Filtrer le nombre de pays avec le range en utilisant slice
                    <input type="range" min="1" max="250"
                           defaultValue={rangeValue}
                           onChange={(e) => setRangeValue(e.target.value)} />
                    Boucler sur le tableau pour avoir touts les continents et filtrer par pays
                    {radioInput.map((continent) => (
                        <li>
                            <input type="radio" name="continent" id={continent}
                                //est-ce que continent est égale à radio sélectionner
                                   checked={continent === selectedRadio}
                                   onChange={(e) => setSelectedRadio(e.target.id)}/>
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))}

                </ul>
                en React : si bouton sélectionner, afficher le bouton et au click enlever les valeur
                {selectedRadio &&
                    <button onClick={() => setSelectedRadio("")} className="countries__filter-button"> Réinitialiser</button>
                }*/}

                <div className="countries__card">
                    {data
                        /*.filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)*/
                        .map((country,index) =>(
                            <Card key={index} country={country}/>
                            /*     <div className="countries__card-item">
                                     <p key={index}>{country.translations.fra.common}</p>
                                 </div>*/
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Countries;