import React from 'react';
import { Element } from 'react-scroll';
// Background
import ParticlesBackground from './assets/particles/ParticlesBackground.jsx';
// Views
import Top from './views/Top.jsx';
import About from './views/About.jsx';
import Projects from './views/Projects';
import Contact from './views/Contact.jsx';
import Technologies from './views/Technologies.jsx';
import { LanguageProvider } from './context/LanguageContext.js';

const App = () => {
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <Element name='top'>
        <Top />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='tech'>
        <Technologies />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </LanguageProvider>
  );
};

export default App;
