import React, { Component } from 'react';
import { Segment, Accordion, Icon } from 'semantic-ui-react';
import SectionWrapper from '../../../layout/wrappers/SectionWrapper';
import { courseList } from '../data';
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

    return (
      <SectionWrapper title="Course Projects" inverted>
        <Accordion inverted>
          {courseList.map(item => (
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
                <Segment inverted>
                  <CourseDetails item={item} />
                </Segment>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </SectionWrapper>
    );
  }
}

export default Courses;
