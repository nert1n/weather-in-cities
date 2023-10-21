import React from 'react'
import cl from './WeatherCard.module.scss'
import { Link } from 'react-router-dom';

export default function WeatherCard(props) {
  const imgURL = "owf owf-" + props.weatherInfo.weather[0].id + " owf-5x icon-style"

  const ms = props.weatherInfo.dt * 1000;
  const day = new Date(ms).getDate();
  const weekday = new Date(ms).toLocaleString('ru', {weekday: 'long'});

  return (
    <Link className={cl.card} to={`/${day}`}> 
        <h3 className={cl.card__day}>
          {weekday.toUpperCase()}
        </h3>
        <i className={`${imgURL} ${cl.card__img}`}/>
        <p className={cl.card__celsia}>
          {Math.round(props.weatherInfo.main.temp)}°C
        </p>
        <button className={cl.card__weather_button}>
          {props.weatherInfo.weather[0].description.toUpperCase()}
        </button>
    </Link> 
  )
}
