import React from 'react';
import { Grid, Item, Divider, Icon } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import LinkModal from '../../../layout/links/LinkModal';
import styles from '../styles/Projects.module.css';
import { developmentListEng, developmentListEsp } from '../data';

const InDevelopment = ({ language }) => {
  const developmentList =
    language === 'en' ? developmentListEng : developmentListEsp;
  return (
    <div className={styles.background}>
      <SectionWrapper
        title={language === 'en' ? 'In Development' : 'En Desarrollo'}
        scroll="courses"
      >
        <Grid columns={5} textAlign="center">
          <Grid.Row centered>
            {developmentList.map(item => (
              <Grid.Column
                tablet={5}
                computer={5}
                mobile={5}
                verticalAlign="top"
                key={item.title}
              >
                <Icon
                  name={item.image}
                  size="big"
                  circular
                  color="grey"
                  bordered
                  inverted
                />

                <Item.Header as="h4" style={{ fontFamily: 'Work Sans' }}>
                  {item.title}
                </Item.Header>
                <Item.Description
                  style={{
                    fontFamily: 'Roboto Mono',
                    fontSize: '11px',
                    color: '#333',
                  }}
                >
                  {item.desc}
                </Item.Description>
                <Divider />
                <LinkModal link={item.code}>
                  <Icon name="github" color="blue" /> code
                </LinkModal>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </SectionWrapper>
    </div>
  );
};

export default InDevelopment;
