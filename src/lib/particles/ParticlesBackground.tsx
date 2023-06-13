import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particles } from './config';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <Particles
      id='particles-here'
      init={particlesInit}
      options={particles}
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticlesBackground;
