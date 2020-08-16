import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

export const subheader_styles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    margin: theme.spacing(2),
  },
}));

const Subheader = ({ children }) => {
  const classes = subheader_styles();
  return (
    <Typography variant='h5' className={classes.title}>
      {children}
    </Typography>
  );
};

export default Subheader;
