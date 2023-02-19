import { createContext, useState, useContext, useEffect } from 'react';
import { API } from '../api/mainApi';
import { IItem, ProviderProps, IContext } from '../types';
import { makeRatesMatrix } from '../helpers/makeRatesMatrix';

export const CurrencyContext = createContext<IContext>({} as IContext);

export const useCurrencyContext = () => useContext(CurrencyContext);

const CurrencyProvider = (props: ProviderProps) => {
  const [fromCurrency, setFromCurrency] = useState(980);
  const [toCurrency, setToCurrency] = useState(980);
  const [firstAmount, setFirstAmount] = useState('');
  const [rates, setRates] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await API().get('bank/currency');
        setRates(makeRatesMatrix(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
    rates,
    setRates,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
