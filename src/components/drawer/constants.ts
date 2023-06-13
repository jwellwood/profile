import { AppIcons } from 'constants/icon-names';
import { scrollNames } from 'constants/scroll-names';

const { top, about, tech, projects, contact } = scrollNames;

export const nav_data = [
  {
    icon: AppIcons.ARROW_UP,
    text: { en: 'Back to top', es: 'Volver arriba' },
    scroll: top,
  },
  {
    icon: AppIcons.USER,
    text: { en: 'About', es: 'Sobre mí' },
    scroll: about,
  },
  {
    icon: AppIcons.TECH,
    text: { en: 'Tech', es: 'Tech' },
    scroll: tech,
  },
  {
    icon: AppIcons.PROJECTS,
    text: { en: 'Projects', es: 'Proyectos' },
    scroll: projects,
  },
  {
    icon: AppIcons.EMAIL,
    text: { en: 'Contact', es: 'Contacto' },
    scroll: contact,
  },
];
