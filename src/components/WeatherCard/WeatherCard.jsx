import React from 'react'
import cl from './WeatherCard.module.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function WeatherCard(props) {
  const city = useSelector((state) => state.city.value);

  const imgURL = `owf owf-${props.weatherInfo.length > 0 ? 800 : props.weatherInfo.weather[0].id} owf-5x icon-style`

  const ms = props.weatherInfo.dt * 1000;
  const date = new Date(ms);

  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`
  }
  
  const year = date.toLocaleString('en', {year: "numeric"});
  const month = date.toLocaleString('en', {month: "long"});
  const weekdayEng = date.toLocaleString('en', {weekday: 'long'});
  const weekday = date.toLocaleString('ru', {weekday: 'long'});

  return (
    <Link className={cl.card} to={`/${city}/${year}/${month}/${day}/${weekdayEng}`}> 
        <i className={`${imgURL} ${cl.card__img}`}/>
        <p className={cl.card__celsia}>
          {Math.round(props.weatherInfo.main.temp)}°C
        </p>
        <h3 className={cl.card__day}>
          {weekday.toUpperCase()}
        </h3>
    </Link> 
  )
}
