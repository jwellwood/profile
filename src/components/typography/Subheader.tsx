import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { theme } from 'lib/theme/theme';

const Subheader: React.FC<ReactNode> = ({ children }) => {
  return (
    <Typography
      variant='h5'
      sx={{
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
        margin: theme.spacing(2),
      }}
    >
      {children}
    </Typography>
  );
};

export default Subheader;
