import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SideDrawer from '../drawer/SideDrawer';

import * as links from 'constants/links';
import { AppIcons, LinkIcons } from 'constants/icon-names';
import CustomIcon from 'components/icons/CustomIcon';
import { theme } from 'lib/theme/theme';
import CustomPopper from 'components/popper/CustomPopper';

const buttons = [
  { icon: LinkIcons.GITHUB, link: links.github, label: 'github' },
  {
    icon: LinkIcons.LINKEDIN,
    link: links.linkedin,
    label: 'linked-in',
  },
];

const NavContent: React.FC = () => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <SideDrawer />
      <div style={{ display: 'flex' }}>
        {buttons.map((button) => (
          <IconButton
            key={button.label}
            aria-label={button.label}
            target='_blank'
            rel='noopener noreferrer'
            href={button.link}
            size='small'
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            <CustomIcon name={button.icon} />
          </IconButton>
        ))}

        <CustomPopper>
          <IconButton
            aria-label='email'
            size='small'
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <CustomIcon name={AppIcons.EMAIL} />
          </IconButton>
        </CustomPopper>
      </div>
    </Toolbar>
  );
};

export default NavContent;
