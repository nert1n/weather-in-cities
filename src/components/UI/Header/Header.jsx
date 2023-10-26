import React from 'react'
import cl from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.value);

  return (
    <div className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <Link className={cl.header__title} to='/'>
            <i className='owf owf-804 owf-3x icon-style'/>Погода
          </Link>
          <div className={cl.header_auth}>
            {isAuth 
              ? <Link className={cl.header__profile} to='/profile'>Профиль</Link>
              : <div>
                  <Link className={cl.header__auth} to='/login'>Войти</Link>
                  <Link className={cl.header__auth} to='/register'>Регестрация</Link>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
