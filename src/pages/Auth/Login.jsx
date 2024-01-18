import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isTrue } from '../../redux/slices/authSlice';

export default function Login(props) {
  document.title = props.title;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleCityChange = () => {
    dispatch(isTrue());
  };

  return (
    <main className='auth'>
      <div className='container'>
        <div className='auth__holder'>
          <form className='auth__form'>
            <input className='auth__input' type='email' placeholder={t('Email')} title={t('Input email')}/>
            <input className='auth__input' type='password' placeholder={t('Password')} title={t('Input password')}/>
            <Link className='auth__button' onClick={handleCityChange} to='/weather-in-cities/' title={t('Button to come in')}>{t('To come in')}</Link>
          </form>
          <div className='auth__help'>
            <Link to='/weather-in-cities/forgot-password' title={t('Button forgot password')}>{t('Forgot password')}</Link>
            <Link to='/weather-in-cities/register' title={t('Button i don\'t have an account')}>{t('I don\'t have an account')}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
