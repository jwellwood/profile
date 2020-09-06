import React, { useState, ReactNode } from 'react';

export interface ILang {
  language: boolean;
  toggleLanguage: () => void;
}

interface Props {
  children: ReactNode;
}
// Create new context
export const LanguageContext = React.createContext<Partial<ILang>>({
  language: false,
});

// Then create a Provider Component
export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState(true);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
