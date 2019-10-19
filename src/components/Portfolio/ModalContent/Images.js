import React, { useState } from 'react';
import { Image, Button } from 'semantic-ui-react';

const Images = ({ language, images }) => {
  const [open, setOpen] = useState(false);
  const showScreenshots = () => {
    setOpen(!open);
  };
  const styles = {
    button: {
      margin: '10px auto'
    }
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
        <Image.Group
          size='small'
          style={{ margin: 'auto', textAlign: 'center' }}
        >
          {images.map(image => (
            <Image bordered key={image} src={image}></Image>
          ))}
        </Image.Group>
      ) : null}
    </div>
  );
};

export default Images;
