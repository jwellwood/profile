import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// MUI Theme
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from 'lib/theme/theme';
//  fontawesome library
import 'assets/icons/fontawesome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
