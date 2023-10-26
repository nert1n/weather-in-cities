import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';

export default function Register() {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <div>
      <button onClick={handleCityChange}>Register</button>
    </div>
  )
}
