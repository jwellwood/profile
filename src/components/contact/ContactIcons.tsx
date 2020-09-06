import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Email from '../email/Email';
import { contact_icons_styles } from './styles';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import * as links from 'constants/links';
import * as icon from 'constants/icon-names';

interface IContactButtons {
  icon: [IconPrefix, IconName];
  link: string;
}

const ContactIcons: React.FC = () => {
  const classes = contact_icons_styles();

  const icons: IContactButtons[] = [
    { icon: icon.linkedin, link: links.linkedin },
    { icon: icon.github, link: links.github },
  ];

  return (
    <div className={classes.root}>
      {icons.map((icon) => (
        <a
          key={icon.link}
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
          <FontAwesomeIcon icon={icon.email} />
        </Avatar>
      </Email>
    </div>
  );
};

export default ContactIcons;
