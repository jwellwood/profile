import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import LanguageSelect from './LanguageSelect';
import Email from './Email';
import LinkModal from '../Link/LinkModal';
const style = {
  borderRadius: '0px',
  backgroundColor: 'transparent'
};

const Navbar = ({ onChangeLanguage, language }) => {
  const data = [
    {
      link: 'https://www.linkedin.com/in/joe-wellwood/',
      icon: 'linkedin'
    },
    {
      link: 'https://github.com/jwellwood',
      icon: 'github'
    }
  ];

  return (
    <Menu inverted style={style}>
      {data.map(item => (
        <LinkModal key={item.link} language={language} link={item.link}>
          <Menu.Item link>
            <Icon name={item.icon} />
          </Menu.Item>
        </LinkModal>
      ))}
      <Email />
      <Menu.Item position='right'>
        <LanguageSelect onChangeLanguage={onChangeLanguage} />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
