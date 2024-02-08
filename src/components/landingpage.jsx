import React, { useEffect, useState } from 'react';
import { Countries } from './countries/countries';
import { NavBar } from './navbar/navbar';
import { getCountries } from '../data/getData';
import SearchBar from './searchbar/searchBar';

export const LandingPage = () => {
  const [state, setState] = useState({
    searchedCountry: '',
    selectedRegion: [],
    countries: getCountries(),
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

  return (
    <>
      <NavBar />
      <div className='filter_container'>
        <SearchBar handleSearchChange={handleSearchChange} handleSelectChange={handleSelectChange} />
      </div>
      <Countries
        countries={filteredData} // Use the combined filtered data
        searchedCountry={state.searchedCountry}
      />
    </>
  );
};