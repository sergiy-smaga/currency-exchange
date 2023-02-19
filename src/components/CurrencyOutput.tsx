import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useCurrencyContext } from '../context/CurrencyContext';

export const CurrencyOutput = () => {
  const { firstAmount, fromCurrency, toCurrency, rates } = useCurrencyContext();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const rateBuy = rates.find(
      (item) =>
        item.currencyCodeA === fromCurrency && item.currencyCodeB === toCurrency
    );
    const rateSell = rates.find(
      (item) =>
        item.currencyCodeA === toCurrency && item.currencyCodeB === fromCurrency
    );
    rateBuy
      ? setValue(Number(firstAmount) * rateBuy.rateBuy)
      : rateSell
      ? setValue(Number(firstAmount) / rateSell.rateSell)
      : setValue(Number(firstAmount)); //case of equal currencies
  }, [firstAmount, fromCurrency, rates, toCurrency]);

  return (
    <Grid item xs={3}>
      <TextField
        value={value.toFixed(2)}
        label="Get"
        fullWidth
        InputProps={{
          type: 'number',
          readOnly: true,
        }}
      />
    </Grid>
  );
};
