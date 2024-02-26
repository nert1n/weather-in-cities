import { useTranslation } from 'react-i18next';
import cl from './Footer.module.scss';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className={cl.footer}>
      <div className='container'>
        <div className={cl.footer__holder}>
          <p>
            {t('Powered by')}&nbsp;
            <a
              href='https://github.com/nert1n'
              title={t("Button to go to the creator's GitHub")}
            >
              nert1n
            </a>
          </p>
          <p>© 2024</p>
        </div>
      </div>
    </div>
  );
}
