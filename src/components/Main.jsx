import React, { useState, useEffect } from 'react';
import CardInfo from './СardInfo.jsx';
import Cities from './UI/Cities/Cities.jsx';

export default function Main() {
    const [weatherInfo, setWeatherInfo] = useState([]);
    const [city, setCity] = useState('Kiev');

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const updateCity = (newCity) => {
        setCity(newCity);
    };
    
    useEffect(() => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;

        fetch(weatherURL)
            .then((res) => res.json())
            .then((data) => {
                const dailyData = data.list.filter((reading) =>
                    reading.dt_txt.includes("12:00:00")
                );
                setWeatherInfo(dailyData);
            })
            .catch((e) => console.log(e));
    }, [city]);

    return (
        <div className='main'>
            <h1 className='main__title'>Прогноз погоды на 5 дней</h1>
            <div className='container'>
                <div className='main__holder'>
                    <div className='main__info'>
                        <h2 className='main__city'>{city}</h2>
                        <Cities updateCity={updateCity}/>
                        <input
                            className='main__input'
                            type="text"
                            name="first_name"
                            value={city}
                            onChange={handleChange}
                        />
                        <div className='main__cards'>
                        {weatherInfo.map((el, index) => (
                                <CardInfo
                                    key={index}
                                    weatherInfo={el}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
