import React, { useState, useEffect } from 'react';
import Cities from './../components/WeatherList/WeatherList';
import WeaterCard from './../components/WeatherCard/WeatherCard.jsx';

export default function WeatherInfo() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [city, setCity] = useState('Kiev');
  const [time, setTime] = useState(0);

  const updateCity = (newCity) => {
      setCity(newCity);
  };

  const updateTime = (el) => {
      setTime(el.target.textContent);
  };
  
  useEffect(() => {
      const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`;

      fetch(weatherURL)
          .then((res) => res.json())
          .then((data) => {
              const dailyData = data.list.filter((reading) =>
                  reading.dt_txt.includes(`${time}:00:00`)
              );
              setWeatherInfo(dailyData);
          })
          .catch((e) => console.log(e));
  }, [city, time]);

  return (
      <main className='main'>
          <div className='container'>
              <div className='main__holder'>
                  <div className='main__info'>
                      <h2 className='main__city'>{city}</h2>
                      <Cities updateCity={updateCity} city={city}/>
                      <button onClick={updateTime}>0</button>
                      <div className='main__cards'>
                      {weatherInfo.map((el, index) => (
                              <WeaterCard
                                  key={index}
                                  weatherInfo={el}
                              />
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}