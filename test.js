import chai from 'chai';
import {getCountry, getCurrency, getCurrencyAbbreviation, formatCurrency} from './country-currency-map';

describe('country-currency-map', () => {
    it('getCountry returns expected value', () => {
        let result = getCountry('United States');
        chai.expect(result.abbreviation).to.equal('US');
        chai.expect(result.currency).to.equal('USD');
    });

    it('getCountry returns undefined', () => {
        let result = getCountry('Unknown Country');
        chai.expect(result).to.be.undefined;
    });

    it('getCurrency returns expected value', () => {
        let result = getCurrency('USD');
        chai.expect(result.symbolFormat).to.contain('$');
        chai.expect(result.name).to.equal('U.S. Dollar (USD)');
    });

    it('getCurrency returns undefined', () => {
        let result = getCurrency('NONE');
        chai.expect(result).to.be.undefined;
    });

    it('getCurrencyAbbreviation returns expected value', () => {
        let result = getCurrencyAbbreviation('Spain');
        chai.expect(result).to.equal('EUR');
    });

    it('getCurrencyAbbreviation returns undefined', () => {
        let result = getCurrencyAbbreviation('Unknown Country');
        chai.expect(result).to.be.undefined;
    });

    it('formatCurrency returns expected value', () => {
        let result = formatCurrency('100,000', 'USD');
        chai.expect(result).to.equal('$100,000');
    });

    it('formatCurrency with unknown currency', () => {
        let result = formatCurrency('100,000', 'NONE');
        chai.expect(result).to.equal('100,000 NONE');
    });

    it('formatCurrency decodes', () => {
        let result = formatCurrency('100,000', 'EUR');
        chai.expect(result).to.equal('€100,000');
    });
});
