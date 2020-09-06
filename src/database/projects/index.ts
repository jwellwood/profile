import { code_collection } from './code-collection';
import { face_detection } from './face-detection';
import { football_team } from './football-team';
import { recipes_reviews } from './recipes-reviews';
import { report_writer } from './report-writer';
import { weather } from './weather';
import { shopping } from './shopping';
import { poker } from './poker';
import { running } from './running';

export const projects_data = [
  { ...football_team },
  { ...recipes_reviews },
  { ...report_writer },
  { ...poker },
  { ...code_collection },
  { ...shopping },
  { ...face_detection },
  { ...weather },
  { ...running },
];
