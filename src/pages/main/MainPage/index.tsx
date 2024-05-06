import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MainService from '@/services/main.service';
import cl from './MainPage.module.scss';
import Card from '@/components/widgets/Card';
import MainInfo from '@/components/widgets/MainInfo';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Loader from '@/components/ui/Loader';

function MainPage() {
	const { i18n } = useTranslation();
	const city = useSelector((state: any) => state.city.value);
	const [weatherInfo, setWeatherInfo] = useState([]);
	const [time, setTime] = useState(21);
	const language = i18n.language;

	const queryClient = useQueryClient();

	const { data, isLoading, isError, isFetching } = useQuery({
		queryKey: ['getAll'],
		queryFn: () => MainService.getAll(city, language),
	});

	useEffect(() => {
		if (city.trim() !== '') {
			queryClient.invalidateQueries({ queryKey: ['getAll'] });
		}
	}, [city, time, language, queryClient]);

	useEffect(() => {
		if (data) {
			const dailyData = data.list.filter(
				(reading: { dt_txt: string | string[] }) =>
					reading.dt_txt.includes(`${time}:00:00`),
			);
			setWeatherInfo(dailyData);
		}
	}, [data, time]);

	if (isError) {
		return <h1 className={cl.main__notfound}>Not found!</h1>;
	}

	if (isLoading || isFetching) {
		return <Loader />;
	}

	return (
		<main className={cl.main}>
			<div className="container">
				<div className={cl.main__holder}>
					<MainInfo weatherInfo={weatherInfo[0]} />
					<div className={cl.main__days}>
						<h2 className={cl.main__title}>5 day forecast</h2>
						<div className={cl.main__cards}>
							{weatherInfo.map((el, index) => (
								<Card key={index} weatherInfo={el} />
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MainPage;
