import React from 'react'
import { Link } from 'react-router-dom';
import cl from './Error.module.scss'

export default function Error() {
  document.title = `WISICO - Error`

  return (
    <div className={cl.error}>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <Link to='/weather-in-cities/'>Return back</Link>
    </div>
  )
}
