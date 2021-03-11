import { code_collection } from './code-collection';
import { football_team } from './football-team';
import { recipes_reviews } from './recipes-reviews';
import { report_writer } from './report-writer';
import { shopping } from './shopping';
import { poker } from './poker';
// import { face_detection } from './face-detection';
// import { weather } from './weather';
// import { running } from './running';

export const projects_data = [
  { ...football_team },
  { ...recipes_reviews },
  { ...report_writer },
  { ...poker },
  { ...code_collection },
  { ...shopping },
  // { ...face_detection },
  // { ...weather },
  // { ...running },
];
