import React, { useEffect, useState } from 'react';
import { Countries } from './countries/countries';
import { NavBar } from './navbar/navbar';
import { getCountries } from '../data/getData';
import SearchBar from './searchbar/searchBar';



export const LandingPage = () => {
  const [state, setState] = useState({
    searchedCountry: '',
    selectedRegion: [],
    countries:[],
  });

  const handleSearchChange = (searchedCountry) => {
    setState((prevState) => ({ ...prevState, searchedCountry }));
  };

  const handleSelectChange = (selectedRegion) => {
    setState((prevState) => ({ ...prevState, selectedRegion }));
  };

  
  const filteredByRegion = state.selectedRegion.length > 0
    ? state.countries.filter((country) => state.selectedRegion.includes(country.region))
    : state.countries;

  const filteredData = filteredByRegion.filter((country) => {
    return country.name.toLowerCase().includes(state.searchedCountry.toLowerCase());
  });

  useEffect(() => {
    const countriesReq = getCountries();
    const germany = countriesReq.find(c => c.name === 'Germany');
    const usa = countriesReq.find(c => c.name === 'United States of America');
    const brazil = countriesReq.find(c => c.name === 'Brazil');
    const iceland = countriesReq.find(c => c.name === 'Iceland');
  
    const cq = countriesReq
              .filter( country => country.name !== usa.name)
              .filter( country => country.name !== germany.name)
              .filter( country => country.name !== brazil.name)
              .filter( country => country.name !== iceland.name);

    cq.unshift(germany,usa,brazil,iceland )
    
    setState(prevState=>({...prevState, countries: cq}))
  }, [])
  

  return (
    <>
      <NavBar />
      <div className='filter_container'>
        <SearchBar handleSearchChange={handleSearchChange} handleSelectChange={handleSelectChange} />
      </div>
      
      <Countries
        countries={filteredData} 
        searchedCountry={state.searchedCountry}
      />
    </>
  );
};