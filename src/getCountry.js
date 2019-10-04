import countryMap from "./countryMap";
import findKey from "lodash.findkey";

export const getCountry = countryName => {
  return countryMap[countryName];
};

export const getCountryByAbbreviation = countryAbbr => {
  let country = findKey(countryMap, { abbreviation: countryAbbr });
  return country;
};
