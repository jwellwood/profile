import React from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
// Internal
import { header_styles } from './styles';

const Header = ({ children }) => {
  const classes = header_styles();
  return (
    <React.Fragment>
      <Typography component='span' className={classes.title}>
        <Zoom duration={1000} cascade left>
          {children}
        </Zoom>
      </Typography>
      <div className={classes.underscore}></div>
    </React.Fragment>
  );
};

export default Header;
