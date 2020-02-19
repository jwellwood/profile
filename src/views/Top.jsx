import React from 'react';
// Internal
import SectionContainer from '../layout/containers/SectionContainer';
import Navbar from '../layout/navs/navbar/Navbar';
import IntroText from '../components/top/IntroText';

const Top = () => {
  return (
    <SectionContainer background='blue' height='100vh'>
      <Navbar />
      <div>
        <IntroText />
      </div>
    </SectionContainer>
  );
};

export default Top;
