import report from 'assets/images/projects/external/weather.jpeg';
import home from 'assets/images/projects/weather/weather-home.png';
import main from 'assets/images/projects/weather/weather-main.png';
import forecast from 'assets/images/projects/weather/weather-forecast.png';

const title_eng = 'The Weather';
const title_esp = 'El Tiempo';
const desc_eng =
  "An app that allows users to search for the current and forecast weather conditions anywhere in the world. The data is presented in both Celcius and Farenheit, with a map showing the user's chosen location. Users have the option to view the forecast for the following 48 hours.";
const desc_esp =
  'Una app en la que los usuarios se pueden buscar las condiciones climáticas de todo el mundo. Los datos están presentados en centígrado y Fahrenheit, con un mapa que muestra el sitio elegido. Usuarios tienen la opción de ver el pronóstico para los siguientes 48 horas.';

const technologies = [
  'React',
  'Material UI',
  'React Pose',
  'Open Weather Map',
  'Google Maps',
  'React Country Flag',
];

export const weather = {
  title: { eng: title_eng, esp: title_esp },
  cover_image: report,
  description: { eng: desc_eng, esp: desc_esp },
  screenshots: [
    { image: home, caption: 'Homepage' },
    { image: main, caption: 'Main view after search' },
    { image: forecast, caption: 'Showing forecast' },
  ],
  tech_list: technologies,
  links: {
    web: 'https://sundayweather.herokuapp.com/',
    github: 'https://github.com/jwellwood/weather_forecast',
  },
};
