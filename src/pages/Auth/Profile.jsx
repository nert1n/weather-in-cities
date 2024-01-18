import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isTrue } from '../../redux/slices/authSlice';

export default function Profile(props) {
  document.title = props.title;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleCityChange = () => {
    dispatch(isTrue());
  };

  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile__holder'>
          <h1 className='profile__title'>{t('My profile')}</h1>
          <div className='profile__img'>
            {/* <img src="" alt={t('Profile image')} /> */}
            <Link className='profile__exit' onClick={handleCityChange} to='/weather-in-cities/' title={t('Button exit')}>{t('Exit')}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
