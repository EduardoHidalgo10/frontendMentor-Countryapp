import React, { useEffect, useState } from 'react'
import { Countries } from './countries/countries'
import { NavBar } from './navbar/navbar'
import { getCountries } from '../data/getData'


export const LandingPage = () => {

  const [state,setState] = useState({
    searchedCountry:'',
    selectedRegion:[],
    countries:[]
  })

  
  
  useEffect(() => {
    
    
    setState((prevState) => ({...prevState,countries:getCountries()}));
  }, [])
  

  const searchCountry = state.countries.filter((country) => country.name.toLowerCase() === state.searchedCountry.toLowerCase());

  
  const selectedCountry = state.countries.filter((region) => region.region === state.selectedRegion);
  
  



  return (
    <>

    <NavBar/>
    

    <div className='filter_container'>
    <div className='search_container'>
        <input type='text' className='search_country' placeholder='Search for a country...' 
        onChange={(e) => setState(prevState => ({...prevState,searchedCountry:e.target.value}))}/>

    </div>

    <div className='search_container'>
        <select className='region_selector' onChange={(e) => setState(prevState => ({...prevState,selectedRegion:e.target.value}))}>
        <option selected hidden value=''>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>

    </div>
    </div>

    <Countries countries={state.countries} searchedCountry={state.searchedCountry}/>

    </>
    

  )
}
