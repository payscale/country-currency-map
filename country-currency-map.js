import countryMap from './country-map';
import currencyMap from './currency-map';
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

module.exports.getCountry = getCountry;
module.exports.getCurrency = getCurrency;
module.exports.getCurrencyAbbreviation = getCurrencyAbbreviation;
module.exports.formatCurrency = formatCurrency;
