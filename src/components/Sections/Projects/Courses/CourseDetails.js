import React from 'react';
import { Grid, List, Image } from 'semantic-ui-react';
import LinkModal from '../../../layout/links/LinkModal';
import styles from '../../../../assets/styles/Image.module.css';

const CourseDetails = ({ item, language }) => {
  const data = (title, value, link) => {
    return { title, value, link };
  };

  const listItems = [
    data(
      language === 'en' ? 'Course' : 'Título de Curso',
      item.course,
      item.courseLink,
    ),
    data(language === 'en' ? 'Info' : 'Información', item.desc, null),
    data(language === 'en' ? 'Tech' : 'Tecnologías', item.tech, null),
    data(language === 'en' ? 'Code' : 'Código', 'Github repo', item.code),
  ];

  const image = (
    <Image size="small" circular src={item.image} className={styles.image} />
  );

  const list = (
    <List inverted divided>
      {listItems.map(item => (
        <List.Item key={item.title}>
          <List.Content>
            <List.Header style={{ fontFamily: 'Work Sans ' }}>
              {item.title}
            </List.Header>

            <List.Description>
              {item.link ? (
                <LinkModal link={item.link}>
                  <span style={{ color: '#3498DB', cursor: 'pointer' }}>
                    {item.value}
                  </span>
                </LinkModal>
              ) : (
                item.value
              )}
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );

  return (
    <Grid columns="2" divided>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" mobile={5}>
          {image}
        </Grid.Column>
        <Grid.Column mobile={11}>{list}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CourseDetails;
