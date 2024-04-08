import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function WeatherNow({ weatherInfo }) {
  const { t, i18n } = useTranslation();
  const city = useSelector((state) => state.city.value);

  if (!weatherInfo.length) {
    return (
        <h1 className="posts__head head">Not found!</h1>
    )
  }

  const imgURL = `owf owf-${weatherInfo[0].weather[0].id} owf-5x`;

  return (
    <div className='main__info'>
      <h1 className='main__title'>{city}</h1>
      <div className='main__container'>
        <div className='main__item'>
          <div className='main__weather'>
            <i className={`${imgURL} main__icon`}></i>
            <div className='main__temperature'>
              <p className='main__temp'>{Math.round(weatherInfo[0].main.temp)}</p>
              <p className='main__celsia'>°C</p>
            </div>
          </div>
          <div className='main__weather-info'>
            <h3 className='main__weather-title'>
              {weatherInfo[0].weather[0].main.toUpperCase()}
            </h3>
            <p className='main__weather-description'>
              {weatherInfo[0].weather[0].description}
            </p>
          </div>
        </div>
        <div className='main__item-info'>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/feel_like.svg'
              alt={t('Img feel like')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Feel like')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].main.feels_like)}°
              </p>
            </div>
          </div>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/wind_white.svg'
              alt={t('Img wind')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Wind')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].wind.speed)}
                {t('km/h')}
              </p>
            </div>
          </div>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/visibility.svg'
              alt={t('Img visibility')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Visibility')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].visibility) / 1000}
                {t('km')}
              </p>
            </div>
          </div>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/humidity_white.svg'
              alt={t('Img humidity')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Humidity')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].main.humidity)}
              </p>
            </div>
          </div>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/pressure.svg'
              alt={t('Img pressure')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Pressure')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].main.pressure)}
                {t('mb')}
              </p>
            </div>
          </div>
          <div className='main__item-like'>
            <img
              className='main__item-like-icon'
              src='img/sea_level.svg'
              alt={t('Img sea level')}
            />
            <div className='main__item-like-info'>
              <p className='main__item-like-label'>{t('Sea level')}</p>
              <p className='main__item-like-temperature'>
                {Math.round(weatherInfo[0].main.sea_level)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
