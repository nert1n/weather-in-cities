import WeatherInfo from './../pages/WeatherInfo';
import WeatherDayPage from './../pages/WeatherDayPage';
import Profile from './../pages/Auth/Profile';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';

export const publicRoutes = [
  {
    path: '/weather-in-cities',
    component: WeatherInfo,
    title: 'WISICO - Main page',
    exact: true,
  },
  {
    path: '/weather-in-cities/:city/:month/:day',
    component: WeatherDayPage,
    title: 'WISICO - Day page',
    exact: true,
  },
  {
    path: '/weather-in-cities/login',
    component: Login,
    title: 'WISICO - Login page',
    exact: true,
  },
  {
    path: '/weather-in-cities/register',
    component: Register,
    title: 'WISICO - Register page',
    exact: true,
  },
];

export const privateRoutes = [
  {
    path: '/weather-in-cities',
    component: WeatherInfo,
    title: 'WISICO - Main page',
    exact: true,
  },
  {
    path: '/weather-in-cities/:city/:month/:day',
    component: WeatherDayPage,
    title: 'WISICO - Day page',
    exact: true,
  },
  {
    path: '/weather-in-cities/profile',
    component: Profile,
    title: 'WISICO - Profile page',
    exact: true,
  },
];
