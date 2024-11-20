import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../public/locales/en/translation.json'
import ruTranslations from '../public/locales/ru/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            ru: { translation: ruTranslations },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            useSuspense: true,
        }
    });

export default i18n;
   
