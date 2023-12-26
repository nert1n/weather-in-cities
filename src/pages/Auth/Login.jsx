import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';


export default function Login() {
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
            <input className='auth__input' type="email" placeholder="Email"/>
            <input className='auth__input' type="password" placeholder="Password"/>
            <Link className='auth__button' onClick={handleCityChange} to='/'>Login</Link>
          </form>
          <div className='auth__help'>
            <Link to='/forgot-password'>Forgot password</Link>
            <Link to='/register'>I don't have an account</Link>
          </div>
        </div>
      </div>
    </main>
  )
}