import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom';

export default function Profile() {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile__holder'>
          <h1 className='profile__title'>My profile</h1>
          <div className='profile__img'>
            {/* <img src="" alt="#" /> */}
            <Link className='profile__exit' onClick={handleCityChange} to='/weather-in-cities/'>Exit</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
