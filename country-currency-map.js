import countryMap from './country-map';
import currencyMap from './currency-map';
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

// Returns a sorted list of currency objects.
function getCurrencyList() {
   let currencyArray = Object.keys(currencyMap).map(currencyAbbr => {
        return {
            abbr: currencyAbbr,
            name: currencyMap[currencyAbbr].name,
            symbolFormat: currencyMap[currencyAbbr].symbolFormat
        };
    });
   return currencyArray.sort(function(a, b) {
        var abbrA = a.name.toUpperCase(); 
        var abbrB = b.name.toUpperCase(); 
        if (abbrA < abbrB) {
            return -1;
        }
        if (abbrA > abbrB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}

function getCurrencyAbbreviationFromName(currencyName) {
    var abbr =  _.findKey(currencyMap, function(c) {
          return c.name === currencyName;
    });
    return abbr;
}

module.exports.getCountry = getCountry;
module.exports.getCurrency = getCurrency;
module.exports.getCurrencyAbbreviation = getCurrencyAbbreviation;
module.exports.formatCurrency = formatCurrency;
module.exports.getCurrencyList = getCurrencyList;
module.exports.getCurrencyAbbreviationFromName = getCurrencyAbbreviationFromName;
