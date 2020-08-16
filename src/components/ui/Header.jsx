import React from 'react';
import Zoom from 'react-reveal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const header_styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.dark,
    fontFamily: 'Hammersmith One',
    margin: theme.spacing(2),
    fontSize: '30px',
  },
  underscore: {
    width: '60px',
    margin: '2rem auto',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
}));

const Header = ({ children }) => {
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
