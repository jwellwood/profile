import React, { Component } from 'react';
import Statement from './components/Sections/Statement/About';
import Skills from './components/Sections/Skills/Skills';
import InProduction from './components/Sections/Projects/InProduction/InProduction';
import Courses from './components/Sections/Projects/Courses/Courses';
import Contact from './components/Sections/Contact/Contact';
import Navbar from './components/layout/navs/Navbar';
import MainHeader from './components/Sections/Overview/MainHeader';
import Experience from './components/Sections/Experience/Experience';
import Closing from './components/Sections/Closing/Closing';
import { Sticky } from 'semantic-ui-react';
import InDevelopment from './components/Sections/Projects/InDevelopment/InDevelopment';

class App extends Component {
  render() {
    return (
      <div>
        <Sticky>
          <Navbar />
        </Sticky>
        <div>
          <MainHeader />
          <Statement />
          <Skills />
          <Experience />
          <InProduction />
          <InDevelopment />
          <Courses />
          <Closing />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
