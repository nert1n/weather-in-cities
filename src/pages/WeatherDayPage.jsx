import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from './../hooks/useFetching';
import { useSelector } from 'react-redux';
import Loader from './../components/UI/loader/Loader';
import PostService from '../API/PostServise';
import WeatherCardDay from '../components/WeatherCardDay/WeatherCardDay';
import Error from './../components/UI/Error/Error';

export default function WeatherDayPage(props) {
  document.title = props.title

  const city = useSelector((state) => state.city.value);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const params = useParams();
  console.log(params);
  const date = new Date(Date.parse(params.month + " 1, 2000"));
  const month = date.getMonth() + 1;
  
  const [fetchWeather, isWeatherLoading, weatherError] = useFetching( async () => {
    const weather = await PostService.getAll({city});
    const dailyData = weather.list.filter((reading) =>
    reading.dt_txt.includes(`${month}-${params.day}`)
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
            {weatherInfo.length > 0
            ? 
            <div className='container'>
              <p>{params.month} {params.day}</p>
              <p>{params.weekday}</p>
              <div className='day__holder'> 
                {weatherInfo.map((el, index) => (
                  <WeatherCardDay
                    key={index}
                    weatherInfo={el}
                  />
                ))}
              </div>
            </div>
            : <Error/>
            }
          </>
        }
    </main>
  )
}
