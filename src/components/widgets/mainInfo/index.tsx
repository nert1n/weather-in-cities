import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cl from './MainInfo.module.scss';

export default function mainInfo({ weatherInfo }: any) {
  const { t, i18n } = useTranslation();
  const city = useSelector((state: any) => state.city.value);

  if (!weatherInfo.length) {
    return <h1 className='posts__head head'>Not found!</h1>;
  }

  const imgURL = `owf owf-${weatherInfo[0].weather[0].id} owf-5x`;

  return (
    <div className={cl.main__info}>
      <h1 className={cl.main__title}>{city}</h1>
      <div className={cl.main__container}>
        <div className={cl.main__item}>
          <div className={cl.main__weather}>
            <i className={`${imgURL} ${cl.main__icon}`}></i>
            <div className={cl.main__temperature}>
              <p className={cl.main__temp}>
                {Math.round(weatherInfo[0].main.temp)}
              </p>
              <p className={cl.main__celsia}>°C</p>
            </div>
          </div>
          <div className={cl.main__weatherInfo}>
            <h3 className={cl.main__weatherTitle}>
              {weatherInfo[0].weather[0].main.toUpperCase()}
            </h3>
            <p className={cl.main__weatherDescription}>
              {weatherInfo[0].weather[0].description}
            </p>
          </div>
        </div>
        <div className={cl.main__item}>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/feel_like.svg'
              alt={t('Img feel like')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Feel like')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].main.feels_like)}°
              </p>
            </div>
          </div>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/wind_white.svg'
              alt={t('Img wind')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Wind')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].wind.speed)}
                {t('km/h')}
              </p>
            </div>
          </div>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/visibility.svg'
              alt={t('Img visibility')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Visibility')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].visibility) / 1000}
                {t('km')}
              </p>
            </div>
          </div>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/humidity_white.svg'
              alt={t('Img humidity')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Humidity')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].main.humidity)}
              </p>
            </div>
          </div>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/pressure.svg'
              alt={t('Img pressure')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Pressure')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].main.pressure)}
                {t('mb')}
              </p>
            </div>
          </div>
          <div className={cl.main__itemLike}>
            <img
              className={cl.main__itemLikeIcon}
              src='img/sea_level.svg'
              alt={t('Img sea level')}
            />
            <div className={cl.main__itemLikeInfo}>
              <p className={cl.main__itemLikeLabel}>{t('Sea level')}</p>
              <p className={cl.main__itemLikeTemperature}>
                {Math.round(weatherInfo[0].main.sea_level)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
