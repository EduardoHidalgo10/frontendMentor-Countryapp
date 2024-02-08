import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ handleSearchChange,handleSelectChange }) => {
    return (
        <>
            <div className='search_container'>
                <input
                    type='text'
                    className='search_country'
                    placeholder='Search for a country...'
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

            <div className='search_container'>
                <select className='region_selector' onChange={(e) => handleSelectChange( e.target.value )}>
                    <option hidden defaultValue=''>Filter by Region</option>
                    <option defaultValue='Africa'>Africa</option>
                    <option defaultValue='Americas'>Americas</option>
                    <option defaultValue='Asia'>Asia</option>
                    <option defaultValue='Europe'>Europe</option>
                    <option defaultValue='Oceania'>Oceania</option>
                </select>

            </div>
        </>
    );
};

export default SearchBar;
