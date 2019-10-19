import React from 'react';
import { colors } from '../../assets/styles/colors';
import { Image } from 'semantic-ui-react';
import classes from '../../assets/styles/Image.module.css';
import profile from '../../assets/images/Profile/profile.jpg';

const ProfileImage = () => {
  const styles = {
    container: {
      margin: '30px'
    },
    image: {
      margin: 'auto',
      border: '3px solid',
      borderColor: colors.lightBlue
    }
  };
  return (
    <div style={styles.container}>
      <Image
        src={profile}
        size='small'
        circular
        style={styles.image}
        className={classes.image}
      />
    </div>
  );
};

export default ProfileImage;
