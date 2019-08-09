import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';

const data = (image, title, date, desc, code) => {
  return { image, title, date, desc, code };
};
const developmentList = [
  data(
    '',
    'Recipes and reviews',
    '2019',
    'A collection of vegan recipes and restaurant reviews',
    'https://github.com/jwellwood/recipes-and-reviews',
  ),
  data(
    '',
    'Shopping List',
    '2019',
    'Coordinated shopping lists for couples or roommates',
    'https://github.com/njwdev/shoppinglisthelper',
  ),
  data(
    '',
    'Stats Tracker',
    '2019',
    'Recording the progress of your team and the players',
    'https://github.com/jwellwood/football-stats',
  ),
];

const InDevelopment = () => (
  <SectionWrapper title="In development" inverted>
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="middle">
          <List divided relaxed inverted>
            {developmentList.map(item => (
              <List.Item key={item.title}>
                <List.Icon
                  name="github"
                  size="large"
                  verticalAlign="middle"
                  color="blue"
                />
                <List.Content>
                  <List.Header as="a" href={item.code}>
                    {item.title}
                  </List.Header>
                  <List.Description>{item.desc}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </SectionWrapper>
);

export default InDevelopment;
