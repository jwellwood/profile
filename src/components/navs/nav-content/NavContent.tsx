import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// Internal
import SideDrawer from '../side-drawer/SideDrawer';
import Email from 'components/email/Email';
import * as links from 'constants/links';
import * as icon from 'constants/icon-names';
import { nav_content_styles } from '../styles';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface INavButtons {
  icon: [IconPrefix, IconName];
  link: string;
  label: string;
}

const buttons: INavButtons[] = [
  { icon: icon.github, link: links.github, label: 'github' },
  { icon: icon.linkedin, link: links.linkedin, label: 'linked-in' },
];

const NavContent: React.FC = () => {
  const classes = nav_content_styles();
  return (
    <Toolbar className={classes.root}>
      <SideDrawer />
      <div>
        {buttons.map((button) => (
          <IconButton
            key={button.label}
            aria-label={button.label}
            target='_blank'
            rel='noopener noreferrer'
            href={button.link}
          >
            <FontAwesomeIcon icon={button.icon} className={classes.button} />
          </IconButton>
        ))}
        <Email>
          <IconButton aria-label='email'>
            <FontAwesomeIcon icon={icon.email} className={classes.button} />
          </IconButton>
        </Email>
      </div>
    </Toolbar>
  );
};

export default NavContent;
