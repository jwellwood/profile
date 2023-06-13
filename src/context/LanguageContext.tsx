import React, { useState, ReactNode } from 'react';

export interface ILang {
  language: string;
  toggleLanguage: () => void;
}

interface Props {
  children: ReactNode;
}

export const LanguageContext = React.createContext<Partial<ILang>>({
  language: '',
});

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
