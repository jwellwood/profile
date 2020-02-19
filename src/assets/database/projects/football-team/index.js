import football from '../../../images/projects/external/football.jpeg';
import home from '../../../images/projects/football/mr-fullscreen.png';
import stats from '../../../images/projects/football/mr-stats.png';
import results from '../../../images/projects/football/mr-results.png';
import squad from '../../../images/projects/football/mr-squad.png';
import player from '../../../images/projects/football/mr-player-stats.png';
import targets from '../../../images/projects/football/mr-player.png';

const title_eng = 'Madrid Reds';
const title_esp = 'Madrid Reds';
const desc_eng =
  "An app that tracks the progress of a football team and players over the course of a season. Users can view results and an array of stats related to the team's progress. Players can set their own targets at the beginning of the season and check how they compare after each game played.";
const desc_esp =
  'Una app que sigue el progreso de los jugadores y el equipo durante la temporada. Usuarios pueden ver resultados y un montón de estadísticas relacionadas con el progreso del equipo. Los jugadores pueden definir sus objetivos como cuantos goles van a marcar etc y ver cómo evolucionan tras cada partido.';
const technologies = [
  'React',
  'Material UI',
  'React ChartJS 2',
  'React Table',
  'Firebase',
  'React Redux Firebase'
];

export const football_team = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: football,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: stats, caption: 'Stats' },
    { image: results, caption: 'Results' },
    { image: squad, caption: 'Squad' },
    { image: player, caption: 'Player stats' },
    { image: targets, caption: 'Targets' }
  ],
  tech_list: technologies,
  links: {
    web: 'https://team-stats-31c64.firebaseapp.com/',
    github: 'https://github.com/jwellwood/teamstats'
  }
};
