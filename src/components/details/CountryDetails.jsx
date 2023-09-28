import React from 'react'
import {useParams} from 'react-router-dom';
import { getCountryByName } from '../../helpers/getCountryByName';
import { NavBar } from '../navbar/navbar';
import '../../styles/details.css'

export const CountryDetails = () => {

  const {name} = useParams();
  
  const country = getCountryByName(name);

  console.log(country)
 
  
  return (
    <>
      <NavBar/>

      {/* <button>Back</button> */}
      <div className='country_container'>
        <div className='country'>
          <img className='country_img' src={country.flag}/>

          <div className='country_details'>
            <p className='country_name'>{country.name}</p>
            <p className='country_info'><strong>Native Name: </strong>{country.nativeName}</p>
            <p className='country_info'><strong>Population: </strong>{country.population}</p>
            <p className='country_info'><strong>Region: </strong>{country.region}</p>
            <p className='country_info'><strong>Sub Region: </strong>{country.subregion}</p>
            <p className='country_info'><strong>Capital: </strong>{country.capital}</p>
          </div>

          <div className='country_details2'>
          <p className='country_info'><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
          <p className='country_info'><strong>Currencies: </strong>{country.currencies[0].name} </p>
          <p className='country_info'><strong>Languages: </strong>{country.languages[0].name}</p>

          </div>

        </div>
      </div>
      
    </>

  )
  
};