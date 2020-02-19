import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contact_icons_styles } from './styles';
import { links } from '../../assets/database/links';
import Email from '../utils/email/Email';

const ContactIcons = () => {
  const classes = contact_icons_styles();

  const icons = [
    { icon: ['fab', 'linkedin'], link: links.linkedin },
    { icon: ['fab', 'github'], link: links.github }
  ];

  return (
    <div className={classes.root}>
      {icons.map(icon => (
        <a
          key={icon.icon}
          href={icon.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon className={classes.icon} icon={icon.icon} />
          </Avatar>
        </a>
      ))}
      <Email>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon className={classes.icon} icon='envelope' />
        </Avatar>
      </Email>
    </div>
  );
};

export default ContactIcons;
