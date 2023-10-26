import WeatherInfo from './../pages/WeatherInfo';
import WeatherDayPage from './../pages/WeatherDayPage';
import Profile from './../pages/Auth/Profile';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';

export const publicRoutes = [
    {path: '/', component: WeatherInfo, exact: true},
    {path: '/:city/:year/:month/:day/:weekday', component: WeatherDayPage, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/register', component: Register, exact: true},
]

export const privateRoutes = [
    {path: '/', component: WeatherInfo, exact: true},
    {path: '/:city/:year/:month/:day/:weekday', component: WeatherDayPage, exact: true},
    {path: '/profile', component: Profile, exact: true},
]