import React from 'react';
import Zoom from 'react-reveal';
import { makeStyles, Theme } from '@material-ui/core';

export const circle_image_styles = makeStyles((theme: Theme) => ({
  image: {
    width: '210px',
    height: '210px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: `0px 0px 40px ${theme.palette.primary.dark}`,
  },
}));

interface Props {
  image: string;
  alt: string;
}

const CircleImage: React.FC<Props> = ({ image, alt }) => {
  const classes = circle_image_styles();
  return (
    <div style={{ zIndex: 1000, margin: '20px auto' }}>
      <Zoom duration={1500}>
        <img src={image} alt={alt} className={classes.image} />
      </Zoom>
    </div>
  );
};

export default CircleImage;
