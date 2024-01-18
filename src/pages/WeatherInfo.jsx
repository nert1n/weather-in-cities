import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/loader/Loader';
import WeaterCard from './../components/WeatherCard/WeatherCard.jsx';
import PostService from './../API/PostServise';

export default function WeatherInfo(props) {
  document.title = props.title;
  const { t, i18n } = useTranslation();
  const city = useSelector((state) => state.city.value);

  const [weatherInfo, setWeatherInfo] = useState([]);
  const [time, setTime] = useState(21);
  const language = i18n.language;

  const imgURL = 'owf owf-804 owf-5x icon-style';

  const [fetchWeather, isWeatherLoading, weatherError] = useFetching( async () => {
    const weather = await PostService.getAll({language, city});
    const dailyData = weather.list.filter((reading) =>
      reading.dt_txt.includes(`${time}:00:00`)
    );
    setWeatherInfo(dailyData);
  });

  useEffect(() => {
    fetchWeather();
  }, [city, time]);

  console.log('!!! WeatherInfo rendered');

  return (
    <main className='main'>
      <div className='container'>
        {!weatherError
          ?
          <div className='main__holder'>
            {!isWeatherLoading
              ?
              <>
                <div className='main__info'>
                  <h1 className='main__title'>{city}</h1>
                  <div className='main__container'>
                    <div className='main__item'>
                      <div className='main__weather'>
                        <i className={`${imgURL} main__icon`}></i>
                        <div className='main__temperature'>
                          <p className='main__temp'>19</p>
                          <p className='main__celsia'>°C</p>
                        </div>
                      </div>
                      <div className='main__weather-info'>
                        <h3 className='main__weather-title'>Cloudy</h3>
                        <p className='main__weather-description'>Possible rain throughout the day</p>
                      </div>
                    </div>
                    <div className='main__item-info'>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/feel_like.svg' alt={t('Img feel like')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Feel like')}</p>
                          <p className='main__item-like-temperature'>21°</p>
                        </div>
                      </div>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/wind_white.svg' alt={t('Img wind')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Wind')}</p>
                          <p className='main__item-like-temperature'>21{t('km/h')}</p>
                        </div>
                      </div>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/visibility.svg' alt={t('Img visibility')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Visibility')}</p>
                          <p className='main__item-like-temperature'>21{t('km')}</p>
                        </div>
                      </div>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/humidity_white.svg' alt={t('Img humidity')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Humidity')}</p>
                          <p className='main__item-like-temperature'>62$</p>
                        </div>
                      </div>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/pressure.svg' alt={t('Img pressure')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Pressure')}</p>
                          <p className='main__item-like-temperature'>1022{t('mb')}</p>
                        </div>
                      </div>
                      <div className='main__item-like'>
                        <img className='main__item-like-icon' src='img/sea_level.svg' alt={t('Img sea level')}/>
                        <div className='main__item-like-info'>
                          <p className='main__item-like-label'>{t('Sea level')}</p>
                          <p className='main__item-like-temperature'>1031</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='main__days'>
                  <h2 className='main__title'>5 day forecast</h2>
                  <div className='main__cards'>
                    {weatherInfo.map((el, index) => (
                      <WeaterCard
                        key={index}
                        weatherInfo={el}
                      />
                    ))}
                  </div>
                </div>
              </>
              : <Loader/>
            }
          </div>
          : 'City not fined'
        }
      </div>
    </main>
  );
}