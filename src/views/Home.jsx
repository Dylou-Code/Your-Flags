import React from 'react';
import Navigation from "../components/Navigation.jsx";
import Countries from "../components/Countries.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
       <div className="container">
           <Navigation/>
           <Countries />
           <Footer />
       </div>
    );
};

export default Home;