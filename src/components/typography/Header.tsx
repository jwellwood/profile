import React, { ReactNode } from 'react';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import { theme } from 'lib/theme/theme';

const Header: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Typography
        component='span'
        sx={{
          color: theme.palette.primary.dark,
          fontFamily: 'Hammersmith One',
          margin: theme.spacing(2),
          fontSize: '30px',
        }}
      >
        <Zoom in timeout={1000}>
          <div>{children}</div>
        </Zoom>
      </Typography>
      <div
        style={{
          width: '60px',
          margin: '2rem auto',
          borderBottom: `3px solid ${theme.palette.primary.main}`,
        }}
      ></div>
    </>
  );
};

export default Header;
