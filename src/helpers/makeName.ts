import { Currencies } from '../types';

export function makeName(code: Currencies) {
  return (
    (code === Currencies.UAH && 'UAH') ||
    (code === Currencies.EUR && 'EUR') ||
    (code === Currencies.USD && 'USD')
  );
}
