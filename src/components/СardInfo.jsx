import React from 'react'

export default function CardInfo(props) {
  const imgURL = "owf owf-"+ props.weatherInfo.weather[0].id +" owf-5x icon-style"

  const ms = props.weatherInfo.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

  return (
    <div className='main__card card'> 
        <h3 className='card__day'>{weekdayName.toUpperCase()}</h3>
        <i className={`${imgURL} card__img`}></i>
        <p className='card__celsia'>{Math.round(props.weatherInfo.main.temp)}°C</p>
        <p className='card__subinfo'>Скорость ветра: {Math.round(props.weatherInfo.wind.speed)} к. ч.</p>
        <p className='card__subinfo'>Видимость: {Math.round(props.weatherInfo.wind.gust)} км</p>
        <button className='card__weather-button'>{props.weatherInfo.weather[0].description.toUpperCase()}</button>
    </div>
  )
}
 