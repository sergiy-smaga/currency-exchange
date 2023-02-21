import { validateInput } from '../helpers/validateInput';
import { makeName } from '../helpers/makeName';
import { makeRatesMatrix } from '../helpers/makeRatesMatrix';

describe('Test validateInput function', () => {
  it('positive results', () => {
    expect(validateInput(40, '42')).toBeFalsy();
    expect(validateInput(50, '46')).toBeFalsy();
  });

  it('negative results', () => {
    expect(validateInput(40, '47')).toBeTruthy();
    expect(validateInput(50, '40')).toBeTruthy();
  });
});

describe('Test makeName function', () => {
  it('positive results', () => {
    expect(makeName(980)).toMatch('UAH');
    expect(makeName(978)).toMatch('EUR');
    expect(makeName(840)).toMatch('USD');
  });
  it('negative results', () => {
    expect(makeName(120)).toEqual(false);
  });
});

const mockDataAcceptable = [
  {
    currencyCodeA: 840,
    currencyCodeB: 980,
    rateSell: 1,
    rateBuy: 1,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 980,
    rateSell: 1,
    rateBuy: 1,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 840,
    rateSell: 1,
    rateBuy: 1,
  },
];

const mockDataUnacceptable = [
  {
    currencyCodeA: 100,
    currencyCodeB: 840,
    rateSell: 1,
    rateBuy: 1,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 100,
    rateSell: 1,
    rateBuy: 1,
  },
  {
    currencyCodeA: 980,
    currencyCodeB: 840,
    rateSell: 1,
    rateBuy: 1,
  },
];

const expectedData = mockDataAcceptable;

describe('Test makeRatesMatrix function', () => {
  it('positive results', () => {
    expect(
      makeRatesMatrix([...mockDataAcceptable, ...mockDataUnacceptable])
    ).toEqual(expectedData);
  });
  it('negative results', () => {
    expect(makeRatesMatrix(mockDataUnacceptable)).toEqual([]);
  });
});
