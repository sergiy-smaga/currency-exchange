import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const TableHeader = () => {
  return (
    <>
      <Grid item xs={4}>
        <Item>Currency/Current Date</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Buy</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Sell</Item>
      </Grid>
    </>
  );
};
