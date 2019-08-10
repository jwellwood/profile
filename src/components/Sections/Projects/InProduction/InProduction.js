import React from 'react';
import {
  Grid,
  Item,
  Image,
  Button,
  Modal,
  Divider,
  Segment,
} from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import LinkModal from '../../../layout/links/LinkModal';
import TechList from './TechList';
import { productionList } from '../data';
import styles from '../styles/Projects.module.css';

const InProduction = () => (
  <SectionWrapper title="In Production" inverted>
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
                <Modal
                  closeIcon
                  dimmer="blurring"
                  trigger={
                    <Item.Image
                      size="tiny"
                      circular
                      src={item.image}
                      className={styles.image}
                    />
                  }
                >
                  <Modal.Header>{item.title}</Modal.Header>
                  <Segment inverted attached>
                    <Modal.Content>
                      <Image
                        size="small"
                        src={item.image}
                        style={{ margin: 'auto' }}
                      />
                      <Modal.Description>
                        <p>{item.date}</p>
                        <TechList item={item} />
                        <p>{item.fullDesc}</p>
                      </Modal.Description>
                    </Modal.Content>
                    <Divider />
                    <Modal.Actions>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <LinkModal link={item.link}>
                          <Button
                            icon="home"
                            primary
                            size="tiny"
                            content="Visit site"
                            inverted
                          />
                        </LinkModal>

                        <LinkModal link={item.code}>
                          <Button
                            icon="github"
                            secondary
                            size="tiny"
                            content="View code"
                          />
                        </LinkModal>
                      </div>
                    </Modal.Actions>
                  </Segment>
                </Modal>
                <Segment
                  piled
                  inverted
                  style={{
                    marginTop: '-10px',
                    marginBottom: '5px',
                  }}
                >
                  <Item.Header as="h4" style={{ fontFamily: 'Muli' }}>
                    {item.title}
                  </Item.Header>
                </Segment>
                <Item.Description
                  style={{
                    fontFamily: 'Roboto Mono',
                    fontSize: '12px',
                    color: '#aaa',
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
