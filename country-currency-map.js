import countryMap from './country-map';
import currencyMap from './currency-map';
import currencyOrderByCountry from './currency-order-by-country';
import _ from 'lodash';
import he from 'he';

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
        return he.decode(currency.symbolFormat).replace('{#}', value);
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

// Returns a list of currency objects ordered by name of the currency
function getCurrencyListOrderByName() {
    let currencyArray = currencyOrderByCountry.map(currencyAbbr => {
        return {
            abbr: currencyAbbr,
            name: currencyMap[currencyAbbr].name,
            symbolFormat: currencyMap[currencyAbbr].symbolFormat     
        };
    });

    return currencyArray;
}

function getCurrencyAbbreviationFromName(currencyName) {
    let abbr =  _.findKey(currencyMap, function(c) {
        return c.name === currencyName;
    });
    return abbr;
}

function getCountryByAbbreviation(countryAbbr) {
    let country = _.findKey(countryMap, { 'abbreviation': countryAbbr });
    return country;
}

module.exports.getCountry = getCountry;
module.exports.getCurrency = getCurrency;
module.exports.getCurrencyAbbreviation = getCurrencyAbbreviation;
module.exports.formatCurrency = formatCurrency;
module.exports.getCurrencyList = getCurrencyList;
module.exports.getCurrencyListOrderByName = getCurrencyListOrderByName;
module.exports.getCurrencyAbbreviationFromName = getCurrencyAbbreviationFromName;
module.exports.getCountryByAbbreviation = getCountryByAbbreviation;
