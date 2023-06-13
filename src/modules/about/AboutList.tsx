import React, { useContext } from 'react';
import { about } from 'text';
import { LanguageContext } from 'context/LanguageContext';
import { AppIcons } from 'constants/icon-names';
import { getLanguage } from 'utils/getLanguage';
import CustomList from 'components/list/CustomList';

const AboutList: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { subtitles, background, experience, skills } = getLanguage(
    language || '',
    about
  );
  const data = [
    {
      icon: AppIcons.PERSON,
      title: subtitles[0],
      text: background,
    },
    { icon: AppIcons.EXPERIENCE, title: subtitles[1], text: experience },
    {
      icon: AppIcons.SKILLS,
      title: subtitles[2],
      text: skills,
    },
  ];

  return <CustomList data={data} />;
};

export default AboutList;
