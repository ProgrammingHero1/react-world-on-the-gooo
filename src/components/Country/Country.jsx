import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    console.log(country.area.area)

    const handleVisited = () =>{
        console.log('buttn clicked')
    }

    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
            country.area.area > 300000 ? "Big Country" : 'Small country'
            }</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;


/**
 * 1. inline css (style object)
 * 2. 
 * 
*/