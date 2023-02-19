export type IItem = {
  currencyCodeA: number;
  currencyCodeB: number;
  date?: number;
  rateSell: number;
  rateBuy: number;
  rateCross?: number;
};

export enum Currencies {
  UAH = 980,
  USD = 840,
  EUR = 978,
}

export type TableInputProps = {
  item: IItem;
  rateType: RateType;
};

export type TableRowProps = {
  item: IItem;
};

export enum RateType {
  BUY = 'rateBuy',
  SELL = 'rateSell',
}

export type ProviderProps = {
  children: JSX.Element[] | JSX.Element;
};

export type IContext = {
  setFromCurrency: React.Dispatch<React.SetStateAction<number>>;
  setToCurrency: React.Dispatch<React.SetStateAction<number>>;
  setFirstAmount: React.Dispatch<React.SetStateAction<string>>;
  setRates: React.Dispatch<React.SetStateAction<IItem[]>>;
  fromCurrency: number;
  toCurrency: number;
  firstAmount: string;
  rates: IItem[];
};

export type SelectProps = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
};
