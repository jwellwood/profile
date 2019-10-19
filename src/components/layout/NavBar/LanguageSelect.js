import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
const LanguageSelect = ({ onChangeLanguage }) => {
  return (
    <Dropdown
      direction='left'
      trigger={<Icon name='language' size='large' />}
      options={[
        {
          text: 'English',
          value: 'en',
          onClick: () => onChangeLanguage('en')
        },
        {
          text: 'Español',
          value: 'es',
          onClick: () => onChangeLanguage('es')
        }
      ]}
    />
  );
};

export default LanguageSelect;
