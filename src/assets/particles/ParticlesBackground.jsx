import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particles from './pjs-config.json';

const particles_styles = {
  position: 'fixed',
  zIndex: '-1',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh'
};

class ParticlesBackground extends Component {
  render() {
    return <Particles params={particles} style={particles_styles} />;
  }
}

export default ParticlesBackground;
