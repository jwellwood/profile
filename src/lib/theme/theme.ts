import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['A400'],
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    fontFamily: 'Questrial, sans-serif',
  },
  // overrides: {
  //   Mui???: {
  //     root: {
  //       style here...
  //     }
  //   }
  // }
});
