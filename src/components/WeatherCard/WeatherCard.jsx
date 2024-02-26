import { useTranslation } from 'react-i18next';
import cl from './WeatherCard.module.scss';

export default function WeatherCard(props) {
  const { t, i18n } = useTranslation();

  const imgURL = `owf owf-${props.weatherInfo.weather[0].id} owf-5x`;

  const ms = props.weatherInfo.dt * 1000;
  const date = new Date(ms);

  const weekday = date.toLocaleString(`${t('en')}`, { weekday: 'long' });

  return (
    <div className={cl.card}>
      <h3 className={cl.card__day}>{weekday.toUpperCase()}</h3>
      <i
        className={`${cl.card__img} c-${props.weatherInfo.weather[0].id} ${imgURL}`}
      />
      <div className={cl.card__celsia}>
        <p className={cl.card__celsia_max}>
          {Math.round(props.weatherInfo.main.temp_max)}°C
        </p>
        <p className={cl.card__celsia_min}>
          {Math.round(props.weatherInfo.main.temp_min)}°C
        </p>
      </div>
      <div className={cl.card__info}>
        <div className={cl.card__humidity}>
          <img src='img/humindity.svg' alt={t('Img humindity')} />
          <p>{props.weatherInfo.main.humidity}%</p>
        </div>
        <div className={cl.card__wind}>
          <img src='img/wind.svg' alt={t('Img wind')} />
          <p>
            {Math.round(props.weatherInfo.wind.speed)}
            {t('km/h')}
          </p>
        </div>
      </div>
    </div>
  );
}
