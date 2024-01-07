import React from 'react'
import cl from './Footer.module.scss'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className={cl.footer}>
      <div className='container'>
        <div className={cl.footer__holder}>
          <p>{t('Created by')}&nbsp;<a href="https://github.com/nert1n" target="_blank">nert1n</a></p>
          <p>© 2024</p>
        </div>
      </div>
    </div>  
  )
}
