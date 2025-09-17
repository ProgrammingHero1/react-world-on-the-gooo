import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}></Country>)
            }
        </div>
    );
};

export default Countries;