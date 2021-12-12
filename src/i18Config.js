import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const fallbackLng = ['en'];
const availableLanguages = ['en', 'ru', 'uz'];

i18n
  .use(Backend) // load translations using http (default                                               public/assets/img/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: availableLanguages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/assets/locales/{{lng}}.json'
    }
  });

export default i18n;