import React from 'react'
import '../../styles/countries.css'
import {useNavigate} from "react-router-dom"


export const Countries = ({countries,searchedCountry}) => {
    
    
    const navigate = useNavigate();


   


  return (
        <div className='countries_container'>
            {countries.map((country => (
            <div className='country' key={country.name}>
                <img className='country_img' src={country.flags.png} alt='flag' title='flag'/>
                
                <div className='country_content'>
                <p onClick={() => navigate(country.name)} className='country_name'>{country.name}</p>
                <p className='country_info'><strong>Population:</strong> {country.population}</p>
                <p className='country_info'><strong>Region: </strong> {country.region}</p>
                <p className='country_info'><strong>Capital: </strong> {country.capital}</p>
                </div>
            </div>
            )))}
        </div>    
  )
}
