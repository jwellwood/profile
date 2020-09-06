import { IText } from 'database/types';

interface IButtonData {
  back: IText;
  web: IText;
  github: string;
}

export const button_data: IButtonData = {
  back: { eng: 'Back', esp: 'Volver' },
  web: { eng: 'Visit site', esp: 'Ir al sitio' },
  github: 'Github',
};
