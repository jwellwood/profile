import * as React from 'react';
import { getLanguage } from 'utils/getLanguage';
import { tech } from 'text';
import { LanguageContext } from 'context/LanguageContext';
import CustomList from 'components/list/CustomList';
import { AppIcons } from 'constants/icon-names';

const TechList: React.FC = () => {
  const { language } = React.useContext(LanguageContext);
  const { subtitles, design, technologies, collaboration } = getLanguage(
    language || '',
    tech
  );

  const data = [
    { icon: AppIcons.TECH, title: subtitles[0], text: technologies },
    { icon: AppIcons.DEVICES, title: subtitles[1], text: design },
    { icon: AppIcons.USERS, title: subtitles[2], text: collaboration },
  ];

  return <CustomList data={data} />;
};

export default TechList;
