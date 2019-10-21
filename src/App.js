import React, { useState } from 'react';
import { Element } from 'react-scroll';
// Internal
import SectionDivider from './components/layout/Dividers/SectionDivider';
import Navbar from './components/layout/NavBar/Navbar';
import Main from './components/Main/Main';
import MainMenu from './components/MainMenu/MainMenu';
import About from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Statement from './components/Contact/Statement';
import Contact from './components/Contact/Contact';

const App = () => {
  const [language, setLanguage] = useState('en');

  const onChangeLanguage = e => {
    setLanguage(e);
  };

  return (
    <div>
      <Element name='top'>
        <Navbar onChangeLanguage={onChangeLanguage} language={language} />
      </Element>
      <Main language={language} />
      <SectionDivider direction='right' />
      <Element name='menu'>
        <MainMenu language={language} />
        <SectionDivider direction='left' />
      </Element>
      <Element name='about'>
        <About language={language} />
        <SectionDivider direction='right' />
      </Element>
      <Element name='portfolio'>
        <Portfolio language={language} />
        <SectionDivider direction='left' />
      </Element>
      <Element name='contact'>
        <Statement language={language} />
        <Contact language={language} />
      </Element>
    </div>
  );
};

export default App;
