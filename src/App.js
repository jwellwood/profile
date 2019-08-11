import React, { Component } from 'react';
import { Element } from 'react-scroll';
// Elements
import Navbar from './components/layout/navs/Navbar';
import MainHeader from './components/Sections/Overview/MainHeader';
import Statement from './components/Sections/Statement/About';
import Skills from './components/Sections/Skills/Skills';
import Experience from './components/Sections/Experience/Experience';
import InProduction from './components/Sections/Projects/InProduction/InProduction';
import InDevelopment from './components/Sections/Projects/InDevelopment/InDevelopment';
import Courses from './components/Sections/Projects/Courses/Courses';
import Closing from './components/Sections/Closing/Closing';
import Contact from './components/Sections/Contact/Contact';

class App extends Component {
  state = {
    language: 'en',
  };

  onChangeLanguage = e => {
    console.log(e);
    this.setState({ language: e });
  };

  render() {
    const { language } = this.state;
    return (
      <div>
        <Element name="top">
          <Navbar
            onChangeLanguage={this.onChangeLanguage}
            language={this.state.language}
          />
        </Element>
        <MainHeader language={language} />
        <Element name="statement">
          <Statement language={language} />
        </Element>
        <Element name="skills">
          <Skills language={language} />
        </Element>
        <Element name="experience">
          <Experience language={language} />
        </Element>
        <Element name="inProduction">
          <InProduction language={language} />
        </Element>
        <Element name="inDevelopment">
          <InDevelopment language={language} />
        </Element>
        <Element name="courses">
          <Courses language={language} />
        </Element>
        <Closing language={language} />
        <Element name="contact">
          <Contact language={language} />
        </Element>
      </div>
    );
  }
}

export default App;
