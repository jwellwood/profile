import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';
import { colors } from '../../assets/styles/colors';
import { data } from './data';
import { scrollToElement } from '../layout/Scroller/Scroller';
import CurvedWrapper from '../layout/wrappers/CurvedWrapper';

const MainMenu = ({ language }) => {
  const styles = {
    icon: {
      color: colors.lightBlue,
      background: colors.secondaryBlue
    },
    text: {
      fontFamily: 'Work Sans',
      fontWeight: 'bold',
      margin: '10px auto',
      color: colors.mainBlue
    }
  };
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
