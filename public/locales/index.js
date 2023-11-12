import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/common.js';
import mk from './mk/common.js';



i18n.use(initReactI18next).init({
  resources: {
    ['en']: {
      translation: en,
    },
    ['mk']: {
      translation: mk,
    }, 
    fallbackLng: 'mk',
  },
  lng: 'mk',
  keySeparator: '.',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});



export { i18n, en, mk };
