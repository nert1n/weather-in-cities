import React from 'react'
import cl from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link className={cl.header} to='/'>Прогноз погоды на 5 дней</Link>
  )
}
