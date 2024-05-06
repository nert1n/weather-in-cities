import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isTrue } from '@/redux/slices/authSlice';
import cl from './LoginPage.module.scss';

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCityChange = () => {
    dispatch(isTrue());
  };

  return (
    <main className={cl.login}>
      <div className='container'>
        <div className={cl.login__holder}>
          <form className={cl.login__form}>
            <input
              className={cl.login__input}
              type='email'
              placeholder={t('Email')}
              title={t('Input email')}
            />
            <input
              className={cl.login__input}
              type='password'
              placeholder={t('Password')}
              title={t('Input password')}
            />
            <Link
              className={cl.login__button}
              onClick={handleCityChange}
              to='/weather-in-cities/'
              title={t('Button to come in')}
            >
              {t('To come in')}
            </Link>
          </form>
          <div className={cl.login__help}>
            <Link
              to='/weather-in-cities/forgot-password'
              title={t('Button forgot password')}
            >
              {t('Forgot password')}
            </Link>
            <Link
              to='/weather-in-cities/register'
              title={t("Button i don't have an account")}
            >
              {t("I don't have an account")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
