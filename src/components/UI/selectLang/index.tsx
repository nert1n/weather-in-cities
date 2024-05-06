import { ChangeEvent } from 'react';
import cl from '@/components/widgets/Header/Header.module.scss';
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
	const { t, i18n } = useTranslation();

	const languageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
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
	);
};

export default SelectLang;
