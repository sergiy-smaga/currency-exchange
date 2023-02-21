import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CURRENCIES } from './constants';
import { SelectProps } from '../types';

export const CurrencySelect: React.FC<SelectProps> = ({ value, setValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };

  return (
    <Grid item xs={2}>
      <FormControl fullWidth>
        <InputLabel>Currency</InputLabel>
        <Select
          data-testid="currency"
          value={value.toString()}
          label="Currency"
          onChange={handleChange}
        >
          {CURRENCIES.map((item) => (
            <MenuItem key={item.code} value={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};
