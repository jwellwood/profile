import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { theme } from 'lib/theme/theme';

const SubheaderList: React.FC<ReactNode> = ({ children }) => {
  return (
    <Typography
      variant='body2'
      sx={{
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
      }}
    >
      {children}
    </Typography>
  );
};

export default SubheaderList;
