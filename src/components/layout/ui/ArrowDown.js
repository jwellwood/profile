import React from 'react';
import { scroller } from 'react-scroll';
import { Icon } from 'semantic-ui-react';

const ArrowDown = ({ color, scroll }) => {
  const scrollToElement = elem => {
    scroller.scrollTo(elem, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <Icon
        circular
        name="angle down"
        onClick={() => scrollToElement(scroll)}
      />
      <Icon
        circular
        name="angle double up"
        onClick={() => scrollToElement('top')}
      />
    </div>
  );
};

export default ArrowDown;
