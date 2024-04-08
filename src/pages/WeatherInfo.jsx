import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/loader/Loader';
import WeatherCard from './../components/WeatherCard/WeatherCard.jsx';
import PostService from './../API/PostServise';
import WeatherNow from './../components/WeatherNow/WeatherNow';

function WeatherInfo(props) {
  document.title = props.title;
  const { t, i18n } = useTranslation();
  const city = useSelector((state) => state.city.value);

  const [weatherInfo, setWeatherInfo] = useState([]);
  const [time, setTime] = useState(21);
  const [language, setLanguage] = i18n.language;

  const imgURL = 'owf owf-804 owf-5x icon-style';

  const [fetchWeather, isWeatherLoading, weatherError] = useFetching(
    async () => {
      const response = await PostService.getAll( { language, city } );
      const dailyData = response.list.filter((reading) =>
        reading.dt_txt.includes(`${time}:00:00`),
      );
      setWeatherInfo(dailyData);
    },
  );

  useEffect(() => {
    fetchWeather();
  }, [city, time, language]);

  console.log(weatherInfo);

  if (isWeatherLoading) {
    <Loader/>
  }

  return (
    <main className='main'>

      <div className='container'>
        {!weatherError ? (
          <div className='main__holder'>
            {!isWeatherLoading ? (
              <>
                <WeatherNow weatherInfo={weatherInfo} />
                <div className='main__days'>
                  <h2 className='main__title'>5 day forecast</h2>
                  <div className='main__cards'>
                    {weatherInfo.map((el, index) => (
                      <WeatherCard key={index} weatherInfo={el} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Loader />
            )}
          </div>
        ) : (
          'City not fined'
        )}
      </div>
    </main>
  );
}

export default WeatherInfo;