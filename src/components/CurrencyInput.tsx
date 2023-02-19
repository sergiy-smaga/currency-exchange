import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useCurrencyContext } from '../context/CurrencyContext';

export const CurrencyInput = () => {
  const { firstAmount, setFirstAmount } = useCurrencyContext();
  return (
    <Grid item xs={3}>
      <TextField
        value={firstAmount}
        onChange={(e) => setFirstAmount(e.target.value)}
        label="Change"
        fullWidth
        InputProps={{
          type: 'number',
        }}
      />
    </Grid>
  );
};
