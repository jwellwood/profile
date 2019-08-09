import React, { Component } from 'react';
import About from './components/Sections/About/Statement/About';
import Skills from './components/Sections/About/Skills/Skills';
import InProduction from './components/Sections/Projects/InProduction';
import InDevelopment from './components/Sections/Projects/InDevelopment';
import Contact from './components/Sections/Contact/Contact';
import Navbar from './components/layout/navs/Navbar';
import MainHeader from './components/Sections/Overview/MainHeader';
import { Sticky } from 'semantic-ui-react';
import Courses from './components/Sections/Projects/Courses';

class App extends Component {
  render() {
    return (
      <div>
        <Sticky>
          <Navbar />
        </Sticky>
        <div>
          <MainHeader />
          <About />
          <Skills />
          <InProduction />
          <InDevelopment />
          <Courses />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
