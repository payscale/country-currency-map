import { getCurrency } from "./getCurrency";

const numericAbbr = {
  thousand: { symbol: "k", value: 1000 },
  million: { symbol: "m", value: 1000000 },
  billion: { symbol: "b", value: 1000000000 },
  trillion: { symbol: "t", value: 1000000000000 }
};

const currencySymbolMap = {
  pound: "\xA3",
  euro: "\u20AC",
  yen: "\xA5"
};

const abbreviateNumericValue = value => {
  let symbol = "";
  let abbrValue = value;

  if (value / numericAbbr.trillion.value > 1) {
    abbrValue = value / numericAbbr.trillion.value;
    symbol = numericAbbr.trillion.symbol;
  } else if (value / numericAbbr.billion.value > 1) {
    abbrValue = value / numericAbbr.billion.value;
    symbol = numericAbbr.billion.symbol;
  } else if (value / numericAbbr.million.value > 1) {
    abbrValue = value / numericAbbr.million.value;
    symbol = numericAbbr.million.symbol;
  } else if (value / numericAbbr.thousand.value > 1) {
    abbrValue = value / numericAbbr.thousand.value;
    symbol = numericAbbr.thousand.symbol;
  }

  return {
    rawValue: abbrValue,
    symbol,
    string: `${abbrValue.toFixed(value >= 1000 ? 1 : 2)}${symbol}`
  };
};

export const formatCurrency = (value, currencyAbbr) => {
  const currency = getCurrency(currencyAbbr);

  if (currency) {
    return currency.symbolFormat
      .replace(/&(\w+);/, (match, p1) => currencySymbolMap[p1] || p1)
      .replace("{#}", value);
  }
  return `${value} ${currencyAbbr}`;
};

export const formatLocaleCurrency = (value, currency, options = {}) => {
  const parsedValue = parseFloat(value);
  const finalOptions = { abbreviate: false, autoFixed: true, ...options };
  const { abbreviate, autoFixed } = finalOptions;
  let { locale } = finalOptions;

  if (!parsedValue) {
    return formatCurrency(value, currency);
  }

  const abbrResult = abbreviate
    ? abbreviateNumericValue(parsedValue)
    : undefined;
  const localeOptionsSupported =
    typeof Intl == "object" && Intl && typeof Intl.NumberFormat == "function";

  if (!localeOptionsSupported) {
    return formatCurrency(
      abbrResult ? abbrResult.string : parsedValue,
      currency
    );
  }

  if (!locale) {
    locale = navigator && navigator.language ? navigator.language : "en-US";
  }

  if (abbrResult) {
    const format = abbrResult.rawValue.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: parsedValue >= 1000 && autoFixed ? 0 : 2
    });

    const localeCurr = abbrResult.rawValue.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: parsedValue >= 1000 && autoFixed ? 0 : 2,
      currency: currency,
      style: "currency"
    });

    return localeCurr.replace(format, `${format}${abbrResult.symbol}`);
  }

  return parsedValue.toLocaleString(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: autoFixed && parsedValue >= 1000 ? 0 : 2,
    currency: currency,
    style: "currency"
  });
};
