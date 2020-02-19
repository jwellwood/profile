import { code_collection } from './code-collection';
import { face_detection } from './face-detection';
import { football_team } from './football-team';
import { recipes_reviews } from './recipes-reviews';
import { report_writer } from './report-writer';
import { weather } from './weather';

export const projects_data = [
  { ...recipes_reviews },
  { ...football_team },
  { ...report_writer },
  { ...code_collection },
  { ...face_detection },
  { ...weather }
];
