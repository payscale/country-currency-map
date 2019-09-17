import countryMap from './country-map';
import currencyMap from './currency-map';
import findKey from 'lodash.findkey';

// mapping of escaped currency symbol (eg '&euro;') to actual currency character
const currencySymbolMap = {
    'pound': '\xA3',
    'euro': '\u20AC',
    'yen': '\xA5'
};

function getCountry(countryName) {
    return countryMap[countryName];
}

function getCurrency(currencyAbbr) {
    return currencyMap[currencyAbbr];
}

function getCurrencyAbbreviation(countryName) {
    let country = getCountry(countryName);
    if(country) {
        return country.currency;
    }
    return undefined;
}

function formatCurrency(value, currencyAbbr) {
    let currency = getCurrency(currencyAbbr);
    if(currency) {
        return currency.symbolFormat
            .replace(/&(\w+);/, (match, p1) => currencySymbolMap[p1] || p1)
            .replace('{#}', value);
    }
    return `${value} ${currencyAbbr}`;
}

// Returns a list of currency objects.
function getCurrencyList() {
    let currencyArray = Object.keys(currencyMap).map(currencyAbbr => {
        return {
            abbr: currencyAbbr,
            name: currencyMap[currencyAbbr].name,
            symbolFormat: currencyMap[currencyAbbr].symbolFormat
        };
    });
    return currencyArray;
}

function getCurrencyAbbreviationFromName(currencyName) {
    let abbr =  findKey(currencyMap, function(c) {
        return c.name === currencyName;
    });
    return abbr;
}

function getCurrencyNameFromCountry(countryName){
    let currencyAbbr = getCurrencyAbbreviation(countryName);
    if(currencyAbbr && currencyMap[currencyAbbr]) {
        return currencyMap[currencyAbbr].name;
    }
    return undefined;
}

function getCountryByAbbreviation(countryAbbr) {
    let country = findKey(countryMap, { 'abbreviation': countryAbbr });
    return country;
}

module.exports.getCountry = getCountry;
module.exports.getCurrency = getCurrency;
module.exports.getCurrencyAbbreviation = getCurrencyAbbreviation;
module.exports.formatCurrency = formatCurrency;
module.exports.getCurrencyList = getCurrencyList;
module.exports.getCurrencyAbbreviationFromName = getCurrencyAbbreviationFromName;
module.exports.getCurrencyNameFromCountry = getCurrencyNameFromCountry;
module.exports.getCountryByAbbreviation = getCountryByAbbreviation;
