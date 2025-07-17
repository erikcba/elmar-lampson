import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'de',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});


export default i18n;