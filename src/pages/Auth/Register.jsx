import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Register(props) {
  document.title = props.title
  const { t, i18n } = useTranslation();

  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [againPas, setAgainPas] = useState('')

  const handleLoginInput = (e) => {
    setLogin(e.target.value)
  }
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }
  const handlePasInput = (e) => {
    setPassword(e.target.value)
  }
  const handleAgreePasInput = (e) => {
    setAgainPas(e.target.value)
  }

  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <main className='auth'>
      <div className='container'>
        <div className='auth__holder'>
          <form className='auth__form'>
            <input
              className='auth__input'
              type="login"
              placeholder={t('Login')}
              onChange={handleLoginInput}
              value={login}
            />
            <input
              className='auth__input'
              type="email"
              placeholder={t('Email')}
              onChange={handleEmailInput}
              value={email}
            />
            <input
              className='auth__input'
              type="password"
              placeholder={t('Password')}
              onChange={handlePasInput}
              value={password}
            />
            <input
              className='auth__input'
              type="password"
              placeholder={t('Agree password')}
              onChange={handleAgreePasInput}
              value={againPas}
            />
            <Link className='auth__button' onClick={handleCityChange}>{t('Register')}</Link>
          </form>
          <div className='auth__help'>
            <Link to='/weather-in-cities/forgot-password'></Link>
            <Link to='/weather-in-cities/login'>{t('I have an account')}</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
