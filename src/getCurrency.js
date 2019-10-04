import currencyMap from './currencyMap';
import { getCountry } from './getCountry';
import findKey from 'lodash.findkey';

export const getCurrency = currencyAbbr => currencyMap[currencyAbbr];

export const getCurrencyAbbreviation = countryName => {
  const country = getCountry(countryName);
  if (country) {
    return country.currency;
  }
  return undefined;
};

// Returns a list of currency objects.
export const getCurrencyList = () => {
  const currencyArray = Object.keys(currencyMap).map(currencyAbbr => ({
    abbr: currencyAbbr,
    name: currencyMap[currencyAbbr].name,
    symbolFormat: currencyMap[currencyAbbr].symbolFormat
  }));
  return currencyArray;
};

export const getCurrencyAbbreviationFromName = currencyName => {
  const abbr = findKey(currencyMap, c => c.name === currencyName);
  return abbr;
};
