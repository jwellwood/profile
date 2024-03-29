import { IParticlesOptions } from 'tsparticles-engine';

export const particles = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: false,
        value_area: 1025.8919341219544,
      },
    },
    color: {
      value: '#2979ff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3447335930860874,
      random: true,
      anim: {
        enable: true,
        speed: 0.24362316369040352,
        opacity_min: 0,
        sync: true,
      },
    },
    size: {
      value: 39.45738208161363,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'top-right',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
} as unknown as IParticlesOptions;
