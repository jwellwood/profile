// src/context.jsx
import React, { useState } from 'react';
// Create new context
export const LanguageContext = React.createContext();
// Then create a Provider Component
export const LanguageProvider = ({ children }) => {
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
