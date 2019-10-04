import { formatLocaleCurrency, formatCurrency } from '../../index';

describe('formatLocaleCurrency', () => {
  test('abbreviates thousands', () => {
    const result = formatLocaleCurrency(3000.54, 'USD', 'US', true);
    expect(result).toEqual('$3k');
  });

  test('abbreviates millions', () => {
    const result = formatLocaleCurrency(3430000.54, 'USD', 'US', true);
    expect(result).toEqual('$3.4m');
  });

  test('abbreviates billions', () => {
    const result = formatLocaleCurrency(8100000000.54, 'USD', 'US', true);
    expect(result).toEqual('$8.1b');
  });

  test('handles abbreviation when less than a thousand', () => {
    const result = formatLocaleCurrency(10.54, 'USD', 'US', true);
    expect(result).toEqual('$10.54');
  });
});

describe('formatCurrency', () => {
  test('formatCurrency returns expected value', () => {
    const result = formatCurrency('100,000', 'USD');
    expect(result).toEqual('$100,000');
  });

  test('formatCurrency with unknown currency', () => {
    const result = formatCurrency('100,000', 'NONE');
    expect(result).toEqual('100,000 NONE');
  });

  test('formatCurrency returns expected value for EUR', () => {
    const result = formatCurrency('100,000', 'EUR');
    expect(result).toEqual('€100,000');
  });

  test('formatCurrency returns expected value for JPY', () => {
    const result = formatCurrency('100,000', 'JPY');
    expect(result).toEqual('¥100,000');
  });

  test('formatCurrency returns expected value for GBP', () => {
    const result = formatCurrency('100,000', 'GBP');
    expect(result).toEqual('£100,000');
  });
});
