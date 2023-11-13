// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul>
   
      <li><button onClick={() => changeLanguage('en')}>English</button></li>
      <li> <button onClick={() => changeLanguage('mk')}>Македонски</button></li>
    </ul>
  );
};

export default LanguageSwitcher;
