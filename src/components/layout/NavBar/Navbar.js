import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
// Internal
import { navData as data } from './data';
import { navBarStyle as styles } from '../styles';
import LinkModal from '../Link/LinkModal';
import LanguageSelect from './LanguageSelect';
import Email from './Email';

const Navbar = ({ onChangeLanguage, language }) => {
  return (
    <Menu inverted style={styles}>
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
