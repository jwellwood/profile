import React from 'react';
import Zoom from 'react-reveal';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: '1000',
    margin: '20px auto',
  },
  image: {
    width: '210px',
    height: '210px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: `0px 0px 40px ${theme.palette.primary.dark}`,
  },
}));

const CircleImage = ({ image, alt }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Zoom duration={1500}>
        <img src={image} alt={alt} className={classes.image} />
      </Zoom>
    </div>
  );
};

export default CircleImage;
