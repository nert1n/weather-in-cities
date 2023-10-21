import WeatherInfo from './../pages/WeatherInfo';
import WeatherDayPage from './../pages/WeatherDayPage';

export const routes = [
    {path: '/', component: WeatherInfo, exact: true},
    {path: '/:day', component: WeatherDayPage, exact: true},
]