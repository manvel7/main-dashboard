import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@shared/translations/en.json';
import ru from '@shared/translations/ru.json';

// Initialize i18next with language detection and React bindings
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    // Keys are the same as display text (no nesting or dot-notation)
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    returnEmptyString: false,
  });

export default i18n;
