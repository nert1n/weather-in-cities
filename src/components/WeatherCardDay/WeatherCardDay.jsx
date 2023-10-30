import React from 'react'
import cl from './WeatherCardDay.module.scss'

export default function WeatherCardDay(props) {
    const seconds = props.weatherInfo.dt - 7200
    const ms = seconds * 1000
    
    const date = new Date(ms)
    const time = date.getHours();
    
    const imgURL = `owf owf-${props.weatherInfo.weather[0].id} owf-5x icon-style`

    return (
        <div className={cl.card}>
            <p className={cl.card__time}>{time}:00</p>
            <i className={`${imgURL} ${cl.card__img}`}></i>
            <p className={cl.card__temp}>{Math.round(props.weatherInfo.main.temp)}°C</p>
        </div>
    )
}
