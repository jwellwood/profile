import React from 'react';
import { Icon } from 'semantic-ui-react';
import { scrollToElement } from '../Scroller/Scroller';

const SectionDivider = ({ direction }) => {
  return (
    <div>
      <div
        className={
          direction === 'right'
            ? 'divider divider-right'
            : 'divider divider-left'
        }
      />
      <Icon name='triangle up' onClick={() => scrollToElement('top')} />
    </div>
  );
};

export default SectionDivider;
