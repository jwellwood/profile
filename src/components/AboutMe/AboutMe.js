import React from 'react';
import { Icon } from 'semantic-ui-react';
// Internal
import { about, title } from './data';
import { styles } from './styles';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';
import SquareWrapper from '../layout/wrappers/SquareWrapper';

const AboutMe = ({ language }) => {
  return (
    <CurvedWrapper title={language === 'en' ? title.eng : title.esp}>
      <SquareWrapper>
        {about.map(item => (
          <div key={item.icon}>
            <div>
              <Icon style={styles.icon} name={item.icon} size='large' />
            </div>
            {language === 'en' ? item.textEng : item.textEsp}
          </div>
        ))}
      </SquareWrapper>
    </CurvedWrapper>
  );
};

export default AboutMe;
