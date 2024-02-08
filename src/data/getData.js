import data from './data.json';

export const getCountries =  () => {
  try {
    return data;
    // console.log(data + 'a')
  } catch (error) {
    return error;
  }
};






