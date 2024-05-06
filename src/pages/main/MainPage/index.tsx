import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFetching } from '@/hooks/useFetching';
import MainService from '@/services/main.service';
import cl from './MainPage.module.scss';
import Card from '@/components/widgets/Card';
import MainInfo from '@/components/widgets/MainInfo';
import Loader from '@/components/widgets/Loader';

function MainPage() {
	const { i18n } = useTranslation();
	const city = useSelector((state: any) => state.city.value);

	const [weatherInfo, setWeatherInfo] = useState([]);
	const [time, setTime] = useState(21);
	const language = i18n.language;

	const [fetchWeather, isWeatherLoading, weatherError] = useFetching(
		async () => {
			const response = await MainService.getAll(city, language);
			const dailyData = response.list.filter((reading: { dt_txt: string }) =>
				reading.dt_txt.includes(`${time}:00:00`),
			);
			setWeatherInfo(dailyData);
			return;
		},
	);

	useEffect(() => {
		// @ts-ignore
		fetchWeather();
	}, [city, time, language]);

	if (isWeatherLoading) {
		return <Loader />;
	}

	if (weatherError) {
		return <p>City not fined</p>;
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
