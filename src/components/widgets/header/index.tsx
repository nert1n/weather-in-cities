import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { syncState } from '@/redux/slices/citySlice';
import cl from './Header.module.scss';
import SelectLang from '@/components/ui/SelectLang';

export default function Header() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const isAuth = useSelector((state: any) => state.auth.value);

	const [isActive, setIsActive] = useState(false);
	const [city, setCity] = useState('');

	const handleCitySave = (city: string) => {
		setCity(city);
	};

	const handleCityChange = () => {
		dispatch(syncState(city));
	};

	return (
		<div className={cl.header}>
			<div className="container">
				<div className={cl.header__holder}>
					<Link className={cl.header__title} title="WISICO" to="/">
						<i className="owf owf-804 owf-2x icon-style" />
						WISICO
					</Link>
					<div className={cl.header__input}>
						<button
							onClick={() => handleCityChange()}
							title={t('Search button')}>
							<img src="/img/Magnifier.svg" alt={t('Img magnifier')} />
						</button>
						<input
							type="text"
							name="seatch_city"
							title={t('Search city')}
							placeholder={t('Search city')}
							ref={nodeRef}
							value={city}
							onChange={e => handleCitySave(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									handleCityChange();
								}
							}}
						/>
					</div>
					<div className={`${cl.header__nav} ${isActive ? cl.active : ''}`}>
						<SelectLang />
						{isAuth == false ? (
							<Link
								className={cl.header__auth}
								title={t('Button login')}
								to="/weather-in-cities/login">
								{t('Login')}
							</Link>
						) : (
							<Link
								className={cl.header__auth}
								title={t('Button profile')}
								to="/weather-in-cities/profile">
								<img src="/img/user_profile_avatar.svg" alt={t('Profile')} />
							</Link>
						)}
					</div>
					<div className={cl.header__burger}>
						<button
							onClick={() => handleCityChange()}
							title={t('Search button')}>
							<img src="/img/Magnifier_white.svg" alt={t('Img magnifier')} />
						</button>
						<div
							className={`${cl.burger} ${isActive ? cl.active : ''}`}
							onClick={() => {
								setIsActive(!isActive);
							}}>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
