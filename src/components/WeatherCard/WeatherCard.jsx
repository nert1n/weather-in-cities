import React, { useEffect, useState } from 'react'
import cl from './WeatherCard.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetching } from './../../hooks/useFetching';
import PostService from './../../API/PostServise';

export default function WeatherCard(props) {
  const city = useSelector((state) => state.city.value);
  const [weatherInfo, setWeatherInfo] = useState([]);

  const imgURL = `owf owf-${props.weatherInfo.length > 0 ? 800 : props.weatherInfo.weather[0].id} owf-5x icon-style`

  const ms = props.weatherInfo.dt * 1000;
  const date = new Date(ms);

  let day = date.getDate();

  const year = date.toLocaleString('en', {year: "numeric"});
  const month = date.toLocaleString('en', {month: "long"});
  const weekday = date.toLocaleString('en', {weekday: 'long'});

  const dateMonth = new Date(Date.parse(month + " 1, 2000"));
  const monthNum = dateMonth.getMonth() + 1;

  const [fetchWeather, isWeatherLoading, weatherError] = useFetching( async () => {
    const weather = await PostService.getAll({city});
    const dailyData = weather.list.filter((reading) =>
      reading.dt_txt.includes(`${year}-${monthNum}-${day}`)
    );
    setWeatherInfo(dailyData);
  })
  
  useEffect(() => {
    fetchWeather()
  }, [])

  const celsiaDay = Math.round(props.weatherInfo.main.temp)

  return (
    <Link 
      className={cl.card} 
      to={`/weather-in-cities/${city}/${month}/${day}`}
    > 
        <i className={`${imgURL} ${cl.card__img}`}/>
        <p className={cl.card__celsia}>
          {celsiaDay}°C
        </p>
        <h3 className={cl.card__day}>
          {weekday.toUpperCase()}
        </h3>
    </Link> 
  )
}
