import french from './fr.json';
import spanish from './es.json';

const LANG = {
  FRENCH: 'fr',
  SPANISH: 'es',
};

export const getI18N = (currentLocale : string = 'es') => {
	if (currentLocale === LANG.FRENCH) return french;
	return spanish;
};