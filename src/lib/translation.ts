import i18n from 'sveltekit-i18n';
import languages from '$lib/locale/languages.json';

export const { t, locale, locales, loading, loadTranslations } = new i18n({
	fallbackLocale: 'en',
	translations: {
		en: { languages },
		th: { languages }
	},
    loaders:[
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
              await import('./locale/en/common.json')
            ).default,
        },
        {
            locale: 'th',
            key: 'common',
            loader: async () => (
              await import('./locale/th/common.json')
            ).default,
        },
    ]
});

export {
  languages as supportedLocales
}

export let saveLanguage = (lang : string) =>{
    localStorage.setItem('lang', lang);
}