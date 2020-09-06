import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import { subheader_styles } from './styles';

const Subheader: React.FC<ReactNode> = ({ children }) => {
  const classes = subheader_styles();
  return (
    <Typography variant='h5' className={classes.title}>
      {children}
    </Typography>
  );
};

export default Subheader;
