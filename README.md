# country-currency-map

Mapping of countries and their primary currency along with currency data.

## Installation

    npm install country-currency-map

## Usage

### Get country data from country name

```js
var getCountry = require("country-currency-map").getCountry;
getCountry("United States"); //=> { abbreviation: 'US', currency: 'USD' }
getCountry("Canada"); //=> { abbreviation: 'CA', currency: 'CAD' }
```

### Get currency data from currency abbreviation

```js
var getCurrency = require("country-currency-map").getCurrency;
getCurrency("USD"); //=> { name: 'U.S. Dollar (USD)', symbolFormat: '${#}' }
getCurrency("CAD"); //=> { name: 'Canadian Dollar (CAD)', symbolFormat: 'C${#}' }
```

### Get currency abbreviation from a country name

```js
var getCurrencyAbbreviation = require("country-currency-map")
  .getCurrencyAbbreviation;
getCurrencyAbbreviation("United States"); //=> 'USD'
getCurrencyAbbreviation("Canada"); //=> 'CAD'
```

### Format currency

```js
var formatCurrency = require("country-currency-map").formatCurrency;
formatCurrency("100,000", "USD"); //=> '$100,000'
formatCurrency("100,000", "EUR"); //=> '€100,000'
```

### Format Locale Currency

This function takes a number, currency abbreviation and country abbrevation and returns back the currency string based on the country locale. If toLocaleString options are not supported or the value passed is not a number, it will fallback to formatCurrency. Note, NodeJS only support EN locale out of the box. If you need support for other locales please see: https://www.npmjs.com/package/intl

```js
var formatLocaleCurrency = require("country-currency-map").formatLocaleCurrency;
formatLocaleCurrency(100000.5, "USD", "ES"); // => '$100.000,50
formatLocaleCurrency(3000.2, "EUR", "FR"); // => '€3 000,20
```

There's a fourth boolean parameter to enable abbreviation of the numerical value. Currently this only supports numbers in the trillions.

```js
var formatLocaleCurrency = require("country-currency-map").formatLocaleCurrency;
formatLocaleCurrency(100000.5, "USD", "ES", true); // => '$100k
formatLocaleCurrency(3000.2, "EUR", "FR", true); // => '€3k
```

### Get Currency List

```js
var getCurrencyList = require("country-currency-map").getCurrencyList;
getCurrencyList(); //=> [ { abbr: "AFA", name: "Afghanistan Afghani (AFA)", symbolFormat: "AFA {#}" }, { abbr: "ALL", name: "Albanian Lek (ALL)", symbolFormat:, "ALL {#}" }, ... ]
```

### Get Currency Abbreviation From Name

```js
var getCurrencyAbbreviationFromName = require("country-currency-map")
  .getCurrencyAbbreviationFromName;
getCurrencyAbbreviationFromName("U.S. Dollar (USD)"); //=> 'USD'
```

### Get Country by Country Abbreviation

```js
var getCountryByAbbreviation = require("country-currency-map")
  .getCountryByAbbreviation;
getCountryByAbbreviation("US"); //=> 'United States'
```
