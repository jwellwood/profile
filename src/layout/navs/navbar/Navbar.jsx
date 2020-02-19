import React from 'react';
// MUI
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// Internal
import NavContent from '../nav-content/NavContent.jsx';
import { navbar_styles } from './styles';

function HideOnScroll(props) {
  // from Material UI
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = props => {
  const classes = navbar_styles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <NavContent />
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Navbar;
