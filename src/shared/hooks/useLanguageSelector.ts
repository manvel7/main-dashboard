import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
];

export const useLanguageSelector = () => {
  const { i18n, t } = useTranslation();

  // Load language from localStorage on hook initialization
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (
      savedLanguage &&
      languages.find((lang) => lang.code === savedLanguage)
    ) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Handle language change
  const handleLanguageChange = (selectedLanguage: string) => {
    // Save to localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);

    // Change i18n language
    i18n.changeLanguage(selectedLanguage);
  };

  // Get current language object
  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === i18n.language) || languages[0]
    );
  };

  // Get translated language name
  const getTranslatedLanguageName = (languageName: string) => {
    return t(languageName);
  };

  return {
    languages,
    currentLanguage: getCurrentLanguage(),
    currentLanguageCode: getCurrentLanguage().code,
    handleLanguageChange,
    getTranslatedLanguageName,
    t,
  };
};

export default useLanguageSelector;
