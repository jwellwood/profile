import React, { useState, ReactNode } from "react";

type SupportedLanguages = "en" | "es";

export interface ILang {
  language: SupportedLanguages;
  setLang: (lang: SupportedLanguages) => void;
}

interface Props {
  children: ReactNode;
}

export const LanguageContext = React.createContext<ILang>({
  language: "en" as SupportedLanguages,
  setLang: () => {},
});

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguages>("en");

  const setLang = (lang: SupportedLanguages) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
