import React, { Component } from 'react';
import { Grid, Accordion, Icon, Item } from 'semantic-ui-react';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import { courseList } from './data';
import styles from './styles/Projects.module.css';
import CourseDetails from './CourseDetails';

class Courses extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const content = courseList.map(item => (
      <div key={item.index}>
        <Accordion.Title
          active={activeIndex === item.index}
          index={item.index}
          onClick={this.handleClick}
          style={{ fontFamily: 'Muli' }}
        >
          <Icon name="dropdown" />
          {item.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === item.index}>
          <Grid columns={2}>
            <Grid.Row centered>
              <Grid.Column tablet={3} computer={3} mobile={5}>
                <Item.Image
                  size="tiny"
                  circular
                  src={item.image}
                  className={styles.image}
                />
              </Grid.Column>
              <Grid.Column tablet={10} computer={12} mobile={11}>
                <CourseDetails item={item} />
              </Grid.Column>
              <Item />
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </div>
    ));

    return (
      <SectionWrapper title="Course Projects">
        <Accordion styled fluid>
          {content}
        </Accordion>
      </SectionWrapper>
    );
  }
}

export default Courses;
