import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { educationItems, workItemsEng, workItemsEsp, techItems } from './data';
import SectionWrapper from '../../layout/wrappers/SectionWrapper';
import styles from './styles/Experience.module.css';
import AboutWrapper from './AboutWrapper';

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
    const { language } = this.props;

    const data = (activeIndex, title, content) => {
      return { activeIndex, title, content };
    };

    const panels =
      language === 'en'
        ? [
            data(1, 'Tech', <AboutWrapper items={techItems} code />),
            data(2, 'Work', <AboutWrapper items={workItemsEng} />),
            data(3, 'Education', <AboutWrapper items={educationItems} />),
          ]
        : [
            data(1, 'Tecnología', <AboutWrapper items={techItems} code />),
            data(2, 'Trabajo', <AboutWrapper items={workItemsEsp} />),
            data(3, 'Educación', <AboutWrapper items={educationItems} />),
          ];

    return (
      <div className={styles.background}>
        <SectionWrapper
          title={language === 'en' ? 'Experience' : 'Experiencia'}
          scroll="inProduction"
        >
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
