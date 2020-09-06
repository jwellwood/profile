import React from 'react';
// Internal
import SectionContainer from 'layout/SectionContainer';
import Navbar from 'components/navs/navbar/Navbar';
import IntroText from 'components/top/IntroText';

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
