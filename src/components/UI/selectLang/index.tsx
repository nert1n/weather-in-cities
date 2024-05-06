import React, { ChangeEvent } from 'react';
import cl from '@/components/widgets/header/Header.module.scss';
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
	const { t, i18n } = useTranslation();
	console.log(i18n.languages);
	const languageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<div>
			<select
				className={cl.header__select}
				id="selectLang"
				title={t('Button select language')}
				name="selectLang"
				defaultValue="en"
				onChange={e => languageChange(e)}>
				<option value="en">EN</option>
				<option value="ua">UA</option>
			</select>
		</div>
	);
};

export default SelectLang;
