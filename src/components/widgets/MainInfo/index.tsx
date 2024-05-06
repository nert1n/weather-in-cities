import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cl from './MainInfo.module.scss';

interface IMainInfo {
	weatherInfo: {
		weather: {
			id: number;
			description: string;
		}[];
		main: {
			feels_like: number;
			humidity: number;
			pressure: number;
			sea_level: number;
			temp: number;
			temp_max: number;
			temp_min: number;
		};
		wind: { speed: number };
		visibility: number;
		dt: number;
	};
}

const MainInfo = ({ weatherInfo }: IMainInfo) => {
	const { t } = useTranslation();
	const city = useSelector((state: any) => state.city.value);

	if (!weatherInfo) {
		return <h1>Not found!</h1>;
	}

	const imgURL = `owf owf-${weatherInfo.weather[0].id} owf-5x`;

	const data = [
		{
			imgUrl: './img/feel_like.svg',
			imgAlt: t('Img feel like'),
			name: t('Feel like'),
			info: Math.round(weatherInfo.main.feels_like) + '°',
		},
		{
			imgUrl: './img/wind_white.svg',
			imgAlt: t('Img wind'),
			name: t('Wind'),
			info: Math.round(weatherInfo.wind.speed) + t('km/h'),
		},
		{
			imgUrl: './img/visibility.svg',
			imgAlt: t('Img visibility'),
			name: t('Visibility'),
			info: Math.round(weatherInfo.visibility) / 1000 + t('km'),
		},
		{
			imgUrl: './img/humidity_white.svg',
			imgAlt: t('Img humidity'),
			name: t('Humidity'),
			info: Math.round(weatherInfo.main.humidity),
		},
		{
			imgUrl: './img/pressure.svg',
			imgAlt: t('Img pressure'),
			name: t('Pressure'),
			info: Math.round(weatherInfo.main.pressure) + t('mb'),
		},
		{
			imgUrl: './img/sea_level.svg',
			imgAlt: t('Img sea level'),
			name: t('Sea level'),
			info: Math.round(weatherInfo.main.sea_level),
		},
	];

	return (
		<div className={cl.main__info}>
			<h1 className={cl.main__title}>{city}</h1>
			<div className={cl.main__container}>
				<div className={cl.main__item}>
					<div className={cl.main__weather}>
						<i className={`${imgURL} ${cl.main__icon}`}></i>
						<div className={cl.main__temperature}>
							<p className={cl.main__temp}>
								{Math.round(weatherInfo.main.temp)}
							</p>
							<p className={cl.main__celsia}>°C</p>
						</div>
					</div>
					<div className={cl['main__weather-info']}>
						<h3 className={cl['main__weather-title']}>
							{weatherInfo.weather[0].description.toUpperCase()}
						</h3>
					</div>
				</div>
				<div className={cl.main__item}>
					{data.map(data => (
						<div key={data.info} className={cl['main__item-like']}>
							<img
								className={cl['main__item-like-icon']}
								src={data.imgUrl}
								alt={data.imgAlt}
							/>
							<div className={cl['main__item-like-info']}>
								<p className={cl['main__item-like-label']}>{data.name}</p>
								<p className={cl['main__item-like-temperature']}>{data.info}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainInfo;
