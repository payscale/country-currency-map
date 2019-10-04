import countryMap from './countryMap';
import findKey from 'lodash.findkey';

export const getCountry = countryName => countryMap[countryName];

export const getCountryByAbbreviation = countryAbbr => {
  const country = findKey(countryMap, { abbreviation: countryAbbr });
  return country;
};
