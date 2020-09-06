import React from 'react';
import CircleImage from '../ui/CircleImage';
import profile from 'assets/images/profile/profile.jpg';

const AboutImage: React.FC = () => {
  return <CircleImage image={profile} alt='profile picture' />;
};

export default AboutImage;
