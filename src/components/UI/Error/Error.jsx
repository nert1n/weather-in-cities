import React from 'react'
import { Link } from 'react-router-dom';
import cl from './Error.module.scss'
import { useTranslation } from 'react-i18next';

export default function Error() {
  document.title = `WISICO - Error`

  const { t, i18n } = useTranslation();

  return (
    <div className={cl.error}>
      <h1>{t('Error')} 404</h1>
      <h2>{t('Page not found')}</h2>
      <Link to='/weather-in-cities/'>{t('Return back')}</Link>
    </div>
  )
}
