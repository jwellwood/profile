import React, { useState, ReactNode } from 'react';
import Popper from '@material-ui/core/Popper';
import PopperContent from './PopperContent';

const Email: React.FC<ReactNode> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-end'
        transition
        style={{ zIndex: 10000 }}
      >
        <PopperContent />
      </Popper>
      <div style={{ display: 'inline' }} onClick={(e) => handleClick(e)}>
        {children}
      </div>
    </>
  );
};

export default Email;
