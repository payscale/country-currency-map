# country-currency-map

Mapping of countries and their primary currency along with currency data.

## Installation

    npm install country-currency-map

## Usage

### Get country data from country name

```js
var getCountry = require('country-currency-map').getCountry;
getCountry('United States'); //=> { abbreviation: 'US', currency: 'USD' }
getCountry('Canada'); //=> { abbreviation: 'CA', currency: 'CAD' }
```

### Get currency data from currency abbreviation

```js
var getCurrency = require('country-currency-map').getCurrency;
getCurrency('USD'); //=> { name: 'U.S. Dollar (USD)', symbolFormat: '${#}' }
getCurrency('CAD'); //=> { name: 'Canadian Dollar (CAD)', symbolFormat: 'C${#}' }
```

### Get currency abbreviation from a country name

```js
var getCurrencyAbbreviation = require('country-currency-map').getCurrencyAbbreviation;
getCurrencyAbbreviation('United States'); //=> 'USD'
getCurrencyAbbreviation('Canada'); //=> 'CAD'
```

### Format currency

```js
var formatCurrency = require('country-currency-map').formatCurrency;
formatCurrency('100,000', 'USD'); //=> '$100,000'
formatCurrency('100,000', 'EUR'); //=> '€100,000'
```
