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
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/register',
		component: RegisterPage,
	},
];

export const privateRoutes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
	},
];
