import React from 'react';
import { Image } from 'semantic-ui-react';
//Internal
import { imageStyles as styles } from './styles';
import profile from '../../assets/images/Profile/profile.jpg';

const ProfileImage = () => {
  return (
    <div style={styles.container}>
      <Image src={profile} size='small' circular style={styles.image} />
    </div>
  );
};

export default ProfileImage;
