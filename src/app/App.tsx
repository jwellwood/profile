import React from 'react';
import { Element } from 'react-scroll';
import { LanguageProvider } from 'context/LanguageContext';
import ParticlesBackground from 'lib/particles/ParticlesBackground';
import Top from 'modules/top/Top';
import About from 'modules/about/About';
import Projects from 'modules/projects/Projects';
import Contact from 'modules/contact/Contact';
import Technologies from 'modules/tech/Technologies';
import { scrollNames } from 'constants/scroll-names';

const App: React.FC = () => {
  const { top, about, tech, projects, contact } = scrollNames;
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
