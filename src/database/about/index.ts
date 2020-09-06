import { IText } from 'database/types';
interface IAboutData {
  eng: IParts;
  esp: IParts;
}

interface IParts {
  partOne: string;
  partTwo: string;
}

export const aboutTitle: IText = {
  eng: 'About me',
  esp: 'Sobre mí',
};

export const about_data: IAboutData = {
  eng: {
    partOne: 'I am a web developer from the UK based in Madrid, Spain',
    partTwo: 'I love clean, simple, reusable code',
  },

  esp: {
    partOne: 'Soy desarrollador web de Reino Unido basado en Madrid, España',
    partTwo: 'Me encanta el código limpio, sencillo, y reutilizable',
  },
};
