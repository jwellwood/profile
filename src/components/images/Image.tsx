import React from 'react';
import Zoom from '@mui/material/Zoom';
import { theme } from 'lib/theme/theme';
import './styles.css';

interface Props {
  image: string;
  alt: string;
  size?: string;
  circle?: boolean;
}

const Image: React.FC<Props> = ({ image, alt, size, circle }) => {
  const style = circle
    ? {
        width: size || '210px',
        height: size || '210px',
        borderRadius: '50%',
        boxShadow: `0px 0px 40px ${theme.palette.primary.dark}`,
        border: `${theme.palette.primary.dark} 4px solid`,
      }
    : {
        width: size || '210px',
        height: size || '210px',
        boxShadow: `0px 0px 10px ${theme.palette.primary.light}`,
        borderRadius: '4px',
      };
  return (
    <div className='image-wrapper'>
      <Zoom in timeout={500}>
        <img src={image} alt={alt} className='image' style={style} />
      </Zoom>
    </div>
  );
};

export default Image;
