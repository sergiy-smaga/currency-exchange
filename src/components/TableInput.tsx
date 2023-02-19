import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useCurrencyContext } from '../context/CurrencyContext';
import { IItem, TableInputProps } from '../types';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

export const TableInput: React.FC<TableInputProps> = ({ item, rateType }) => {
  const { setRates } = useCurrencyContext();

  const [rate, setRate] = useState<number>(item[rateType]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isIconDisabled, setIsIconDisabled] = useState<boolean>(false);
  const [isEditShow, setIsEditShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>(rate.toString());

  useEffect(() => {
    setRates((prev) =>
      prev.map((rateItem: IItem) =>
        rateItem.currencyCodeA === item.currencyCodeA &&
        rateItem.currencyCodeB === item.currencyCodeB
          ? { ...rateItem, [rateType]: rate }
          : rateItem
      )
    );
  }, [item, rate, rateType, setRates]);

  useEffect(() => {
    if (Number(value) > rate * 1.1 || Number(value) < rate * 0.9) {
      setIsIconDisabled(true);
    } else {
      setIsIconDisabled(false);
    }
  }, [rate, value]);

  const handleDoneClick = () => {
    setRate(Number(value));
    setIsDisabled(true);
  };

  return (
    <Grid item xs={4}>
      {isDisabled ? (
        <>
          <Item
            onMouseOver={() => setIsEditShow(true)}
            onMouseLeave={() => setIsEditShow(false)}
          >
            {rate}
            {isEditShow && (
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
                onClick={() => setIsDisabled(false)}
              >
                <EditIcon />
              </IconButton>
            )}
          </Item>
        </>
      ) : (
        <OutlinedInput
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
          endAdornment={
            isEditShow && (
              <InputAdornment position="end">
                <IconButton
                  disabled={isIconDisabled}
                  onClick={handleDoneClick}
                  edge="end"
                >
                  <DoneIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setIsDisabled(true);
                    setIsEditShow(false);
                  }}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      )}
    </Grid>
  );
};
