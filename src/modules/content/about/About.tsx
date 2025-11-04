import React, { useContext } from "react";

import { LanguageContext } from "../../../context/LanguageContext";
import Header from "../../../components/typography/Header";
import en from "./en.json";
import es from "./es.json";
import AboutList from "./AboutList";

export default function About() {
  const { language } = useContext(LanguageContext);
  const text = language === "en" ? en : es;
  return (
    <>
      <Header>{text.title}</Header>
      <AboutList text={text.sections} />
    </>
  );
}
