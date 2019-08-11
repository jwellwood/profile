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
  render() {
    return (
      <div>
        <Element name="top">
          <Navbar />
        </Element>
        <MainHeader />
        <Element name="statement">
          <Statement />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="inProduction">
          <InProduction />
        </Element>
        <Element name="inDevelopment">
          <InDevelopment />
        </Element>
        <Element name="courses">
          <Courses />
        </Element>
        <Closing />
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
