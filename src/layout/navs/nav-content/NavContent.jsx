import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// Internal
import SideDrawer from '../side-drawer/SideDrawer.jsx';
import Email from '../../../components/utils/email/Email.jsx';
import { links } from '../../../assets/database/links';
import { nav_content_styles } from './styles';

const buttons = [
  { icon: ['fab', 'github'], link: links.github, label: 'github' },
  { icon: ['fab', 'linkedin'], link: links.linkedin, label: 'linked-in' }
];

const NavContent = () => {
  const classes = nav_content_styles();
  return (
    <Toolbar className={classes.root}>
      <SideDrawer />
      <div>
        {buttons.map(button => (
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
            <FontAwesomeIcon icon='envelope' className={classes.button} />
          </IconButton>
        </Email>
      </div>
    </Toolbar>
  );
};

export default NavContent;
