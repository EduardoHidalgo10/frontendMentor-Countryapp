import React from 'react'
import '../../styles/countries.css'
import {useNavigate} from "react-router-dom"
import 'animate.css';


export const Countries = ({countries}) => {
    
    
    const navigate = useNavigate();

   
    

  return (
        <div className='countries_container animate__animated animate__fadeIn'>
            {countries.map((country => (
            <div className='country ' key={country.name}>
                <img className='country_img' src={country.flags.png} alt='flag' title='flag'/>
                
                <div className='country_content'>
                <p onClick={() => navigate(country.name)} className='country_name'>{country.name}</p>
                <p className='country_info'><strong>Population:</strong> {country.population.toLocaleString('en-US')}</p>
                <p className='country_info'><strong>Region: </strong> {country.region}</p>
                <p className='country_info'><strong>Capital: </strong> {country.capital}</p>
                </div>
            </div>
            )))}
        </div>    
            
  )
}
