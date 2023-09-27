import data from './data.json';

export const getCountries =  () => {
  try {
    // You can now access the imported JSON data directly
    return data;
  } catch (error) {
    return error;
  }
};






