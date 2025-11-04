export enum Sections {
  ABOUT = "about",
  EXPERIENCE = "experience",
  PROJECTS = "projects",
}

export const NAV_BUTTONS = [
  { key: Sections.ABOUT, label: { en: "About", es: "Sobre Mí" } },
  { key: Sections.EXPERIENCE, label: { en: "Experience", es: "Experiencia" } },
  { key: Sections.PROJECTS, label: { en: "Projects", es: "Proyectos" } },
];
