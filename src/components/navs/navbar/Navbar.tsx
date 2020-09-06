import React, { ReactElement } from 'react';
// MUI
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// Internal
import NavContent from '../nav-content/NavContent';
import { navbar_styles } from '../styles';

interface Props {
  children: ReactElement;
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  // from Material UI
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar: React.FC = () => {
  const classes = navbar_styles();
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={classes.root}>
          <NavContent />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Navbar;
