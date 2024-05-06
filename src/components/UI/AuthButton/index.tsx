import { Link } from 'react-router-dom';
import cl from '@/components/widgets/Header/Header.module.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AuthButton = () => {
	const { t } = useTranslation();

	const isAuth = useSelector((state: any) => state.auth.value);

	if (isAuth) {
		return (
			<Link
				className={cl.header__auth}
				title={t('Button profile')}
				to="/profile">
				<img src="/img/user_profile_avatar.svg" alt={t('Profile')} />
			</Link>
		);
	}

	return (
		<Link className={cl.header__auth} title={t('Button login')} to="/login">
			{t('Login')}
		</Link>
	);
};

export default AuthButton;
