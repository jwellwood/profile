import React from 'react';
import { Grid, Item, Divider, Icon } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import LinkModal from '../../../layout/links/LinkModal';
import { developmentList } from '../data';

const InDevelopment = () => (
  <SectionWrapper title="In Development">
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
            <Item.Header as="h5" style={{ fontFamily: 'ABeeZee' }}>
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
            <LinkModal link={item.code}>
              <Icon name="github" color="blue" /> code
            </LinkModal>

            <Divider />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </SectionWrapper>
);

export default InDevelopment;
