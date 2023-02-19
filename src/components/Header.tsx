import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const Header = () => {
  return (
    <Box sx={{ height: 100 }}>
      <Paper
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        Header Text Logo
      </Paper>
    </Box>
  );
};
