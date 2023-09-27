import React from 'react'
import { Countries } from './countries/countries'


export const LandingPage = () => {
  return (
    <>
    <nav className='navbar'>
        <h1 className='main_title'>Where in the world</h1>
        <div className='switch_theme'>
            {/* icono */}
            <p>Dark Mode</p>
        </div>
    </nav>

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
