import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
const LanguageSelect = ({ onChangeLanguage }) => {
  return (
    <Dropdown
      trigger={<Icon name="language" size="large" color="teal" inverted />}
      options={[
        {
          text: 'English',
          value: 'en',
          onClick: () => onChangeLanguage('en'),
        },
        {
          text: 'Español',
          value: 'es',
          onClick: () => onChangeLanguage('es'),
        },
      ]}
      direction="left"
    />
  );
};

export default LanguageSelect;
