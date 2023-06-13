import { Avatar } from '@mui/material';
import { theme } from 'lib/theme/theme';
import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const CustomIconAvatar: React.FC<Props> = ({ children }) => {
  return (
    <Avatar
      sx={{
        width: '50px',
        height: '50px',
        fontSize: '20px',
        margin: '4px 15px',
        backgroundColor: '#fff',
        color: theme.palette.primary.dark,
        border: `${theme.palette.primary.dark} 2px solid`,
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(5px)',
          boxShadow: `0px 0px 10px 10px ${theme.palette.secondary.light}`,
        },
      }}
    >
      {children}
    </Avatar>
  );
};

export default CustomIconAvatar;
