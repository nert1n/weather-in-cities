import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes } from '@/routes/routes';
import '@/styles/style.scss';
import Error from '@/components/widgets/Error';
import Footer from '@/components/widgets/Footer';
import Header from '@/components/widgets/Header';
import { useTranslation } from 'react-i18next';
import { useFetching } from '@/hooks/useFetching';
import { useEffect } from 'react';
import MainService from '@/services/main.service';

function AppRouter() {
	const { i18n } = useTranslation();
	const isAuth = useSelector((state: any) => state.auth.value);

	const [fetchIp, isIpLoading, ipError] = useFetching(async () => {
		const country = await MainService.getCountry();

		i18n.changeLanguage(country);
	});

	useEffect(() => {
		// @ts-ignore
		fetchIp();
	}, []);

	return (
		<div className="content">
			<Header />
			{isAuth ? (
				<Routes>
					{privateRoutes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
					<Route path="*" element={<Error />} />
					<Route
						path="/weather-in-cities/login"
						element={<Navigate to="/weather-in-cities/" replace />}
					/>
					<Route
						path="/weather-in-cities/register"
						element={<Navigate to="/weather-in-cities/" replace />}
					/>
				</Routes>
			) : (
				<Routes>
					{publicRoutes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
					<Route path="*" element={<Error />} />
				</Routes>
			)}
			<Footer />
		</div>
	);
}

export default AppRouter;
