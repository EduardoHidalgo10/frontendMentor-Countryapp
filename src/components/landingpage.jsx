import React from 'react'
import { Countries } from './countries/countries'
import { NavBar } from './navbar/navbar'


export const LandingPage = () => {
  return (
    <>

    <NavBar/>
    
    <div className='search_container'>
        <input type='text' className='search_country' placeholder='Search for a country...'/>

    </div>

    <div className='filter_container'>
        <select className='region_selector'>
        <option selected hidden value=''>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
    </div>

    <Countries/>

    </>
    

  )
}
