import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import LanguageSelect from './LanguageSelect';
import Email from './Email';
import LinkModal from '../links/LinkModal';
const style = {
  borderRadius: '0px',
};

const Navbar = ({ onChangeLanguage, language }) => {
  return (
    <Menu inverted style={style}>
      <LinkModal
        language={language}
        link="https://www.linkedin.com/in/joe-wellwood/"
      >
        <Menu.Item link>
          <Icon name="linkedin" />
        </Menu.Item>
      </LinkModal>
      <LinkModal language={language} link="https://github.com/jwellwood">
        <Menu.Item link>
          <Icon name="github" />
        </Menu.Item>
      </LinkModal>
      <Email />
      <Menu.Item position="right">
        <LanguageSelect onChangeLanguage={onChangeLanguage} />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
