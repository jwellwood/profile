import React, { ReactNode } from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
import { header_styles } from './styles';

const Header: React.FC<ReactNode> = ({ children }) => {
  const classes = header_styles();
  return (
    <>
      <Typography component='span' className={classes.title}>
        <Zoom duration={1000} cascade left>
          {children}
        </Zoom>
      </Typography>
      <div className={classes.underscore}></div>
    </>
  );
};

export default Header;
