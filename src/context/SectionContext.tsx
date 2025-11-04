import React, { useState, ReactNode } from "react";

type TSection = "about" | "experience" | "projects";

export interface ISection {
  section: string;
  setSectionType: (section: TSection) => void;
}

interface Props {
  children: ReactNode;
}

export const SectionContext = React.createContext<ISection>({
  section: "about",
  setSectionType: () => {},
});

export const SectionProvider: React.FC<Props> = ({ children }) => {
  const [section, setSection] = useState("about");

  const setSectionType = (section: TSection) => {
    setSection(section);
  };

  return (
    <SectionContext.Provider value={{ section, setSectionType }}>
      {children}
    </SectionContext.Provider>
  );
};
