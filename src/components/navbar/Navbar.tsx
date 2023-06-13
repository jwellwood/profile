import React, { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import NavContent from './NavContent';
import { theme } from 'lib/theme/theme';

interface Props {
  children: ReactElement | any;
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: theme.palette.primary.dark,
            top: 0,
            left: 0,
            width: '100vw',
          }}
        >
          <NavContent />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Navbar;
