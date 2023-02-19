import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const Footer = () => {
  return (
    <Box sx={{ height: 100 }}>
      <Paper
        sx={{
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        2023 All rights reserved
      </Paper>
    </Box>
  );
};
