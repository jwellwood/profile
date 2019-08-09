import React from 'react';
import { Grid } from 'semantic-ui-react';
import LinkModal from '../../layout/links/LinkModal';
const CourseDetails = ({ item }) => {
  const data = (title, value, link) => {
    return { title, value, link };
  };

  const listItems = [
    data('Course', item.course, item.courseLink),
    data('Info', item.desc, null),
    data('Tech', item.tech, null),
    data('Code', 'Github repo', item.code),
  ];

  return (
    <Grid columns="2" divided>
      {listItems.map(item => (
        <Grid.Row key={item.title}>
          <Grid.Column
            mobile="5"
            style={{ fontWeight: 'bold' }}
            color="blue"
            textAlign="center"
          >
            {item.title}
          </Grid.Column>
          <Grid.Column mobile="11">
            {item.link ? (
              <LinkModal link={item.link}>
                <span style={{ color: '#3498DB', cursor: 'pointer' }}>
                  {item.value}
                </span>
              </LinkModal>
            ) : (
              item.value
            )}
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default CourseDetails;
