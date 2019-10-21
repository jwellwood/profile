import React, { useState } from 'react';
import { Image, Button } from 'semantic-ui-react';
//Internal
import { imageStyles as styles } from '../styles';

const Images = ({ language, images }) => {
  const [open, setOpen] = useState(false);

  const showScreenshots = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        style={styles.button}
        size='tiny'
        compact
        basic
        onClick={() => showScreenshots()}
      >
        {language === 'en'
          ? open
            ? 'Hide screenshots'
            : 'Show screenshots'
          : open
          ? 'Esconder pantallazos'
          : 'Ver pantallazos'}
      </Button>
      {open ? (
        <Image.Group size='small' style={styles.images}>
          {images.map(image => (
            <Image bordered key={image} src={image}></Image>
          ))}
        </Image.Group>
      ) : null}
    </div>
  );
};

export default Images;
