import currencyMap from "./currencyMap";
import { getCountry } from "./getCountry";
import findKey from "lodash.findkey";

export const getCurrency = currencyAbbr => {
  return currencyMap[currencyAbbr];
};

export const getCurrencyAbbreviation = countryName => {
  let country = getCountry(countryName);
  if (country) {
    return country.currency;
  }
  return undefined;
};

// Returns a list of currency objects.
export const getCurrencyList = () => {
  let currencyArray = Object.keys(currencyMap).map(currencyAbbr => {
    return {
      abbr: currencyAbbr,
      name: currencyMap[currencyAbbr].name,
      symbolFormat: currencyMap[currencyAbbr].symbolFormat
    };
  });
  return currencyArray;
};

export const getCurrencyAbbreviationFromName = currencyName => {
  let abbr = findKey(currencyMap, function(c) {
    return c.name === currencyName;
  });
  return abbr;
};
