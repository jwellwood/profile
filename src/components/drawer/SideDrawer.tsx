import React, { useState } from 'react';
import * as Icons from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import NavDrawerList from './NavDrawerList';

const SideDrawer: React.FC = () => {
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
        size='large'
      >
        <Icons.Menu />
      </IconButton>

      <Drawer open={open} onClose={() => toggleDrawer()}>
        <NavDrawerList onClose={() => toggleDrawer()} />
      </Drawer>
    </div>
  );
};

export default SideDrawer;
