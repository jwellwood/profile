import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';
// Internal
import { data } from './data';
import { menuStyles as styles } from './styles';
import { scrollToElement } from '../layout/Scroller/Scroller';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';

const MainMenu = ({ language }) => {
  return (
    <CurvedWrapper color='lightBlue'>
      <Grid columns={3} textAlign='center'>
        <Grid.Row centered>
          {data.map(item => (
            <Grid.Column
              key={item.titleEng}
              tablet={5}
              computer={5}
              mobile={10}
              verticalAlign='top'
            >
              <Icon
                name={item.icon}
                size='huge'
                circular
                style={styles.icon}
                bordered
                onClick={() => scrollToElement(item.goTo)}
              />

              <Item as='h4' style={styles.text}>
                {language === 'en' ? item.titleEng : item.titleEsp}
              </Item>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </CurvedWrapper>
  );
};

export default MainMenu;
