import React, { ReactNode } from 'react';
import blue_background from 'assets/images/backgrounds/background.png';
import './styles.css';

interface Props {
  children: ReactNode;
  background?: string;
  height?: string;
}

const SectionContainer: React.FC<Props> = ({
  children,
  height,
  background,
}) => {
  const backgroundImg =
    background === 'blue' ? `url(${blue_background})` : `url(${background})`;

  return (
    <div
      className='section-container'
      style={{
        minHeight: height || '100vh',
        backgroundImage: background ? backgroundImg : '',
      }}
    >
      <div />
      {children}
      <div />
    </div>
  );
};

export default SectionContainer;
