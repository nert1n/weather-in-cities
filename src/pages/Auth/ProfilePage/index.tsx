import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isTrue } from '@/redux/slices/authSlice';
import cl from './ProfilePage.module.scss';

export default function Profile() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCityChange = () => {
    dispatch(isTrue());
  };

  return (
    <main className={cl.profile}>
      <div className='container'>
        <div className={cl.profile__holder}>
          <h1 className={cl.profile__title}>{t('My profile')}</h1>
          <div className={cl.profile__img}>
            <Link
              className={cl.profile__exit}
              onClick={handleCityChange}
              to='/weather-in-cities/'
              title={t('Button exit')}
            >
              {t('Exit')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
