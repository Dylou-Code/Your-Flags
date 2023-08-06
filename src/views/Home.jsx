import React from 'react';
import Navigation from "../components/Navigation.jsx";
import Countries from "../components/Countries.jsx";

const Home = () => {
    return (
       <div className="container">
           <Navigation/>
           <Countries />
       </div>
    );
};

export default Home;