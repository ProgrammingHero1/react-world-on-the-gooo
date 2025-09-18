import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)

    const handleVisited = () => {
        // basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // second system
        // setVisited(visited ? false : true);

        // third system
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited' }`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 300000 ? "Big Country" : 'Small country'
            }</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() =>{ handleVisitedFlag(country?.flags?.flags?.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;


/**
 * 1. inline css (style object)
 * 2. 
 * 
*/