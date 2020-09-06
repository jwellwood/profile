import React from 'react';
import { Element } from 'react-scroll';
import { LanguageProvider } from 'context/LanguageContext';
import ParticlesBackground from 'lib/particles/ParticlesBackground';
// Views
import Top from 'views/Top';
import About from 'views/About';
import Projects from 'views/Projects';
import Contact from 'views/Contact';
import Technologies from 'views/Technologies';
import * as scroll from 'constants/scroll-names';

const App: React.FC = () => {
  const { top, about, tech, projects, contact } = scroll;
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <Element name={top}>
        <Top />
      </Element>
      <Element name={about}>
        <About />
      </Element>
      <Element name={tech}>
        <Technologies />
      </Element>
      <Element name={projects}>
        <Projects />
      </Element>
      <Element name={contact}>
        <Contact />
      </Element>
    </LanguageProvider>
  );
};

export default App;
