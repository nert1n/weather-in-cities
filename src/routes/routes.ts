import MainPage from '@/pages/main/MainPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import ProfilePage from '@/pages/auth/ProfilePage';

export const publicRoutes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/weather-in-cities/',
		component: MainPage,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/weather-in-cities/login',
		component: LoginPage,
	},
	{
		path: '/register',
		component: RegisterPage,
	},
	{
		path: '/weather-in-cities/register',
		component: RegisterPage,
	},
];

export const privateRoutes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/weather-in-cities/',
		component: MainPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
	},
	{
		path: '/weather-in-cities/profile',
		component: ProfilePage,
	},
];
