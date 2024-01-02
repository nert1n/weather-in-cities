import WeatherInfo from './../pages/WeatherInfo';
import WeatherDayPage from './../pages/WeatherDayPage';
import Profile from './../pages/Auth/Profile';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';

export const publicRoutes = [
    {path: '/weather-in-cities/', component: WeatherInfo, exact: true},
    {path: '/weather-in-cities/:city/:year/:month/:day/:weekday', component: WeatherDayPage, exact: true},
    {path: '/weather-in-cities/login', component: Login, exact: true},
    {path: '/weather-in-cities/register', component: Register, exact: true},
]

export const privateRoutes = [
    {path: '/weather-in-cities/', component: WeatherInfo, exact: true},
    {path: '/weather-in-cities/:city/:year/:month/:day/:weekday', component: WeatherDayPage, exact: true},
    {path: '/weather-in-cities/profile', component: Profile, exact: true},
]