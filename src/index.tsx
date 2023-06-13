import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { theme } from 'lib/theme/theme';
import App from 'app/App';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);
