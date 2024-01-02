import React, { useState } from 'react'
import cl from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.value);
  const [active, setActive] = useState(false)

  return (
    <div className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <Link className={cl.header__title} to='/weather-in-cities/'>
            <i className='owf owf-804 owf-3x icon-style'/>WISICO
          </Link>
          <div className={`${cl.header__nav} ${active ? cl.active : ''}`}>
            <div className={cl.header__auth}>
              {isAuth 
                ? <Link className={cl.header__auth} to='/weather-in-cities/profile'>Profile</Link>
                : <div>
                    <Link className={cl.header__auth} to='/weather-in-cities/login'>Login</Link>
                    <Link className={cl.header__auth} to='/weather-in-cities/register'>Register</Link>
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
          <div class={`${cl.burger} ${active ? cl.active : ''}`} onClick={() => {setActive(!active)}}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
