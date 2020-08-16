import React from 'react';
import Popper from '@material-ui/core/Popper';
import PopperContent from './PopperContent';

const Email = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
