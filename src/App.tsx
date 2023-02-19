import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CurrencySelect } from './components/CurrencySelect';
import { CurrencyInput } from './components/CurrencyInput';
import { ArrowsButton } from './components/ArrowsButton';
import { TableRow } from './components/TableRow';
import { TableHeader } from './components/TableHeader';
import { IItem } from './types';
import { Grid } from '@mui/material';
import { useCurrencyContext } from './context/CurrencyContext';
import { CurrencyOutput } from './components/CurrencyOutput';

const boxStyles = {
  background: '#fdfdfd',
  textAlign: 'center',
  color: '#222',
  borderRadius: 2,
  padding: '4rem 2rem',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  position: 'relative',
};

function App() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, rates } =
    useCurrencyContext();

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2 }}>
          <TableHeader />
          {rates.length &&
            rates.map((item: IItem, index: number) => (
              <TableRow key={index} item={item} />
            ))}
        </Grid>
      </Box>

      <Box mt={4} sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2 }}>
          <CurrencyInput />
          <CurrencySelect value={fromCurrency} setValue={setFromCurrency} />
          <ArrowsButton />
          <CurrencyOutput />
          <CurrencySelect value={toCurrency} setValue={setToCurrency} />
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
