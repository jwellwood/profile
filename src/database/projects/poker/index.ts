import pokerImg from 'assets/images/projects/external/poker-cover.jpg';
import home from 'assets/images/projects/poker/poker-home.png';
import game from 'assets/images/projects/poker/poker-game.png';
import player from 'assets/images/projects/poker/poker-player.png';
import ranking from 'assets/images/projects/poker/poker-rankings.png';
import { IProjectData } from 'database/types';

const title_eng = 'Lockdown Poker';
const title_esp = 'Club de Poker';
const desc_eng =
  'An app made for a poker club to keep track of the games played, money owed etc.';
const desc_esp =
  'Una app para un club de poker para mantener un record de los juegos jugados y el dinero debido etc.';
const technologies = [
  'React (Typescript)',
  'Material UI',
  'Firebase',
  'Google Charts',
];

export const poker: IProjectData = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: pokerImg,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: player, caption: 'Player details' },
    { image: game, caption: 'Game details' },
    { image: ranking, caption: 'Player rankings' },
  ],
  tech_list: technologies,
  links: {
    web: 'https://lockdown-poker.firebaseapp.com/',
    github: 'https://github.com/jwellwood/lockdown-poker',
  },
};
