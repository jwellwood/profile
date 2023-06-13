import blue from '@mui/material/colors/blue';
import grey from '@mui/material/colors/grey';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue['A700'],
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    fontFamily: 'Questrial, sans-serif',
  },
});
