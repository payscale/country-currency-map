
import { getCurrency, getCurrencyAbbreviation } from '../../index';

describe('getCurrency', () => {
  test('returns expected value', () => {
    const result = getCurrency('USD');
    expect(result.symbolFormat).toContain('$');
    expect(result.name).toEqual('U.S. Dollar (USD)');
  });

  test('returns undefined', () => {
    const result = getCurrency('NONE');
    expect(result).toBe.undefined;
  });
});

describe('getCurrencyAbbreviation', () => {
  test('returns expected value', () => {
    const result = getCurrencyAbbreviation('Spain');
    expect(result).toEqual('EUR');
  });

  test('returns undefined', () => {
    const result = getCurrencyAbbreviation('Unknown Country');
    expect(result).toBe.undefined;
  });
});
