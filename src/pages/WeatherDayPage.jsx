import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from './../hooks/useFetching';
import { useSelector } from 'react-redux';
import Loader from './../components/UI/loader/Loader';
import PostService from '../API/PostServise';
import WeatherCardDay from '../components/WeatherCardDay/WeatherCardDay';
import Error from './../components/UI/Error/Error';
import { useTranslation } from 'react-i18next';

export default function WeatherDayPage(props) {
  document.title = props.title
  const { t, i18n } = useTranslation();
  const city = useSelector((state) => state.city.value);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const params = useParams();

  let day = params.day
  
  if (day < 10) {
    day = `0${day}`
  }

  const date = new Date(Date.parse(params.month + " 1, 2000"));
  const monthEn = date.getMonth() + 1;
  let month = date.toLocaleString(`${t('en')}`, {month: "long"});
  let weekday = date.toLocaleString(`${t('en')}`, {weekday: "long"});

  function firstTop(params) {
    const splitted = params.split("")
    const first = splitted[0].toUpperCase()
    const rest = [...splitted] 
    rest.splice(0, 1)
    const latest = [first, ...rest].join("")

    return latest;
  }

  month = firstTop(month)
  weekday = firstTop(weekday)
  const [fetchWeather, isWeatherLoading, weatherError] = useFetching( async () => {
    const weather = await PostService.getAll({city});
    const dailyData = weather.list.filter((reading) =>
    reading.dt_txt.includes(`${monthEn}-${day}`)
  );
    setWeatherInfo(dailyData);
  })

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <main className='day'>
      {isWeatherLoading
        ? <Loader/>
        :  
          <>
            {isWeatherLoading
            ? <Error/>
            : 
            <div className='container'>
            <p>{month} {params.day}</p>
            <p>{weekday}</p>
            <div className='day__holder'> 
              {weatherInfo.map((el, index) => (
                <WeatherCardDay
                  key={index}
                  weatherInfo={el}
                />
              ))}
            </div>
          </div>
            }
          </>
        }
    </main>
  )
}
