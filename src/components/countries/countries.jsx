import React, { useEffect, useState } from 'react'
import { getCountries } from '../../data/getData'
import '../../styles/countries.css'


export const Countries = () => {
    
    const [countries, setCountries] = useState([])

    

    useEffect(() => {
        setCountries(getCountries());
    }, [])

    const slicedCountries = countries.slice(0,5);
    
  return (
        <div className='countries_container'>
            {slicedCountries.map((country => (
            <div className='country' key={country.name}>
                <img className='country_img' src={country.flag} alt='flag' title='flag'/>
                
                <div className='country_content'>
                <p className='country_name'>{country.name}</p>
                <p className='country_info'><strong>Population:</strong> {country.population}</p>
                <p className='country_info'><strong>Region: </strong> {country.region}</p>
                <p className='country_info'><strong>Capital: </strong> {country.capital}</p>
                </div>
            </div>
            )))}
        </div>    
  )
}
