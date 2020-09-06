import vegan from 'assets/images/projects/external/vegan.jpeg';
import home from 'assets/images/projects/pbp/pbp-home.png';
import recipes from 'assets/images/projects/pbp/pbp-recipes.png';
import reviews from 'assets/images/projects/pbp/pbp-reviews.png';
import recipe from 'assets/images/projects/pbp/pbp-recipe.png';
import review from 'assets/images/projects/pbp/pbp-review.png';
import form from 'assets/images/projects/pbp/pbp-form.png';
import gallery from 'assets/images/projects/pbp/pbp-gallery.png';
import { IProjectData } from 'database/types';

const title_eng = 'Plant Based Ponch';
const title_esp = 'Plant Based Ponch';
const desc_eng =
  'A collection of vegan and plant based recipes and reviews of restaurants. Created for an Instagram blogger who wanted an external website to keep records of places visited and recipes created. Admins can add, edit and delete items, and each form is broken up into manageable chunks such as gallery, ratings and descriptions.';
const desc_esp =
  'Una colección de recetas veganas y críticas de restaurantes veganos. Creado por un blogger de Instagram que queria un sitio externo donde guardar y mostrar sus sitios visitados, y sus recetas creadas. Los usuarios admin pueden añadir, modificar y eliminar elementos, y cada formulario está separado en partes pequeños como galería, valoraciones y descripciones.';
const technologies = [
  'Angular 8',
  'Bootstrap 4 & Ngx Bootstrap',
  'Bootswatch Theme',
  'Angular2 Flash Messages',
  'Angular Fire',
  'Firebase',
];
export const recipes_reviews: IProjectData = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: vegan,
  icon: '',
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: recipes, caption: 'Recipes list' },
    { image: reviews, caption: 'Reviews list' },
    { image: recipe, caption: 'Recipe page' },
    { image: review, caption: 'Review page' },
    { image: form, caption: 'Add new item form' },
    { image: gallery, caption: 'Add gallery form' },
  ],
  tech_list: technologies,
  links: {
    web: 'https://pbponch.firebaseapp.com/',
    github: 'https://github.com/jwellwood/recipes-and-reviews',
  },
};
