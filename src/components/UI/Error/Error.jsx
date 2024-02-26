import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cl from './Error.module.scss';

export default function Error() {
  document.title = 'WISICO - Error';
  const { t, i18n } = useTranslation();

  return (
    <main className={cl.error}>
      <h1>{t('Error')} 404</h1>
      <h2>{t('Page not found')}</h2>
      <Link to='/weather-in-cities/' title={t('Button return back')}>
        {t('Return back')}
      </Link>
    </main>
  );
}
