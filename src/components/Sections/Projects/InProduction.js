import React from 'react';
import { Grid, Item, Modal, Divider } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import ExtraDetails from './ExtraDetails';
import data from './data';
import styles from './styles/InProduction.module.css';

const InProduction = () => (
  <SectionWrapper title="In Production">
    <Grid columns={4} textAlign="center">
      <Grid.Row centered>
        {data.map(item => (
          <Grid.Column tablet={4} mobile={8} verticalAlign="top">
            <Item
              key={item.title}
              style={{ textAlign: 'center', margin: 'auto' }}
            >
              <Modal
                basic
                dimmer="blurring"
                trigger={
                  <Item.Image
                    size="small"
                    circular
                    style={{ border: '1px solid #444' }}
                    src={item.image}
                    className={styles.image}
                  />
                }
              >
                <ExtraDetails item={item} />
              </Modal>

              <Item.Content>
                <Item.Header as="h3" style={{ fontFamily: 'ABeeZee' }}>
                  {item.title}
                </Item.Header>
                <Item.Description
                  style={{
                    fontFamily: 'Roboto Mono',
                    fontSize: '12px',
                    color: '#ccc',
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
