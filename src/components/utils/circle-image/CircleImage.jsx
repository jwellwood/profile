import React from 'react';
import Zoom from 'react-reveal';
// Internal
import { image_styles } from './styles';

const CircleImage = ({ image, alt }) => {
  const classes = image_styles();
  return (
    <div className={classes.container}>
      <Zoom duration={1500}>
        <img src={image} alt={alt} className={classes.image} />
      </Zoom>
    </div>
  );
};

export default CircleImage;
