import React from 'react'
import { useDispatch } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Login(props) {
  document.title = props.title

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <main className='auth'>
      <div className='container'>
        <div className='auth__holder'>
          <form className='auth__form'>
            <input className='auth__input' type="email" placeholder={t('Email')}/>
            <input className='auth__input' type="password" placeholder={t('Password')}/>
            <Link className='auth__button' onClick={handleCityChange} to='/weather-in-cities/'>{t('To come in')}</Link>
          </form>
          <div className='auth__help'>
            <Link to='/weather-in-cities/forgot-password'>{t('Forgot password')}</Link>
            <Link to='/weather-in-cities/register'>{t(`I don't have an account`)}</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
