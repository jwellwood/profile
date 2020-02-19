import React from 'react';
import Typography from '@material-ui/core/Typography';
// Internal
import { subheader_styles } from './styles';

const Subheader = ({ children }) => {
  const classes = subheader_styles();
  return (
    <Typography variant='h5' className={classes.title}>
      {children}
    </Typography>
  );
};

export default Subheader;
