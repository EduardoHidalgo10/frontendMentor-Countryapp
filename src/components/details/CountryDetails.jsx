import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { getCountryByName } from '../../helpers/getCountryByName';
import { NavBar } from '../navbar/navbar';
import '../../styles/details.css'
import 'animate.css';




export const CountryDetails = () => {

  const {name} = useParams();
  const navigate = useNavigate();

  const country = getCountryByName(name);


  return (
    <>
      <NavBar/>
      <button className='back_button' onClick={() => navigate('/')}>Back</button>
      <div className='country_container animate__animated animate__fadeIn'>
        <div className='country'>
      <div className='column1'>
          <img className='country_img' src={country.flag}/>
      </div>

    <div className='column2'>
          <div className='country_details'>
            <p className='country_name'>{country.name}</p>
            <p className='country_info'><strong>Native Name: </strong>{country.nativeName}</p>
            <p className='country_info'><strong>Population: </strong>{country.population.toLocaleString('en-US')}</p>
            <p className='country_info'><strong>Region: </strong>{country.region}</p>
            <p className='country_info'><strong>Sub Region: </strong>{country.subregion}</p>
            <p className='country_info'><strong>Capital: </strong>{country.capital}</p>
          </div>

          <div className='country_details2'>
          <p className='country_info'><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
          <p className='country_info'><strong>Currencies: </strong>{country.currencies[0].name} </p>
          <p className='country_info'><strong>Languages: </strong>{country.languages[0].name}</p>

          </div>

        {
          country.hasOwnProperty('borders')?
          <div className='country_details3'>
            <p className='border_countries_title'>Border Countries</p>
              <div className='border_countries'>
                
                  {country.borders.map((border) => (
                    <div className='border' key={border}>{border}</div>
                  ))
                  }
              </div>
              
          </div>:''

        }
    </div>


        </div>
      </div>
      
    </>

  )
  
};