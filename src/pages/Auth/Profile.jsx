import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isTrue } from '../../redux/slices/authSlice';

export default function Profile() {
  const isAuth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()
  const handleCityChange = () => {
    dispatch(isTrue())
  };

  return (
    <div>
      <button onClick={handleCityChange}>unLigin</button>
    </div>
  )
}
