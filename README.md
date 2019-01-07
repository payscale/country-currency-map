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

### Get Currency List
```js
var getCurrencyList = require('country-currency-map').getCurrencyList;
getCurrencyList(); //=> [ { abbr: "AFA", name: "Afghanistan Afghani (AFA)", symbolFormat: "AFA {#}" }, { abbr: "ALL", name: "Albanian Lek (ALL)", symbolFormat:, "ALL {#}" }, ... ]
```

### Get Currency Abbreviation From Name
```js
var getCurrencyAbbreviationFromName = require('country-currency-map').getCurrencyAbbreviationFromName;
getCurrencyAbbreviationFromName('U.S. Dollar (USD)'); //=> 'USD'
```

### Get Country by Country Abbreviation
```js
var getCountryByAbbreviation = require('country-currency-map').getCountryByAbbreviation;
getCountryByAbbreviation('US'); //=> 'United States'