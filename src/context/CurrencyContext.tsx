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
  const [isError, setIsError] = useState<boolean>(false);
  const [counter, setCounter] = useState(() => {
    const item = localStorage.getItem('counter');
    return item ? Number(JSON.parse(item)) : 0;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = localStorage.getItem('counter');
        if (item && Number(JSON.parse(item)) > 4) {
          setCounter(0);
          setIsError(true);
          return;
        }
        const { data } = await API().get('bank/currency');
        setRates(makeRatesMatrix(data));
      } catch (error) {
        console.log(error);
      }
    };
    setIsError(false);
    fetchData();
    setCounter((prev) => prev + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
    rates,
    setRates,
    isError,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
