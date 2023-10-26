import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetching } from '../hooks/useFetching';
import { syncState } from '../redux/slices/citySlice'
import WeatherList from './../components/WeatherList/WeatherList';
import WeaterCard from './../components/WeatherCard/WeatherCard.jsx';
import PostService from './../API/PostServise';
import Loader from '../components/UI/loader/Loader';

export default function WeatherInfo() {
    const city = useSelector((state) => state.city.value);

    const [weatherInfo, setWeatherInfo] = useState([]);
    const [time, setTime] = useState(18);
    
    const [fetchWeather, isWeatherLoading, weatherError] = useFetching( async () => {
        const weather = await PostService.getAll({city});
        const dailyData = weather.list.filter((reading) =>
            reading.dt_txt.includes(`${time}:00:00`)
        );
        setWeatherInfo(dailyData);
    })
    
    useEffect(() => {
        fetchWeather()
    }, [city, time])

    const updateCity = (newCity) => {
        city(newCity);
    };

    return (
        <main className='main'>
            <div className='container'>
                <div className='main__holder'>
                    <div className='main__info'>
                        <h2 className='main__city'>{city}</h2>
                        <WeatherList updateCity={updateCity} city={city}/>
                        {isWeatherLoading
                            ? <Loader/>
                            : 
                            <div className='main__cards'>
                                {weatherInfo.map((el, index) => (
                                    <WeaterCard
                                        key={index}
                                        weatherInfo={el}
                                        city={city}
                                        time={time}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}