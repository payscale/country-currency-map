import { getCountry, getCountryByAbbreviation } from '../../index';

describe('getCountry', () => {
  test('returns expected value', () => {
    const result = getCountry('United States');
    expect(result.abbreviation).toEqual('US');
    expect(result.currency).toEqual('USD');
  });

  test('returns undefined', () => {
    const result = getCountry('Unknown Country');
    expect(result).toBe.undefined;
  });
});

describe('getCountryByAbbreviation', () => {
  test('returns expected value', () => {
    const result = getCountryByAbbreviation('US');
    expect(result).toEqual('United States');
  });

  test('returns undefined', () => {
    const result = getCountryByAbbreviation('USA');
    expect(result).toBe.undefined;
  });
});
