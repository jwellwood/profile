import React from 'react';
import { Grid, Item, Icon, Modal, Divider, Segment } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import ExtraDetails from './ExtraDetails';
import { productionList } from './data';
import styles from './styles/Projects.module.css';

const InProduction = () => (
  <SectionWrapper title="In Production">
    <Grid columns={4} textAlign="center">
      <Grid.Row centered>
        {productionList.map(item => (
          <Grid.Column
            tablet={4}
            mobile={8}
            verticalAlign="top"
            key={item.title}
          >
            <Item style={{ textAlign: 'center', margin: 'auto' }}>
              <Item.Content>
                <Item.Image
                  size="tiny"
                  circular
                  src={item.image}
                  className={styles.image}
                />
                <Modal
                  closeIcon={<Icon name="close" color="grey" />}
                  basic
                  dimmer="blurring"
                  trigger={
                    <Segment
                      piled
                      color="blue"
                      style={{ marginTop: '-10px', cursor: 'pointer' }}
                    >
                      <Item.Header as="h4" style={{ fontFamily: 'Muli' }}>
                        {item.title}
                      </Item.Header>
                    </Segment>
                  }
                >
                  <ExtraDetails item={item} />
                </Modal>

                <Item.Description
                  style={{
                    fontFamily: 'Roboto Mono',
                    fontSize: '12px',
                    color: '#444',
                  }}
                >
                  {item.desc}
                </Item.Description>
              </Item.Content>

              <Divider />
            </Item>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </SectionWrapper>
);

export default InProduction;
