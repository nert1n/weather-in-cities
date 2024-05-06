import { useTranslation } from 'react-i18next';
import cl from './Card.module.scss';

interface ICard {
	weatherInfo: {
		weather: { id: number }[];
		main: { temp_max: number; temp_min: number; humidity: number };
		wind: { speed: number };
		dt: number;
	};
}

const Card = (props: ICard) => {
	const { t } = useTranslation();

	const imgURL = `owf owf-${props.weatherInfo.weather[0].id} owf-5x`;
	const typeImg = props.weatherInfo.weather[0].id;
	const tempMax = Math.round(props.weatherInfo.main.temp_max);
	const tempMin = Math.round(props.weatherInfo.main.temp_min);
	const humidity = `${props.weatherInfo.main.humidity}%`;
	const windSpeed = Math.round(props.weatherInfo.wind.speed);

	const ms = props.weatherInfo.dt * 1000;
	const date = new Date(ms);

	const weekday = date.toLocaleString(`${t('en')}`, { weekday: 'long' });

	return (
		<div className={cl.card}>
			<h3 className={cl.card__day}>{weekday.toUpperCase()}</h3>
			<i className={`${cl.card__img} c-${typeImg} ${imgURL}`} />
			<div className={cl.card__celsia}>
				<p className={cl.card__celsia_max}>{tempMax}°C</p>
				<p className={cl.card__celsia_min}>{tempMin}°C</p>
			</div>
			<div className={cl.card__info}>
				<div className={cl.card__humidity}>
					<img src="./img/humindity.svg" alt={t('Img humidity')} />
					<p>{humidity}</p>
				</div>
				<div className={cl.card__wind}>
					<img src="./img/wind.svg" alt={t('Img wind')} />
					<p>
						{windSpeed}
						{t('km/h')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
