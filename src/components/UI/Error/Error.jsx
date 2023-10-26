import React from 'react'
import { Link } from 'react-router-dom';
import cl from './Error.module.scss'

export default function Error() {
  return (
    <div className={cl.error}>
      <div className='container'>
        <div className={cl.error__holder}>
          <h1>Error</h1>
          <h2>Несуществующая страница</h2>
          <Link to='/'>Вернутся на главную страницу</Link>
        </div>
      </div>
    </div>
  )
}
