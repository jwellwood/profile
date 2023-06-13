import React from 'react';
import SectionContainer from 'components/layout/SectionContainer';
import IntroText from './IntroText';
import Navbar from 'components/navbar/Navbar';

const Top: React.FC = () => {
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
