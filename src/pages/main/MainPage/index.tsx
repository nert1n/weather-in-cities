import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFetching } from '@/hooks/useFetching';
import Loader from '@/components/widgets/loader';
import WeatherCard from '@/components/widgets/card';
import WeatherNow from '@/components/widgets/mainInfo';
import MainService from '@/services/main.service';
import cl from './MainPage.module.scss';

function MainPage() {
  const { i18n } = useTranslation();
  const city = useSelector((state: any) => state.city.value);

  const [weatherInfo, setWeatherInfo] = useState([]);
  const [time, setTime] = useState(21);
  const language = i18n.language;

  const [fetchWeather, isWeatherLoading, weatherError] = useFetching(
    async () => {
      const response = await MainService.getAll(city, language);
      const dailyData = response.list.filter((reading: { dt_txt: string }) =>
        reading.dt_txt.includes(`${time}:00:00`),
      );
      setWeatherInfo(dailyData);
      return;
    },
  );

  useEffect(() => {
    // @ts-ignore
    fetchWeather();
  }, [city, time, language]);

  if (isWeatherLoading) {
    <Loader />;
  }

  return (
    <main className={cl.main}>
      <div className='container'>
        {!weatherError ? (
          <div className={cl.main__holder}>
            {!isWeatherLoading ? (
              <>
                <WeatherNow weatherInfo={weatherInfo} />
                <div className={cl.main__days}>
                  <h2 className={cl.main__title}>5 day forecast</h2>
                  <div className={cl.main__cards}>
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

export default MainPage;
