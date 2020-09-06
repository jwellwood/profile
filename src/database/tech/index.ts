import { titles, texts } from './texts';
import { IText } from 'database/types';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { brandColors } from 'constants/brand-colors';
import * as icon from 'constants/icon-names';

interface ITechData {
  icons: ITechDataIcon[];
  title: IText;
  text: IText;
}

interface ITechDataIcon {
  name: IconName | [IconPrefix, IconName];
  color: string;
}

export const tech_data: ITechData[] = [
  {
    icons: [
      { name: icon.desktop, color: '' },
      { name: icon.tablet, color: '' },
      { name: icon.mobile, color: '' },
    ],
    title: titles[0],
    text: texts[0],
  },
  {
    icons: [
      {
        name: icon.html,
        color: brandColors.html,
      },
      {
        name: icon.sass,
        color: brandColors.sass,
      },
      {
        name: icon.js,
        color: brandColors.js,
      },
      {
        name: icon.react,
        color: brandColors.react,
      },
      {
        name: icon.angular,
        color: brandColors.angular,
      },
    ],
    title: titles[1],
    text: texts[1],
  },
  {
    icons: [
      { name: icon.users, color: '' },
      { name: icon.globe, color: '' },
      { name: icon.network, color: '' },
    ],
    title: titles[2],
    text: texts[2],
  },
];
