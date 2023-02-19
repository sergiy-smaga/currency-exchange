import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useCurrencyContext } from '../context/CurrencyContext';

export const ArrowsButton = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useCurrencyContext();

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Grid item xs={2}>
      <Button
        onClick={handleSwitch}
        sx={{
          borderRadius: 1,
          height: '100%',
        }}
      >
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};
