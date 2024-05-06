import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cl from './Error.module.scss';

const Error = () => {
	const { t } = useTranslation();

	return (
		<main className={cl.error}>
			<h1>{t('Error')} 404</h1>
			<h2>{t('Page not found')}</h2>
			<Link to="/" title={t('Button return back')}>
				{t('Return back')}
			</Link>
		</main>
	);
};

export default Error;
