import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Tech from './Tech';
import Work from './Work';
import Education from './Education';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import styles from './styles/Experience.module.css';

class Experience extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, i) => {
    const { index } = i;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const data = (activeIndex, title, content) => {
      return { activeIndex, title, content };
    };

    const panels = [
      data(1, 'Tech', <Tech />),
      data(2, 'Work', <Work />),
      data(3, 'Education', <Education />),
    ];

    return (
      <div className={styles.background}>
        <SectionWrapper title="Experience" scroll="inProduction">
          <Accordion fluid>
            {panels.map(panel => (
              <div key={panel.activeIndex}>
                <Accordion.Title
                  active={activeIndex === panel.activeIndex}
                  index={panel.activeIndex}
                  onClick={this.handleClick}
                  style={{ fontFamily: 'Work Sans ' }}
                >
                  <Icon name="dropdown" />
                  {panel.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === panel.activeIndex}>
                  {panel.content}
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </SectionWrapper>
      </div>
    );
  }
}

export default Experience;
