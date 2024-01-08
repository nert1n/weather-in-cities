import React, { useEffect, useState } from 'react'
import cl from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.value);
  const [active, setActive] = useState(false)

  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState('light')

  function handleThemeChange() {
    if (document.documentElement.attributes[1].value == `light`) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme('dark')
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme('light')
    }
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.target.value);
  };

  useEffect(() => {
    if (i18n.options.resources[i18n.language] != undefined) {
      document.getElementById('selectLang').value = i18n.language
    }
  }, [i18n.language])
  
  return (
    <div className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <Link className={cl.header__title} to='/weather-in-cities/'>
            <i className='owf owf-804 owf-2x icon-style'/>WISICO
          </Link>
          <div className={`${cl.header__nav} ${active ? cl.active : ''}`}>
            <div className={cl.header__auth}>
              {isAuth 
                ? <Link className={cl.header__auth} to='/weather-in-cities/profile'>{t('Profile')}</Link>
                : <div>
                    <Link className={cl.header__auth} to='/weather-in-cities/login'>{t('Login')}</Link>
                    <Link className={cl.header__auth} to='/weather-in-cities/register'>{t('Register')}</Link>
                  </div>
              }
            </div>
            <button className={cl.header__theme} onClick={handleThemeChange}>
              {theme == `light` 
              ? `${t('Dark')}`
              : `${t('Light')}`
              }
            </button>
            <select
              className={cl.header__select}
              id='selectLang'
              name="selectLang"
              defaultValue='1'
              onChange={changeLanguage}
            >
              <option value='en'>EN</option>
              <option value='ua'>UA</option>
            </select>
          </div>
          <div className={`${cl.burger} ${active ? cl.active : ''}`} onClick={() => {setActive(!active)}}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
