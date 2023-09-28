import { getCountries } from '../data/getData';


export const getCountryByName = (countryName) => {
    const data = getCountries()
   
    const countryDetail = data.find((country) => country.name.toLowerCase() === countryName.toLowerCase());
   
    return countryDetail;
}