import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes } from '@/routes/routes';
import '@/styles/style.scss';
import Footer from '@/components/widgets/Footer';
import Header from '@/components/widgets/Header';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import MainService from '@/services/main.service';
import { useQuery } from '@tanstack/react-query';
import Error from '@/components/UI/Error';
import Loader from '@/components/UI/Loader';

function AppRouter() {
	const { i18n } = useTranslation();
	const isAuth = useSelector((state: any) => state.auth.value);
	const { data, isLoading, isError, isFetched } = useQuery({
		queryKey: ['getCountry'],
		queryFn: () => MainService.getCountry(),
	});

	useEffect(() => {
		i18n.changeLanguage(data);
	}, [data]);

	if (isError) {
		return <p>Error!</p>;
	}

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Header />
			<div className="content">
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
			</div>
			<Footer />
		</>
	);
}

export default AppRouter;
