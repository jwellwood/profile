import React from 'react';
import { Grid, Item, Divider } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';

const data = (image, title, desc, code) => {
  return { image, title, desc, code };
};
const courseList = [
  data(
    '',
    'Contact Manager',
    'Manage your client information',
    'https://github.com/jwellwood/recipes-and-reviews',
  ),
  data(
    '',
    'Burger Builder',
    'Create and order your perfect burger',
    'https://github.com/njwdev/shoppinglisthelper',
  ),
  data(
    '',
    'Sports Team',
    'Manchester City FC demo website',
    'https://github.com/njwdev/shoppinglisthelper',
  ),
  data(
    '',
    'Background Generator',

    'Generate css gradient backgrounds',
    'https://github.com/jwellwood/football-stats',
  ),
  data(
    '',
    'Artist Homepage',

    'Homepage for a band / singer',
    'https://github.com/jwellwood/football-stats',
  ),
];

const Courses = () => (
  <SectionWrapper title="Course Projects">
    <Grid columns={5} textAlign="center">
      <Grid.Row centered>
        {courseList.map(item => (
          <Grid.Column tablet={5} computer={5} mobile={8} verticalAlign="top">
            <Item.Image
              size="tiny"
              circular
              style={{ border: '1px solid #444' }}
              src={item.image}
            />
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
            <Divider />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </SectionWrapper>
);

export default Courses;
