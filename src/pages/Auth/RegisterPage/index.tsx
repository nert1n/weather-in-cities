import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isTrue } from '@/redux/slices/authSlice';
import cl from './Register.module.scss';

export default function Register() {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [againPas, setAgainPas] = useState('');

	const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.target.value);
	};

	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleAgreePasInput = (e: ChangeEvent<HTMLInputElement>) => {
		setAgainPas(e.target.value);
	};

	const handleCityChange = () => {
		dispatch(isTrue());
	};

	return (
		<main className={cl.register}>
			<div className="container">
				<div className={cl.register__holder}>
					<form className={cl.register__form}>
						<input
							className={cl.register__input}
							type="login"
							placeholder={t('Login')}
							title={t('Input login')}
							onChange={e => handleLoginInput(e)}
							value={login}
						/>
						<input
							className={cl.register__input}
							type="email"
							placeholder={t('Email')}
							title={t('Input email')}
							onChange={e => handleEmailInput(e)}
							value={email}
						/>
						<input
							className={cl.register__input}
							type="password"
							placeholder={t('Password')}
							title={t('Input password')}
							onChange={e => handlePasInput(e)}
							value={password}
						/>
						<input
							className={cl.register__input}
							type="password"
							placeholder={t('Agree password')}
							title={t('Input agree password')}
							onChange={e => handleAgreePasInput(e)}
							value={againPas}
						/>
						<Link
							className={cl.register__button}
							onClick={() => handleCityChange()}
							title={t('Button register')}
							to="/">
							{t('Register')}
						</Link>
					</form>
					<div className={cl.register__help}>
						<Link to="/weather-in-cities/forgot-password"></Link>
						<Link
							to="/weather-in-cities/login"
							title={t('Button i have an account')}>
							{t('I have an account')}
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
