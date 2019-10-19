import React from 'react';
import SquareWrapper from '../layout/wrappers/SquareWrapper';
import { about, title } from './data';
import { Icon } from 'semantic-ui-react';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';

const AboutMe = ({ language }) => {
  const styles = {
    icon: {
      margin: '10px auto'
    }
  };
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
