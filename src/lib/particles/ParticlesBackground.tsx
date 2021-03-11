import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import particles from './pjs-config.json';

const particles_styles = {
  position: 'fixed',
  zIndex: '-1',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
};

export default class ParticlesBackground extends Component {
  render() {
    return <Particles style={particles_styles} params={particles} />;
  }
}
