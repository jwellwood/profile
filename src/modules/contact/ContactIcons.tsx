import React from 'react';
import CustomPopper from 'components/popper/CustomPopper';
import * as links from 'constants/links';
import CustomIcon from 'components/icons/CustomIcon';
import { AppIcons, LinkIcons } from 'constants/icon-names';
import CustomIconAvatar from 'components/icons/CustomIconAvatar';
import './styles.css';

const ContactIcons: React.FC = () => {
  const icons = [
    { name: LinkIcons.LINKEDIN, link: links.linkedin },
    { name: LinkIcons.GITHUB, link: links.github },
  ];

  return (
    <div className='icons-container'>
      {icons.map((icon) => (
        <a
          key={icon.link}
          href={icon.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CustomIconAvatar>
            <CustomIcon name={icon.name} />
          </CustomIconAvatar>
        </a>
      ))}
      <CustomPopper>
        <CustomIconAvatar>
          <CustomIcon name={AppIcons.EMAIL} />
        </CustomIconAvatar>
      </CustomPopper>
    </div>
  );
};

export default ContactIcons;
