import React, { useState } from 'react';
// MUI
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
// Internal
import NavDrawerList from '../nav-drawer-list/NavDrawerList.jsx';

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={() => toggleDrawer()}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={() => toggleDrawer()}>
        <NavDrawerList onClose={() => toggleDrawer()} />
      </Drawer>
    </div>
  );
}
