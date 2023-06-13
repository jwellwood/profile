import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import PopperContent from './PopperContent';

const CustomPopper = ({ children }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleClick} style={{ zIndex: 1200 }}>
        {children}
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-end'
        sx={{ zIndex: 1100 }}
      >
        <PopperContent />
      </Popper>
    </>
  );
};

export default CustomPopper;
