import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { syncState } from '@/redux/slices/citySlice';
import cl from './Header.module.scss';
import SelectLang from '@/components/ui/SelectLang';
import AuthButton from '@/components/ui/AuthButton';

const Header = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

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
							<img src="./img/Magnifier.svg" alt={t('Img magnifier')} />
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
						<AuthButton />
					</div>
					<div className={cl.header__burger}>
						<button
							onClick={() => handleCityChange()}
							title={t('Search button')}>
							<img src="/img/Magnifier_white.svg" alt={t('Img magnifier')} />
						</button>
						<button
							className={`${cl.burger} ${isActive ? cl.active : ''}`}
							onClick={() => {
								setIsActive(!isActive);
							}}>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
