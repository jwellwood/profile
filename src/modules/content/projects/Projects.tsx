import React, { useContext } from "react";

import Header from "../../../components/typography/Header";
import { LanguageContext } from "../../../context/LanguageContext";
import en from "./en.json";
import es from "./es.json";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const text = language === "en" ? en : es;

  return (
    <>
      <Header>{text.title}</Header>
      <ProjectsList text={text.projects} />
    </>
  );
}
