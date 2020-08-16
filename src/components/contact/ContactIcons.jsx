import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'database/links';
import Email from '../email/Email';

import { makeStyles } from '@material-ui/core/styles';

export const contact_icons_styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
  },
  avatar: {
    width: '50px',
    height: '50px',
    fontSize: '25px',
    margin: '25px 15px',
    backgroundColor: '#fff',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(5px)',
      boxShadow: `0px 0px 10px 10px ${theme.palette.secondary.light}`,
    },
  },
}));

const ContactIcons = () => {
  const classes = contact_icons_styles();

  const icons = [
    { icon: ['fab', 'linkedin'], link: links.linkedin },
    { icon: ['fab', 'github'], link: links.github },
  ];

  return (
    <div className={classes.root}>
      {icons.map((icon) => (
        <a
          key={icon.icon}
          href={icon.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={icon.icon} />
          </Avatar>
        </a>
      ))}
      <Email>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon icon='envelope' />
        </Avatar>
      </Email>
    </div>
  );
};

export default ContactIcons;
