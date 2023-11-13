// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='col-xl-6 col-lg-12 col-md-12 col-6'>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('mk')}>Македонски</button>
    </div>
  );
};

export default LanguageSwitcher;
