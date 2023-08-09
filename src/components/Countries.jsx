import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card.jsx";
import CardSkeleton from "./CardSkeleton.jsx";

const Countries = () => {

    const [data, setData] = useState([]);
    const [selectedbtn, setSelectedbtn] = useState("");
    const buttonFilter = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [isLoading ,setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState(""); // Nouvel état pour la recherche


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")

            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <div className="countries">
                <div className="countries__filter">

                        <div className="countries__filter-search">
                            <input type="search"
                                   name=""
                                   id=""
                                   className="countries__filter-input"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)} // Mettre à jour la recherche
                                   placeholder="Ex : France"
                            />
                        </div>

                        <div className="countries__filter-button">
                            {selectedbtn &&
                                <button onClick={() => setSelectedbtn("")} className="countries__filter-btn">Tout</button>
                            }

                            {buttonFilter.map((continent) => (

                                <button
                                    key={continent}
                                    type="button"
                                    id={continent}
                                    className= {`countries__filter-btn ${continent === selectedbtn ? 'active' : ''}`}
                                    onClick={() => setSelectedbtn(continent)}
                                >
                                    <span className="countries__filter-country">{continent}</span>
                                </button>
                            ))}
                        </div>
                </div>

                <div className="countries__card">
                    {isLoading && <CardSkeleton cards={12}/>}

                    {data
                        .filter((country) => country.continents[0].includes(selectedbtn))
                        .filter((country) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())) // Filtrer par recherche
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