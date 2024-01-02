import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';

export default function Register() {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <main className='auth'>
      <div className='container'>
        <div className='auth__holder'>
          <form className='auth__form'>
            <input className='auth__input' type="login" placeholder="Login"/>
            <input className='auth__input' type="email" placeholder="Email"/>
            <input className='auth__input' type="password" placeholder="Password"/>
            <input className='auth__input' type="password" placeholder="Agree password"/>
            <Link className='auth__button' onClick={handleCityChange} to='/weather-in-cities/'>Register</Link>
          </form>
          <div className='auth__help'>
            <Link to='/weather-in-cities/forgot-password'></Link>
            <Link to='/weather-in-cities/login'>I have an account</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
