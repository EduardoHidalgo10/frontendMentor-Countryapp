import React from 'react'
import {useParams} from 'react-router-dom';
import { getCountryByName } from '../../helpers/getCountryByName';


export const CountryDetails = () => {

  const {name} = useParams();
  
  const country = getCountryByName(name);

  console.log(country)
 

  return (

    <div>countrydetails</div>

  )
  
};