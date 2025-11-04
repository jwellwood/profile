import React, { useContext } from "react";

import Header from "../../../components/typography/Header";
import { LanguageContext } from "../../../context/LanguageContext";
import en from "./en.json";
import es from "./es.json";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  const { language } = useContext(LanguageContext);
  const text = language === "en" ? en : es;

  return (
    <>
      <Header>{text.title}</Header>
      <ExperienceList text={text.experience} />
    </>
  );
}
