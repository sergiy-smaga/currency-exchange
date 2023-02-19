import { IItem, Currencies } from '../types';

export function makeRatesMatrix(data: IItem[]) {
  return data.reduce((acc: IItem[], item: IItem) => {
    const { currencyCodeA, currencyCodeB, rateBuy, rateSell } = item;
    if (
      (currencyCodeA === Currencies.USD && currencyCodeB === Currencies.UAH) ||
      (currencyCodeA === Currencies.EUR && currencyCodeB === Currencies.UAH) ||
      (currencyCodeA === Currencies.EUR && currencyCodeB === Currencies.USD)
    ) {
      acc.push({
        currencyCodeA,
        currencyCodeB,
        rateBuy,
        rateSell,
      });
    }
    return acc;
  }, []);
}
