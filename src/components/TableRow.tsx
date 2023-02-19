import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TableInput } from './TableInput';
import { TableRowProps, RateType } from '../types';
import { makeName } from '../helpers/makeName';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const TableRow: React.FC<TableRowProps> = ({ item }) => {
  return (
    <>
      <Grid item xs={4}>
        <Item>
          {makeName(item.currencyCodeA)}/{makeName(item.currencyCodeB)}
        </Item>
      </Grid>
      <TableInput item={item} rateType={RateType.BUY} />
      <TableInput item={item} rateType={RateType.SELL} />
    </>
  );
};
