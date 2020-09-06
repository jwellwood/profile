import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IText } from 'database/types';
import * as icon from 'constants/icon-names';
import * as scroll from 'constants/scroll-names';

interface INavData {
  icon: IconName;
  text: IText;
  scroll: string;
}

export const nav_data: INavData[] = [
  {
    icon: icon.arrowUp,
    text: { eng: 'Back to top', esp: 'Volver arriba' },
    scroll: scroll.top,
  },
  { icon: icon.user, text: { eng: 'About', esp: 'Sobre mí' }, scroll: 'about' },
  {
    icon: icon.tech,
    text: { eng: 'Tech', esp: 'Tech' },
    scroll: scroll.tech,
  },
  {
    icon: icon.projects,
    text: { eng: 'Projects', esp: 'Proyectos' },
    scroll: scroll.projects,
  },
  {
    icon: icon.email,
    text: { eng: 'Contact', esp: 'Contacto' },
    scroll: scroll.contact,
  },
];
