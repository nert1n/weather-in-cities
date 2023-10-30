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
            <i className='owf owf-804 owf-3x icon-style'/>WISICO
          </Link>
          <div className={cl.header__nav}>
            <div className={cl.header__auth}>
              {isAuth 
                ? <Link className={cl.header__auth} to='/profile'>Profile</Link>
                : <div>
                    <Link className={cl.header__auth} to='/login'>Login</Link>
                    <Link className={cl.header__auth} to='/register'>Register</Link>
                  </div>
              }
            </div>
            <button className={cl.header__theme}>Dark</button>
            <select
              className={cl.header__select}
              name="selectCity"
              defaultValue='1'
            >
              <option value='EN'>
                EN
              </option>
              <option value='RU'>
                RU
              </option>
              <option value='UA'>
                UA
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
